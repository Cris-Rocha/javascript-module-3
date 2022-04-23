/**
 * Exercise 18:
 *
 * Complete the code of the exercise18 function so that it:
 *
 * 1. Converts the exercise18 function to be of type `async`
 *
 * 2. Uses the await keyword in front of a fetch() call
 *    to the following url:
 *
 *    https://jsonplaceholder.typicode.com/users/1
 *
 * 3. Uses the await keyword again in front of the json() call
 *    to wait for the data of the promise
 *
 * 4. Obtains the data from the fetch json() call and executes
 *    the `displayContents` function by passing it as an argument
 *    the response data returned by the fetch json() method.
 */

// Finish the code of the function
async function exercise18() {
    const rest = await fetch("https://jsonplaceholder.typicode.com/users/1");
    const body = await rest.json()
    displayContents(body)
}

// Don’t change the code bellow this line
function displayContents(data) {
    const wrapper = document.querySelector(".ex-wrapper");

    wrapper.textContent = JSON.stringify(data, null, 2);
}

export default exercise18;

/** Respuesta del test:
 

 PASS  src/__tests__/18-exercise.test.js
  18-exercise
    ✓ convert the exercise18 to be of type async (1 ms)
    ✓ use fetch to make a network call (6 ms)
    ✓ pass the data from the fetch call to the displayContents function (1 ms)

Test Suites: 1 passed, 1 total
Tests:       3 passed, 3 total
Snapshots:   0 total
Time:        0.943 s, estimated 2 s
Ran all test suites matching /src\/__tests__\/18-exercise.test.js/i.
 

 */
