# Design decisions

## 2026-08-05 — Instruction precedence

The requested `gpt-taste` skill requires randomized component and GSAP patterns, while the visual source of truth requires Astro without React, restrained CSS motion, no large animation library, Syne/Inter/JetBrains Mono, and a recruiter-first enterprise presentation. The design file wins. The skill is used for hierarchy, composition, spacing, interaction-quality, and anti-generic critique only.

Rejected for this phase: Satoshi, horizontal accordions, testimonial carousel, infinite marquee, GSAP scroll pinning, and scale/fade scroll effects. These add dependency and interaction complexity without helping the foundation's recruiter-scan goal.

## 2026-08-05 — Canonical design filename

The visual source of truth is canonically named `design.md`. Repository instructions and documentation use that exact filename. Its UTF-8 punctuation was verified during pre-commit cleanup; no design guidance was rewritten.

## 2026-08-05 — Foundation content

The homepage uses the positioning direction explicitly supplied by the design file plus clearly framed foundation-status copy. It does not publish project, certification, outcome, or contact claims before those facts are verified.

## 2026-08-05 — Typography delivery

The three specified font families are installed as local build assets through Fontsource packages. This avoids third-party runtime font requests while preserving the intended typography and robust fallbacks.

## 2026-08-05 — Image handling

Both supplied photographs remain unchanged and are not emitted into the public build. The preexisting misspelled directory was safely normalized from `source-assests/` to `source-assets/` because no application imports referenced it. Placement, crop, and alt text are tracked in `content-needs.md`.

## 2026-08-05 — Pre-commit foundation cleanup

The internal status panel was removed from the hero so the headline can use the full content width. The H1 was shortened to foundation-specific copy rather than introducing final portfolio claims; it renders in two desktop lines and four narrow-mobile lines. The temporary accessibility copy now describes a tested baseline instead of making an absolute claim. Footer links use a 44px minimum interactive height while retaining link styling.

Dependency ranges were bounded to the versions already resolved in `pnpm-lock.yaml`; no package was upgraded. The pnpm 11 `allowBuilds` entry is retained as the single project-local approval for esbuild, and the redundant `onlyBuiltDependencies` entry was removed.

## 2026-08-05 — Content architecture

Projects use Astro's built-in content collection and schema support, so Phase 2 adds no dependency. The four project names supplied in the brief are represented as draft entries with no inferred summaries, technologies, outcomes, links, or classification.

Skills and certifications use typed centralized datasets. They remain empty rather than turning the design file's recommended examples into personal claims. The provided public-facing project query helper filters out unpublished records, optional project arrays require at least one meaningful value when present, and the project schema prevents publication without verified context, summary, business problem, solution, and technology data.

## 2026-08-17 — Phase 3 homepage

The homepage follows the `design.md` order: hero, featured projects, About, skills, certifications, and contact. `docs/content-source.md` supplies every personal fact, project statement, role, credential, link, and availability claim. The first project is visually prominent, while the remaining three use equal evidence cards; no Phase 4 case-study routes or unavailable private links were introduced.

Both approved portraits are imported from their preserved source assets, use reviewed descriptive alt text, and receive CSS focal positioning without altering the originals. The approved Case Intake and Weather LWC screenshots are published on their corresponding project cards from preserved source assets with reviewed descriptive alt text.

Astro's local image pipeline requires `sharp` for production optimization, so Phase 3 adds it as a direct dependency. The Taste skill influenced hierarchy, spacing, card contrast, and recruiter-scan critique; its GSAP, React, Satoshi, randomization, and oversized-motion requirements remain rejected where they conflict with `design.md`, repository rules, and the approved phase scope.

## 2026-08-19 — Hero portrait fade

At desktop widths, the approved hero portrait now occupies the right side of the hero behind the content and transitions into the charcoal background through an image mask and layered CSS gradients. The portrait uses a contained, right-aligned crop so more of the original composition remains visible and the face does not become disproportionately large. The desktop frame background is transparent, preventing a vertical surface seam; the mask and gradients soften the actual image edge while preserving natural skin tones and maintaining readable contrast without altering the source photograph. Narrow layouts retain the separate framed portrait so the text and image do not compete for limited space. No animation or additional dependency was introduced.

## 2026-08-21 — Phase 4 project system

The project index and dynamic case-study route both use `getPublishedProjects()`. Static paths are generated only from that filtered result, so draft records do not receive public pages. Draft status remains a publication control rather than a confidentiality boundary.

Verified project details remain in the Astro content collection and are rendered through reusable project-detail sections. Page-specific titles, descriptions, and canonical URLs use the existing shared layout metadata architecture. The project cards retain a clear case-study action and use one stretched title link so the full tile is clickable without nested interactive controls or an excessively long accessible link name.

Approved project screenshots are imported once through `src/data/project-images.ts` and resolved from each content record's documented media path. Case Intake and Weather publish their approved screenshots with reviewed alt text. Slack uses a private-evidence state because its screenshot and implementation details are unavailable for public use; Job Application Tracker uses a missing-media state because no verified public screenshot has been identified. No substitute image, diagram, outcome, or project detail was invented.

The repository's frontend design skill influenced the project-page hierarchy, content rhythm, card interaction, and preflight review. Its framework, dependency, image-generation, and motion requirements were not adopted where they conflict with `design.md`, the verified evidence boundaries, or the approved Astro phase scope.

## 2026-08-28 — Phase 5 supporting pages

Skills, Certifications, About, and Contact now use standalone routes while preserving the established primary navigation labels. Skill categories follow the verified headings in `docs/content-source.md`, and the homepage consumes the same centralized data. Certification pages continue to use the general Trailhead profile for verification rather than inventing credential-specific URLs.

The standalone About page reuses the approved About photograph with its reviewed alt text and focal treatment. Its copy is deliberately limited to verified Salesforce focus, role targets, approved business skills, location, and work preferences. A deeper career-transition narrative remains tracked in `docs/content-needs.md` rather than being inferred.

Contact uses the verified public email and professional-profile links without adding a form, third-party service, tracking, or new data-handling surface. The custom 404 page uses the shared layout and sets `noindex, follow` through a reusable layout option.

The frontend design skill influenced headline length, page rhythm, list treatment, CTA review, and responsive collapse. Its additional image-generation, dual-theme, React, Tailwind, and animation guidance was not adopted where it conflicts with `design.md`, verified asset placement, or the approved Astro scope.

## 2026-08-28 — Approved production, icon, and project-card direction

Superseded decision: Vercel Hobby was approved as the production hosting target with a private GitHub source repository. The final production URL and any custom-domain decision were unresolved, so the production origin remained configurable. Earlier GitHub Pages builds using `/Portfolio-Website` remain valid historical repository-subpath compatibility checks; they are not the final deployment architecture. Phase 7 was planned around Vercel's Git integration rather than a GitHub Pages deployment workflow, with appropriate repository and branch-protection review.

Phosphor Icons is the approved icon family, with installation and selective implementation deferred to Phase 6. Icons will be used only when they improve recognition, scanability, or action clarity; they remain secondary to visible text and will not be added to every heading, card, or label. Icon-only controls require accessible names. Implementation will use a consistent weight and sizing system, follow the charcoal and muted-olive palette, avoid decorative clutter, and load only the assets or weights needed to minimize bundle impact. GitHub, LinkedIn, email, resume/download actions, project links, navigation affordances, and carefully selected skill-category treatments are candidates rather than required placements.

Homepage and project-index cards will move in Phase 6 to a consistent family of generated project title-card graphics. These graphics are presentation and identity artwork, not screenshots or implementation evidence. They may use only verified project concepts from `docs/content-source.md` and must not depict fake Salesforce interfaces, dashboards, architecture, features, outcomes, or metrics. Approved real screenshots remain primarily on case-study pages: Case Intake and Weather retain their verified evidence, Slack retains its private-evidence restrictions, and Job Application Tracker retains its missing verified-screenshot status. This list-surface consistency decision narrows the general screenshot preference in `design.md` without changing the project's evidence standards or rewriting historical Phase 3–4 implementation notes.

## Deviations from the design system

The deeper About themes suggested by `design.md` remain intentionally limited until factual source content is supplied. The approved hosting and project-list visual decisions above supersede `design.md` only where it still names GitHub Pages as deployment and generally prefers real screenshots on project cards; the rest of the visual and evidence system remains authoritative.

## 2026-08-30 — Phase 6 visual and quality system

Four project-specific title cards were generated as a coordinated charcoal, muted-olive, border-led family using only verified project concepts. The full generated PNGs are retained under `source-assets/generated/project-title-cards/`; cropped 16:9 WebP working assets under `src/assets/project-title-cards/` feed Astro's responsive image pipeline. Each list-surface image identifies itself in descriptive alt text as generated title artwork rather than a project screenshot; the portfolio owner approved omitting a visible disclosure caption because the artwork is visually distinct from screenshot evidence. Approved real screenshots and the documented private or missing-evidence states remain unchanged on case-study pages.

Phosphor Icons is implemented through eleven individually imported regular-weight SVG assets from `@phosphor-icons/core`. The reusable icon component renders them as CSS masks, so icons inherit text color and add no client-side icon runtime or icon font. Icons supplement visible action labels for project, download, email, external-link, GitHub, and LinkedIn affordances, and provide a consistent visual marker for each verified skill category. They are decorative to assistive technology because adjacent text retains the accessible name.

The homepage and standalone skills directory now share one compact capability-row treatment inspired by the portfolio owner's supplied reference. Each row pairs a sentence-case category heading with a restrained icon and the repository's existing verified skill tags. The implementation preserves the charcoal, muted-olive, border-led system, avoids the reference's glow treatment, and does not copy any unverified technologies from the reference image.

The approved Salesforce title-card asset is now the shared social image. Astro creates a 1200×630 WebP derivative, and absolute Open Graph and Twitter image URLs are emitted only when `SITE_URL` is configured. Canonical URLs, verified Person JSON-LD, sitemap generation, and the sitemap entry in `robots.txt` follow the same origin-aware rule. This avoids inventing a production URL before Phase 7.

The frontend design and image-to-code skills influenced the visual preflight, title-card consistency, card hierarchy, and responsive critique. Their React, Tailwind, GSAP, dual-theme, randomized-layout, and image-first rebuild defaults were not adopted where they conflict with `design.md`, the established Astro architecture, restrained motion, or verified evidence boundaries.

The production dependency audit identified a transitive `nanoid` version below the patched 3.3.18 release through Astro's PostCSS build chain. A narrow pnpm workspace override pins `nanoid` 3.3.18 without adding it as a direct application dependency; the follow-up production audit reports no known vulnerabilities.

## 2026-09-02 - Case Intake title-card crop

The wide featured Case Intake and SLA Automation card uses a project-specific `object-fit: cover` crop with `object-position: 60% center`. This removes the unused lower portion of its fixed media column while retaining the document, SLA clock, routing, assignee, and notification motifs. The source image, card dimensions, shared title-card behavior, and all other project crops remain unchanged.

## 2026-09-02 - Interactive 404 Easter egg

The static 404 route now contains a small falling-letter catcher game built from the actual visible characters in its heading. The feature is deliberately isolated in one Astro component and uses deterministic CSS transforms plus minimal vanilla TypeScript, without a game engine, added dependency, stored score, audio, lives, or levels. The established charcoal, muted-olive, border-led visual system remains intact, and an always-visible Return home action keeps recovery from the error page obvious.

The game starts after a brief pause for visitors who allow motion. Keyboard input supports Left and Right Arrow keys plus A and D; pointer users can drag the catcher or use visible mobile controls. Reduced-motion visitors receive the complete static 404 message and no automatic gameplay. A shared, field-safe Konami listener routes the standard sequence to an intentionally missing path so the same custom 404 implementation is used while retaining missing-page behavior. This scoped playful motion is an explicit exception to the site's generally restrained animation direction and remains confined to the opt-out-compatible error experience.

## 2026-09-03 - Phase 7 static Vercel preparation

The production deployment retains Astro's existing static output and uses Vercel's zero-configuration Astro support. No Vercel adapter, server runtime, `vercel.json`, analytics product, or deployment CLI dependency is added. Vercel will build the repository root with the frozen pnpm lockfile, `pnpm build`, and the generated `dist` directory. The final `SITE_URL` remains unset until the first production deployment establishes the real HTTPS origin; `BASE_PATH` remains `/` for Vercel.

A minimal GitHub Actions workflow provides a repeatable `Validate / build` status check for pull requests and `main`. Preview and generated deployment URLs should use Vercel Authentication with Standard Protection, while the public production domain remains accessible. The Vercel GitHub App should receive access only to this repository where practical. Custom-domain and Google Search Console work remain explicitly deferred until separately approved.

## 2026-09-14 - Confirmed production origin

The portfolio owner confirmed `https://www.jeremymshull.com` as the final Vercel Hobby production origin and custom hostname. `SITE_URL` remains environment-driven in Astro and is set to this exact HTTPS origin for production; `BASE_PATH` remains `/`. Live output confirms origin-aware canonicals, social metadata, Person structured data, sitemap output, and the sitemap reference in `robots.txt`. Google Search Console remains deferred pending separate approval.

The source repository is intentionally public for portfolio transparency, superseding the earlier private-repository direction recorded on 2026-08-28. Secrets and local environment files remain excluded through the existing environment-file ignore rules and static-site security safeguards.

## 2026-09-14 - Production dependency remediation

The Phase 7 production audit identified advisories affecting Astro, Sharp, `js-yaml`, and SVGO. Astro and Sharp were raised to patched compatible releases, while `js-yaml` and SVGO use narrow workspace overrides so they remain transitive rather than becoming direct application dependencies. The follow-up frozen install, production audit, Astro diagnostics, default build, confirmed-origin build, and repository-subpath build all pass; the production audit reports no known vulnerabilities.

## 2026-09-14 - Completed Vercel deployment and QA

Vercel reports the production deployment from `main` commit `fc68a4e0190b34ef3cb32772bce847794a44d4e7` as Ready. The successful build retained Astro's static output, used pnpm 11.9.0 with Astro 7.3.2 and Sharp 0.35.4, generated all expected routes and `sitemap-index.xml`, and produced no build errors. The intentionally public GitHub repository remains the production source, while secrets and local environment files remain excluded.

Vercel Authentication and Standard Protection are enabled for protected deployments and require login. Web Analytics and Speed Insights are enabled at the Vercel project level, superseding the earlier direction to leave them disabled. Neither product is integrated into the Astro application, so their enabled project settings do not establish active data collection. Adding either integration to the application remains subject to the project's privacy and security review rules.

Manual production QA passed for keyboard-only navigation, 200% browser zoom, operating-system reduced motion, physical mobile devices, and repeated responsive-navigation use. With reduced motion enabled, the homepage behaves normally and the 404 page intentionally keeps its message static, disables the game, and explains the reduced-motion behavior. Vercel's warning that the `>=22.12.0` Node engine range may permit a future automatic major upgrade is accepted for this deployment and recorded as a non-blocking dependency-maintenance item.

## 2026-09-15 - Optional third-party project video

Project content may define one optional provider-neutral video object containing an accessible title, embed URL, public watch URL, and fallback-link label. The shared case-study template renders the object through a reusable responsive component; projects without video data render no video section and retain their existing output.

The first approved use is the LWC Contact Manager demo hosted by Loom. The standard Loom iframe is lazy-loaded, does not autoplay, and uses no Loom JavaScript SDK or additional package. A visible external link lets visitors open the same recording on Loom. Loading or opening the video sends a request to Loom, which may expose ordinary request data such as the visitor's IP address, browser details, and referring origin and may permit Loom-controlled cookies or storage under Loom's policies. The recording's continued availability also depends on its Loom sharing settings and hosting status.

## 2026-09-16 - LWC Contact Manager publication assets

The approved LWC Contact Manager title card extends the established generated-artwork system as its fifth project image. Its Account, contact-record, editing, and add-action motifs reflect verified project behavior; the full PNG source is retained with the other generated sources, while a cropped 16:9 WebP working asset feeds Astro's responsive image pipeline on the homepage and project index.

The restored `source-assets/images/lwc-contact-manager.png` image is verified real project evidence and remains on the case-study page. It is separate from the generated list-surface artwork and is described only by details visible in the supplied image.
