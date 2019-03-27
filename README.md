Steps to reproduce https://github.com/facebook/flow/issues/4466

 1. Run `yarn`.
 2. Run `./node_modules/.bin/flow`. No errors are reported.
 3. Open error-lib.js and read the comments.
 4. Delete `export` from type `B1` in error-lib.js.
 5. Run `./node_modules/.bin/flow` again. This time, an error is reported.

