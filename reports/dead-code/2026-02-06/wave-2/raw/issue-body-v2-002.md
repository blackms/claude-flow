## Summary
Consolidate v2 `neural init` and `goal init` routes by removing dead import/script paths that target missing `scripts/init-*.js` files.

## Evidence (must be code-backed)
- No references found:
  - `/Users/alessiorocchi/Projects/claude-flow/v2/src/cli/commands/index.ts:81` imports `../../scripts/init-neural.js` (missing).
  - `/Users/alessiorocchi/Projects/claude-flow/v2/src/cli/commands/index.ts:115` imports `../../scripts/init-goal.js` (missing).
  - `/Users/alessiorocchi/Projects/claude-flow/v2/package.json:14-15` scripts `init:neural` / `init:goal` target missing files.
- Not reachable from entrypoints:
  - `/Users/alessiorocchi/Projects/claude-flow/reports/dead-code/2026-02-06/wave-2/raw/v2-missing-script-checks.txt` shows both scripts fail with `MODULE_NOT_FOUND`.
- Config/flags:
  - `/Users/alessiorocchi/Projects/claude-flow/v2/src/cli/command-registry.js:685-712` still advertises `neural init` / `goal init` examples.

## Adversarial Review
- Defense result:
  - `DC-v2-003`: `LIKELY_DEAD` (path dead, feature intended)
  - `DC-v2-004`: `LIKELY_DEAD` (path dead, feature intended)
- Counter-evidence:
  - Public command UX still documents these flows; deletion must preserve/replace behavior.

## Proposed Change
- [ ] Replace dead import paths with valid implementation modules.
- [ ] Remove stale package script aliases or repoint to working entrypoints.
- [ ] Keep command names (`neural init`, `goal init`) functional.
- [ ] Add explicit regression coverage for both commands.

## Safeguards / Tests
- [ ] Add characterization tests (if needed): command path resolution tests for both subcommands.
- [ ] Run test suite: `cd v2 && npm run test:cli` (or targeted tests).
- [ ] Smoke check:
  - `cd v2 && node bin/claude-flow.js neural init --help`
  - `cd v2 && node bin/claude-flow.js goal init --help`

## Acceptance Criteria
- [ ] No imports/scripts point to missing `scripts/init-neural.js` or `scripts/init-goal.js`.
- [ ] Command help and execution paths are functional.
- [ ] No stale references remain.
- [ ] Docs/configs updated accordingly.
- [ ] No regressions in core flows.

## Dependencies
- Depends on package-contract cleanup issue for deprecation framing.

## Estimate
- `M`

## Rollback Plan
Restore prior import/script paths and ship a compatibility shim while fixes are reworked.
