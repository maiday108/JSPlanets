/**
 * Make sure to read the e16.md file!
 * For this exercise we want you to make a custom `find` method. 
 * In order to do this it is ok to use any type of FOR loops.
 * REQUIREMENT: A find function should
 * * Take an array of things
 * * Return a the first thing where the applied callback is truthey
 * The function MUST NOT use the find() method.
 */

// Higher Order Function: accepts a function as an arg
// Callback Function: passed as an arg

// Inputs & Outputs
// Input: array, callback 
// Outputs: element

// High Level Strategy 

export function find(array, callback) {
  // Your code goes here...
  for (let elem of array) {
    if (callback(elem)) {
      return elem;
    } 
  }
  return; 
}; 


// const nouns = ['Apple', 'Bread', 'Celery'];
// const startsWithB = (word) => word[0].toLowerCase() === 'b';
// console.log(find(nouns, startsWithB)) // => 'Bread'

// const nums = [1 ,4 , 8, 9, 10];
// const isEven = (num) => num % 2 === 0; 
// console.log(find(nums, isEven)) // => 4


// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-16"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function