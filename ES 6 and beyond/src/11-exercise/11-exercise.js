/**
 * Exercise 11:
 *
 * Finish the code of the `exercise11` function so that it:
 *
 * 1. Receives 2 parameters: `array` and `entry`
 *
 * @example
 *
 * function fn (array, entry) {...}
 *
 * 2. Executes the array.find() method to find the `entry`
 *    in the `array` parameter that the function receives.
 *
 * 3. Returns the result
 */

// Finish the code of the function
function exercise11(array, entry) {
    return array.find((elemento) => elemento == entry)
}

// Don’t change the code bellow this line
export default exercise11;

/* resultado del test:

 PASS  src/__tests__/11-exercise.test.js
  11-exercise
    ✓ use the array.find() method to find in the array the value of the parameter (1 ms)
    ✓ return the found entry in the array

Test Suites: 1 passed, 1 total
Tests:       2 passed, 2 total
Snapshots:   0 total
Time:        0.926 s, estimated 1 s
Ran all test suites matching /src\/__tests__\/11-exercise.test.js/i.
*/