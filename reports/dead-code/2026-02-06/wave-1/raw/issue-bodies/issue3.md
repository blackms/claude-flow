## Summary
Fix post-rollback verification steps using missing paths (`test:unit`, `dist/cli/main.js`) in rollback workflow.

## Evidence (must be code-backed)
- `.github/workflows/rollback-manager.yml:443` runs `npm run test:unit` (missing)
- `.github/workflows/rollback-manager.yml:452` runs `node dist/cli/main.js` (path missing)
- Missing-path proof in `reports/dead-code/2026-02-06/wave-1/raw/missing-script-checks.txt`

## Adversarial Review
- Defense result: `LIKELY_DEAD`
- Counter-evidence: none showing these current paths succeed.

## Proposed Change
- [ ] Replace missing test command with valid target
- [ ] Replace CLI verification path with existing binary/entrypoint

## Safeguards / Tests
- [ ] Execute rollback smoke command sequence in branch
- [ ] Confirm rollback flow still blocks on real failures

## Acceptance Criteria
- [ ] No missing-script/path calls in post-rollback verification
- [ ] CLI verification executes existing artifact

## Rollback Plan
Revert post-rollback-verification block.

## Candidate IDs
- DC-ci-008

## Estimate
- M

## Dependencies
- Depends on root/CI script cleanup issue
