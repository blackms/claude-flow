## Summary
Deprecate broken root package entrypoint contract (`main` and `dev` targets) before any removal.

## Evidence (must be code-backed)
- `package.json`:
  - `main: dist/index.js` (missing)
  - `scripts.dev: tsx watch src/index.ts` (missing)
- Missing-path proof in `reports/dead-code/2026-02-06/wave-1/raw/missing-script-checks.txt`

## Adversarial Review
- Defense result: `UNCERTAIN`
- Counter-evidence: external consumers may depend on root import semantics.

## Proposed Change
- [ ] Define supported root entrypoint contract
- [ ] Deprecate/update fields accordingly
- [ ] Update docs and downstream scripts

## Safeguards / Tests
- [ ] Add explicit root package entrypoint smoke tests

## Acceptance Criteria
- [ ] Root entrypoints are valid or intentionally deprecated/removed
- [ ] Documentation matches actual contract

## Rollback Plan
Restore prior package.json entrypoint fields.

## Candidate IDs
- DC-root-011

## Estimate
- S
