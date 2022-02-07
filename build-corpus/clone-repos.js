import fs from 'fs';
import clone from 'git-clone';
import { join } from 'path';

import { processArgs } from '../lib/process-args.js';

const args = processArgs(process.argv);

function processAllRepos(repos) {
  repos.forEach(cloneLocally);
}

const cloneLocally = async (gitRepo) => {
  const options = {
    shallow: true,
  };

  const repoName = gitRepo.split('/').slice(-2).join('/');
  // TODO: check here to see if the file path already exists and skip if so
  await clone(
    gitRepo,
    join('..', '.corpora', args.language, `${repoName}`),
    options,
    () => console.log(`cloned ${repoName}`),
  );
};

const repos = fs
  .readFileSync(join('..', '.corpora', `${args.language}-repos.txt`))
  .toString()
  .split('\n')
  .slice(0, -1);

console.log(repos);

processAllRepos(repos);
