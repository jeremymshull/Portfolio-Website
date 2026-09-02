# Lessons learned

## 2026-08-05

- The starting directory was not a Git repository and contained no existing Astro application.
- The visual source of truth is the canonical root file `design.md`. Its UTF-8 punctuation is valid even when a terminal renders curly punctuation incorrectly.
- Two original portrait assets are preserved byte-for-byte under `source-assets/images`. They remain excluded from the public site pending placement, crop, and alt-text review.
- The installed Taste skill contains React, Tailwind, GSAP, and typography defaults that conflict with this project's explicit Astro and visual constraints. Its useful role here is critique, not architecture.
- Repository-neutral GitHub Pages support is simplest when both the production origin and base path are environment-driven from the start.
- Browser QA was completed for desktop, mobile, approximate 200% zoom, mobile-menu behavior, focus visibility, target sizing, overflow, and console errors. Operating-system reduced-motion emulation and a complete manual keyboard traversal remain final human checks.
- A wide single-column hero is a better Phase 1 verification shell than an internal status panel because it preserves headline readability without introducing final portfolio content.
- pnpm 11 records approved dependency scripts with `allowBuilds`; using that setting alone avoids redundant esbuild policy.
- Astro's built-in content collection schema provides validation and generated types without adding a content-system dependency.
- A draft-first publication state is safer than placeholder copy: verified project names can be modeled now while incomplete evidence remains unavailable to public queries.
- The skill and certification examples in `design.md` are structural recommendations, not verified personal claims, so their datasets must remain empty until Jeremy confirms them.

## 2026-08-17

- A detailed factual source document makes it possible to publish a complete recruiter-first homepage without inferring credentials, outcomes, private links, or project classifications.
- Astro's responsive local-image generation requires `sharp` during production builds; browser development alone does not expose that missing dependency.
- A fixed-height grid media panel must drop its mobile aspect ratio at the wide prominent-card breakpoint, or a wide screenshot can overflow its assigned column and reduce adjacent text contrast.
- Keeping original photographs in `source-assets` while importing them through Astro preserves the source files and produces optimized public derivatives. The resume follows the same preservation principle: the approved source remains intact and a public download copy uses the approved filename.

## 2026-08-30

- Generated list-surface artwork can improve project-family consistency without weakening evidence standards when it avoids fake interfaces and metrics, uses only verified concepts, and is visibly labeled as artwork rather than evidence.
- Retaining generated PNG sources separately from cropped WebP working assets preserves provenance while letting Astro produce small responsive derivatives for the public build.
- Importing individual Phosphor SVG assets and rendering them as CSS masks provides a consistent icon system without an icon font, framework component, or client-side runtime.
- SEO features that require an absolute origin should be conditional until deployment: local builds remain valid, while configured builds can emit canonicals, social-image URLs, structured data, sitemaps, and sitemap-aware `robots.txt` output.
- pnpm 11 reads dependency overrides from `pnpm-workspace.yaml`; placing them under the legacy `package.json` `pnpm` field is ignored.
