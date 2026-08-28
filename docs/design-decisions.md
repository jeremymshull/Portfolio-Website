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

Vercel Hobby is the approved production hosting target, connected to the private GitHub source repository. The final production URL and any custom-domain decision remain unresolved, so the production origin stays configurable. Earlier GitHub Pages builds using `/Portfolio-Website` remain valid historical repository-subpath compatibility checks; they are not the final deployment architecture. Phase 7 will use Vercel's Git integration rather than adding a GitHub Pages deployment workflow, while retaining appropriate repository and branch-protection review.

Phosphor Icons is the approved icon family, with installation and selective implementation deferred to Phase 6. Icons will be used only when they improve recognition, scanability, or action clarity; they remain secondary to visible text and will not be added to every heading, card, or label. Icon-only controls require accessible names. Implementation will use a consistent weight and sizing system, follow the charcoal and muted-olive palette, avoid decorative clutter, and load only the assets or weights needed to minimize bundle impact. GitHub, LinkedIn, email, resume/download actions, project links, navigation affordances, and carefully selected skill-category treatments are candidates rather than required placements.

Homepage and project-index cards will move in Phase 6 to a consistent family of generated project title-card graphics. These graphics are presentation and identity artwork, not screenshots or implementation evidence. They may use only verified project concepts from `docs/content-source.md` and must not depict fake Salesforce interfaces, dashboards, architecture, features, outcomes, or metrics. Approved real screenshots remain primarily on case-study pages: Case Intake and Weather retain their verified evidence, Slack retains its private-evidence restrictions, and Job Application Tracker retains its missing verified-screenshot status. This list-surface consistency decision narrows the general screenshot preference in `design.md` without changing the project's evidence standards or rewriting historical Phase 3–4 implementation notes.

## Deviations from the design system

The deeper About themes suggested by `design.md` remain intentionally limited until factual source content is supplied. The approved hosting and project-list visual decisions above supersede `design.md` only where it still names GitHub Pages as deployment and generally prefers real screenshots on project cards; the rest of the visual and evidence system remains authoritative.
