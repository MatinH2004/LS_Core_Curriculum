/*

Write a function that returns the matrix obtained by replacing the entries above the main diagonal with 0s.

Input:
  - a matrix
Output:
  - matrix with elements above diagonal transformed to 0

Rules:
  - Input matrix can vary in length, but will be square
  - Input will always be provided AND will always be an array
  - Input will not be sparse, will always contain subarrays with digits
  - Result must be returned with the same order of subarrays
  - Input can be mutated

Example:

[
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
]

Diagonal => 1, 5, 9

iteration 1 - index 0
  - convert all numbers to 0 if index > 0

iteration 2 - index 1
  - convert all numbers to 0 if index > 1

iteration 3 - index 2
  - convert all numbers to 1 if index > 2 (none)

DS:
We can mutate input array, but we can also use transformation (map) to form the new array

Matrix -> array transformation (using index) -> New matrix

Algo:

1. map over the input matrix, accessing the index
  - map over the sub array in matrix
    - if current element's index is greater than the current index from outer array
    - return 0
    - otherwise return the element

2. Return the newly transformed array

*/

function lowerTriang(matrix) {
  return matrix.map((arr, idx) => {
    return arr.map((num, i) => i > idx ? 0 : num);
  });
}

console.log(lowerTriang([
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
]));

// => [
//   [1, 0, 0],
//   [4, 5, 0],
//   [7, 8, 9]
// ]

console.log(lowerTriang([
  [5, 7],
  [7, 9]
]));

// => [
//   [5, 0],
//   [7, 9]
// ]

console.log(lowerTriang([
  [1, 8, 8, 1],
  [2, 7, 7, 2],
  [3, 6, 6, 3],
  [4, 5, 5, 4]
]));

// => [
//   [1, 0, 0, 0],
//   [2, 7, 0, 0],
//   [3, 6, 6, 0],
//   [4, 5, 5, 4]
// ]