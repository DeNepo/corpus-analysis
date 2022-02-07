import { writeFile } from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

import jsYaml from 'js-yaml';

import { javascriptAnalysis } from './javascript/analysis.js';

import { processArgs } from '../lib/process-args.js';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// --- parse parameterized CLI args ---
const args = processArgs(process.argv);

if (!args.corpus) {
  console.log(':( no good, gotta pass in a corpus=something argument');
  process.exit(0);
}

if (args.language && args.language !== 'javascript') {
  console.log('nope, only JavaScript for now');
  process.exit(0);
}

// --- declare data and output paths ---
const CORPUS_PATH = path.join(__dirname, '..', '.corpora', args.corpus);
const ANALYSIS_PATH = path.join(__dirname, 'results', args.corpus + '.yml');

// --- do the analysis ---

const results = await javascriptAnalysis(CORPUS_PATH);

// --- save the results (assumes they are valid JSON) ---

const yamlResults = jsYaml.dump(results);
await writeFile(ANALYSIS_PATH, yamlResults, { recursive: true });
