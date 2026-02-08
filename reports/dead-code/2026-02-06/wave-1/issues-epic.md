# Epic: Dead Code Cleanup Wave 1 (Runtime + CI Surfaces)

## Theme
Remove non-functional script/config/workflow paths first, then deprecate risky test and public contract surfaces.

## Included Candidate Groups

### Group A: Root script and CI mismatch cleanup (quick wins)
- DC-root-001
- DC-root-002
- DC-ci-003
- DC-ci-004
- DC-ci-005
- DC-ci-006
- DC-ci-007
- DC-ci-008

### Group B: Regression harness deprecation and hardening
- DC-tests-009
- DC-tests-010

### Group C: Public contract and manual tooling uncertainty
- DC-root-011
- DC-v3-013

## Excluded (KEEP)
- DC-v3-012 (neural src JS artifacts proven in active source imports)

## Wave 1 Acceptance Gate
- Build/typecheck signal is not worse than current baseline for impacted area.
- Workflow steps no longer reference missing scripts.
- Regression scripts fail when target behavior is unavailable.
- Candidate-to-issue mapping and dependencies are documented.
