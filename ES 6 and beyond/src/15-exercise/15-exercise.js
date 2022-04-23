/**
 * Exercise 15:
 *
 * 1. Create a `divide` function that receives two number
 *    parameters and returns the division of both of them
 *
 * 2. Export the function as a default export
 *
 * @example
 *
 * function test() {
 *    return "something";
 * };
 *
 * export default test;
 */


 function divide (num1, num2) {
    return num1 /num2
}

export default divide

/* resultado del test:

 PASS  src/__tests__/15-exercise.test.js
  15-exercise
    ✓ default export a function that returns the division of it’s parameters (56 ms)

Test Suites: 1 passed, 1 total
Tests:       1 passed, 1 total
Snapshots:   0 total
Time:        0.927 s, estimated 1 s

*/