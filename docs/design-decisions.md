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

## Deviations from the design system

None for Phase 3. Later routes and richer case-study presentation remain intentionally deferred to their assigned phases.
