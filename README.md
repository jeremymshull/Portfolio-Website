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

Published projects appear at `/projects/` and receive static case-study routes at `/projects/<project-id>/`. Route generation uses the same published-only query. Generated list-surface artwork is mapped centrally in `src/data/project-title-cards.ts` and identified in its descriptive alt text as generated title artwork rather than a project screenshot. Approved real project images remain mapped in `src/data/project-images.ts` and are used primarily on case-study pages.

Standalone supporting routes are available at `/skills/`, `/certifications/`, `/about/`, and `/contact/`. The custom `404.html` page is generated with `noindex, follow` metadata.

When `SITE_URL` is configured, the build emits canonical URLs, Open Graph and Twitter image metadata, verified Person structured data, a sitemap, and a sitemap reference in `robots.txt`. Without a confirmed origin, these absolute-URL features remain intentionally conditional.

Verified skills and certifications live in `src/data/skills.ts` and `src/data/certifications.ts`. Homepage identity, contact, role, and availability content is centralized in `src/data/site.ts`. `docs/content-source.md` remains the factual source of truth for portfolio content.

## Deployment configuration

Vercel Hobby is the chosen production hosting target, connected to the private GitHub source repository. The final Vercel production URL has not yet been established, and no custom domain has been selected. Keep deployment values configurable:

- `SITE_URL`: the final Vercel production origin when confirmed.
- `BASE_PATH`: `/` for the planned Vercel deployment. `/Portfolio-Website` remains available only for the repository-subpath compatibility builds used during earlier validation.

Static Astro deployment uses Vercel's zero-configuration framework support; no Vercel adapter or server runtime is required. See [docs/deployment.md](docs/deployment.md) for the build settings, source-control gate, first-deployment steps, and post-deployment validation checklist.

See [docs/implementation-plan.md](docs/implementation-plan.md) for the phased roadmap and [docs/content-needs.md](docs/content-needs.md) for verified content still required.
