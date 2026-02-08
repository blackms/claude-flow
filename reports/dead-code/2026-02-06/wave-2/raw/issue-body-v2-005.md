## Summary
Investigate potentially dead v2 MCP wrapper entrypoint files and define deprecate-first path if they are not externally used.

## Evidence (must be code-backed)
- No references found:
  - Candidate files:
    - `/Users/alessiorocchi/Projects/claude-flow/v2/src/mcp/server-with-wrapper.ts`
    - `/Users/alessiorocchi/Projects/claude-flow/v2/src/mcp/server-wrapper-mode.ts`
    - `/Users/alessiorocchi/Projects/claude-flow/v2/src/mcp/integrate-wrapper.ts`
  - `/Users/alessiorocchi/Projects/claude-flow/reports/dead-code/2026-02-06/wave-2/raw/v2-wrapper-reference-checks.txt` shows no `package.json` script/bin wiring.
- Not reachable from entrypoints:
  - `v2/package.json` exposes only `bin/claude-flow.js`.
- Config/flags:
  - wrapper mode env toggles exist (`CLAUDE_FLOW_LEGACY_MCP`, `CLAUDE_FLOW_WRAPPER_MODE`) but have no explicit script/bin route.

## Adversarial Review
- Defense result: `DC-v2-009` -> `UNCERTAIN`
- Counter-evidence:
  - Files are executable and could be used manually by external operators.

## Proposed Change
- [ ] Investigate external usage (docs/releases/automation/scripts).
- [ ] If unused, deprecate and remove in staged manner.
- [ ] If used, wire explicit script/bin path and add tests.

## Safeguards / Tests
- [ ] Add characterization tests (if needed): explicit wrapper-mode startup smoke test.
- [ ] Run test suite: targeted MCP startup checks.
- [ ] Smoke check: wrapper-mode invocation with env flags.

## Acceptance Criteria
- [ ] Usage status is proven (used or unused) with references.
- [ ] Action taken is deprecate-first if uncertainty remains.
- [ ] No MCP startup regression for supported entrypoints.

## Dependencies
- Independent.

## Estimate
- `S`

## Rollback Plan
If removal/regression occurs, restore wrapper files and add explicit entrypoint wiring.
