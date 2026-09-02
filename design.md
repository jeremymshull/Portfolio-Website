---
version: 1.0.0
name: Jeremy Shull Salesforce Portfolio
description: Recruiter-focused visual and interaction system for a professional Salesforce portfolio built with Astro.
status: production-ready
framework: Astro
deployment: Vercel Hobby

brand:
  personality:
    - professional
    - approachable
    - modern
    - technically credible
    - business-focused
    - calm
  avoid:
    - crypto aesthetic
    - luxury finance branding
    - gaming UI
    - generic AI startup styling
    - excessive animation
    - visual clutter

colors:
  background: "#0D1117"
  surface: "#161B22"
  surface_elevated: "#1F2933"
  accent: "#9DBC7C"
  accent_light: "#D1E7B5"
  text_primary: "#F3F4F6"
  text_secondary: "#A9B1BC"
  border: "#2A323D"
  focus: "#D1E7B5"
  salesforce_blue_optional: "#4EA1D3"

typography:
  display:
    family: "Syne"
    fallback: "Inter, system-ui, sans-serif"
    weight: 700
  body:
    family: "Inter"
    fallback: "system-ui, sans-serif"
    weight: 400
  mono:
    family: "JetBrains Mono"
    fallback: "ui-monospace, monospace"
    weight: 500

spacing:
  base_unit: "8px"
  content_max: "1360px"
  reading_max: "72ch"
  section_desktop: "96px"
  section_mobile: "64px"

shape:
  radius_small: "4px"
  radius_medium: "8px"
  radius_large: "16px"
  border_width: "1px"

motion:
  duration_fast: "150ms"
  duration_default: "250ms"
  duration_slow: "400ms"
  easing: "cubic-bezier(0.4, 0, 0.2, 1)"
---

# 1. Purpose

This file is the visual source of truth for Jeremy Shull’s Salesforce portfolio.

The site exists to help recruiters, hiring managers, consultants, and potential collaborators quickly understand:

- who Jeremy is;
- which Salesforce roles he is targeting;
- which business problems he can solve;
- how he approaches Salesforce development and automation;
- what he has built;
- how to contact him.

The portfolio should feel polished enough for a professional job search while still feeling personal, clear, and approachable.

Project evidence is more important than decoration.

When design choices conflict, prioritize:

1. clarity;
2. recruiter scanning;
3. project credibility;
4. accessibility;
5. visual consistency;
6. animation or novelty.

# 2. Recruiter Scan Goal

Within roughly 30 seconds, a recruiter should be able to identify:

- Jeremy’s name;
- his Salesforce positioning;
- his strongest project;
- the Salesforce technologies he works with;
- relevant certifications;
- a clear contact or resume action.

Do not bury these items below long biography copy.

The homepage should communicate capability before personality depth.

# 3. Brand Personality

The site should feel:

- professional without feeling corporate;
- modern without chasing trends;
- technical without becoming cold;
- confident without exaggeration;
- approachable without becoming casual;
- business-focused rather than code-only.

The visual tone should resemble a well-designed technical case study or enterprise product page more than a marketing landing page.

Avoid:

- neon cyberpunk styling;
- crypto or finance visuals;
- black-and-electric-lime branding;
- glowing cursor effects;
- giant decorative typography;
- full-screen motion effects;
- generic AI imagery;
- glassmorphism as a dominant style;
- excessive gradients;
- playful gaming interfaces.

# 4. Color System

## 4.1 Core palette

### Background — `#0D1117`

Use as the main page background.

This should be the dominant color across the site.

### Surface — `#161B22`

Use for:

- project cards;
- skill groups;
- certification cards;
- content panels;
- navigation background;
- footer surfaces.

### Elevated surface — `#1F2933`

Use sparingly for:

- featured project emphasis;
- image frames;
- selected states;
- highlighted content blocks;
- active navigation elements.

### Accent — `#9DBC7C`

Use for:

- primary buttons;
- active links;
- section labels;
- selected states;
- small interface highlights;
- icon accents;
- focus-adjacent emphasis.

Do not apply the accent to large background areas.

### Accent light — `#D1E7B5`

Use for:

- subtle highlighted text;
- focus rings;
- high-contrast accent states;
- small decorative details.

### Primary text — `#F3F4F6`

Use for:

- headings;
- important body copy;
- button labels;
- high-priority metadata.

### Secondary text — `#A9B1BC`

Use for:

- descriptions;
- captions;
- supporting text;
- dates;
- secondary metadata.

### Border — `#2A323D`

Use for:

- cards;
- navigation dividers;
- buttons;
- form fields;
- section separators;
- image frames.

### Optional Salesforce blue — `#4EA1D3`

Use only when a Salesforce-specific visual cue is useful.

It must remain secondary to the olive accent.

## 4.2 Color rules

- Use one dominant accent color.
- Maintain WCAG AA contrast.
- Never rely on color alone to communicate state.
- Avoid large bright green areas.
- Avoid pure black and pure white unless necessary.
- Avoid decorative multi-color gradients.
- If a gradient is used, keep it subtle and low contrast.

# 5. Typography

## 5.1 Display typography

Use **Syne** for:

- H1;
- H2;
- selected H3 headings;
- major section titles.

Rules:

- use sentence case;
- avoid all caps for long headings;
- use bold weight;
- use tight but readable letter spacing;
- use fluid sizing with `clamp()`.

Suggested sizes:

- H1: `clamp(2.75rem, 7vw, 5.5rem)`
- H2: `clamp(2rem, 4.5vw, 3.5rem)`
- H3: `clamp(1.25rem, 2vw, 1.75rem)`

## 5.2 Body typography

Use **Inter** for:

- paragraphs;
- navigation;
- buttons;
- forms;
- project descriptions;
- case studies.

Rules:

- minimum body size: `1rem`;
- preferred desktop body size: `1.0625rem`;
- line height: `1.65–1.75`;
- maximum reading width: `65–72ch`.

## 5.3 Monospace typography

Use **JetBrains Mono** only for:

- technology tags;
- project metadata;
- certification labels;
- section eyebrow text;
- dates;
- code-related labels.

Do not use monospace for long paragraphs.

## 5.4 Link styling

Links should:

- be visibly distinct from body text;
- use underline or accent treatment;
- have a clear hover state;
- have a visible keyboard focus state.

Do not depend on hover alone.

# 6. Spacing and Rhythm

Use an 8px-based spacing system.

Recommended tokens:

- `4px`
- `8px`
- `12px`
- `16px`
- `24px`
- `32px`
- `48px`
- `64px`
- `80px`
- `96px`
- `120px`

Desktop section spacing:

- standard: `96px`;
- major hero or project section: `120px`;
- compact section: `64px`.

Mobile section spacing:

- standard: `64px`;
- compact section: `48px`.

Use spacing to create hierarchy before using borders or background changes.

# 7. Layout System

## 7.1 Page container

- maximum width: `1360px`;
- horizontal page padding: `24px` mobile, `32–48px` desktop;
- center content consistently;
- align major sections to shared container edges.

## 7.2 Grid

Use a 12-column desktop grid where useful.

Recommended responsive behavior:

- desktop: 12 columns;
- tablet: 6 columns;
- mobile: 1 column.

Do not force grid complexity when a simple block layout is clearer.

## 7.3 Homepage order

1. Navigation
2. Hero
3. Featured Projects
4. About
5. Skills
6. Certifications
7. Contact CTA
8. Footer

Featured projects must appear before the long About section.

## 7.4 Responsive rules

- no horizontal page scrolling;
- no important content hidden behind hover;
- no primary navigation dependent on pointer interaction;
- cards should stack naturally;
- typography should scale fluidly;
- project screenshots should remain legible;
- buttons should wrap cleanly;
- tap targets should be at least 44px when practical.

# 8. Navigation

Use a sticky top navigation.

Recommended behavior:

- height: approximately `72px`;
- dark translucent surface;
- subtle backdrop blur;
- bottom border;
- current page indicated with accent color;
- resume and contact actions easy to find;
- mobile menu keyboard accessible;
- mobile menu closes after navigation.

Recommended labels:

- Home
- Projects
- Skills
- Certifications
- About
- Contact

Do not use a custom cursor.

Do not use a floating pill navigation that obscures content.

# 9. Hero Section

The hero should immediately explain Jeremy’s professional direction.

Recommended structure:

- small technical eyebrow;
- clear H1;
- 1–2 sentence positioning statement;
- primary CTA;
- secondary CTA;
- optional portrait or project visual.

The H1 should be specific and credible.

Preferred message direction:

> Salesforce Developer and Administrator building practical automation, integrations, and Lightning experiences.

Do not use vague phrases such as:

- digital craftsman;
- code magician;
- building the future;
- transforming ideas into reality.

## 9.1 Hero CTA hierarchy

Primary CTA:

- View projects

Secondary CTA:

- Download resume
- Contact me

Use no more than two primary actions in the hero.

## 9.2 Portrait treatment

If a portrait is used:

- use a rectangular or softly rounded frame;
- avoid generic circular headshots;
- preserve natural skin tones;
- avoid color overlays across the face;
- use subtle border treatment;
- crop intentionally.

# 10. Featured Projects

Projects are the most important content on the site.

Featured projects should include:

- Case Intake & SLA Automation
- Slack Contact Quick Action
- Weather LWC
- Job Application Tracker

## 10.1 Project card anatomy

Each card should include:

1. project category or context;
2. project name;
3. business problem;
4. concise solution summary;
5. key technologies;
6. clear case-study link;
7. screenshot or diagram when available.

Lead with the problem and solution, not the technology list.

## 10.2 Card styling

- surface background;
- 1px border;
- 8px radius;
- no heavy shadow;
- optional subtle surface change on hover;
- small upward movement permitted;
- consistent internal spacing;
- clearly visible focus state.

Cards should resemble technical case-study summaries rather than product advertisements.

## 10.3 Project layout

Use:

- a responsive grid;
- or a vertical editorial sequence.

Do not use horizontal scrolling as the primary project navigation.

# 11. Project Case Study Pages

Each project page should include the following sections where supported by real project information.

## 11.1 Recommended structure

1. Project hero
2. Project summary
3. Business problem
4. Users or stakeholders
5. Solution
6. Architecture or process
7. Key features
8. Technical decisions
9. Screenshots
10. Testing or validation
11. Lessons learned
12. Future improvements
13. Repository or demo links

## 11.2 Evidence rules

Use real evidence whenever possible:

- screenshots;
- diagrams;
- code excerpts;
- flow screenshots;
- architecture notes;
- test coverage;
- implementation constraints;
- before-and-after process descriptions.

Do not invent:

- business metrics;
- time savings;
- user counts;
- production adoption;
- customer outcomes;
- technologies not actually used.

When quantified outcomes are unavailable, describe the capability accurately.

## 11.3 Architecture diagrams

Architecture diagrams should be:

- simple;
- labeled;
- readable;
- consistent with the site palette;
- understandable without narration.

Use olive for emphasis and muted neutrals for supporting nodes.

# 12. About Section

The About section should explain:

- Jeremy’s transition into Salesforce;
- his blend of technical and people-facing experience;
- his interest in practical business systems;
- his approach to continuous learning.

Keep homepage biography concise.

Move deeper background to a dedicated About page if needed.

Avoid a long personal essay on the homepage.

# 13. Skills

Group skills by meaningful category.

Recommended categories:

## Salesforce Platform

- Administration
- Flow
- Security
- Reports and Dashboards
- Data Modeling
- Case Management

## Development

- Apex
- Lightning Web Components
- SOQL
- JavaScript
- HTML
- CSS

## Automation and Integration

- Record-Triggered Flows
- Scheduled Apex
- REST APIs
- Named Credentials
- Slack Integrations

## Tools and Practices

- Git
- GitHub
- Jira
- VS Code
- Testing
- Documentation
- Agile concepts

Do not use:

- skill percentages;
- fake proficiency bars;
- arbitrary star ratings;
- oversized logo walls.

# 14. Certifications

Certification cards should show:

- certification name;
- issuing organization;
- verification link when available;
- optional verified date;
- compact visual hierarchy.

Use clean cards or a compact list.

Do not overdecorate certification badges.

# 15. Buttons and Calls to Action

## 15.1 Primary button

- olive background;
- dark text;
- clear label;
- 4–8px radius;
- minimum height around 44px;
- subtle brightness or position change on hover.

## 15.2 Secondary button

- transparent background;
- 1px border;
- light text;
- olive border or text on hover.

## 15.3 Button rules

- use direct labels;
- avoid vague “Learn more” when a specific action exists;
- do not pulse;
- do not glow;
- do not use excessive icons;
- preserve clear focus treatment.

# 16. Forms

Contact forms should use:

- visible labels;
- clear validation states;
- high-contrast inputs;
- 1px borders;
- comfortable spacing;
- helpful error messages.

Do not use placeholder text as the only label.

# 17. Icons

Use a consistent icon family.

Preferred:

- simple outline icons;
- small scale;
- consistent stroke width.

Do not mix multiple icon styles.

Icons should support meaning, not replace labels.

# 18. Images and Screenshots

Use real project screenshots whenever available.

Image guidelines:

- use consistent aspect ratios;
- crop only when necessary;
- preserve readability;
- add captions when context is not obvious;
- use subtle border and radius;
- avoid mockups that distort the UI;
- avoid generic stock imagery.

Screenshots should be optimized but not blurred.

# 19. Motion

Motion should be restrained.

Allowed:

- short hover transitions;
- subtle fade and slide reveals;
- mobile menu transitions;
- small project card movement;
- gentle image scale on hover.

Recommended duration:

- 150ms fast;
- 250ms default;
- 400ms maximum for large transitions.

Reveal movement should generally remain within `8–16px`.

Avoid:

- mouse-following glow;
- custom cursor;
- parallax-heavy scrolling;
- typing animations;
- pulse loops;
- large blur entrances;
- long staggered delays;
- scroll hijacking.

Respect `prefers-reduced-motion`.

# 20. Elevation and Depth

Create depth through:

- surface contrast;
- borders;
- spacing;
- layered sections;
- image framing.

Default to no shadow.

If a shadow is necessary, keep it subtle and low-opacity.

Avoid glowing edges and dramatic floating cards.

# 21. Footer

The footer should be simple.

Include:

- name;
- short positioning line;
- email or contact link;
- LinkedIn;
- GitHub;
- current year.

Do not use:

- giant watermark text;
- oversized initials;
- decorative marquee;
- repeated navigation overload.

# 22. Accessibility

Minimum standards:

- WCAG AA contrast;
- semantic HTML;
- correct heading hierarchy;
- visible focus states;
- keyboard-operable navigation;
- descriptive link text;
- descriptive alt text for meaningful images;
- empty alt text for decorative images;
- reduced-motion support;
- form labels and validation;
- touch targets around 44px;
- no color-only status communication.

Test at minimum:

- keyboard navigation;
- mobile viewport;
- 200% zoom;
- reduced motion;
- dark theme contrast;
- screen-reader landmarks.

# 23. Content Rules

Use clear, direct language.

Preferred writing style:

- concise;
- specific;
- business-oriented;
- accurate;
- active voice.

Avoid:

- buzzwords;
- inflated claims;
- generic passion statements;
- fake metrics;
- excessive jargon;
- long paragraphs;
- unexplained acronyms.

Project copy should answer:

- What was the problem?
- Why did it matter?
- What did Jeremy build?
- How did it work?
- What did he learn?

# 24. AI Implementation Rules

When an AI coding agent works on this project, it must:

1. Read this file before making visual changes.
2. Preserve the dark charcoal and muted olive system.
3. Use sentence-case headings.
4. Keep projects ahead of long biography content.
5. Prefer reusable Astro components.
6. Keep content data separate from display components where practical.
7. Avoid inventing project facts, credentials, metrics, or links.
8. Preserve accessibility.
9. Avoid adding animation unless it improves clarity.
10. Avoid new dependencies unless justified.
11. Avoid React unless a feature genuinely requires it.
12. Avoid Bootstrap and Tailwind unless the project explicitly changes direction.
13. Keep JavaScript minimal.
14. Use semantic HTML.
15. Keep layouts responsive.
16. Document intentional deviations.
17. Treat the Taste skill as a design critique and refinement layer, not as a replacement for this design system.
18. When Taste conflicts with this file, follow this file.
19. Do not edit or rewrite `design.md` unless the user explicitly requests it.
20. Use CSS transitions and animations for the initial version; do not add an animation library without approval.
21. Keep the initial version dark-theme only. Do not add a theme switcher unless explicitly requested.
22. Before making a major visual change, review the relevant rules in this file.

If a generated suggestion conflicts with this file, follow this file.

# 25. Taste Skill Review

Use the Taste skill after a stable visual implementation exists.

Review:

- visual hierarchy;
- composition;
- typography;
- spacing and rhythm;
- interaction quality;
- responsive behavior;
- accessibility;
- visual originality;
- whether the interface looks generically AI-generated.

Taste recommendations should be evaluated against this file before implementation.

Do not adopt a Taste recommendation when it would:

- replace the muted olive visual identity;
- introduce excessive animation;
- reduce recruiter scanability;
- hide content behind interaction;
- add unnecessary dependencies;
- conflict with accessibility requirements.

Record meaningful recommendations that are accepted or rejected in:

`docs/design-decisions.md`

# 26. Component Guidance

Recommended reusable components:

- `SiteHeader.astro`
- `SiteFooter.astro`
- `Hero.astro`
- `SectionHeading.astro`
- `ProjectCard.astro`
- `ProjectGrid.astro`
- `SkillGroup.astro`
- `CertificationCard.astro`
- `ContactCTA.astro`
- `ButtonLink.astro`
- `TagList.astro`
- `ProjectHero.astro`
- `ProjectSection.astro`

Recommended data files:

- `src/data/projects.ts`
- `src/data/skills.ts`
- `src/data/certifications.ts`

Do not over-componentize trivial one-line elements.

# 27. Design QA Checklist

Before a page is considered complete, verify:

- the recruiter scan goal is met;
- project information is easy to find;
- the page works on mobile;
- no horizontal overflow exists;
- text contrast is sufficient;
- focus states are visible;
- motion is restrained;
- headings use sentence case;
- card borders and radii are consistent;
- spacing follows the system;
- no facts were invented;
- calls to action are clear;
- images have appropriate alt text;
- the layout still works with reduced motion.

# 28. Do and Don’t Summary

## Do

- lead with business problems;
- show real work;
- use clean borders;
- use generous spacing;
- keep copy concise;
- make contact actions visible;
- use muted olive intentionally;
- preserve recruiter scanability;
- use responsive layouts;
- maintain accessibility.

## Don’t

- use a custom cursor;
- add mouse glow;
- use neon lime;
- rely on horizontal project scrolling;
- pulse buttons;
- add giant watermark text;
- use all caps for long headings;
- add skill percentages;
- use excessive gradients;
- hide key content behind hover;
- invent results;
- add unnecessary framework complexity.

# 29. Source of Truth

This file controls the portfolio’s visual system and interaction direction.

Priority order:

1. factual project documentation;
2. this `design.md`;
3. repository-level instructions such as `AGENTS.md`;
4. relevant installed or repository-local `SKILL.md` files;
5. individual implementation prompts;
6. generic design or coding suggestions.

The Taste skill is a review and refinement layer. It must not override explicit decisions in this file.

Any intentional global deviation should be documented in:

`docs/design-decisions.md`
