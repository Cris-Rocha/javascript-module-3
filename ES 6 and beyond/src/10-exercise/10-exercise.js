/**
 * Exercise 10:
 *
 * Finish the code of the `exercise10` function so that it:
 *
 * 1. Executes the Array.from() method on the `message` variable
 *
 * 2. Returns the result
 */

// Finish the code of the function
function exercise10() {
    const message = "hello-world";
    return Array.from(message)
}

// Don’t change the code bellow this line
export default exercise10;


/* resultado del test:

 PASS  src/__tests__/10-exercise.test.js
  10-exercise
    ✓ use the Array.from() method to create an array from the string (2 ms)
    ✓ return the array of characters

Test Suites: 1 passed, 1 total
Tests:       2 passed, 2 total
Snapshots:   0 total
Time:        0.92 s, estimated 2 s
Ran all test suites matching /src\/__tests__\/10-exercise.test.js/i.
occ-0067@pc-189 ES 6 and beyond % 


*/