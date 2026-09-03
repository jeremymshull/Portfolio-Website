# Vercel deployment runbook

Status: repository preparation complete; first Vercel deployment and final production URL are pending.

Do not record or configure a production origin until Vercel has assigned the real public production URL. No custom domain or Google Search Console configuration is approved.

## Production architecture

- Hosting: Vercel Hobby connected to the private GitHub repository through Vercel's Git integration.
- Production branch: `main`.
- Framework: Astro, statically generated.
- Repository root: project root (`.`).
- Install command: `pnpm install --frozen-lockfile`.
- Build command: `pnpm build`.
- Output directory: `dist`.
- Node.js: version 24, matching repository validation and satisfying the declared `>=22.12.0` requirement.
- Package manager: the `pnpm@11.9.0` version declared in `package.json`.
- Production base path: `/`.

Vercel supports static Astro sites without an adapter or a `vercel.json` file. This project does not use Vercel Functions, server-side rendering, Web Analytics, Speed Insights, cookies, or third-party forms.

## Source-control gate

The `Build` GitHub Actions job, displayed under the `Validate` workflow, runs for pull requests and pushes to `main`. It installs from the frozen lockfile, runs Astro diagnostics, and builds the static site. After the workflow has run at least once, configure the `main` branch ruleset to require the `Build` status check before merging.

The first deployment must use a `main` commit containing the approved interactive 404 work and this Phase 7 preparation. Do not select a feature branch as Vercel's Production Branch.

## First deployment settings

Use Vercel's dashboard to import the private `jeremymshull/Portfolio-Website` repository. Limit the Vercel GitHub App's repository access to this repository if practical.

Confirm these settings before selecting Deploy:

| Setting | Required value |
| --- | --- |
| Plan | Hobby |
| Framework Preset | Astro |
| Root Directory | `./` |
| Install Command | `pnpm install --frozen-lockfile` |
| Build Command | `pnpm build` |
| Output Directory | `dist` |
| Production Branch | `main` |

Do not create `SITE_URL` for the first deployment because the production URL is not known yet. `BASE_PATH` defaults to `/`; it may be added explicitly as `/` for Production and Preview, but it is not required for the first build.

Keep Web Analytics and Speed Insights disabled because analytics and tracking have not been approved. Under Deployment Protection, use Vercel Authentication with Standard Protection for preview and generated deployment URLs while leaving the production domain publicly accessible.

## Information required after the first deployment

Record and return:

1. The stable public production URL shown under the project's Domains section, including `https://` and without a path.
2. Confirmation that the deployment source is the current `main` commit.
3. Confirmation that Astro was detected and the build completed successfully.
4. Any Vercel build warning or error shown in the deployment log.

Do not provide a commit-specific preview URL as the production origin.

## Final-origin configuration

After the real URL is confirmed:

1. Add `SITE_URL` to the Vercel Production environment using the exact HTTPS origin without a trailing slash.
2. Set `BASE_PATH` to `/` in Production if it is not already explicit.
3. Redeploy the current `main` commit so Astro emits production canonicals, absolute social-image URLs, Person structured data, the sitemap, and the sitemap entry in `robots.txt`.
4. Record the confirmed origin in `docs/content-source.md`, `docs/content-needs.md`, this runbook, and the Phase 7 implementation record.

Do not add the production `SITE_URL` to Preview. Vercel automatically adds `X-Robots-Tag: noindex` to preview deployments, and this repository intentionally omits origin-dependent metadata when an environment has no confirmed origin.

## Live validation checklist

After the redeploy, validate the stable production domain rather than a commit-specific deployment URL:

- HTTPS loads without certificate or mixed-content errors.
- All intended routes and static assets return successfully.
- A nonexistent route serves the custom 404 with an HTTP 404 status and `noindex, follow` metadata.
- Every public route has the expected title, description, canonical URL, Open Graph metadata, and Twitter metadata.
- The social image URL is absolute, public, and returns the expected image type.
- Person structured data uses only verified content and the confirmed origin.
- `sitemap-index.xml` contains only intended indexable routes and excludes the 404.
- `robots.txt` allows crawling and references the production sitemap.
- Public pages are indexable; preview and obsolete deployment URLs retain Vercel's `X-Robots-Tag: noindex` protection.
- Draft projects, source assets, local environment files, repository documentation, and private Slack evidence are not present in public output.
- No secret or private environment value appears in HTML, JavaScript, source maps, build logs, or public responses.
- Navigation, responsive layouts, keyboard operation, 200% zoom, reduced motion, and the interactive 404 receive a final live pass.

## Optional services

A custom domain and Google Search Console remain deferred. Configure neither unless the portfolio owner explicitly approves it after the initial Vercel deployment is complete.
