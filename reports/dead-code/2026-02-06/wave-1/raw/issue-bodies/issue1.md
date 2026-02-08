## Summary
Remove/replace stale root script aliases and workflow calls to missing scripts (`typecheck`, `test:coverage`, `format`, `test:unit`, `test:integration`, `test:performance`).

## Evidence (must be code-backed)
- `package.json` includes stale aliases:
  - `v3:domains -> npm run build:domains` (target missing)
  - `v3:swarm -> npm run start:swarm` (target missing)
- Workflow references to missing scripts:
  - `.github/workflows/ci.yml:43` (`npm run typecheck`)
  - `.github/workflows/ci.yml:81` (`npm run test:coverage`)
  - `.github/workflows/verification-pipeline.yml:154` (`npm run typecheck`)
  - `.github/workflows/verification-pipeline.yml:160` (`npm run format`)
  - `.github/workflows/verification-pipeline.yml:209` (`npm run test:unit`)
  - `.github/workflows/verification-pipeline.yml:215` (`npm run test:integration`)
  - `.github/workflows/verification-pipeline.yml:222` (`npm run test:performance`)
  - `.github/workflows/verification-pipeline.yml:229` (`npm run test:coverage`)
- Script execution proof:
  - `reports/dead-code/2026-02-06/wave-1/raw/missing-script-checks.txt`

## Adversarial Review
- Defense result: `LIKELY_DEAD`
- Counter-evidence: none proving successful runtime usage of missing script names.

## Proposed Change
- [ ] Remove stale aliases `v3:domains`, `v3:swarm` or repoint to valid scripts
- [ ] Replace missing workflow commands with valid package-scoped checks
- [ ] Update docs/config references

## Safeguards / Tests
- [ ] Baseline vs new command-set comparison (`reports/dead-code/2026-02-06/wave-1/raw/baseline-checks.txt`)
- [ ] Run impacted command bundles locally

## Acceptance Criteria
- [ ] No workflow references to missing scripts
- [ ] CI commands execute existing scripts
- [ ] Search confirms stale aliases removed/repointed
- [ ] No regression in core flows beyond existing baseline failures

## Rollback Plan
Revert workflow/script-table cleanup commit.

## Candidate IDs
- DC-root-001
- DC-root-002
- DC-ci-003
- DC-ci-004
- DC-ci-005
- DC-ci-006

## Estimate
- M
