Stack: Next.js (App Router preferred; adapt paths if using Pages Router).
Keep: Existing theme/styles, existing contact form (no SendGrid).
Blog: Lives at site root.
Case studies: Scaffold and hide for now.
Core service: Engraver-ready line-art redraw (no color; tattoo-outline style).

0) Goals

Refresh IA & internal links (Home → Artwork as primary CTA; blog posts about vector cleanup link to Artwork).

Confirm/add pages: Artwork, Software & Automation, Pricing (updated), About, Contact, Blog (exists), hidden Case Studies, Privacy, Terms.

Seed 3 short blog posts (Markdown).

Add “truth docs” for Gemini bot (RAG-friendly).

Ensure basic SEO (titles, descriptions, OG), sitemap.xml, robots.txt.

Do not alter existing form wiring or theme.

1) Information Architecture & Navigation

Top nav: Home · Artwork · Software & Automation · Pricing · Blog · About · Contact

Home hero: Primary button links to /artwork.

Footer: Link Privacy and Terms.

Acceptance:

Nav renders in the above order.

Home hero CTA routes to /artwork.

2) Routes to Create/Confirm
/app/artwork/page.tsx
/app/services/software/page.tsx
/app/pricing/page.tsx
/app/about/page.tsx
/app/contact/page.tsx
/app/case-studies/page.tsx     (hidden; noindex)
/app/privacy/page.tsx
/app/terms/page.tsx
/app/blog/...                  (keep existing structure)


If using Pages Router, mirror under /pages/....

3) Page Content (stubs)
3.1 /artwork

H1: “Vector Logo Redraw — Engraver-Ready Line Art”

Deliverable: Clean EPS line-art (no color), laser-engraver ready, proper naming.

Typical project: Full redraw from raster/scan to crisp outlines.

Turnaround: Standard 1–2 business days.

Rush: Next business day if submitted before 12:00 pm PT and accepted.
No same-day or 4-hour rush.

What to send: best available source (~≥1000px), brand notes, prior vectors (if any), naming spec.

CTA: “Start a Logo” → /contact (use existing form).

Internal links: link to /pricing#logos; from relevant blog posts, link here.

3.2 /services/software

Title: “Practical Software & Automation — Small Team Friendly”

Pitch: We build small, boring tools that move work forward without breaking your process.

How We Work: Discovery → Prototype → Pilot → Production (bullets).

What We Build: Proof/approval tools, lightweight catalogs, integrations.

CTA: “Start Discovery” → /contact

Pricing note: See /pricing#software.

3.3 /pricing (updated)

H1: “Pricing”

Section: “Logo Redraw — Engraver-Ready Line Art” {#logos}

Light Redraw: $65 — clean source, simple shapes/wordmark; ≤60 min

Typical Redraw (most jobs): $95 — moderate detail; ~1–2 hours

Complex Emblem/Seal: $160+ — fine detail/crests/mascots/low-res; 2–4+ hours

Rush add-on: +$30 for next business day (submit before 12:00 pm PT; acceptance required)

No same-day or 4-hour rush.

Includes: 1 minor revision, engraver-ready EPS, correct naming

Extras: Additional revisions $20 each; Vector pack (EPS+SVG+PDF) +$15

Legacy private arrangements remain for current key accounts only.

Section: “Software & Automation” {#software}

Discovery (fixed): $199

Consulting: $120/hr

Prototypes/Pilots quoted per scope

3.4 /about

Brief founder bio; credibility bullets (13 years, ~15k logos).

Focus on engraving workflows; no sensitive client data.

CTA to /contact.

3.5 /contact

Keep existing form and email handling.

Add line: “Typical response within 1 business day.”

3.6 /case-studies (scaffold, hidden)

H1: “Case Studies (Coming Soon)”

Remove from nav; add noindex.

Simple list container ready for future items.

3.7 /privacy and /terms

Minimal placeholder copy with updated date; linked in footer.

4) Blog Seeds (Markdown)

Create (or update) in your existing blog content location (e.g., /content/blog/):

/content/blog/eps-vector-cleanup-basics.md

---
title: "EPS & Vector Cleanup: What ‘Engraver-Ready’ Really Means"
description: "Turning messy logos into clean EPS line-art suitable for laser engraving."
date: 2025-10-07
tags: ["vector", "eps", "engraving"]
---

Engraver-ready means **clean, closed paths**, consistent stroke behavior, no stray points, and simplified nodes.

**Next:** Need this done? See [Artwork](/artwork) or [Logo Pricing](/pricing#logos).


/content/blog/approval-workflows-that-dont-derail.md

---
title: "Approval Workflows That Don’t Derail Your Day"
description: "Lightweight proofing and sign-off patterns that reduce email ping-pong."
date: 2025-10-07
tags: ["workflow", "approvals", "automation"]
---

Three patterns that work:
1) Single-link proof viewer (no attachments)
2) Time-boxed approvals
3) One-click approve/revise with comment capture

Curious about a pilot? See [Software & Automation](/services/software).


/content/blog/small-boring-tools-big-wins.md

---
title: "Small, Boring Tools — Big Wins"
description: "Tiny utilities that shave minutes off repeated tasks add up fast."
date: 2025-10-07
tags: ["automation", "ops"]
---

Automations that remove copy-paste steps or normalize files add up to hours saved each month.  
Start with a **Discovery**: [/pricing#software](/pricing#software).


Acceptance: Posts render with titles/meta/dates; at least one links to /artwork and /pricing#logos.

5) Gemini Chatbot “Truth Docs” (RAG pack)

Create:

/content/truth/README.md
/content/truth/business-overview.md
/content/truth/services-artwork.md
/content/truth/services-software.md
/content/truth/policies.md


/content/truth/business-overview.md

# Business Overview (Truth)
- Name: T & C Enterprises (operated by Reber Ventures LLC)
- Core: Vector **logo redraw** to engraver-ready EPS; small-team software/automation
- Tone: practical, concise, no over-promising
- No internal client data; use generic examples unless approved


/content/truth/services-artwork.md

# Artwork Service Truths
- Deliverable: **EPS line-art** (no color), engraver-ready
- Typical project: full redraw from raster/scan to clean outlines
- Turnaround: standard 1–2 business days
- Rush: next business day if submitted before 12:00 pm PT and **accepted**; no same-day/4-hour windows
- Pricing: see /pricing#logos
- Intake: current contact form/email (no SendGrid today)


/content/truth/services-software.md

# Software & Automation Truths
- Discovery (fixed): $199
- Consulting: from $120/hr
- Model: Discovery → Prototype → Pilot → Production
- Scope: proof/approval tools, lightweight catalogs, integrations


/content/truth/policies.md

# Policies (Public)
- Communication: email first; respond within 1 business day
- Revisions: artwork includes 1 minor revision; complex redraws may increase scope/price
- Privacy: we don’t publish client work without written permission

6) SEO & Essentials

Each route sets <title> and <meta name="description">.

Site-wide OG defaults (site name + fallback image).

Generate/confirm sitemap.xml and robots.txt (block /case-studies).

Internal links from relevant blog posts to /artwork and /pricing#logos.

Optional (leave commented): Plausible or GA4 snippet placeholder, disabled by default.

7) Next.js Notes

App Router: use export const metadata = { title, description, robots } in page.tsx.

Add robots: { index: false } (or noindex) for /case-studies.

Keep theme tokens/components as-is; do not alter CSS variables or color system.

Preserve the existing contact form action; no SendGrid changes.

8) QA / Acceptance Checklist

 Nav order correct; footer links present.

 Home hero CTA → /artwork.

 /pricing shows Light $65 / Typical $95 / Complex $160+, rush policy, includes/extras.

 Blog seeds render; internal links to /artwork and /pricing#logos work.

 /case-studies reachable by URL, hidden from nav, noindex.

 Privacy & Terms present and linked.

 Truth docs exist at /content/truth/*.

 Existing contact form functions unchanged.

9) Out of Scope (now)

DNS/SSL changes; email provider changes; detailed case studies; analytics wiring.

10) Commit Message
feat(site): IA refresh, pages, updated line-art redraw pricing, blog seeds, truth docs, legal placeholders; preserve theme & contact form


End of brief.
Proceed to create/modify files while preserving theme and existing form behavior.