/**
 * Exercise 07:
 *
 * Finish the code of the `exercise07` function so that it:
 *
 * 1. Stores in the `func` variable an arrow function
 *    that receives two `a` and `b` parameters
 *
 * 2. Returns the sum of both parameters
 */

// Finish the code of the function
function exercise07() {
    let func = (a,b) => a+b;

    // Don’t change the code bellow this line
    return func;
}

// Don’t change the code bellow this line
export default exercise07;


/* printa

 PASS  src/__tests__/07-exercise.test.js
  07-exercise
    ✓ store an arrow function in the `func` variable (2 ms)
    ✓ func should be an arrow function (1 ms)
    ✓ func should return the sum of the parameters (1 ms)

Test Suites: 1 passed, 1 total
Tests:       3 passed, 3 total
Snapshots:   0 total
Time:        0.934 s, estimated 1 s
Ran all test suites matching /src\/__tests__\/07-exercise.test.js/i.

*/