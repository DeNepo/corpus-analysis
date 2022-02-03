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

## Purpose of the analysis

Compiling a corpus is a bit of uncharted territory, since there aren't many good examples of people actually doing this. The idea is that we'll be able to settle on good things to measure after we've established some baselines, and these baselines will most likely be calculated based on a much bigger corpus (what constitutes a "big enough" corpus of code is an unanswered question, so we might also seek to propose a first attempt at an answer in the course of this project).

Before we start analyzing a very big corpus, we wanted to develop our analytical tools on a smaller corpus, and that's why this project exists.

Eventually, we'd like any such corpus of code (or docs or commit diffs or whatever) to inform content decisions in curriculum design. Ideally, it will help us to create a process to automatically select and present materials to learners, based on different filtering criteria, such that the materials are graded by level, language, and even possibly code purpose (this one is very vague, but could be an interesting topic).

More practically, if it can be a small part in making materials design easier and more efficient for practicing teachers (and even self-directed learners), that would be a very big win!
