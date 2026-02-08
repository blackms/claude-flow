# Wave 2 Entrypoints Inventory (2026-02-06)

## Baseline Metadata
- Commit: `52424f45a798dc4bef404eb235d0eeca3adfbafa`
- Branch status: `## codex/docs-truth-sync-20260206...fork/codex/docs-truth-sync-20260206`
- GH auth: `blackms` authenticated (`gh auth status`)

## Runtime Package Entrypoints

### V2 package (`/Users/alessiorocchi/Projects/claude-flow/v2/package.json`)
- `main`: `cli.mjs` (missing on disk)
- `bin.claude-flow`: `bin/claude-flow.js` (exists)
- high-signal scripts:
  - `dev` -> `node --experimental-wasm-modules src/cli/main.ts`
  - `start` -> `node server.js` (missing on disk)
  - `init:neural` -> `node scripts/init-neural.js` (missing on disk)
  - `init:goal` -> `node scripts/init-goal.js` (missing on disk)
  - `diagnostics` -> dynamic import `./dist/monitoring/diagnostics.js` (dist missing)
  - `health-check` -> dynamic import `./dist/monitoring/health-check.js` (dist missing)

### Verified runtime failures
- `/Users/alessiorocchi/Projects/claude-flow/reports/dead-code/2026-02-06/wave-2/raw/v2-missing-script-checks.txt`
  - `npm run start` -> `MODULE_NOT_FOUND` (`v2/server.js`)
  - `npm run init:neural` -> `MODULE_NOT_FOUND` (`v2/scripts/init-neural.js`)
  - `npm run init:goal` -> `MODULE_NOT_FOUND` (`v2/scripts/init-goal.js`)
  - `npm run coverage` -> missing script
  - `npm run test:features:coverage` -> missing script
- `/Users/alessiorocchi/Projects/claude-flow/reports/dead-code/2026-02-06/wave-2/raw/v2-runtime-checks.txt`
  - `npm run dev -- --help` -> `ERR_MODULE_NOT_FOUND` (`src/cli/cli-core.js` from TS entry)
  - `npm run diagnostics` -> missing `dist/monitoring/diagnostics.js`
  - `npm run health-check` -> missing `dist/monitoring/health-check.js`

### Publish/package surface inconsistencies
- `/Users/alessiorocchi/Projects/claude-flow/reports/dead-code/2026-02-06/wave-2/raw/v2-package-surface-existence.json`
  - missing: `main=cli.mjs`, `cli.js`, multiple `bin/claude-flow-*` wrappers, `dist/`, `DOCKER_TEST_REPORT.md`
- `/Users/alessiorocchi/Projects/claude-flow/reports/dead-code/2026-02-06/wave-2/raw/v2-missing-script-checks.txt`
  - `npm pack --dry-run` succeeds while including many legacy/archival artifacts; tarball size ~5.2 MB, unpacked ~24.6 MB, ~4930 files

## Container / Test Entrypoints
- `/Users/alessiorocchi/Projects/claude-flow/v2/docker/Dockerfile.test`
  - line 20 runs `npm run test:features:coverage` (script missing)
- `/Users/alessiorocchi/Projects/claude-flow/v2/tests/docker/docker-compose.test.yml`
  - references `tests/docker/Dockerfile.test`
- `/Users/alessiorocchi/Projects/claude-flow/v2/bin/verification-integration.js`
  - line 303 invokes `npm run coverage` (script missing)
- `/Users/alessiorocchi/Projects/claude-flow/v2/src/cli/simple-commands/verification-integration.js`
  - line 303 duplicates the same missing script invocation

## Legacy/Doc Entrypoints with stale script contracts
- `/Users/alessiorocchi/Projects/claude-flow/v2/docs/AGENTIC_FLOW_INTEGRATION_REVIEW.md:218-223`
  - references `validate*`, `test:memory`, `test:coordination`, `test:hybrid` (none defined)
- `/Users/alessiorocchi/Projects/claude-flow/v2/docs/mcp-spec-2025-implementation-plan.md:1293-1308`
  - references `test:async`, `test:registry`, `test:compliance`, `registry:publish`, `start:async`, `jobs:monitor` (none defined)

## Validation Captures
- `/Users/alessiorocchi/Projects/claude-flow/reports/dead-code/2026-02-06/wave-2/raw/v2-script-target-existence.json`
- `/Users/alessiorocchi/Projects/claude-flow/reports/dead-code/2026-02-06/wave-2/raw/v2-missing-script-references.json`
- `/Users/alessiorocchi/Projects/claude-flow/reports/dead-code/2026-02-06/wave-2/raw/v2-missing-script-presence-check.txt`
- `/Users/alessiorocchi/Projects/claude-flow/reports/dead-code/2026-02-06/wave-2/raw/v2-wrapper-reference-checks.txt`
