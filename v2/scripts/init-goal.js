#!/usr/bin/env node

import { goalCommand } from '../src/cli/simple-commands/goal.js';

function parseFlags(argv) {
  const flags = {};

  for (let i = 0; i < argv.length; i += 1) {
    const arg = argv[i];

    if (arg === '--force' || arg === '-f') {
      flags.force = true;
      continue;
    }

    if ((arg === '--target' || arg === '-t') && argv[i + 1]) {
      flags.target = argv[i + 1];
      i += 1;
    }
  }

  return flags;
}

const flags = parseFlags(process.argv.slice(2));
await goalCommand(['init'], flags);
