/*

Write a function that returns all sets of three elements that sum to 0.

INPUT:
  - array
OUTPUT:
  - array of subarrays containing the three sum values

RULES:
  - The original array may contain duplicate numbers
  - Each three element subarray in output should be distinct
  - Subarrays should be sorted by the first element of the subarray
  - Subarray elements should be the ordered the same as the original array
  - Return an empty array if no three elements sum to zero
  - Return an empty array if there are fewer than three elements
  - Questions:
    - Will the argument always be an array? - yes
    - Will the argument always be provided? - No
    - What to return if array is empty? - empty array
    - What if the array is sparse? - it wont be
    - Will the array contain values other than numbers? - No
    - Will the array contain special values like Infinity, NaN, etc? - No
    
DS: array of elements

ALGO:
1. If the input array's length is less than 0, return an empty array

2. Init subarrays array

3. Find all subarrays from input array that sum to 0
  - iterate from 0 to length of array - 2
    - if the array sliced from i to i + 2 sums to 0
      - use helper method sum() here
      - push subarray to subarrays

4. Sort subarrays by first number in each subarray

5. Return subarrays

ALGO sum() -> number:

1. Reduce the array by summing the values
2. Return the sum

*/

function threeSum(arr = []) {
  const sum = arr => arr.reduce((total, n) => total + n, 0);
  const subarrays = [];

  for (let i = 0; i < arr.length - 2; i++) {
    if (sum(arr.slice(i, i + 3)) === 0) {
      subarrays.push(arr.slice(i, i + 3));
    }
  }

  return subarrays.sort((a, b) => b[0] - a[0]);
}

console.log(threeSum([0, 1, -1, -1, 2])); // [[0, 1, -1], [-1, -1, 2]]

console.log(threeSum([0, 0, 0, 5, -5])); // [[0, 0, 0], [0, 5, -5]]

console.log(threeSum([1, 2, 3])); // []

console.log(threeSum([1])); // []

console.log(threeSum([])); // []

console.log(threeSum()); // []
