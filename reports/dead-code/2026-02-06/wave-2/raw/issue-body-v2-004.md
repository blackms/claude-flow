## Summary
Remove or rewrite stale v2 documentation command snippets that reference non-existent npm scripts.

## Evidence (must be code-backed)
- No references found:
  - `/Users/alessiorocchi/Projects/claude-flow/v2/docs/AGENTIC_FLOW_INTEGRATION_REVIEW.md:218-223` references `validate*`, `test:memory`, `test:coordination`, `test:hybrid`.
  - `/Users/alessiorocchi/Projects/claude-flow/v2/docs/mcp-spec-2025-implementation-plan.md:1293-1308` references `test:async`, `test:registry`, `test:compliance`, `registry:publish`, `start:async`, `jobs:monitor`.
- Not reachable from entrypoints:
  - `/Users/alessiorocchi/Projects/claude-flow/reports/dead-code/2026-02-06/wave-2/raw/v2-missing-script-presence-check.txt` marks all of the above scripts `false`.
- Config/flags:
  - Current script map is in `/Users/alessiorocchi/Projects/claude-flow/v2/package.json`.

## Adversarial Review
- Defense result: `DC-v2-008` -> `LIKELY_DEAD`
- Counter-evidence:
  - Some docs may be historical/planning artifacts and should be explicitly marked if intentionally non-runnable.

## Proposed Change
- [ ] Replace stale snippets with runnable scripts from current v2 package.
- [ ] Where content is historical, label clearly as archival/non-runnable.
- [ ] Remove misleading “copy-paste runnable” formatting for dead commands.

## Safeguards / Tests
- [ ] Add characterization tests (if needed): docs snippet script-name validator.
- [ ] Run test suite: docs lint/link checks.
- [ ] Smoke check: grep for stale script names after update.

## Acceptance Criteria
- [ ] No stale script names remain in selected docs, or are explicitly marked archival.
- [ ] Script examples align with current package scripts.
- [ ] Docs updated without introducing link/reference regressions.

## Dependencies
- Should follow script-contract decisions from package/init/verification cleanup issues.

## Estimate
- `XS`

## Rollback Plan
Revert doc edits if historical context needs verbatim preservation and add archival disclaimer sections instead.
