/**
 * Exercise 09:
 *
 * Finish the code of the `exercise09` function so that it:
 *
 * 1. Executes the Array.flat() method on the `days` array
 *
 * 2. Returns the result
 */

// Finish the code of the function
function exercise09() {
    const days  = [
        ["Monday"],
        ["Tuesday"],
        ["Wednesday"],
        ["Thursday"],
        ["Friday"],
    ];
    return days.flat()
}

// Don’t change the code bellow this line
export default exercise09;


/* resultado del teste:

 PASS  src/__tests__/09-exercise.test.js
  09-exercise
    ✓ use the array.flat() method to flatten the array (2 ms)
    ✓ return the flattened array (1 ms)

Test Suites: 1 passed, 1 total
Tests:       2 passed, 2 total
Snapshots:   0 total
Time:        0.886 s, estimated 1 s
Ran all test suites matching /src\/__tests__\/09-exercise.test.js/i.
occ-0067@pc-189 ES 6 and beyond % 



*/