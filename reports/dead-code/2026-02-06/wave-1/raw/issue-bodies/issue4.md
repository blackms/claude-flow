## Summary
Deprecate permissive placeholder assertions in MCP docker-regression script and replace with strict checks.

## Evidence (must be code-backed)
- Script uses permissive fallback patterns (`|| echo`, `echo ... && echo ok`) in multiple check sections.
- Direct run with invalid MCP host/port still returns all tests passed.
- Evidence log: `reports/dead-code/2026-02-06/wave-1/raw/docker-regression-script-behavior.txt`

## Adversarial Review
- Defense result: `NOT_DEAD`
- Counter-evidence: script is actively referenced by runner/docs/Makefile.

## Proposed Change
- [ ] Deprecate placeholder checks in current script
- [ ] Replace with strict JSON-RPC and tool-response assertions
- [ ] Add negative test that fails when MCP server is down

## Safeguards / Tests
- [ ] Characterization test for current behavior
- [ ] New strict test should fail on invalid MCP endpoint

## Acceptance Criteria
- [ ] Script fails when MCP server unavailable
- [ ] Script passes only with valid tool behavior

## Rollback Plan
Keep legacy script behind env-gated fallback for one cycle.

## Candidate IDs
- DC-tests-009

## Estimate
- M
