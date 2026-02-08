# Wave 2 Routing / Handler Map (2026-02-06)

## CLI Routing Surfaces

### TypeScript CLI bootstrap
Source: `/Users/alessiorocchi/Projects/claude-flow/v2/src/cli/main.ts`
- `main()` builds CLI via `setupCommands(cli)` and executes `cli.run()`.

### Command registration with broken init import targets
Source: `/Users/alessiorocchi/Projects/claude-flow/v2/src/cli/commands/index.ts`
- `neural init` route imports `../../scripts/init-neural.js` (missing)
- `goal init` route imports `../../scripts/init-goal.js` (missing)

### Active runtime command registry (simple-commands)
Source: `/Users/alessiorocchi/Projects/claude-flow/v2/src/cli/command-registry.js`
- public command surfaces include `neural` and `goal` via `simple-commands` handlers
- registry examples still advertise `neural init` and `goal init`

## MCP Routing Surfaces

### MCP export surface
Source: `/Users/alessiorocchi/Projects/claude-flow/v2/src/mcp/index.ts`
- exports core server, protocol, registry, and loader surfaces
- serves as top-level MCP integration entrypoint for v2 TS source

### Dynamic tool registration path
Source: `/Users/alessiorocchi/Projects/claude-flow/v2/src/mcp/tool-registry-progressive.ts`
- integrates `DynamicToolLoader` and lazy tool loading

Source: `/Users/alessiorocchi/Projects/claude-flow/v2/src/mcp/tools/loader.ts`
- scans category directories and imports tool metadata
- excludes underscore-prefixed tool files (`!f.startsWith('_')`)
- implication: `tools/_template.ts` is intentionally non-runtime template surface

### Wrapper/alternate MCP entrypoint files
Sources:
- `/Users/alessiorocchi/Projects/claude-flow/v2/src/mcp/server-with-wrapper.ts`
- `/Users/alessiorocchi/Projects/claude-flow/v2/src/mcp/server-wrapper-mode.ts`
- `/Users/alessiorocchi/Projects/claude-flow/v2/src/mcp/integrate-wrapper.ts`

Observed route signals:
- no package `bin` or script wiring to these files
- only self/adjacent references to `CLAUDE_FLOW_LEGACY_MCP` / `CLAUDE_FLOW_WRAPPER_MODE`

## Verification / Container Routing

### Docker test route
Source: `/Users/alessiorocchi/Projects/claude-flow/v2/docker/Dockerfile.test`
- executes `npm run test:features:coverage` (undefined script)

### Verification middleware route
Sources:
- `/Users/alessiorocchi/Projects/claude-flow/v2/bin/verification-integration.js`
- `/Users/alessiorocchi/Projects/claude-flow/v2/src/cli/simple-commands/verification-integration.js`

Both execute:
- `npm run coverage 2>&1 || true` (undefined script, dead check path)

## Test Reachability Defense (for false-positive control)
Source: `/Users/alessiorocchi/Projects/claude-flow/v2/jest.config.js`
- `testMatch` includes `<rootDir>/src/**/*.test.ts`
- therefore `/Users/alessiorocchi/Projects/claude-flow/v2/src/mcp/tests/mcp-integration.test.ts` is reachable via `npm test`
