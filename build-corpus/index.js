import { exec } from 'child_process';
import { dirname } from 'path';
import { fileURLToPath } from 'url';
import { promisify } from 'util';

import { processArgs } from '../lib/process-args.js';

// --- make useful things ---

const execPromise = promisify(exec);

const __dirname = dirname(fileURLToPath(import.meta.url));

// --- gather and validate input ---

const { language, count = 25 } = processArgs(process.argv);

if (!language) {
  console.log('nope, gotta pass a language=something');
  process.exit(0);
}

// --- do the things ---

console.log('- grabbing repo URLs');
await execPromise(`node ./grab-repos.js language=${language} count=${count}`, {
  cwd: __dirname,
});

console.log('- cloning repos');
await execPromise(`node ./clone-repos.js language=${language} count=${count}`, {
  cwd: __dirname,
});
