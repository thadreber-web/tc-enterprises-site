---
title: "Building an AI-Powered Outreach Agent on a DGX Spark"
date: 2026-03-04
category: AI
tags: posts
excerpt: "A solo founder's journey from one client and zero sales infrastructure to an automated prospecting machine — running entirely on local hardware for $0/month."
---

<div class="part-divider"><span>Part 1</span></div>

## The Problem — 13 Years of Expertise, Zero Sales Infrastructure

I've been converting logos to engrave-ready vector files for 13 years. 26,000+ files processed. I'm the sole vectorization provider for Branding Tools / Cutco Closing Gifts — the largest Cutco engraver in the US. The work speaks for itself.

But here's the thing nobody tells you about being a specialist: **being great at the work doesn't mean anyone knows you exist.**

My entire client base came through word of mouth and one key relationship. That works until you realize the whole business depends on a single pipeline. I needed to grow — to find the engraving shops, trophy companies, and promotional product distributors who are burning hours every week converting garbage JPEGs into usable files. They're out there. They just don't know I am.

The traditional answer is cold outreach. Hire a salesperson, or grind through emails yourself between production work. I tried the manual approach years ago. Researched companies, wrote emails, sent them one by one. The time cost was brutal and the follow-through was inconsistent. An email goes out Monday, I get busy with production, and three weeks later I realize I never followed up.

I needed a system. Not a CRM with a monthly fee. Not a marketing agency that doesn't understand the engraving industry. Something that understood my business, wrote emails that sounded like me, handled the follow-up cadence automatically, and only surfaced the conversations worth having.

<div class="callout">
<p><strong>The design requirement that shaped everything:</strong> I never want to hear a "no." I just want to talk to people who are interested.</p>
</div>

### The Hardware Advantage

I'd recently gotten my hands on an NVIDIA DGX Spark — a desktop supercomputer with a Blackwell GPU and 128GB of unified memory. That GPU could serve an open-source language model locally, meaning I could have my own private AI that runs 24/7, costs nothing per query, and never sends my business data to anyone else's servers.

The idea crystallized: run a local LLM on the Spark, build an outreach system around it, and let the machine handle the parts of prospecting I'm bad at — consistency, follow-up timing, and response triage — while I keep doing what I'm good at: the actual work.

### The Research Phase

Before writing a single line of code, I spent time mapping the market. I built a research blueprint that categorized potential clients into three tiers:

- **Tier 1: Corporate gift and promo distributors** — companies exactly like my existing client. They receive customer logos daily and need them engrave-ready. High volume, best fit.
- **Tier 2: Trophy and awards companies** — they all require vector files and many already charge artwork conversion fees. That fee is my opening.
- **Tier 3: Growing laser and engraving shops** — smaller operations where the owner is personally burning time on art cleanup instead of running equipment.

I researched 16 companies across these tiers, noting which ones mentioned artwork requirements on their websites, which ones charged conversion fees, and what their operation size looked like. This research would become the seed data for the system.

<div class="part-divider"><span>Part 2</span></div>

## Building the Machine — LLM, Email, and Everything Between

### Setting Up the Brain

The first real technical step was getting a language model running on the DGX Spark. I chose Qwen3.5-9B — small enough to serve fast, capable enough to write personalized emails and classify responses. I set up SGLang as the serving framework, which exposes an OpenAI-compatible API. By the end of day one, I had a local AI I could talk to from my Windows PC browser.

### The Architecture

<div class="diagram-wrap">
<div class="diagram-title">System Architecture</div>
<svg viewBox="0 0 700 480" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect x="20" y="20" width="200" height="120" rx="8" fill="#141820" stroke="#252d3a" stroke-width="1.5"/>
<text x="120" y="50" text-anchor="middle" fill="#e8ecf0" font-family="DM Sans, sans-serif" font-size="13" font-weight="600">Windows PC</text>
<text x="120" y="72" text-anchor="middle" fill="#6b7a8d" font-family="JetBrains Mono, monospace" font-size="10">Illustrator (logo work)</text>
<text x="120" y="88" text-anchor="middle" fill="#6b7a8d" font-family="JetBrains Mono, monospace" font-size="10">Gmail (email as usual)</text>
<text x="120" y="104" text-anchor="middle" fill="#6b7a8d" font-family="JetBrains Mono, monospace" font-size="10">Browser → Dashboard</text>
<text x="120" y="120" text-anchor="middle" fill="#6b7a8d" font-family="JetBrains Mono, monospace" font-size="10">Logo download script</text>
<line x1="220" y1="80" x2="280" y2="80" stroke="#252d3a" stroke-width="1.5" stroke-dasharray="6 4"/>
<text x="250" y="72" text-anchor="middle" fill="#6b7a8d" font-family="DM Sans, sans-serif" font-size="9">SSH / Browser</text>
<rect x="280" y="10" width="400" height="460" rx="10" fill="none" stroke="#2a3a5c" stroke-width="1.5" stroke-dasharray="8 4"/>
<text x="480" y="35" text-anchor="middle" fill="#4a9eff" font-family="DM Sans, sans-serif" font-size="12" font-weight="600">DGX SPARK</text>
<rect x="310" y="50" width="340" height="60" rx="6" fill="#141820" stroke="#34d399" stroke-width="1.5"/>
<text x="480" y="75" text-anchor="middle" fill="#34d399" font-family="DM Sans, sans-serif" font-size="12" font-weight="600">SGLang — Qwen3.5-9B</text>
<text x="480" y="95" text-anchor="middle" fill="#6b7a8d" font-family="JetBrains Mono, monospace" font-size="10">OpenAI-compatible API · localhost:30000</text>
<rect x="310" y="130" width="340" height="180" rx="6" fill="#141820" stroke="#4a9eff" stroke-width="1.5"/>
<text x="480" y="155" text-anchor="middle" fill="#4a9eff" font-family="DM Sans, sans-serif" font-size="12" font-weight="600">Outreach Agent System</text>
<rect x="325" y="168" width="150" height="30" rx="4" fill="#1a1f2b" stroke="#252d3a" stroke-width="1"/>
<text x="400" y="188" text-anchor="middle" fill="#c8ced8" font-family="JetBrains Mono, monospace" font-size="10">Email Generator</text>
<rect x="485" y="168" width="150" height="30" rx="4" fill="#1a1f2b" stroke="#252d3a" stroke-width="1"/>
<text x="560" y="188" text-anchor="middle" fill="#c8ced8" font-family="JetBrains Mono, monospace" font-size="10">Response Classifier</text>
<rect x="325" y="206" width="150" height="30" rx="4" fill="#1a1f2b" stroke="#252d3a" stroke-width="1"/>
<text x="400" y="226" text-anchor="middle" fill="#c8ced8" font-family="JetBrains Mono, monospace" font-size="10">Prospect Researcher</text>
<rect x="485" y="206" width="150" height="30" rx="4" fill="#1a1f2b" stroke="#252d3a" stroke-width="1"/>
<text x="560" y="226" text-anchor="middle" fill="#c8ced8" font-family="JetBrains Mono, monospace" font-size="10">Scheduler</text>
<rect x="325" y="244" width="310" height="30" rx="4" fill="#1a1f2b" stroke="#252d3a" stroke-width="1"/>
<text x="480" y="264" text-anchor="middle" fill="#c8ced8" font-family="JetBrains Mono, monospace" font-size="10">SQLite Database · Templates · Config</text>
<text x="480" y="296" text-anchor="middle" fill="#6b7a8d" font-family="JetBrains Mono, monospace" font-size="9">FastAPI Dashboard · port 3000</text>
<rect x="310" y="330" width="160" height="50" rx="6" fill="#141820" stroke="#f59e0b" stroke-width="1.5"/>
<text x="390" y="352" text-anchor="middle" fill="#f59e0b" font-family="DM Sans, sans-serif" font-size="11" font-weight="600">Resend API</text>
<text x="390" y="370" text-anchor="middle" fill="#6b7a8d" font-family="JetBrains Mono, monospace" font-size="9">thad@tc-enterprises.com</text>
<rect x="490" y="330" width="160" height="50" rx="6" fill="#141820" stroke="#a78bfa" stroke-width="1.5"/>
<text x="570" y="352" text-anchor="middle" fill="#a78bfa" font-family="DM Sans, sans-serif" font-size="11" font-weight="600">Gmail API</text>
<text x="570" y="370" text-anchor="middle" fill="#6b7a8d" font-family="JetBrains Mono, monospace" font-size="9">Response monitoring</text>
<rect x="310" y="400" width="340" height="50" rx="6" fill="#141820" stroke="#34d399" stroke-width="1.5"/>
<text x="480" y="422" text-anchor="middle" fill="#34d399" font-family="DM Sans, sans-serif" font-size="11" font-weight="600">SearXNG (self-hosted)</text>
<text x="480" y="440" text-anchor="middle" fill="#6b7a8d" font-family="JetBrains Mono, monospace" font-size="9">Prospect discovery search · Docker · port 8888</text>
<line x1="480" y1="110" x2="480" y2="130" stroke="#34d399" stroke-width="1" stroke-dasharray="4 3"/>
<line x1="390" y1="310" x2="390" y2="330" stroke="#f59e0b" stroke-width="1" stroke-dasharray="4 3"/>
<line x1="570" y1="310" x2="570" y2="330" stroke="#a78bfa" stroke-width="1" stroke-dasharray="4 3"/>
<line x1="480" y1="310" x2="480" y2="400" stroke="#34d399" stroke-width="1" stroke-dasharray="4 3" opacity="0.4"/>
</svg>
</div>

The system breaks down into clean layers. **SQLite** handles all the data — prospects, outreach emails, responses, follow-ups, unsubscribe list, daily metrics. Six tables with proper indexes. No Postgres, no Docker overhead. The **LLM integration** sits on top via an async OpenAI client, with three specialized modules: email generation, response classification, and prospect research. Each has a carefully tuned system prompt that understands the engraving industry. **Email infrastructure** uses Resend for sending and Gmail API for monitoring responses.

### The Email Generation Problem

The trickiest part was getting the LLM to personalize emails well. Generic AI-written cold emails are obvious and get deleted. I needed emails that felt like I wrote them — because in a sense, I did write them. The templates are my words, my credentials, my voice. The LLM's job is just to swap in specific details about the prospect.

The system prompt is strict: don't add fake flattery, don't change the pricing or credentials, don't add sections that weren't in the template, and output only the email body. When I tested it against a prospect like ASAP Awards — who require 250 DPI and have an artwork specs page — the LLM correctly referenced their specific requirements and wove them into the template naturally. That's the kind of personalization that gets replies.

### The Response Classifier

When someone replies to a cold email, you need to know immediately whether it's worth your time. The classifier categorizes responses into seven buckets: interested, not now, not interested, unsubscribe, bounce, out of office, and question. Each category triggers different behavior — an "unsubscribe" immediately adds them to the blocklist and cancels follow-ups, while an "interested" flags the prospect for my personal attention.

<div class="callout amber">
<p><strong>Lesson learned:</strong> I initially ran the classifier with thinking mode enabled. The classifications were accurate but the model would write thousands of tokens of internal reasoning before outputting a simple JSON object, making parsing unreliable. Thinking mode off, structured system prompt — solved instantly. More reasoning isn't always better.</p>
</div>

### The Unsubscribe List is Sacred

One non-negotiable: before sending any email, the system checks the unsubscribe table. Every email includes a CAN-SPAM footer with a physical business address and unsubscribe instructions. If someone replies "unsubscribe," the classifier catches it, adds them to the blocklist, cancels all pending follow-ups, and marks the prospect as blacklisted. This isn't just legal compliance — it's respect. These are people in my industry, and I'll probably run into them at trade shows.

<div class="part-divider"><span>Part 3</span></div>

## The Dashboard and Going Live

### The Control Center

The whole point of this system is that I should never hear a "no." But I also need to stay in control — no email goes out without my approval. I built a web dashboard accessible from my Windows PC that gives me everything at a glance:

<div class="dash-nav">
<div class="tab active">Overview</div>
<div class="tab">Outreach</div>
<div class="tab">Responses</div>
<div class="tab">Prospects</div>
<div class="tab">Templates</div>
<div class="tab new">Discovery</div>
<div class="tab new">Chat</div>
</div>

The **Outreach Queue** is where the magic happens. I set prospects to "queued" status, click "Generate Batch," and the LLM creates personalized draft emails. I can preview each one inline, approve individually with one click, or batch-approve them all. Only approved emails get sent.

**Responses** are classified automatically. I filter by "interested" and "question" — those are the only ones that need my attention. Everything else is handled.

### The Scheduler

<div class="diagram-wrap">
<div class="diagram-title">Automated Job Schedule</div>
<svg viewBox="0 0 660 220" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect x="30" y="100" width="600" height="4" rx="2" fill="#252d3a"/>
<circle cx="100" cy="102" r="8" fill="#4a9eff"/>
<text x="100" y="82" text-anchor="middle" fill="#4a9eff" font-family="DM Sans, sans-serif" font-size="11" font-weight="600">Every 30m</text>
<text x="100" y="132" text-anchor="middle" fill="#c8ced8" font-family="DM Sans, sans-serif" font-size="10">Send approved</text>
<text x="100" y="146" text-anchor="middle" fill="#6b7a8d" font-family="DM Sans, sans-serif" font-size="10">emails (max 5)</text>
<text x="100" y="168" text-anchor="middle" fill="#6b7a8d" font-family="JetBrains Mono, monospace" font-size="9">30/day cap</text>
<circle cx="250" cy="102" r="8" fill="#a78bfa"/>
<text x="250" y="82" text-anchor="middle" fill="#a78bfa" font-family="DM Sans, sans-serif" font-size="11" font-weight="600">Every 15m</text>
<text x="250" y="132" text-anchor="middle" fill="#c8ced8" font-family="DM Sans, sans-serif" font-size="10">Poll Gmail for</text>
<text x="250" y="146" text-anchor="middle" fill="#6b7a8d" font-family="DM Sans, sans-serif" font-size="10">responses, classify</text>
<text x="250" y="168" text-anchor="middle" fill="#6b7a8d" font-family="JetBrains Mono, monospace" font-size="9">flag warm leads</text>
<circle cx="410" cy="102" r="8" fill="#f59e0b"/>
<text x="410" y="82" text-anchor="middle" fill="#f59e0b" font-family="DM Sans, sans-serif" font-size="11" font-weight="600">Every 1h</text>
<text x="410" y="132" text-anchor="middle" fill="#c8ced8" font-family="DM Sans, sans-serif" font-size="10">Process due</text>
<text x="410" y="146" text-anchor="middle" fill="#6b7a8d" font-family="DM Sans, sans-serif" font-size="10">follow-ups</text>
<text x="410" y="168" text-anchor="middle" fill="#6b7a8d" font-family="JetBrains Mono, monospace" font-size="9">Day 5 + Day 12</text>
<circle cx="560" cy="102" r="8" fill="#34d399"/>
<text x="560" y="82" text-anchor="middle" fill="#34d399" font-family="DM Sans, sans-serif" font-size="11" font-weight="600">Daily 2 AM</text>
<text x="560" y="132" text-anchor="middle" fill="#c8ced8" font-family="DM Sans, sans-serif" font-size="10">Run discovery +</text>
<text x="560" y="146" text-anchor="middle" fill="#6b7a8d" font-family="DM Sans, sans-serif" font-size="10">aggregate metrics</text>
<text x="560" y="168" text-anchor="middle" fill="#6b7a8d" font-family="JetBrains Mono, monospace" font-size="9">find new prospects</text>
</svg>
</div>

The follow-ups auto-send without my approval — by that point I've already approved the initial outreach, and if the prospect hasn't replied or unsubscribed, the follow-up templates are gentle enough to send autonomously. The first follow-up offers a free sample conversion. The second is a brief "last note from me" with my contact info. Two touches, then silence.

### What This Actually Cost

<div class="stats-row">
<div class="stat-card"><span class="stat-value">$0</span><span class="stat-label">Monthly Cost</span></div>
<div class="stat-card"><span class="stat-value">$0</span><span class="stat-label">Per-Email Fee</span></div>
<div class="stat-card"><span class="stat-value">$0</span><span class="stat-label">AI API Costs</span></div>
<div class="stat-card"><span class="stat-value">24/7</span><span class="stat-label">Uptime</span></div>
</div>

No subscriptions, no per-email fees, no API costs for AI. The language model runs on hardware I own. The entire system is self-contained on a box sitting on my desk.

<div class="part-divider"><span>Part 4</span></div>

## Automating Prospect Discovery — And Why Google Kicked Me Out

### The Problem With 16 Prospects

Sixteen prospects is a starting point, not a pipeline. I researched those companies manually — reading websites, checking artwork guidelines pages, noting which ones charge conversion fees. It took hours. If I wanted hundreds of qualified prospects, I needed to automate the discovery process itself.

### The Discovery Pipeline

<div class="diagram-wrap">
<div class="diagram-title">Prospect Discovery Pipeline</div>
<svg viewBox="0 0 660 460" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect x="180" y="10" width="300" height="52" rx="8" fill="#141820" stroke="#4a9eff" stroke-width="1.5"/>
<circle cx="204" cy="36" r="12" fill="#4a9eff"/>
<text x="204" y="40" text-anchor="middle" fill="#fff" font-family="DM Sans, sans-serif" font-size="11" font-weight="700">1</text>
<text x="224" y="32" fill="#e8ecf0" font-family="DM Sans, sans-serif" font-size="12" font-weight="600">Query Generator</text>
<text x="224" y="50" fill="#6b7a8d" font-family="DM Sans, sans-serif" font-size="10">LLM creates targeted search queries</text>
<line x1="330" y1="62" x2="330" y2="80" stroke="#252d3a" stroke-width="1.5"/>
<polygon points="325,78 330,88 335,78" fill="#252d3a"/>
<rect x="180" y="88" width="300" height="52" rx="8" fill="#141820" stroke="#34d399" stroke-width="1.5"/>
<circle cx="204" cy="114" r="12" fill="#34d399"/>
<text x="204" y="118" text-anchor="middle" fill="#fff" font-family="DM Sans, sans-serif" font-size="11" font-weight="700">2</text>
<text x="224" y="110" fill="#e8ecf0" font-family="DM Sans, sans-serif" font-size="12" font-weight="600">SearXNG Search</text>
<text x="224" y="128" fill="#6b7a8d" font-family="DM Sans, sans-serif" font-size="10">Self-hosted meta-search, no limits</text>
<line x1="330" y1="140" x2="330" y2="158" stroke="#252d3a" stroke-width="1.5"/>
<polygon points="325,156 330,166 335,156" fill="#252d3a"/>
<rect x="180" y="166" width="300" height="52" rx="8" fill="#141820" stroke="#f59e0b" stroke-width="1.5"/>
<circle cx="204" cy="192" r="12" fill="#f59e0b"/>
<text x="204" y="196" text-anchor="middle" fill="#fff" font-family="DM Sans, sans-serif" font-size="11" font-weight="700">3</text>
<text x="224" y="188" fill="#e8ecf0" font-family="DM Sans, sans-serif" font-size="12" font-weight="600">Deduplication</text>
<text x="224" y="206" fill="#6b7a8d" font-family="DM Sans, sans-serif" font-size="10">Skip domains already in database</text>
<line x1="330" y1="218" x2="330" y2="236" stroke="#252d3a" stroke-width="1.5"/>
<polygon points="325,234 330,244 335,234" fill="#252d3a"/>
<rect x="180" y="244" width="300" height="52" rx="8" fill="#141820" stroke="#a78bfa" stroke-width="1.5"/>
<circle cx="204" cy="270" r="12" fill="#a78bfa"/>
<text x="204" y="274" text-anchor="middle" fill="#fff" font-family="DM Sans, sans-serif" font-size="11" font-weight="700">4</text>
<text x="224" y="266" fill="#e8ecf0" font-family="DM Sans, sans-serif" font-size="12" font-weight="600">Website Fetcher</text>
<text x="224" y="284" fill="#6b7a8d" font-family="DM Sans, sans-serif" font-size="10">Homepage + About, Services, FAQ, Contact</text>
<line x1="330" y1="296" x2="330" y2="314" stroke="#252d3a" stroke-width="1.5"/>
<polygon points="325,312 330,322 335,312" fill="#252d3a"/>
<rect x="180" y="322" width="300" height="52" rx="8" fill="#141820" stroke="#4a9eff" stroke-width="1.5"/>
<circle cx="204" cy="348" r="12" fill="#4a9eff"/>
<text x="204" y="352" text-anchor="middle" fill="#fff" font-family="DM Sans, sans-serif" font-size="11" font-weight="700">5</text>
<text x="224" y="344" fill="#e8ecf0" font-family="DM Sans, sans-serif" font-size="12" font-weight="600">LLM Researcher</text>
<text x="224" y="362" fill="#6b7a8d" font-family="DM Sans, sans-serif" font-size="10">Classify, score quality, extract contacts</text>
<line x1="330" y1="374" x2="330" y2="392" stroke="#252d3a" stroke-width="1.5"/>
<polygon points="325,390 330,400 335,390" fill="#252d3a"/>
<rect x="180" y="400" width="300" height="52" rx="8" fill="#141820" stroke="#34d399" stroke-width="1.5"/>
<circle cx="204" cy="426" r="12" fill="#34d399"/>
<text x="204" y="430" text-anchor="middle" fill="#fff" font-family="DM Sans, sans-serif" font-size="11" font-weight="700">6</text>
<text x="224" y="422" fill="#e8ecf0" font-family="DM Sans, sans-serif" font-size="12" font-weight="600">Database Insert</text>
<text x="224" y="440" fill="#6b7a8d" font-family="DM Sans, sans-serif" font-size="10">Qualified prospects (score ≥ 5) → status 'new'</text>
<text x="520" y="350" fill="#f59e0b" font-family="JetBrains Mono, monospace" font-size="10" opacity="0.7">charges_conversion_fee?</text>
<text x="520" y="366" fill="#f59e0b" font-family="JetBrains Mono, monospace" font-size="10" opacity="0.7">→ strongest signal</text>
</svg>
</div>

### The Google Custom Search Fiasco

My first approach was Google's Programmable Search Engine. I already had one set up. The Custom Search JSON API offers 100 free queries per day — more than enough. I built the integration, set my API key, and ran the first test.

**403 Forbidden.**

After hours of debugging — new keys, rotated credentials, disabled and re-enabled the API, raw curl requests — I discovered that Google is deprecating the Custom Search JSON API entirely. Their suggested alternative is Vertex AI Search, a significantly more complex and expensive service. For a solo founder who needs to search for "trophy shop custom logo engraving," that's absurd overkill.

### The Solution: Self-Hosted Search

Instead of fighting Google or paying for another API, I went self-hosted. **SearXNG** is an open-source metasearch engine that aggregates results from Google, Bing, DuckDuckGo, and dozens of other sources. It runs as a Docker container, exposes a JSON API, and has zero usage limits because it's running on my own hardware.

<div class="callout green">
<p><strong>The lesson:</strong> Cloud APIs are convenient until they aren't. Google's deprecation could have been a multi-day blocker. Instead, the self-hosted alternative took five minutes to set up and is actually better — more results per query, no rate limits, no billing, no vendor risk. When you own the hardware, self-hosting is almost always the right answer.</p>
</div>

### Search Query Categories

<div class="query-grid">
<div class="query-card">
<h4>Corporate Gifts</h4>
<div class="query-count">10 seed queries</div>
<div class="query-example">"custom logo engraving corporate gifts"<br>"branded corporate gifts laser engraving"</div>
</div>
<div class="query-card">
<h4>Trophy & Awards</h4>
<div class="query-count">10 seed queries</div>
<div class="query-example">"awards company logo engraving service"<br>"trophy company artwork guidelines vector"</div>
</div>
<div class="query-card">
<h4>Laser Shops</h4>
<div class="query-count">7 seed queries</div>
<div class="query-example">"laser engraving shop custom logo"<br>"rotary engraving custom logo service"</div>
</div>
<div class="query-card highlight">
<h4>Pain Point Signals</h4>
<div class="query-count">14 seed queries — strongest leads</div>
<div class="query-example">"artwork conversion fee" engraving<br>"vector file required" engraving awards<br>"setup fee" logo engraving artwork</div>
</div>
<div class="query-card">
<h4>Regional</h4>
<div class="query-count">10+ LLM-generated</div>
<div class="query-example">"laser engraving company Texas logo"<br>"custom awards engraving Chicago"</div>
</div>
</div>

The **pain point signals** category is the most valuable. These are exact-phrase searches that find companies explicitly mentioning artwork conversion fees or vector file requirements. A company that charges an "artwork conversion fee" is literally describing the problem I solve.

### The LLM Research Output

When the pipeline finds a new company, the LLM produces a structured assessment:

<div class="research-output">
<div class="field"><span class="key">is_prospect</span><span class="val true">true</span></div>
<div class="field"><span class="key">company_name</span><span class="val">"Precision Awards & Engraving"</span></div>
<div class="field"><span class="key">summary</span><span class="val">"Crystal and acrylic awards with custom logo engraving for corporate clients."</span></div>
<div class="field"><span class="key">products_engraved</span><span class="val">["crystal awards", "acrylic plaques", "glass"]</span></div>
<div class="field"><span class="key">mentions_artwork_requirements</span><span class="val true">true</span></div>
<div class="field"><span class="key">charges_conversion_fee</span><span class="val strong">true ← strongest signal</span></div>
<div class="field"><span class="key">has_artwork_guidelines_page</span><span class="val true">true</span></div>
<div class="field"><span class="key">estimated_size</span><span class="val">medium</span></div>
<div class="field"><span class="key">recommended_tier</span><span class="val">2</span></div>
<div class="field"><span class="key">quality_score</span><span class="val score">8 / 10</span></div>
<div class="field"><span class="key">personalization_angle</span><span class="val">"Reference their $25 artwork fee — offer to handle it at higher quality"</span></div>
</div>

Companies scoring 5 or above get added to the prospects table, ready for outreach generation. The full research JSON is stored so I can review the LLM's reasoning.

### The First Real Discovery Run

The first test — 10 queries across categories — found 140 unique domains. The system is now doing in minutes what used to take me hours of manual research. And it runs while I sleep.

<div class="stats-row">
<div class="stat-card"><span class="stat-value">140</span><span class="stat-label">Domains Found</span></div>
<div class="stat-card"><span class="stat-value">10</span><span class="stat-label">Queries Used</span></div>
<div class="stat-card"><span class="stat-value">2 AM</span><span class="stat-label">Daily Auto-Run</span></div>
<div class="stat-card"><span class="stat-value">$0</span><span class="stat-label">Added Cost</span></div>
</div>

---

*Built with an NVIDIA DGX Spark, Qwen3.5-9B via SGLang, SearXNG, FastAPI, React, and a lot of cold email template iterations. The system runs entirely on-premise with zero cloud AI costs.*
