/*

Create a function that returns the lowest neighbor of a given (x, y) coordinate element in a 2D array.
The function will be passed three parameters.

Input:
  - matrix, coordinates (x, y)
Output:
  - lowest surrounding integer

Rules:
  - Given a matrix:
    - locate the number at given coordinates
    - determine the lowest surrounding integer
  - For surrounding values, check horizontal, vertical, and diagonal
  - If no lower surrounding integers are present, return the value of the given coordinates
  - Assume coordinates start at 0. So the top most left element's coordinates are 0, 0
  - Assume a square matrix will always be input
  - Assume given coordinates are integers that are 0 or greater
  - Assume matrix only contains integer values
  
DS:

1. Given the coordinates, locate the number in matrix
  - do a nested loop iterate over the matrix
  - stop when the row and col index matches the coordinates

2. Find the surrounding neighbors of the given coordinates

coords: 0, 2

surrounding coords: [0, 1], [1, 1], [1, 2]

non neighbors: [0, 0], [1, 0], [2, 0], [2, 1], [2, 2]

=> if the difference of coordinates are 0 or 1, they are neighbors
=> if a neighbor is found, add to a list

ALGO:

1. Find the number at the given coordinates
  - init `oridnate` to the value in matrix at given coordinates

2. Find all of the surrounding values in the matrix
  - Using helper: findNeighbors(matrix, x, y) => list of neighbors
  - return an array of neighbors

3. With all of the neighbors found, determine the lowest value
  - using the Math module, determine the min value and return it
  - if min value is greater than the ordinate
    - return the ordinate

HELPER: findNeighbors(matrix, x, y) => list of neighbors
  - init a `neighbors` array
  - iterate over the sub arrays of the matrix, rowIdx
    - iterate over the values of the subarrays, colIdx
      - if the abs value of (x - rowIdx) AND (y - colIdx) is less than or equal to 1
        - append the value at current coordinates to neighbors array

*/

function lowestElement(matrix, x, y) {
  const ordinate = matrix[x][y];
  const neighbors = findNeighbors(matrix, x, y);
  const lowestValue = Math.min(...neighbors);

  return lowestValue > ordinate ? ordinate : lowestValue;
}

function findNeighbors(matrix, x, y) {
  const neighbors = [];

  for (let rowIdx = 0; rowIdx < matrix.length; rowIdx++) {
    for (let colIdx = 0; colIdx < matrix.length; colIdx++) {
      if (rowIdx === x && colIdx === y) continue;
      if (Math.abs(x - rowIdx) <= 1 && Math.abs(y - colIdx) <= 1) {
        neighbors.push(matrix[rowIdx][colIdx]);
      }
    }
  }

  return neighbors;
}

console.log(lowestElement([
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
], 0, 2));

// => 2

console.log(lowestElement([
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
], 1, 1));

// // => 1

console.log(lowestElement([
  [9, 8, 7],
  [0, -1, -3],
  [-5, -9, 54]
], 0, 0));

// -1