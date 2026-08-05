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
