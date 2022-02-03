import lineReader from 'line-reader';
import fs from 'fs';
import clone from 'git-clone';

function processAllRepos(repos) {
  repos.forEach(cloneLocally);
}

const cloneLocally = async gitRepo => {

  const options = {
    shallow: true
  };

  const repoName = gitRepo.split('/').slice(-2).join('/');
  // TODO: check here to see if the file path already exists and skip if so
  await clone(gitRepo, `data/${repoName}`, options, () => console.log(`cloned ${repoName}`));
}

const repos = fs.readFileSync('code-results.txt')
                 .toString()
                 .split('\n')
                 .slice(0, -1);
  
processAllRepos(repos);
