# Corpus Analysis

This is a project to begin compiling a toy corpus of code, focusing on javascript to start.

The main aim is to figure out what sorts of interesting measurements we can get from this analysis, and some of the things we're interested in:

- measuring code complexity
- measuring occurence of "bad" code smells, as implied by common linting rulesets (eg, eslint)
- measuring baseline averages for different things (eg, average file length, average number of functions per file, average number of variables)

We will probably keep this to *just* the code for now, ignoring things like the documentation or the context around the code (eg, PR discussions and merge events), but we're definitely interested in looking at that later.

## Setting up the project

```
node grabRepos.js
```

and then

```
node cloneRepos.js
```

That should put everything into a `data` directory for you to start analyzing!

## Running the analysis

To Be Determined...
