# Wave 1 Routing / Handler Map (2026-02-06)

## CLI Command Registration
Source: `/Users/alessiorocchi/Projects/claude-flow/v3/@claude-flow/cli/src/commands/index.ts`

### Loader registry (`commandLoaders`)
- Core: `init`, `start`, `status`, `task`, `session`
- Runtime/control: `agent`, `swarm`, `memory`, `mcp`, `config`, `migrate`, `hooks`, `workflow`, `hive-mind`, `process`, `daemon`
- Advanced: `neural`, `security`, `performance`, `providers`, `plugins`, `deployment`, `claims`
- Utility/analysis: `embeddings`, `completions`, `doctor`, `analyze`, `route`, `progress`, `issues`, `update`, `ruvector`, `benchmark`, `guidance`

### Synchronous core commands in `commands[]`
- `init`, `start`, `status`, `task`, `session`, `agent`, `swarm`, `memory`, `mcp`, `hooks`, `daemon`, `doctor`, `embeddings`, `neural`, `performance`, `security`, `ruvector`, `hive-mind`, `guidance`

### Dynamic command resolution surface
- `getCommand(name)` returns cached/registered command
- `getCommandAsync(name)` lazy-loads via `commandLoaders`
- alias routing via `commandRegistry`

## MCP Tool Registration
Source: `/Users/alessiorocchi/Projects/claude-flow/v3/mcp/tools/index.ts`

### Aggregated tool groups in `getAllTools(includeV2Compat=true)`
- `agentTools`
- `swarmTools`
- `memoryTools`
- `configTools`
- `hooksTools`
- `taskTools`
- `systemTools`
- `sessionTools`
- `workerTools`
- `sonaTools`
- `federationTools`
- optional `v2CompatTools`

### Lookup/routing APIs
- `getV3Tools()`
- `getToolsByCategory(category)`
- `getToolByName(name)`
- `getToolsByTag(tag)`
- `validateToolRegistration()`

## Plugin Extension Surfaces

### CLI plugin store
Source: `/Users/alessiorocchi/Projects/claude-flow/v3/@claude-flow/cli/src/plugins/store/index.ts`
- Discovery path: `PluginDiscoveryService.discoverRegistry(...)`
- Registry-backed handlers: `searchPlugins`, `getPlugin`, `getSimilarPlugins`, featured/official/trending/newest

### CLI plugin manager
Source: `/Users/alessiorocchi/Projects/claude-flow/v3/@claude-flow/cli/src/plugins/manager.ts`
- Lifecycle: install (npm/local), uninstall, enable/disable, manifest persistence

## Docker Regression Harness Routing
Source: `/Users/alessiorocchi/Projects/claude-flow/tests/docker-regression/scripts/run-all-tests.sh`
- Category routes include:
  - `test-cli-commands.sh`
  - `test-mcp-server.sh`
  - `test-agents.sh`
  - `test-swarm.sh`
  - `test-hooks.sh`
  - `test-plugins.sh`
  - `test-security.sh`
  - `test-memory.sh`
  - `test-workers.sh`
  - `test-performance.sh`
  - `run-unit-tests.sh`
  - `run-integration-tests.sh`
