## Summary
Fix stale publish command in V3 workflow: `pnpm publish:alpha` should call the existing `publish:v3alpha` script.

## Evidence (must be code-backed)
- `.github/workflows/v3-ci.yml:155` uses `pnpm publish:alpha`
- `v3/package.json` defines `publish:v3alpha` and no `publish:alpha`
- Missing-script execution proof in `reports/dead-code/2026-02-06/wave-1/raw/missing-script-checks.txt`

## Adversarial Review
- Defense result: `LIKELY_DEAD`
- Counter-evidence: none found for `publish:alpha` in V3 package scripts.

## Proposed Change
- [ ] Replace `pnpm publish:alpha` with `pnpm publish:v3alpha`
- [ ] Keep existing release tag behavior

## Safeguards / Tests
- [ ] Run publish dry-run command in V3 shell context

## Acceptance Criteria
- [ ] Publish job calls an existing script
- [ ] `v3alpha` tag semantics preserved

## Rollback Plan
Revert single workflow command line.

## Candidate IDs
- DC-ci-007

## Estimate
- XS
