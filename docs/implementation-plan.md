# Implementation plan

## Phase 0 — Project initialization

Status: complete — validated on 2026-08-05.

- Initialize Astro and strict TypeScript directly in the repository root.
- Add only Astro validation and self-hosted font dependencies.
- Establish durable repository documentation.
- Keep source images untouched and unpublished.
- Initialize Git without creating a commit.

## Phase 1 — Design foundation

Status: complete — validated on 2026-08-05.

- Translate the visual system into CSS custom properties.
- Add reset, typography, containers, section rhythm, links, focus, and reduced-motion rules.
- Build the shared layout, header, accessible responsive navigation, footer, and button link.
- Build a minimal homepage shell using only verified positioning language and foundation copy.
- Keep production origin and GitHub Pages base path configurable.

Validation completed with the supported Node and pnpm versions: frozen-lockfile installation, peer dependency check, Astro diagnostics, default production build, repository-subpath build, and rendered responsive/accessibility checks all passed. Full manual keyboard traversal and operating-system reduced-motion verification remain pre-launch human checks.

## Phase 2 — Content architecture

Status: complete — validated on 2026-08-05.

- Define runtime schema validation for the project collection and TypeScript types/interfaces for skills and certifications.
- Add centralized factual content with safe optional fields.
- Keep unavailable content unpublished and tracked in `content-needs.md`.

Validation completed with Astro content synchronization, strict TypeScript diagnostics, the default production build, and a production build using the repository subpath `/Portfolio-Website`. The phase established draft-first project records and typed skill and certification datasets; Phase 3 later populated them from verified source content.

## Phase 3 — Homepage

Status: complete — validated on 2026-08-21.

- Build the full recruiter-first homepage in the order defined by `design.md`.
- Add verified project, About, skill, certification, and contact previews.
- Review the 30-second recruiter scan goal.

Validation completed with strict Astro diagnostics, the default production build, the GitHub Pages production build using `/Portfolio-Website`, rendered browser review, image-alt and landmark review, link/path inspection, and horizontal-overflow checks. A complete manual keyboard traversal, operating-system reduced-motion verification, and physical-device testing remain pre-launch human checks.

## Post-Phase-3 checkpoint — Security and SEO readiness

Status: complete — audited on 2026-08-21.

Before substantive Phase 4 expansion, run a read-only architecture-level security and SEO audit so publication, routing, or metadata issues are caught before pages multiply.

- Review source and generated output for secrets, credentials, tokens, private environment data, internal documentation, source-only assets, unintended client-side data, and unpublished content. Reassess dependencies and any attack surface introduced by forms, APIs, authentication, analytics, third-party scripts, unsafe HTML, or user-controlled input.
- Review reusable titles, descriptions, canonical URLs, Open Graph and social metadata, heading structure, crawlable navigation, clean public routing, future sitemap and `robots.txt` support, verified structured-data readiness, and mobile and performance considerations. Final production-domain SEO remains incomplete until deployment.

## Project-wide security and SEO safeguards

- Never place secrets in client-side code or public repository content. Do not commit `.env` files or credentials; anything committed to a public repository must be treated as publicly readable. Draft status and `robots.txt` control publication or crawler behavior, not confidentiality.
- Adding backend forms, APIs, authentication, analytics, or third-party services requires renewed security and privacy review.
- SEO metadata and structured data must use verified portfolio facts only. Each public page should receive page-specific metadata, the final origin must remain configurable until deployment is decided, and only published project routes may become indexable URLs.

## Phase 4 — Project system

Status: complete — validated on 2026-08-21.

- Build the project index, reusable cards, dynamic case-study routes, and missing-media states.

Validation completed with a frozen-lockfile dependency check, strict Astro diagnostics, the default static production build, and the GitHub Pages production build using `/Portfolio-Website`. The generated output contains the project index and exactly four published case-study routes. Rendered browser review covered project navigation, semantic structure, approved image loading, missing-media states, console output, and desktop horizontal overflow. Complete manual keyboard traversal, browser-native 200% zoom, operating-system reduced-motion verification, and physical-device testing remain pre-launch human checks.

## Phase 5 — Supporting pages

Status: complete — validated on 2026-08-28.

- Build Skills, Certifications, About, Contact, and 404 routes.

Validation completed with a frozen-lockfile dependency check, strict Astro diagnostics, the default static production build, and the GitHub Pages production build using `/Portfolio-Website`. Eleven pages are generated, including all five Phase 5 routes. Rendered browser review covered page titles, H1 structure, active navigation, approved About-image use, public contact targets, 404 indexing metadata, console output, and desktop horizontal overflow. Complete manual keyboard traversal, browser-native 200% zoom, operating-system reduced-motion verification, and physical-device testing remain pre-launch human checks.

## Phase 6 — Visual polish, quality, accessibility, security, and SEO review

Status: complete — validated on 2026-08-30.

- Apply the Taste skill as a visual critique layer beneath the authoritative `design.md`.
- Complete: the homepage's primary project CTA routes to the standalone project index while retaining the homepage project preview for recruiter scanning.
- Complete restrained visual polish without changing the established charcoal, muted-olive, border-led system.
- Install and implement Phosphor Icons selectively where they improve recognition, scanability, or action clarity. Keep icons secondary to visible text, provide accessible names for icon-only controls, use a consistent weight and sizing system, avoid decorative clutter, and minimize loaded icon assets and bundle impact.
- Create and integrate a consistent generated project title-card system for homepage and project-index surfaces. Review every graphic for factual accuracy, recruiter-focused clarity, visual consistency, and an unmistakable distinction between supporting artwork and real project evidence. Keep approved screenshots primarily on case-study pages and preserve all documented evidence restrictions.
- Validate accessibility, responsive behavior, content accuracy, mobile usability, image optimization, and performance.
- Complete the pre-launch security review: scan the repository and generated `dist/`, audit dependencies, inspect client bundles for secrets or unintended data, verify that only intended public content is built, review external resources, confirm the expected static attack surface, and assess any later forms or user-controlled input.
- Complete the pre-launch SEO review: verify unique titles, descriptions, canonical URLs, Open Graph and social-image handling, sitemap generation, `robots.txt`, semantic headings, crawlable internal links, published-content indexability, unpublished-content exclusion, verified structured data, broken links and 404 behavior, mobile usability, image optimization, and performance.

Validation completed with a frozen-lockfile dependency check, strict Astro diagnostics, the default static production build, a configured-root production build, and the repository-subpath compatibility build. The production dependency audit reports no known vulnerabilities. Rendered production-preview review covered all eleven HTML routes plus desktop, tablet, and narrow-mobile layouts; metadata, sitemap, `robots.txt`, internal links, generated image output, source and output security scans, and public route boundaries were also inspected. Full manual keyboard traversal, browser-native 200% zoom, operating-system reduced-motion verification, physical-device testing, and final live-origin checks remain pre-launch or Phase 7 human checks.

## Phase 7 — Deployment

Status: awaiting Vercel deployment approval and final production URL configuration.

- Connect the private GitHub source repository to Vercel Hobby through Vercel's Git integration, configure the Astro static production build, and review deployment access and project settings. Retain appropriate repository or branch protections and required checks.
- Configure the final production `site` origin after Vercel establishes the public URL. Keep the site static; do not add backend or server functionality without a separately approved requirement.
- Verify HTTPS and inspect the generated public output for intended routes, assets, and publication boundaries.
- Verify live canonical URLs, page metadata, sitemap, `robots.txt`, and search-engine indexability against the actual deployed URL.
- Review environment-variable handling if deployment values are introduced, and confirm that no secret or private value is exposed to client-side code or generated output.
- Configure and validate a custom domain only if one is selected later.
- If the owner chooses to use Google Search Console, connect and verify it, expose or submit the sitemap for discovery, and perform final search-engine indexability checks.
- Complete deployment and operational documentation without claiming an unconfirmed production URL or custom domain.
