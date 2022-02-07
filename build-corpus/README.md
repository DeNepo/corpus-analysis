# Build Corpus

Builds a corpus of any programming language using the first x GitHub
repositories.

Use: `node ./index.js language=javascript count=x` (`count` defaults to 25)

Artifacts:

1. `.corpora/language-x.txt`: a list of the repositories clones
2. `.corpora/language-x`: the shallow-cloned repositories
