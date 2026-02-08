# MCP Wrapper Entrypoints Deprecation (v2)

## Summary

This note records the investigation outcome for legacy MCP wrapper entrypoints in v2 and defines the deprecate-first path.

## Investigated Files

- `src/mcp/server-with-wrapper.ts`
- `src/mcp/server-wrapper-mode.ts`
- `src/mcp/integrate-wrapper.ts`

## Evidence

1. `v2/package.json` exposes only one binary:
   - `bin.claude-flow -> bin/claude-flow.js`
2. `v2/package.json` has no script/bin wiring to the wrapper entrypoint files above.
3. Reference scan across `v2/src`, `v2/bin`, `v2/scripts`, and `v2/docs` found no package-wired invocation path for those files.
4. Supported startup path is documented and wired via CLI command flow:
   - `claude-flow mcp start`

## Classification

- `server-with-wrapper.ts`: `DEPRECATE`
- `server-wrapper-mode.ts`: `DEPRECATE`
- `integrate-wrapper.ts`: `DEPRECATE`

Rationale: they are not reachable through package entrypoints, but external manual invocation cannot be disproven.

## Action Taken

1. Added explicit runtime deprecation notices in all three files.
2. Added `@deprecated` file-level annotations.
3. Documented supported contract in `src/mcp/README.md`.

## Removal Plan (Staged)

1. Keep deprecated files through v2 patch line with warnings.
2. Track for external usage signals (issues, release feedback, support tickets).
3. Remove in the next major version if no usage evidence appears.
