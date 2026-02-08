## Summary
Deprecate permissive fallback assertions in docker-regression CLI script and replace with deterministic checks.

## Evidence (must be code-backed)
- Script uses wide `|| echo ...` fallback across command assertions.
- Current run reports full pass with low strictness.
- Evidence log: `reports/dead-code/2026-02-06/wave-1/raw/docker-regression-script-behavior.txt`

## Adversarial Review
- Defense result: `NOT_DEAD`
- Counter-evidence: script is actively referenced by runner/docs/Makefile.

## Proposed Change
- [ ] Replace fallback-only checks with strict assertions
- [ ] Add failure-injection test to prove non-zero behavior

## Safeguards / Tests
- [ ] Add known-fail command fixture

## Acceptance Criteria
- [ ] Script fails on invalid CLI behavior
- [ ] Script no longer masks failures via fallback echo

## Rollback Plan
Retain legacy script name as temporary alias if needed.

## Candidate IDs
- DC-tests-010

## Estimate
- M
