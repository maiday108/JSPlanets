import { data } from "../data/data";

// SPACE DATA EXERCISE 4
// Return an array of Planets' names with gravity less than 10
// Return example: ['name1', 'name2', ... , 'nameN']

// What is use case for reduce?
// When we need to take an array, process it with a cb function, and return one value
// Input: Array of Planets 
// Outputs: Array of Planet Names 

export function getPlanetsWithLowGravity(data) {
  
  // 1) Take in the full array, 2) iterate over the planets array, checking which planets have gravity less than 10, 3) return the names of planets with gravity less than 10

  return data.planets.reduce((acc, planet) => {
    if (planet.gravity < 10) {
      acc.push(planet.name);
    }
    return acc;
  }, []);

  // return data.planets.reduce((acc,planet) => {
  //   if (planet.gravity < 10) {
  //     return planet.name;
  //   }
  // })
}



// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-4"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
