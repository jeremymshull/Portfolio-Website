# Jeremy Shull — Salesforce Developer & Administrator Portfolio

[![Jeremy Shull Salesforce portfolio title card](source-assets/images/jeremy-shull-salesforce-title-card.png)](https://www.jeremymshull.com)

[View the live portfolio](https://www.jeremymshull.com)

This repository contains my public Salesforce portfolio: a static Astro site built to help recruiters, hiring teams, and other developers move quickly from a concise introduction to concrete project evidence.

The portfolio covers how I approach business problems, architecture, implementation, testing, and lessons learned across Salesforce development and administration work. The repository is intentionally public so the implementation and decision-making behind the site can be reviewed alongside the finished result.

The main experience is straightforward and recruiter-focused, though a few details reward curious visitors who explore beyond the obvious paths.

## Featured case studies

- [Case Intake and SLA Automation](https://www.jeremymshull.com/projects/case-intake-and-sla-automation/) — Screen Flow, Web-to-Case, Apex routing, business-hours-aware SLA monitoring, notifications, and reporting.
- [Slack Contact Quick Action](https://www.jeremymshull.com/projects/slack-contact-quick-action/) — A headless LWC quick action backed by Apex for restoring Contact-to-Slack relationships.
- [Weather Lightning Web Component](https://www.jeremymshull.com/projects/weather-lightning-web-component/) — A record-aware weather component using Apex callouts, Named Credentials, Custom Metadata, and Jest.
- [Job Application Tracker](https://www.jeremymshull.com/projects/job-application-tracker/) — A custom Salesforce application with lifecycle automation, duplicate-task prevention, and Batch Apex cleanup.
- [LWC Contact Manager](https://www.jeremymshull.com/projects/lwc-contact-manager/) — An Account-level workspace for viewing, creating, and inline-editing related Contacts, with an embedded project demo.

## Portfolio structure

The site is organized around a small set of focused routes:

- `/` — recruiter-facing overview and featured work
- `/projects/` — published project index
- `/projects/<project-id>/` — statically generated case studies
- `/skills/` — verified Salesforce and development capabilities
- `/certifications/` — current credentials
- `/about/` — career transition, development approach, and personal background
- `/contact/` — contact options, availability, and resume download

Project records live in `src/content/projects/` and are validated through Astro's content collection schema in `src/content.config.ts`. A shared published-project query controls both the project index and static case-study generation, keeping draft work out of public routes.

Generated title-card artwork is mapped separately from real screenshots and other project evidence. This keeps list surfaces visually consistent without presenting generated imagery as proof of implemented functionality. Case studies can also opt into a reusable video section while projects without a demo retain the standard template.

## Technology

- Astro 7 with static output
- TypeScript
- Astro content collections with Zod validation
- Plain CSS with shared design tokens and responsive layout rules
- Phosphor Icons for selective interface cues
- Sharp and Astro's image pipeline for responsive image output
- Vercel for hosting and continuous deployment
- GitHub Actions for pull-request and `main` branch validation

The production site is deployed on Vercel Hobby at [www.jeremymshull.com](https://www.jeremymshull.com).

## Project map

```text
src/
├── assets/                  Optimized working assets
├── components/              Shared UI and case-study components
├── content/projects/        Typed project records
├── data/                    Site, skills, certification, and image mappings
├── layouts/                 Shared page shell and metadata
├── pages/                   Astro routes
└── styles/                  Global design system and responsive styles

source-assets/
├── generated/               Full-resolution generated artwork sources
├── images/                  Verified project and portfolio images
└── Resume/                  Resume source file

docs/                        Product, design, content, deployment, and lessons
public/                      Public static files and downloadable resume
```

## Local development

Requirements:

- Node.js 22.12 or newer
- pnpm 11.9.0 or newer

```sh
pnpm install
pnpm dev
```

Run the same core validation used for repository changes:

```sh
pnpm check
pnpm build
```

The production build is static and writes to `dist/`.

## Environment configuration

Copy `.env.example` when local environment overrides are needed. No secret is required to build the portfolio.

- `SITE_URL` controls absolute canonical URLs, social metadata, structured data, the sitemap, and the sitemap reference in `robots.txt`.
- `BASE_PATH` defaults to `/` for Vercel and remains configurable for repository-subpath compatibility checks.

The production origin is `https://www.jeremymshull.com`. Secrets and local environment files remain excluded from source control.

## Content and evidence standards

Portfolio claims are grounded in verified project material. `docs/content-source.md` records the approved factual source for public content, while the content schema prevents incomplete records from being published accidentally.

The project distinguishes among:

- verified project screenshots and implementation evidence;
- generated artwork used only for project identity and scanning;
- private or unavailable evidence that is stated plainly rather than recreated;
- draft content that is excluded from public route generation.

## Accessibility and quality

The site has been reviewed for keyboard navigation, visible focus, responsive behavior, 200% browser zoom, reduced-motion preferences, physical mobile-device use, metadata, structured data, static output boundaries, dependency security, and production performance.

The custom 404 experience follows the same accessibility standards as the rest of the portfolio. There may be a little more to discover there than the route name suggests. Those who are gamers or are familiar with games should find an interesting way to get there as well.

## Documentation

- [Project brief](docs/project-brief.md)
- [Design system](design.md)
- [Design decisions](docs/design-decisions.md)
- [Implementation plan](docs/implementation-plan.md)
- [Content sources](docs/content-source.md)
- [Outstanding content needs](docs/content-needs.md)
- [Deployment runbook](docs/deployment.md)
- [Lessons learned](docs/lessons-learned.md)

## Repository visibility

This repository is public by design. It gives recruiters and developers a transparent view of the portfolio's architecture, content model, design decisions, validation practices, and deployment workflow. Credentials, local environment files, private source material, and local AI-agent workflow files remain excluded from source control.
