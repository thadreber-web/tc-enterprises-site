
import { NextResponse } from 'next/server';
import path from 'path';
import fs from 'fs/promises';

// --- Configuration ---
const SUPPORT_EMAIL = process.env.CONTACT_EMAIL || "contact@tc-enterprises.com";
const SUPPORT_DISCORD_URL = process.env.DISCORD_SUPPORT_URL || "https://discord.com/channels/1420218161319645186/1420218161986408500";
const GEMINI_KEY = process.env.GEMINI_API_KEY || "";
const GEMINI_MODEL = process.env.GEMINI_MODEL || "gemini-1.5-flash";

const SYSTEM_PROMPT_BASE = `You are Cole, the support assistant for T & C Enterprises. Your goal is to be helpful and conversational, like a person on the other end of a chat. Use a friendly, approachable tone and feel free to use contractions (like "don't" or "it's").

- Answer questions based **only** on the provided context.
- When asked about pricing, your default response should be a conversational paragraph summarizing the options. However, if the user explicitly asks for a table or a list, you should format the pricing information as a markdown table.
- When you don't know the answer, say: "That's a great question, but I don't have that specific information documented. For a detailed answer, you can email the team at contact@tc-enterprises.com, or for a faster response, you can join us on [Discord](https://discord.com/channels/1420218161319645186/1420218161986408500)."`;

// --- Helper Functions (adapted from the original project) ---

function buildContactReply() {
  let reply = `You can reach a team member at ${SUPPORT_EMAIL}.`;
  if (SUPPORT_DISCORD_URL) {
    reply += ` You can also join us on Discord: ${SUPPORT_DISCORD_URL}.`;
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
  console.log(`Using API Key starting with: ${GEMINI_KEY.slice(0, 5)}... and ending with: ${GEMINI_KEY.slice(-5)}`);
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
