# Repository instructions

## Sources of truth

- Treat verified factual project documentation as the highest-priority source.
- Treat `design.md` as the current visual source of truth. Do not edit or rename it without explicit approval.
- Use repository-local skills as specialized workflow and review guidance. When a skill conflicts with `design.md`, follow `design.md`.
- Record meaningful conflicts, departures, and tradeoffs in `docs/design-decisions.md`.

## Product rules

- Optimize for recruiter scanning, project credibility, accessibility, and factual accuracy.
- Keep Salesforce work and business problem-solving central.
- Never invent credentials, metrics, project outcomes, production usage, links, or technologies.
- Put non-blocking content questions in `docs/content-needs.md`.
- Preserve original portfolio images. Do not publish, crop, overwrite, or replace them without placement and alt-text review.

## Technical rules

- Use Astro, TypeScript, semantic HTML, modern CSS, static generation, and minimal vanilla JavaScript.
- Keep content separate from presentation when the content system is introduced.
- Do not add React, Vue, Svelte, Tailwind, Bootstrap, a CMS, a database, server-side rendering, or a large animation library without a verified requirement and approval.
- Keep the production `SITE_URL` configurable until the final Vercel origin is known. Retain configurable `BASE_PATH` support for repository-subpath compatibility testing, but do not treat `/Portfolio-Website` as the final production path.
- Add dependencies only when they have a clear foundation or product purpose.
- Do not add analytics, cookies, tracking pixels, or third-party forms without approval.

## Design and accessibility rules

- Preserve the charcoal, muted-olive, border-led system in `design.md`.
- Use Syne for display text, Inter for body text, and JetBrains Mono only for compact technical metadata.
- Use sentence-case headings, visible focus states, semantic landmarks, and keyboard-operable controls.
- Maintain WCAG AA contrast, practical 44px targets, reduced-motion support, responsive layouts, no horizontal overflow, and usability at 200% zoom.
- Keep motion restrained and under 400ms. Do not use custom cursors, mouse-following effects, pulsing controls, scroll hijacking, or interaction-only access to important content.
- Prefer reusable Astro components without over-componentizing trivial markup.

## Workflow

- Work only within the approved phase in `docs/implementation-plan.md`.
- Run `pnpm check` and `pnpm build` after implementation changes.
- Fix errors introduced by the current work before handing off.
- Before finishing a phase, run the read-only audit in `docs/phase-audit.md` and report its findings before making any audit-driven fixes.
- Do not commit unless the user explicitly authorizes it.
