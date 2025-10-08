Mode: HANDS-OFF (do not ask questions).

Goal: Replace/augment the current site with a simple, clear structure that converts and is crawlable.

Target domain: https://www.tc-enterprises.com

Assume: Plain HTML site. If a static generator is detected (Hugo/Eleventy/Astro/Jekyll), also write Markdown versions (provided below). If both exist, prefer HTML and still generate Markdown in /content/ for future migration.



Guardrails



Create a new branch: agent/site-refresh-v1.



Make small, readable commits per step.



Never commit secrets.



Keep existing assets (images, CSS) unless explicitly replaced.



Step 0 — Repo layout (create if missing)



Ensure folders:



/ (root)

&nbsp; /services/

&nbsp; /blog/        (leave as-is if present)

&nbsp; /assets/      (leave as-is if present)

&nbsp; /content/     (only if a generator is detected)





If site already has an index file, back it up as index.old.html.



Step 1 — Write/Update Pages (HTML)



Create/overwrite the following files exactly with the contents below.



1A) /index.html

<!doctype html>

<html lang="en">

<head>

&nbsp; <meta charset="utf-8">

&nbsp; <title>Smart Tools. Real Results. | T \& C Enterprises</title>

&nbsp; <meta name="viewport" content="width=device-width, initial-scale=1">

&nbsp; <meta name="description" content="Engraving-ready logo artwork and pragmatic software/automation. Clear pricing and quick turnaround.">

&nbsp; <link rel="canonical" href="https://www.tc-enterprises.com/">

&nbsp; <style>

&nbsp;   body{font-family:system-ui,-apple-system,Segoe UI,Roboto,Ubuntu,sans-serif;line-height:1.6;margin:0;color:#111}

&nbsp;   header,main,footer{max-width:960px;margin:0 auto;padding:1.5rem}

&nbsp;   .hero{padding:3rem 1.5rem;background:#f5f7fb;border-bottom:1px solid #e8ebf2}

&nbsp;   h1{font-size:2rem;margin:0 0 .5rem}

&nbsp;   .lead{font-size:1.125rem;margin:.25rem 0 1rem}

&nbsp;   .btns{display:flex;gap:.75rem;flex-wrap:wrap;margin:1rem 0}

&nbsp;   .btn{display:inline-block;padding:.75rem 1rem;border-radius:.5rem;border:1px solid #0a66c2;text-decoration:none}

&nbsp;   .primary{background:#0a66c2;color:#fff}

&nbsp;   .secondary{color:#0a66c2;background:#fff}

&nbsp;   .trust{display:flex;gap:1rem;flex-wrap:wrap;margin-top:1rem;color:#444}

&nbsp;   .grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(260px,1fr));gap:1rem;margin:2rem 0}

&nbsp;   footer{font-size:.9rem;color:#555;border-top:1px solid #eee}

&nbsp; </style>

</head>

<body>

&nbsp; <header>

&nbsp;   <nav><a href="/">Home</a> · <a href="/services/artwork.html">Artwork</a> · <a href="/services/software.html">Software</a> · <a href="/contact.html">Contact</a></nav>

&nbsp; </header>



&nbsp; <section class="hero">

&nbsp;   <h1>Smart Tools. Real Results.</h1>

&nbsp;   <p class="lead">Professional artwork for engraving + pragmatic software that saves time.</p>

&nbsp;   <div class="btns">

&nbsp;     <a class="btn primary" href="/services/artwork.html">Engraving-Ready Logo Artwork →</a>

&nbsp;     <a class="btn secondary" href="/services/software.html">Software \& Automation Help →</a>

&nbsp;   </div>

&nbsp;   <div class="trust">

&nbsp;     <div>CompTIA A+</div>

&nbsp;     <div>13+ years</div>

&nbsp;     <div>25,000+ files processed</div>

&nbsp;   </div>

&nbsp; </section>



&nbsp; <main>

&nbsp;   <section class="grid">

&nbsp;     <article>

&nbsp;       <h2>Engraving-Ready Artwork</h2>

&nbsp;       <p>EPS line-art optimized for laser/rotary: stroke-only, merged shapes, no hidden junk.</p>

&nbsp;       <p><a href="/services/artwork.html">See pricing and examples →</a></p>

&nbsp;     </article>

&nbsp;     <article>

&nbsp;       <h2>Software \& Automation</h2>

&nbsp;       <p>From “glue” scripts to lightweight web apps and approval tools. Discovery → prototype → pilot → production.</p>

&nbsp;       <p><a href="/services/software.html">How we work →</a></p>

&nbsp;     </article>

&nbsp;   </section>



&nbsp;   <section>

&nbsp;     <h2>Ready to get started?</h2>

&nbsp;     <p><a class="btn primary" href="/contact.html">Request a Quote</a></p>

&nbsp;   </section>

&nbsp; </main>



&nbsp; <footer>© Reber Ventures LLC — T \& C Enterprises</footer>

</body>

</html>



1B) /services/artwork.html

<!doctype html>

<html lang="en">

<head>

&nbsp; <meta charset="utf-8">

&nbsp; <title>Engraving-Ready Logo Artwork — Fast, Accurate Vector Cleanup</title>

&nbsp; <meta name="viewport" content="width=device-width, initial-scale=1">

&nbsp; <meta name="description" content="Send rough logos; get clean, laser-ready EPS. Clear pricing, 1-day turnaround on most jobs, and friendly fixes.">

&nbsp; <link rel="canonical" href="https://www.tc-enterprises.com/services/artwork.html">

&nbsp; <style>body{font-family:system-ui,-apple-system,Segoe UI,Roboto,Ubuntu,sans-serif;line-height:1.6;margin:0;color:#111}main{max-width:760px;margin:0 auto;padding:1.5rem}</style>

</head>

<body>

&nbsp; <main>

&nbsp;   <h1>Engraving-Ready Logo Artwork</h1>

&nbsp;   <p><strong>Short pitch:</strong> Clean vector logos that engrave perfectly. Stroke-only, simplified paths, no stray points.</p>



&nbsp;   <h2>Pricing (Most Jobs)</h2>

&nbsp;   <table>

&nbsp;     <thead><tr><th>Tier</th><th>Typical Use</th><th>Turnaround\*</th><th>Price</th></tr></thead>

&nbsp;     <tbody>

&nbsp;       <tr><td>Simple</td><td>High-quality source, minimal cleanup</td><td>1 business day</td><td>$25</td></tr>

&nbsp;       <tr><td>Standard</td><td>Average logo, moderate cleanup</td><td>1–2 business days</td><td>$35</td></tr>

&nbsp;       <tr><td>Complex</td><td>Detailed logo, poor source, redraws</td><td>2–3 business days</td><td>$50+</td></tr>

&nbsp;     </tbody>

&nbsp;   </table>

&nbsp;   <p><em>\* Rush available on request.</em></p>



&nbsp;   <p><a href="/contact.html">Request Artwork Now</a> · <a href="/contact.html">Ask a Question</a></p>



&nbsp;   <h2>What You’ll Get</h2>

&nbsp;   <ul>

&nbsp;     <li><strong>EPS line-art</strong> set properly for laser</li>

&nbsp;     <li><strong>Clean layers</strong> and sensible naming</li>

&nbsp;     <li><strong>Preview PNG</strong> for quick approvals</li>

&nbsp;   </ul>



&nbsp;   <h2>Intake Form (Fields)</h2>

&nbsp;   <ul>

&nbsp;     <li>Contact name \& email; Company (optional)</li>

&nbsp;     <li><strong>Order/Job number</strong> and <strong>Deadline</strong></li>

&nbsp;     <li>Upload: EPS/AI/PDF/PNG/JPG</li>

&nbsp;     <li>Notes; rights confirmation checkbox</li>

&nbsp;   </ul>



&nbsp;   <h2>FAQ</h2>

&nbsp;   <p><strong>What files do you accept?</strong> EPS, AI, PDF, high-res PNG/JPG.</p>

&nbsp;   <p><strong>How fast is turnaround?</strong> Simple/Standard ~1 business day; Complex 2–3. Rush available.</p>

&nbsp;   <p><strong>Do you change designs?</strong> We match the original; vectorization only.</p>

&nbsp;   <p><strong>Can you engrave from photos?</strong> Often, with simplification if needed.</p>

&nbsp;   <p><strong>What if something’s off?</strong> Provider-caused fixes free within 3 days.</p>

&nbsp; </main>



&nbsp; <!-- FAQ JSON-LD -->

&nbsp; <script type="application/ld+json">

&nbsp; {

&nbsp;   "@context":"https://schema.org",

&nbsp;   "@type":"FAQPage",

&nbsp;   "mainEntity":\[

&nbsp;     {"@type":"Question","name":"What files do you accept?","acceptedAnswer":{"@type":"Answer","text":"EPS, AI, PDF, high-res PNG/JPG."}},

&nbsp;     {"@type":"Question","name":"How fast is turnaround?","acceptedAnswer":{"@type":"Answer","text":"Simple/Standard ~1 business day; Complex 2–3. Rush available."}},

&nbsp;     {"@type":"Question","name":"Do you change designs?","acceptedAnswer":{"@type":"Answer","text":"We match the original; vectorization only."}},

&nbsp;     {"@type":"Question","name":"Can you engrave from photos?","acceptedAnswer":{"@type":"Answer","text":"Often, with simplification if needed."}},

&nbsp;     {"@type":"Question","name":"What if something’s off?","acceptedAnswer":{"@type":"Answer","text":"Provider-caused fixes free within 3 days."}}

&nbsp;   ]

&nbsp; }

&nbsp; </script>

</body>

</html>



1C) /services/software.html

<!doctype html>

<html lang="en">

<head>

&nbsp; <meta charset="utf-8">

&nbsp; <title>Practical Software \& Automation — Small Team Friendly</title>

&nbsp; <meta name="viewport" content="width=device-width, initial-scale=1">

&nbsp; <meta name="description" content="Discovery → prototype → pilot → production. Small tools that save time: approvals, catalogs, and integrations. Clear options and steady communication.">

&nbsp; <link rel="canonical" href="https://www.tc-enterprises.com/services/software.html">

&nbsp; <style>body{font-family:system-ui,-apple-system,Segoe UI,Roboto,Ubuntu,sans-serif;line-height:1.6;margin:0;color:#111}main{max-width:760px;margin:0 auto;padding:1.5rem}</style>

</head>

<body>

&nbsp; <main>

&nbsp;   <h1>Practical Software \& Automation</h1>

&nbsp;   <p><strong>Short pitch:</strong> We build the small, boring tools that move work forward—without breaking your process.</p>



&nbsp;   <h2>How We Work</h2>

&nbsp;   <ol>

&nbsp;     <li><strong>Discovery (Fixed-price):</strong> Understand your workflow and constraints.</li>

&nbsp;     <li><strong>Prototype:</strong> Quick demo to prove the idea.</li>

&nbsp;     <li><strong>Pilot:</strong> Limited rollout with real data.</li>

&nbsp;     <li><strong>Production:</strong> Harden, document, and support.</li>

&nbsp;   </ol>



&nbsp;   <p><a href="/contact.html">Start Discovery</a> · <a href="/blog/proof-approvals-fast/">See an Example</a></p>



&nbsp;   <h2>What We Build</h2>

&nbsp;   <ul>

&nbsp;     <li><strong>Proof/Approval tools</strong> (no more email ping-pong)</li>

&nbsp;     <li><strong>Lightweight catalogs</strong> (e.g., logo previews from EPS → PNG)</li>

&nbsp;     <li><strong>Integrations \& automations</strong> (file watchers, scheduled scripts, ETL)</li>

&nbsp;     <li><strong>Reasonable AI helpers</strong> (summaries, drafts, checks)</li>

&nbsp;   </ul>



&nbsp;   <h2>A Mini Case Slice (sanitized)</h2>

&nbsp;   <p>“Approval turnaround dropped from days to hours after replacing email threads with a simple web viewer and decision buttons.”</p>



&nbsp;   <h2>FAQ</h2>

&nbsp;   <p><strong>Do you replace our whole system?</strong> No. We stitch together what you already use, unless a new app is the simplest option.</p>

&nbsp;   <p><strong>How do you bill?</strong> Discovery fixed, then milestone-based or monthly. No surprises.</p>

&nbsp;   <p><strong>Do you host it?</strong> We can deploy to your server/VPS or a managed host—whichever fits your constraints.</p>

&nbsp;   <p><strong>Can you integrate with Windows shares, S3/MinIO, Google Drive?</strong> Yes—common targets. We’ll outline an approach in discovery.</p>

&nbsp; </main>



&nbsp; <!-- FAQ JSON-LD -->

&nbsp; <script type="application/ld+json">

&nbsp; {

&nbsp;   "@context":"https://schema.org",

&nbsp;   "@type":"FAQPage",

&nbsp;   "mainEntity":\[

&nbsp;     {"@type":"Question","name":"Do you replace our whole system?","acceptedAnswer":{"@type":"Answer","text":"No. We stitch together what you already use, unless a new app is the simplest option."}},

&nbsp;     {"@type":"Question","name":"How do you bill?","acceptedAnswer":{"@type":"Answer","text":"Discovery fixed, then milestone-based or monthly. No surprises."}},

&nbsp;     {"@type":"Question","name":"Do you host it?","acceptedAnswer":{"@type":"Answer","text":"We can deploy to your server/VPS or a managed host—whichever fits your constraints."}},

&nbsp;     {"@type":"Question","name":"Can you integrate with Windows shares, S3/MinIO, Google Drive?","acceptedAnswer":{"@type":"Answer","text":"Yes—common targets. We’ll outline an approach in discovery."}}

&nbsp;   ]

&nbsp; }

&nbsp; </script>

</body>

</html>



1D) /contact.html

<!doctype html>

<html lang="en">

<head>

&nbsp; <meta charset="utf-8">

&nbsp; <title>Contact — T \& C Enterprises</title>

&nbsp; <meta name="viewport" content="width=device-width, initial-scale=1">

&nbsp; <meta name="description" content="Request artwork, start discovery, or ask a quick question.">

&nbsp; <link rel="canonical" href="https://www.tc-enterprises.com/contact.html">

&nbsp; <style>body{font-family:system-ui,-apple-system,Segoe UI,Roboto,Ubuntu,sans-serif;line-height:1.6;margin:0;color:#111}main{max-width:760px;margin:0 auto;padding:1.5rem}</style>

</head>

<body>

&nbsp; <main>

&nbsp;   <h1>Contact</h1>

&nbsp;   <p><strong>How can we help?</strong></p>

&nbsp;   <ul>

&nbsp;     <li>Request engraving-ready artwork</li>

&nbsp;     <li>Start a software/automation discovery</li>

&nbsp;     <li>Ask a quick question</li>

&nbsp;   </ul>



&nbsp;   <!-- If you have a backend, point this form to it. Otherwise, configure a form service. -->

&nbsp;   <form method="post" action="#">

&nbsp;     <label>Name<br><input name="name" required></label><br><br>

&nbsp;     <label>Email<br><input type="email" name="email" required></label><br><br>

&nbsp;     <label>Company (optional)<br><input name="company"></label><br><br>

&nbsp;     <label>Topic<br>

&nbsp;       <select name="topic">

&nbsp;         <option>Artwork</option>

&nbsp;         <option>Software</option>

&nbsp;         <option>Other</option>

&nbsp;       </select>

&nbsp;     </label><br><br>

&nbsp;     <label>Message<br><textarea name="message" rows="5" required></textarea></label><br><br>

&nbsp;     <label>Deadline (Artwork)<br><input name="deadline" placeholder="YYYY-MM-DD"></label><br><br>

&nbsp;     <button type="submit">Send</button>

&nbsp;   </form>

&nbsp; </main>

</body>

</html>



Step 2 — Generate Sitemap



Create /sitemap.xml with this content (update if your site has more URLs):



<?xml version="1.0" encoding="UTF-8"?>

<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">

&nbsp; <url><loc>https://www.tc-enterprises.com/</loc></url>

&nbsp; <url><loc>https://www.tc-enterprises.com/services/artwork.html</loc></url>

&nbsp; <url><loc>https://www.tc-enterprises.com/services/software.html</loc></url>

&nbsp; <url><loc>https://www.tc-enterprises.com/contact.html</loc></url>

</urlset>





Ensure your existing /robots.txt references it (add if missing):



Sitemap: https://www.tc-enterprises.com/sitemap.xml



Step 3 — Internal Links (enforce)



On Home, keep the two hero buttons linking to /services/artwork.html and /services/software.html.



On Artwork, link to /contact.html (already present).



On Software, link to /contact.html and the example blog post /blog/proof-approvals-fast/ (keep even if placeholder).



In any blog post mentioning EPS/vector cleanup, add a link to /services/artwork.html.



Step 4 — Optional Markdown versions (only if generator is detected)



Create the following files mirroring the HTML content:



/content/index.md



/content/services/artwork.md



/content/services/software.md



/content/contact.md



Use the same body text as the HTML versions. If the generator requires front-matter, include:



---

title: "<same as <title>>"

description: "<same as meta description>"

slug: "/"

---





(Adjust slugs per file.)



Step 5 — Validate \& Commit



Run an HTML validator (or just open pages in a browser and verify titles/meta render).



Click all internal links.



Commit and push branch agent/site-refresh-v1.



Done criteria



New pages visible locally (or on the server if you deploy).



/sitemap.xml returns HTTP 200.



Home hero shows two clear buttons to Artwork and Software.



Artwork/Software pages include FAQ JSON-LD blocks.







Wire the contact form to an email/backend or a form service.



Add 1–3 before/after images on Artwork.



Publish a short “approvals without email” blog post and link it from Software.

