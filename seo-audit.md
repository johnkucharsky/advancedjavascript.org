# SEO Audit

Date: 2026-05-08

## Implementation Update

The priority recommendations from this audit have been applied in source:

- `src/app/opengraph-image.png` was resized to a standard `1200x630` Open Graph canvas.
- `/get-started` was repositioned as a topic map and marked `noindex, follow` in dynamic route metadata.
- `/advanced-javascript.pdf` now receives an `X-Robots-Tag: noindex, noarchive` header from `next.config.mjs`.
- `WebSite` and per-page `BreadcrumbList` JSON-LD were added through `src/app/structured-data.jsx`.
- `next-sitemap.config.js` now excludes `/get-started`, disables generic auto `lastmod`, and uses more realistic change frequencies and priorities.
- `public/sitemap-0.xml` was updated to match the new sitemap intent without reading generated Next output.
- High-value lessons received source-only interview-practice framing without adding new pages or code snippets.
- The intentionally removed `/various/call-bind-apply` and `/various/promises-closures-async` routes were also removed from topic-map links and sitemap priority inputs.

## Scope

Audited source/config/static SEO files only:

- `src/app`
- `src/content/**/*.mdx`
- `next.config.mjs`
- `next-sitemap.config.js`
- `package.json`
- `public/robots.txt`
- `public/sitemap.xml`
- `public/sitemap-0.xml`
- static SEO assets in `src/app` and `public`

Excluded generated/dependency folders: `.next`, `node_modules`, `.yarn`, `public/_pagefind`, `out`, `dist`, `build`, and `coverage`.

No dev server or browser crawl was run. This audit assumes the app renders and focuses on what the project source currently declares.

## Snapshot

- 29 MDX content routes.
- 28 sitemap URLs.
- `/get-started` is intentionally excluded from `public/sitemap-0.xml` because it is now `noindex, follow`.
- No indexable content route is missing from `public/sitemap-0.xml`.
- No extra content route is present in `public/sitemap-0.xml`.
- Every MDX page has frontmatter `title` and `description`.
- Every MDX page has exactly one markdown H1.
- No duplicate MDX titles or descriptions were found.
- Title and description lengths are in a reasonable range for search snippets.
- Internal markdown links to project routes resolve to known content pages.
- Global `metadataBase` is set to `https://www.advancedjavascript.org`.
- Dynamic page metadata sets per-route canonical URLs, Open Graph titles/descriptions, and Twitter card metadata.
- `robots.txt` allows crawling and points to the canonical sitemap.

## Findings

### Resolved: Open Graph Image Aspect Ratio

`src/app/opengraph-image.png` was `2263x889`, about `2.55:1`. It is now `1200x630`.

Most Open Graph and Twitter large-card previews expect a `1.91:1` image, commonly `1200x630` or a 2x version such as `2400x1260`. The current image is likely to be cropped or letterboxed in social previews, which can reduce click-through quality even if normal SEO indexing is unaffected.

Applied:

- Replaced the asset with a standard `1200x630` Open Graph canvas.
- Kept the same filename so existing metadata in `src/app/layout.jsx` and `src/app/[[...mdxPath]]/page.jsx` continues to work.

### Resolved: `/` and `/get-started` Target Similar Search Intent

Before implementation, the home page targeted:

- `JavaScript Interview Snippets and Job Tasks`
- `Practice JavaScript interview snippets and real job-task examples...`

`/get-started` targeted:

- `JavaScript Examples and Interview Prep`
- `Browse JavaScript interview snippets, native method polyfills, React patterns...`

Both pages aimed at broad "JavaScript interview/examples/prep" intent. That could split internal relevance between two broad entry pages.

Applied:

- Keep `/` as the primary broad search landing page.
- Repositioned `/get-started` as `Advanced JavaScript Topic Map`.
- Added `robots: { index: false, follow: true }` for `/get-started`.

### Resolved: Downloadable PDF May Compete With HTML Pages

`public/advanced-javascript.pdf` is linked from the navbar and is about `4.16 MB`. It is not in the sitemap, but it is still crawlable through the navbar link.

If the PDF duplicates site content, search engines may index it as a separate document and send users to the PDF instead of the richer HTML experience.

Applied:

- Added an `X-Robots-Tag: noindex, noarchive` header for `/advanced-javascript.pdf`.

### Resolved: Missing Structured Data

No source-level JSON-LD or structured-data helpers were found for docs pages.

This site has clear candidates:

- `WebSite` with site name and URL.
- `BreadcrumbList` for sectioned docs routes.
- `Article` or `TechArticle` for lesson pages.
- Potentially `LearningResource` for tutorial-style content.

Applied:

- Added a small structured-data component in the app route/page wrapper.
- Added `WebSite` and `BreadcrumbList`.
- Deferred `TechArticle` until stable article fields are defined for every lesson.

### Resolved: Sitemap Uses Generic Daily Change Frequency

All sitemap URLs currently have:

- `changefreq: daily`
- `priority: 0.7`
- nearly identical `lastmod` timestamps

This is not a blocking issue, but it gives weak signals because evergreen tutorial pages do not usually change daily.

Applied:

- Configured `next-sitemap` with a `transform` that sets more realistic values.
- Set higher priority for `/` and selected high-value pages.
- Disabled generic auto `lastmod`.

### Improved: Content Has Metadata, But Many Pages Still Read Like Snippet Catalogs

The current page metadata is much stronger than the older catalog-style state: titles and descriptions are unique, keyword-specific, and route-appropriate.

The next SEO upside is content structure, not metadata mechanics. Pages can target long-tail queries better when each snippet has more explicit search language:

- expected output
- edge cases
- complexity notes
- "what will this print" prompts
- follow-up challenge variants
- interview framing around the exact method or pattern

Applied:

- Added interview-practice framing to high-value pages first: event loop, promises, array polyfills, map/set/object, and React rendering.
- Kept the current route structure and metadata approach.

## Positive Checks

- Canonicals are generated per route in `src/app/[[...mdxPath]]/page.jsx`.
- `metadataBase` and sitemap host both use `https://www.advancedjavascript.org`.
- `html lang="en"` is set in `src/app/layout.jsx`.
- Robots configuration does not accidentally block content.
- Sitemap route count matches the intended indexable route set after excluding `/get-started`.
- Internal content links are currently consistent with existing routes.
- MDX pages have single-H1 structure.

## Suggested Priority Order

1. Done: Replace the Open Graph image with a standard `1.91:1` preview asset.
2. Done: Make `/get-started` a noindexed navigation/topic-map page.
3. Done: Add `noindex` handling for the PDF.
4. Done: Add `WebSite` and `BreadcrumbList` JSON-LD.
5. Done: Tune sitemap `changefreq`/`priority` and disable generic auto `lastmod`.
6. Done: Improve high-value lesson pages with challenge/reveal framing.
