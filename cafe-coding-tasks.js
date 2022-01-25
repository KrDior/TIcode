// Remove duplicates of an array and return an array of only
// unique elements
// ES6 Implementation
const array = [1, 2, 3, 5, 1, 5, 9, 1, 2, 8];

Array.from(new Set(array)); // [1, 2, 3, 5, 9, 8]

// ES5 Implementation
const array = [1, 2, 3, 5, 1, 5, 9, 1, 2, 8];
uniqueArray(array); // [1, 2, 3, 5, 9, 8]

function uniqueArray(array) {
  const hashmap = {};
  const unique = [];

  for (let i = 0; i < array.length; i++) {
    // If key returns undefined (unique), it is evaluated as false.
    if (!hashmap.hasOwnProperty(array[i])) {
      hashmap[array[i]] = 1;
      unique.push(array[i]);
    }
  }
  return unique;
}

// Write a function that accepts a function and timeout, x , in number of milliseconds. It returns a function that can
// only be executed once per x milliseconds. This can be useful for limiting the number of time and computation
// heavy function that are run. For example, making AJAX requests to an autocompletion API.
// Once written, add a third parameter that will allow the function to be executed immediately if set to true.
// Otherwise the function will run at the end of the timeout period.

module.exports = function (fn, delay, execAsap) {
  let timeout; // Keeps a reference to the timeout inside the returned function

  return function () {
    // Continue to pass through the function execution context and arguments
    const that = this;
    const args = arguments;
    // If there is no timeout variable set, proceed to create a new timeout
    if (!timeout) {
      execAsap && fn.apply(that, args);
      timeout = setTimeout(function () {
        execAsap || fn.apply(that, args);
        // Remove the old timeout variable so the function can run again
        timeout = null;
      }, delay || 100);
    }
  };
};
