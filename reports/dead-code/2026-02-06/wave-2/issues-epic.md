# Epic: Dead Code Cleanup Wave 2 (V2 Legacy + Archive Surfaces)

## Theme
Stabilize v2 by removing non-functional script/verification paths and correcting stale package/docs contracts while preserving externally risky surfaces via deprecation or investigation.

## Included Candidate Groups

### Group A: Package contract and runtime script cleanup
- DC-v2-001
- DC-v2-002
- DC-v2-005

### Group B: Broken init path consolidation
- DC-v2-003
- DC-v2-004

### Group C: Verification/docker dead command paths
- DC-v2-006
- DC-v2-007

### Group D: Stale documentation command snippets
- DC-v2-008

### Group E: Uncertain wrapper entrypoint investigation
- DC-v2-009

## Excluded (KEEP)
- DC-v2-010 (dynamic MCP `system/status` tool)
- DC-v2-011 (Jest-reachable MCP integration tests)
- DC-v2-012 (intentional `_template` scaffold)

## Wave 2 Acceptance Gate
- No unresolved `npm run` references to undefined scripts in selected v2 runtime/docs surfaces.
- v2 package contract changes for `main`/`files` handled via deprecate-first where externally risky.
- Docker/verification paths use existing script names and execute meaningful checks.
- Candidate-to-issue mapping and issue dependency graph are documented.
