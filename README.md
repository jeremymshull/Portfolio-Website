# Jeremy Shull Salesforce portfolio

A static, recruiter-focused Salesforce portfolio built with Astro and TypeScript.

Requires Node.js 22.12 or newer and pnpm 11.9.0 or newer.

## Local development

```sh
pnpm install
pnpm dev
```

Run validation and create a production build with:

```sh
pnpm check
pnpm build
```

## Content architecture

Project entries live in `src/content/projects` and are validated by `src/content.config.ts`. New entries should remain `draft` until every published field is verified. Public project queries use `getPublishedProjects()` from `src/data/projects.ts` so draft content is excluded by default.

Verified skills and certifications live in `src/data/skills.ts` and `src/data/certifications.ts`. Homepage identity, contact, role, and availability content is centralized in `src/data/site.ts`. `docs/content-source.md` remains the factual source of truth for portfolio content.

## Deployment configuration

The repository and GitHub Pages path are known, but the final production URL has not yet been established. Configure deployment with:

- `SITE_URL`: the final production origin when confirmed.
- `BASE_PATH`: `/Portfolio-Website` for repository-hosted GitHub Pages; use `/` for an apex or custom domain.

See [docs/implementation-plan.md](docs/implementation-plan.md) for the phased roadmap and [docs/content-needs.md](docs/content-needs.md) for verified content still required.
