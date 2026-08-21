# Phase audit

Before approving a completed phase for commit, perform a **read-only phase audit**.

Do not make changes during the audit.

## Audit scope

First identify:

- the phase number;
- the phase name;
- the requirements assigned to that phase;
- the files changed specifically for that phase.

Review the **phase-specific diff** rather than treating the entire repository as newly implemented work.

Then review the completed phase against:

- the assigned phase requirements;
- `design.md`;
- `AGENTS.md`;
- any relevant `SKILL.md` instructions;
- accessibility requirements;
- responsive-design requirements where applicable;
- factual/content safeguards;
- the current repository documentation.

Treat verified factual documentation as authoritative for portfolio facts. Do not infer, embellish, or invent missing project details, credentials, metrics, outcomes, links, dates, technologies, or personal information.

If work from an earlier phase appears in the diff only because of documentation maintenance or another justified dependency, distinguish that from work actually implemented during the phase being audited.

## Validation

Run the repository-supported validation commands relevant to the completed phase.

At minimum, when applicable, run:

```powershell
node --version
pnpm --version
pnpm install --frozen-lockfile
pnpm check
pnpm build

$env:SITE_URL="https://jeremymshull.github.io"
$env:BASE_PATH="/Portfolio-Website"
pnpm build

git diff --check
git status --short
git diff
```

The GitHub Pages URL above is for production/base-path validation only. Do not treat it as the confirmed production URL unless repository documentation explicitly establishes that.

Run any additional diagnostics required by the phase, `AGENTS.md`, or relevant skills.

Do not claim a validation passed unless you actually ran it successfully.

## Report

Return the audit using this structure:

### Phase audited

State the phase number and name.

### 1. What is complete

Identify requirements that are implemented correctly and validated.

### 2. What is incomplete

Identify missing requirements, unfinished work, placeholders, or validation still required.

Distinguish intentional deferred content from implementation defects.

### 3. Work that exceeded phase scope

Identify implementation that belongs to later phases or was otherwise unnecessary for this phase.

Do not flag small, justified documentation maintenance as scope creep without explaining why it is problematic.

### 4. Invented or unverified content

Check for any unsupported:

- project facts;
- metrics or outcomes;
- credentials;
- dates;
- technologies;
- links;
- classifications;
- personal information;
- deployment claims.

If none are found, state that clearly.

### 5. Unnecessary dependencies, files, or folders

Identify:

- unnecessary packages;
- unexplained new files;
- redundant folders;
- generated artifacts that should not be committed;
- architectural complexity not justified by the phase.

### 6. Accessibility or responsive issues

Report issues introduced or exposed by this phase.

Where applicable, review:

- semantic structure;
- keyboard accessibility;
- focus states;
- heading hierarchy;
- image alt text;
- color contrast;
- responsive layout;
- horizontal overflow;
- reduced-motion behavior;
- tap-target usability.

Clearly distinguish automated checks from manual pre-launch checks.

### 7. Documentation needing updates

Identify documentation that is:

- inaccurate;
- stale;
- inconsistent with the implementation;
- missing an important architectural decision;
- claiming work that has not actually been completed.

Prefer the smallest documentation correction necessary.

### 8. Validation results

List the relevant commands that were run and whether each succeeded.

Include any warnings or limitations that matter to commit readiness.

### 9. Recommendation

Use exactly one of:

- `READY TO COMMIT`
- `READY AFTER MINOR FIXES`
- `NOT READY`

Do not recommend `READY TO COMMIT` unless:

- the assigned phase requirements are satisfied;
- no material scope or factual-integrity problems remain;
- the production build succeeds;
- the repository-subpath production build succeeds when applicable;
- relevant diagnostics pass;
- `git diff --check` passes;
- no unresolved issue would make the commit misleading or unstable.

If the recommendation is `READY AFTER MINOR FIXES` or `NOT READY`, give a concise list of the specific changes required before committing.

## Important

This audit is **read-only**.

Do not edit files, install new dependencies, remove files, reformat code, update documentation, or commit changes during the audit.

Report findings first and wait for a separate instruction before making fixes.
