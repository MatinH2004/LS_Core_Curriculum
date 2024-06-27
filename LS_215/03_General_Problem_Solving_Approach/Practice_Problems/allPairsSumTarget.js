/*

INPUT:
  - Array of numbers
  - Target number
OUTPUT:
  - 2D array of pairs that sum to target number
    - inner arrays must be sorted based on first num of the inner arrays

RULES:
  - Assume both args will be provided
  - Assume both array and integer will be provided as arg
  - Assume its ok to mutate input arr
  - If input array is empty or no pairs are found, return an empty array
  - Each number should only be used once for every pair
  - Return a new array

DS:
  - I: Array, Int
  - M: Array (splice(), shift())
  - O: 2D Array

ALGO:
  1) if input array is empty, return an empty array

  2) Initialize pairs array

  3) While array of numbers is not empty:
    - set num to last number in array
    - iterate thru the remaining numbers in array
      - if the sum of num and any number in array is equal to target
        - push num and the current number in array to pairs (sorted ascending)

  4) Sort the pairs array based on the first number of each subarray
  - in ascending order:
    - if the first number is greater than second number, return 1
    - if the first number is less than second number, return -1
    - else return 0

*/

function allPairs(array, target) {
  if (array.length === 0) return [];

  const pairs = [];

  do {
    let num = array.pop();

    for (i of array) {
      if (num + i === target) pairs.push([i, num].sort());
    }
  } while (array.length !== 0);

  return pairs.sort((a, b) => a[0] - b[0]);
}

console.log(allPairs([2, 4, 5, 3], 7));        // [[2, 5], [3, 4]]
console.log(allPairs([5, 3, 9, 2, 1], 3));     // [[1, 2]]
console.log(allPairs([4, 5, 1, 3, 6, 8], 9));  // [[1, 8], [3, 6], [4, 5]]
console.log(allPairs([4, 5, 1, 3, 6, 8], 99)); // []
console.log(allPairs([], 99));                 // []
