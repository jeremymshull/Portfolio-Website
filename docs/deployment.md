# Vercel deployment runbook

Status: deployed to Vercel Hobby at `https://www.jeremymshull.com`; production-origin configuration, dependency remediation, and automated live checks completed on 2026-09-14. Remaining dashboard and manual checks are listed below.

The confirmed public production origin is `https://www.jeremymshull.com`. Google Search Console remains unapproved and unconfigured.

## Production architecture

- Hosting: Vercel Hobby.
- Source repository: public `jeremymshull/Portfolio-Website`, intentionally visible for portfolio transparency; secrets and local environment files remain excluded from source control.
- Production branch: `main`.
- Framework: Astro, statically generated.
- Repository root: project root (`.`).
- Install command: `pnpm install --frozen-lockfile`.
- Build command: `pnpm build`.
- Output directory: `dist`.
- Node.js: version 24, matching repository validation and satisfying the declared `>=22.12.0` requirement.
- Package manager: the `pnpm@11.9.0` version declared in `package.json`.
- Production base path: `/`.
- Production origin: `https://www.jeremymshull.com`.

Vercel supports static Astro sites without an adapter or a `vercel.json` file. This project does not use Vercel Functions, server-side rendering, Web Analytics, Speed Insights, cookies, or third-party forms.

## Source-control gate

The `Build` GitHub Actions job, displayed under the `Validate` workflow, runs for pull requests and pushes to `main`. It installs from the frozen lockfile, runs Astro diagnostics, and builds the static site. After the workflow has run at least once, configure the `main` branch ruleset to require the `Build` status check before merging.

Verified on 2026-09-14: the active `Protect main` ruleset applies to the default branch, requires pull requests, blocks deletion and non-fast-forward updates, and requires the `Build` status check.

The first deployment must use a `main` commit containing the approved interactive 404 work and this Phase 7 preparation. Do not select a feature branch as Vercel's Production Branch.

## First deployment settings

Use Vercel's dashboard to import the public `jeremymshull/Portfolio-Website` repository. Limit the Vercel GitHub App's repository access to this repository if practical.

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

## First deployment record

Confirmed on 2026-09-14:

1. The stable public production URL is `https://www.jeremymshull.com`.
2. The live site returns the expected Astro-generated routes and assets.
3. Production pages emit canonicals, social metadata, and structured data against the confirmed origin, demonstrating that the production `SITE_URL` configuration and redeploy took effect.

The exact deployment source commit, Vercel framework-detection record, and build-log warnings have not been independently verified in the Vercel dashboard.

## Final-origin configuration

Completed for the confirmed origin:

1. `SITE_URL` is effective as `https://www.jeremymshull.com` in production.
2. Production output uses the root path.
3. The deployed output emits production canonicals, absolute social-image URLs, Person structured data, the sitemap, and the sitemap entry in `robots.txt`.
4. The confirmed origin is recorded in `docs/content-source.md`, `docs/content-needs.md`, this runbook, and the Phase 7 implementation record.

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

Automated live validation completed on 2026-09-14. All ten indexable routes returned HTTP 200 with the expected canonical URL, Open Graph URL and image, Twitter image, Person structured data, one `main` landmark, one H1, and `index, follow`. The sitemap contains those ten routes and excludes the 404; `robots.txt` references the production sitemap. The custom missing route returned HTTP 404 with `noindex, follow`. The social image returned HTTP 200 as WebP, 21 discovered internal links and assets returned successfully, selected private/source paths returned HTTP 404, and the apex domain returned a permanent redirect to the confirmed `www` origin. The only `http://` string found in page HTML was the non-fetching SVG namespace identifier.

The production dependency audit initially found six advisories. The current dependency update raises Astro to 7.3.2 and Sharp to 0.35.4 and pins patched `js-yaml` and SVGO versions through workspace overrides. A frozen install, `pnpm audit --prod`, Astro diagnostics, and all three supported build configurations subsequently passed; the follow-up production audit reports no known vulnerabilities.

## Remaining checks

- Confirm in the Vercel dashboard that the production deployment source is the intended `main` commit, Astro was detected, and the deployment log contains no unresolved warning or error.
- Confirm Web Analytics and Speed Insights remain disabled.
- Confirm preview and generated deployment URLs use the intended deployment protection and remain excluded from indexing.
- Complete the final manual keyboard, 200% zoom, operating-system reduced-motion, physical-device, and responsive-navigation checks on the live site.

## Optional services

The custom production domain is configured. Google Search Console remains deferred; configure it only if the portfolio owner explicitly approves it.
