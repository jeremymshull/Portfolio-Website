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

Status: awaiting approval.

- Define project, skill, and certification schemas.
- Add centralized factual content with safe optional fields.
- Keep unavailable content unpublished and tracked in `content-needs.md`.

## Phase 3 — Homepage

Status: awaiting approval.

- Build the full recruiter-first homepage in the order defined by `design.md`.
- Add verified project, About, skill, certification, and contact previews.
- Review the 30-second recruiter scan goal.

## Phase 4 — Project system

Status: awaiting approval.

- Build the project index, reusable cards, dynamic case-study routes, and missing-media states.

## Phase 5 — Supporting pages

Status: awaiting approval.

- Build Skills, Certifications, About, Contact, and 404 routes.

## Phase 6 — Quality review

Status: awaiting approval.

- Apply the Taste skill as a critique layer beneath `design.md`.
- Test responsive behavior, accessibility, content accuracy, performance, metadata, and links.

## Phase 7 — Deployment

Status: awaiting repository and production configuration.

- Add GitHub Pages automation, verify configured subpaths, and finish deployment documentation.
