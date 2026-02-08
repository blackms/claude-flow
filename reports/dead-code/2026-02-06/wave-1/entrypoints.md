# Wave 1 Entrypoints Inventory (2026-02-06)

## Baseline Metadata
- Commit: `54d0ea01f25f209598a47b7b212ee0202b3928f5`
- Branch status: `## codex/docs-truth-sync-20260206...fork/codex/docs-truth-sync-20260206`
- GH auth: `blackms` authenticated (`gh auth status`)

## Runtime Package Entrypoints

### Root package (`/Users/alessiorocchi/Projects/claude-flow/package.json`)
- `main`: `dist/index.js` (missing on disk)
- `bin.claude-flow`: `./v3/@claude-flow/cli/bin/cli.js`
- scripts:
  - `dev` -> `tsx watch src/index.ts` (`src/index.ts` missing)
  - `build` -> `tsc`
  - `build:ts` -> `cd v3/@claude-flow/cli && npm run build || true`
  - `test` -> `vitest`
  - `lint` -> `cd v3/@claude-flow/cli && npm run lint || true`
  - `v3:domains` -> `npm run build:domains` (`build:domains` missing)
  - `v3:swarm` -> `npm run start:swarm` (`start:swarm` missing)

### V3 monorepo (`/Users/alessiorocchi/Projects/claude-flow/v3/package.json`)
- workspace scripts:
  - `build`, `test`, `typecheck`
  - publish scripts: `publish:dry`, `publish:v3alpha` (no `publish:alpha`)

### CLI package (`/Users/alessiorocchi/Projects/claude-flow/v3/@claude-flow/cli/package.json`)
- `bin.cli` -> `./bin/cli.js`
- `bin.claude-flow` -> `./bin/cli.js`
- `bin.claude-flow-mcp` -> `./bin/mcp-server.js`
- exports include `./ruvector`, `./mcp-tools`

## CI / Workflow Entrypoints

### Scheduled triggers (`.github/workflows/*.yml`)
- `ci.yml`: `cron: '0 2 * * *'`
- `integration-tests.yml`: `cron: '0 3 * * *'`
- `status-badges.yml`: `cron: '0 6 * * *'`

### Workflow command surfaces
- root script invocations from workflows include:
  - `npm run typecheck` (`ci.yml:43`, `verification-pipeline.yml:154`) -> missing script
  - `npm run test:coverage` (`ci.yml:81`, `verification-pipeline.yml:229`) -> missing script
  - `npm run format` (`verification-pipeline.yml:160`) -> missing script
  - `npm run test:unit` (`verification-pipeline.yml:209`, `rollback-manager.yml:443`) -> missing script
  - `npm run test:integration` (`verification-pipeline.yml:215`) -> missing script
  - `npm run test:performance` (`verification-pipeline.yml:222`) -> missing script
- v3 workflow invocation mismatch:
  - `v3-ci.yml:155` uses `pnpm publish:alpha` but `v3/package.json` only defines `publish:v3alpha`

## Script/CLI Entrypoints
- Root scripts dir: `/Users/alessiorocchi/Projects/claude-flow/scripts/*`
- Docker regression runner:
  - `tests/docker-regression/docker-compose.yml:33` -> `scripts/run-all-tests.sh`
  - `run-all-tests.sh` calls `test-cli-commands.sh` and `test-mcp-server.sh`

## Validation Captures
- Missing script execution proof:
  - `reports/dead-code/2026-02-06/wave-1/raw/missing-script-checks.txt`
- Baseline command behavior:
  - `reports/dead-code/2026-02-06/wave-1/raw/baseline-checks.txt`
- Workflow command extraction:
  - `reports/dead-code/2026-02-06/wave-1/raw/workflow-run-lines.txt`
