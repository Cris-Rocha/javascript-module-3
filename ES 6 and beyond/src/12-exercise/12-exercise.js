/**
 * Exercise 12:
 *
 * Finish the code of the `exercise12` function so that it:
 *
 * 1. Receives 2 parameters: `array` and `entry`
 *
 * @example
 *
 * function fn (array, entry) {...}
 *
 * 2. Executes the   method to check if the `entry`
 *    is in the `array` parameter that the function receives.
 *
 * 3. Returns the result
 */

// Finish the code of the function
function exercise12(array, entry) {
     return array.includes(entry);
}

// Don’t change the code bellow this line
export default exercise12;


/* respuesta del test:

 PASS  src/__tests__/12-exercise.test.js
  12-exercise
    ✓ use the array.includes() method to check if the array includes the entry (2 ms)
    ✓ return the result of the includes check

Test Suites: 1 passed, 1 total
Tests:       2 passed, 2 total
Snapshots:   0 total
Time:        0.919 s, estimated 1 s
Ran all test suites matching /src\/__tests__\/12-exercise.test.js/i.


 */