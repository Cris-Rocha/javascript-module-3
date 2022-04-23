/**
 * Exercise 08:
 *
 * Finish the code of the `exercise08` function so that it:
 *
 * 1. Converts the `func` function to be an arrow function
 *
 * 2. The function should perform the same operation,
 *    return the sum of it’s parameters
 */

// Finish the code of the function
function exercise08 () {
    let func = (a, b) => {
        return a + b;
    }

    // Don’t change the code bellow this line
    return func;
}

// Don’t change the code bellow this line
export default exercise08;


/* prints:

 PASS  src/__tests__/08-exercise.test.js
  08-exercise
    ✓ return the `func` function (2 ms)
    ✓ func should be an arrow function (1 ms)
    ✓ func should return the sum of the parameters (1 ms)

Test Suites: 1 passed, 1 total
Tests:       3 passed, 3 total
Snapshots:   0 total
Time:        0.924 s
Ran all test suites matching /src\/__tests__\/08-exercise.test.js/i.
occ-0067@pc-189 ES 6 and beyond % 

*/