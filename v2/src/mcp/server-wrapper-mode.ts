#!/usr/bin/env node
/**
 * Claude-Flow MCP Server - Wrapper Mode
 *
 * @deprecated Internal MCP wrapper entrypoint.
 * Not wired through the v2 package `bin`/`scripts` contract.
 * Use `claude-flow mcp start` for supported startup.
 */

import { ClaudeCodeMCPWrapper } from './claude-code-wrapper.js';

// Check if running as wrapper mode
const isWrapperMode =
  process.env.CLAUDE_FLOW_WRAPPER_MODE === 'true' || process.argv.includes('--wrapper');

const DEPRECATION_NOTICE =
  '[DEPRECATED] src/mcp/server-wrapper-mode.ts is an internal legacy entrypoint. Use `claude-flow mcp start` instead.';

async function main() {
  console.error(DEPRECATION_NOTICE);

  if (isWrapperMode) {
    console.error('Starting Claude-Flow MCP in wrapper mode...');
    const wrapper = new ClaudeCodeMCPWrapper();
    await wrapper.run();
  } else {
    // Fall back to original server
    console.error('Starting Claude-Flow MCP in direct mode...');
    const { runMCPServer } = await import('./server.js');
    await runMCPServer();
  }
}

main().catch((error) => {
  console.error('Fatal error:', error);
  process.exit(1);
});
