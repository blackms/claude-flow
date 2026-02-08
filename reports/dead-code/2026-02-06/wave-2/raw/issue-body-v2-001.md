## Summary
Clean up broken v2 package contract surfaces where runtime/publish metadata points to missing artifacts (`main`, `start`, and stale `files[]` entries).

## Evidence (must be code-backed)
- No references found:
  - `/Users/alessiorocchi/Projects/claude-flow/v2/package.json:6` (`main: cli.mjs`) where `cli.mjs` does not exist.
  - `/Users/alessiorocchi/Projects/claude-flow/v2/package.json:13` (`start: node server.js`) where `server.js` does not exist.
  - `/Users/alessiorocchi/Projects/claude-flow/v2/package.json:97-118` includes missing paths (`cli.js`, multiple `bin/claude-flow-*`, `dist/`, `DOCKER_TEST_REPORT.md`).
- Not reachable from entrypoints:
  - `/Users/alessiorocchi/Projects/claude-flow/reports/dead-code/2026-02-06/wave-2/raw/v2-missing-script-checks.txt` shows `npm run start` fails with `MODULE_NOT_FOUND`.
- Config/flags:
  - `/Users/alessiorocchi/Projects/claude-flow/reports/dead-code/2026-02-06/wave-2/raw/v2-package-surface-existence.json`
  - `/Users/alessiorocchi/Projects/claude-flow/reports/dead-code/2026-02-06/wave-2/raw/v2-script-target-existence.json`

## Adversarial Review
- Defense result:
  - `DC-v2-001`: `UNCERTAIN` (public `main` contract may have external consumers)
  - `DC-v2-002`: `LIKELY_DEAD`
  - `DC-v2-005`: `UNCERTAIN` (some files may be release-generated)
- Counter-evidence:
  - `npm pack --dry-run` still succeeds; contract cleanup must be staged to avoid packaging regressions.

## Proposed Change
- [ ] Deprecate `main` contract change path with explicit release note.
- [ ] Remove or replace broken `start` script path.
- [ ] Prune stale `files[]` entries or ensure they are generated before pack.
- [ ] Update related docs/changelog notes.

## Safeguards / Tests
- [ ] Add characterization tests (if needed): packed artifact import smoke check.
- [ ] Run test suite: `cd v2 && npm run test -- --runInBand` (or targeted equivalent).
- [ ] Smoke check:
  - `cd v2 && npm pack --dry-run`
  - `cd v2 && npm run start` (expected changed behavior documented)

## Acceptance Criteria
- [ ] Package metadata no longer points to missing artifacts without deprecation context.
- [ ] Tests/build behavior is not worse than baseline for impacted surfaces.
- [ ] No stale references remain in package contract fields.
- [ ] Docs/configs updated accordingly.
- [ ] No behavior regression in core CLI flow (`bin/claude-flow.js`).

## Dependencies
- Upstream dependency: none.
- Downstream: issue for neural/goal init consolidation should follow this.

## Estimate
- `M`

## Rollback Plan
Revert package metadata changes in one commit and republish patch if contract breakages are detected.
