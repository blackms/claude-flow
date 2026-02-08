## Summary
Fix v2 verification/container dead script invocations that currently call undefined npm scripts (`test:features:coverage`, `coverage`).

## Evidence (must be code-backed)
- No references found:
  - `/Users/alessiorocchi/Projects/claude-flow/v2/docker/Dockerfile.test:20` runs `npm run test:features:coverage` (missing).
  - `/Users/alessiorocchi/Projects/claude-flow/v2/bin/verification-integration.js:303` runs `npm run coverage` (missing).
  - `/Users/alessiorocchi/Projects/claude-flow/v2/src/cli/simple-commands/verification-integration.js:303` duplicates same missing invocation.
- Not reachable from entrypoints:
  - `/Users/alessiorocchi/Projects/claude-flow/reports/dead-code/2026-02-06/wave-2/raw/v2-missing-script-checks.txt` shows both scripts missing.
- Config/flags:
  - `/Users/alessiorocchi/Projects/claude-flow/v2/package.json` defines `test:coverage` but not `coverage` / `test:features:coverage`.

## Adversarial Review
- Defense result:
  - `DC-v2-006`: `LIKELY_DEAD`
  - `DC-v2-007`: `LIKELY_DEAD`
- Counter-evidence:
  - These surfaces are intended verification paths; cleanup must preserve equivalent signal with valid scripts.

## Proposed Change
- [ ] Replace `test:features:coverage` with existing coverage script(s).
- [ ] Replace `npm run coverage` with `npm run test:coverage` (or introduce explicit alias with justification).
- [ ] Keep parsing/threshold behavior intact after command replacement.

## Safeguards / Tests
- [ ] Add characterization tests (if needed): verification output parser for coverage extraction.
- [ ] Run test suite: targeted verification and docker test scripts.
- [ ] Smoke check:
  - `cd v2 && npm run test:coverage -- --help`
  - `cd v2 && docker build -f docker/Dockerfile.test .` (or CI equivalent)

## Acceptance Criteria
- [ ] Verification and docker surfaces invoke only defined scripts.
- [ ] Tests/build outcomes are not worse than baseline.
- [ ] No stale script aliases remain.
- [ ] Docs/configs updated accordingly.
- [ ] No regression in verification core flows.

## Dependencies
- Independent.

## Estimate
- `S`

## Rollback Plan
Revert command substitutions in Dockerfile/verification files and restore previous behavior while adding explicit aliases.
