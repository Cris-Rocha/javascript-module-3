/**
 * Exercise 14:
 *
 * 1. Create a `add` function that receives two number
 *    parameters and returns their sum
 *
 * 2. Export the function as a named export
 *
 * @example
 *
 * export function test() {
 *    return "something";
 * };
 */

 function add (num1, num2) {
    return num1 +num2
}

export {add}

/* resultado del test:

 PASS  src/__tests__/14-exercise.test.js
  14-exercise
    ✓ export a named function that returns the sum of it’s parameters (47 ms)

Test Suites: 1 passed, 1 total
Tests:       1 passed, 1 total
Snapshots:   0 total
Time:        0.91 s, estimated 1 s



*/