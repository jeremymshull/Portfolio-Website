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

## Deployment configuration

The project is repository-neutral. Set these environment variables when the production repository and URL are known:

- `SITE_URL`: the full production origin, such as `https://example.com`.
- `BASE_PATH`: the GitHub Pages repository subpath, such as `/portfolio`; use `/` for an apex or custom domain.

See [docs/implementation-plan.md](docs/implementation-plan.md) for the phased roadmap and [docs/content-needs.md](docs/content-needs.md) for verified content still required.
