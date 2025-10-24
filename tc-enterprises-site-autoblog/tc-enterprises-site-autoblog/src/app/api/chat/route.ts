
import { NextResponse } from 'next/server';
import path from 'path';
import fs from 'fs/promises';

// --- Configuration ---
const SUPPORT_EMAIL = process.env.CONTACT_EMAIL || "contact@tc-enterprises.com";
const SUPPORT_DISCORD_URL = process.env.DISCORD_SUPPORT_URL || "https://discord.com/channels/1420218161319645186/1420218161986408500";
const GEMINI_KEY = process.env.GEMINI_API_KEY || "";
const GEMINI_MODEL = process.env.GEMINI_MODEL || "gemini-1.5-flash";

const SYSTEM_PROMPT_BASE = `You are Cole, the support assistant for T & C Enterprises. Sound like a patient, knowledgeable teammate who specializes in vector conversion for engraving. Speak in first-person, use contractions, acknowledge what the user is asking, and offer next steps. Aim for 3-5 sentences unless the user asks for more detail.

**Our Primary Focus**: T & C Enterprises specializes in vector conversion for engraving equipment—specifically creating production-ready EPS and PLT files for Gravograph systems. This is our main service with 13 years of proven experience.

- **Grounding**: Answer only with facts that appear in the supplied context. If information is missing, admit it and escalate using the fallback message below.
- **Pricing**: Default to a conversational summary. When discussing vector conversion, mention the standard pricing ($40/$45/$55) and that both EPS and PLT formats are included. For software projects, make it clear they require $5,000+ budgets and are select projects only.
- **Service Focus**: Always emphasize vector conversion as the primary service. Software development and IT consulting are secondary offerings with limited availability.
- **Fallback**: When you cannot answer, say: "That's a great question, but I don't have that specific information documented. For a detailed answer, you can email the team at contact@tc-enterprises.com or use the contact form on the website."
- Avoid inventing numbers, policies, or capabilities that aren't in the knowledge base. Invite the user to reconnect if details change.`;

// --- Helper Functions (adapted from the original project) ---

function buildContactReply() {
  let reply = `You can reach a team member at ${SUPPORT_EMAIL}.`;
  if (SUPPORT_DISCORD_URL) {
    reply += ` You can also join us on [Discord](${SUPPORT_DISCORD_URL}).`;
  }
  reply += " We reply within one business day (Monday-Friday, Pacific Time).";
  return reply;
}

async function loadDocs() {
  const groundingDir = path.join(process.cwd(), "knowledge"); // Use the 'knowledge' dir in the new project
  const entries = await fs.readdir(groundingDir).catch(() => []);
  const docs = [];
  for (const entry of entries) {
    if (!entry.endsWith(".md")) continue;
    const slug = entry.replace(/\.md$/, "");
    try {
      const body = await fs.readFile(path.join(groundingDir, entry), "utf8");
      docs.push({ slug, body });
    } catch (error) {}
  }
  return docs;
}

function scoreDoc(text: string, doc: { slug: string; body: string }): number {
  const words = new Set(text.toLowerCase().split(/[^a-z0-9]+/ ).filter(Boolean));
  const bodyWords = doc.body.toLowerCase().split(/[^a-z0-9]+/ ).filter(Boolean);
  let score = 0;
  for (const word of bodyWords) {
    if (words.has(word)) score += 1;
  }
  return score;
}

async function buildContext(message: string): Promise<string> {
  const docs = await loadDocs();
  const contextPieces = [];
  const addedSlugs = new Set();
  const lowerMessage = message.toLowerCase();
  const serviceKeywords = ['service', 'offer', 'do you', 'help with', 'capability'];
  const pricingKeywords = ['pricing', 'cost', 'price', 'rates'];

  if (serviceKeywords.some(kw => lowerMessage.includes(kw))) {
    const servicesDoc = docs.find(d => d.slug === 'services');
    if (servicesDoc) {
      contextPieces.push(`# ${servicesDoc.slug}\n${servicesDoc.body.trim()}`);
      addedSlugs.add('services');
    }
  }

  if (pricingKeywords.some(kw => lowerMessage.includes(kw))) {
    const pricingDoc = docs.find(d => d.slug === 'pricing');
    if (pricingDoc) {
      contextPieces.push(`# ${pricingDoc.slug}\n${pricingDoc.body.trim()}`);
      addedSlugs.add('pricing');
    }
  }

  const scored = docs
    .filter(doc => !addedSlugs.has(doc.slug))
    .map(doc => ({ doc, score: scoreDoc(message, doc) }))
    .sort((a, b) => b.score - a.score)
    .slice(0, 2);

  const generalPieces = scored
    .filter(entry => entry.score > 0)
    .map(entry => `# ${entry.doc.slug}\n${entry.doc.body.trim()}`);

  return [...contextPieces, ...generalPieces].join('\n\n');
}

async function callGemini(prompt: string): Promise<{ reply: string; error: boolean }> {
  if (!GEMINI_KEY) {
    return { reply: buildContactReply(), error: false };
  }
  const url = `https://generativelanguage.googleapis.com/v1beta/models/${GEMINI_MODEL}:generateContent?key=${GEMINI_KEY}`;
  const body = {
    contents: [{ parts: [{ text: prompt }] }],
    safetySettings: [
      { category: "HARM_CATEGORY_SEXUALLY_EXPLICIT", threshold: "BLOCK_NONE" },
      { category: "HARM_CATEGORY_HATE_SPEECH", threshold: "BLOCK_MEDIUM_AND_ABOVE" },
    ],
  };

  try {
    const response = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });

    if (!response.ok) {
      console.error("Gemini API request failed:", response.status, await response.text());
      return { reply: buildContactReply(), error: true };
    }

    const data = await response.json();
    const replyText = data.candidates?.[0]?.content?.parts?.[0]?.text?.trim();

    if (!replyText) {
      return { reply: buildContactReply(), error: true };
    }
    return { reply: replyText, error: false };
  } catch (error) {
    console.error("Error calling Gemini API:", error);
    return { reply: buildContactReply(), error: true };
  }
}

// --- Next.js API Route Handler ---

export async function POST(req: Request) {
  try {
    const body = await req.json();

    // Support two payload shapes:
    // - { message: "..." }
    // - { messages: [{ role, content }, ...] } (use the last message content)
    let message: string | undefined;
    if (body && typeof body.message === 'string') {
      message = body.message;
    } else if (body && Array.isArray(body.messages) && body.messages.length) {
      const last = body.messages[body.messages.length - 1];
      message = last && (typeof last.content === 'string' ? last.content : undefined);
    }

    if (!message || typeof message !== 'string') {
      return NextResponse.json({ reply: "Please include a message." }, { status: 400 });
    }

    const context = await buildContext(message);
    const prompt = [
      SYSTEM_PROMPT_BASE,
      context ? `Context:\n${context}` : 'Context: (none)',
      `User question: ${message}`,
      'Answer in markdown:'
    ].join('\n\n');

    const { reply } = await callGemini(prompt);

    return NextResponse.json({ reply });

  } catch (error) {
    console.error("Chat API error:", error);
    return NextResponse.json({ reply: buildContactReply() }, { status: 500 });
  }
}
