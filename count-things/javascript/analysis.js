import { createJsVirDir } from './create-js-vir-dir.js';
import { analyzeVirDir } from './analyze-vir-dir.js';

// import { inlineLog } from '../lib/inline-log.js'
// const { log, trace } = inlineLog;

export const javascriptAnalysis = async (path = '') => {
  const virDir = await createJsVirDir(path);

  // add second argument to configure what you want counted?
  const result = await analyzeVirDir(virDir);

  return result;
};
