/**
 * Exercise 16:
 *
 * 1. Export all the functions from the `16-exercise-fns`
 *    file under the `utils` namespace.
 *
 * You can use the `export * as name from "./url-path"` command
 * to export all the modules in a file under a particular namespace
 */

export *  as utils from './16-exercise-fns'

/* resultado del test :


 PASS  src/__tests__/16-exercise.test.js
  16-exercise
    ✓ export all the modules under the `utils` namespace (81 ms)

Test Suites: 1 passed, 1 total
Tests:       1 passed, 1 total
Snapshots:   0 total
Time:        0.953 s, estimated 1 s

*/