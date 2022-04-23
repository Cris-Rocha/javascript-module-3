/**
 * Exercise 17:
 *
 * Complete the code of the exercise17 function so that:
 *
 * 1. It returns the call to the fetch() method to make
 *    a network request to the following url:
 *
 * https://jsonplaceholder.typicode.com/users/1
 *
 * 2. Obtains the data from the fetch() call and executes several .then()
 *    method calls until it can get the data returned from the api.
 *
 *    Once it has the data inside the .then() call, it should execute
 *    the `displayContents` function by passing it as an argument
 *    the response data returned by the fetch json() method.
 *
 * function exercise17() {
 *   return fetch("...")...
 * }
 */

// Finish the code of the function
function exercise17() {
    fetch ("https://jsonplaceholder.typicode.com/users/1")
    .then( res => res.json())
    .then(displayContents)
}

// Don’t change the code bellow this line
function displayContents(data) {
    const wrapper = document.querySelector(".ex-wrapper");

    wrapper.textContent = JSON.stringify(data, null, 2);
}

export default exercise17;

/** respuesta del test:
 * 
 *  PASS  src/__tests__/17-exercise.test.js
  17-exercise
    ✓ use fetch to make a network call (7 ms)
    ✓ pass the data from the fetch call to the displayContents function (1 ms)

Test Suites: 1 passed, 1 total
Tests:       2 passed, 2 total
Snapshots:   0 total
Time:        0.938 s, estimated 1 s
Ran all test suites matching /src\/__tests__\/17-exercise.test.js/i.

*/