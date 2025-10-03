T & C Website Docs Pack
=======================

This pack drops into an Eleventy (11ty) site **without any custom filters or layouts**.
Files use front matter with only `title` and `permalink` so they render even if your base layout errors.

Install
-------
1) Copy the `src/` folder from this pack into your site (merge with existing `src/` if present).
   - Markdown pages go to `src/docs/`.
   - The PDF (if included) is at `src/assets/downloads/TandC_Client_Packet.pdf`.
2) Run your Eleventy build as usual (e.g., `npx @11ty/eleventy --serve`).

URLs
----
- /docs/
- /docs/business-core/
- /docs/services-catalog/
- /docs/process-workflow/
- /docs/contracts-policies/
- /docs/pricing-tiers/
- /docs/faq/
- /assets/downloads/TandC_Client_Packet.pdf

If you have a `base.njk` layout and want to use it, add `layout: base.njk` to the front matter later.