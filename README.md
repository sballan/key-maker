# Key Maker

Key Maker solves very particular problem:

1. You want keys made for arbitrary JavaScript objects
2. These keys need to be strings, preferably of a short length, and need to be manufactured deterministically.
3. Unfortunately, the only packages on npm that can do these things are not supported to run in the browser.
4. You'd prefer to not run Browserify on your entire project.

To install:
```
$ npm install key-maker
```
