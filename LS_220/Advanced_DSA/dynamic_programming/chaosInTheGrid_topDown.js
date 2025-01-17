// You are given a grid represented as a nested array filled
// with empty strings. Chaos, the puppy, is standing at the
// top-left corner of the grid and can move either down or right
// at any point in time. Determine the number of distinct paths
// Chaos can take to reach a bowl of treats placed at the
// bottom-right corner of the grid.

// Define a function `chaosInTheGrid` that, given a nested
// array, returns the number of unique paths that Chaos
// can take to reach the bottom-right corner.

// The grid will have at least 1 row and 1 column.

// Example:

// Given the following 2x3 grid:

const grid = [
  ["", "", ""],
  ["", "", ""],
];

// There are three distinct path Chaos can take:
// 1. Right -> Right -> Down
// 2. Right -> Down -> Right
// 3. Down -> Right -> Right

/*

Recursive base case:
  - first row or column
    - return 1

Recursion:
  - the number of unique paths to get to the bottom-right square
    is the sum of the number of paths to get to the square immediately
    above it plus the number of distinct paths to get to the square
    immediately to its left.

Memoization:
  - use Map
  - store coordinates using string as key
  - cache = { '0 0': 1 }

*/

// brute-force - TC: O(2^(ROW + COL))
function chaosInTheGrid(grid) {
  const rows = grid.length;
  const cols = grid[0].length;

  function pathsToCoord(row, col) {
    if (row === 0 || col === 0) {
      return 1;
    }

    return pathsToCoord(row - 1, col) + pathsToCoord(row, col - 1);
  }

  return pathsToCoord(rows - 1, cols - 1);
}

// map for memoization
// TC: O(R * C)
// SC: O(R + C)
function chaosInTheGrid(grid) {
  const rows = grid.length;
  const cols = grid[0].length;
  const cache = new Map();

  function pathsToCoord(row, col) {
    if (row === 0 || col === 0) {
      return 1;
    }

    const key = `${row} ${col}`;

    if (cache.has(key)) {
      return cache.get(key);
    }

    const paths = pathsToCoord(row - 1, col) + pathsToCoord(row, col - 1);

    cache.set(key, paths);

    return paths;
  }

  return pathsToCoord(rows - 1, cols - 1);
}

// nested array as cache
// TC: O(R * C)
// SC: O(R + C)
function chaosInTheGrid(grid) {
  const rows = grid.length;
  const cols = grid[0].length;

  // init a cache as a nested array filled with zeroes
  const cache = new Array(rows).fill().map(() => new Array(cols).fill(0));

  function pathsToCoord(row, col) {
    if (row === 0 || col === 0) {
      return 1;
    }

    if (cache[row][col] !== 0) {
      return cache[row][col];
    }

    cache[row][col] = pathsToCoord(row - 1, col) + pathsToCoord(row, col - 1);

    return cache[row][col];
  }

  return pathsToCoord(rows - 1, cols - 1);
}

// Test cases

const grid1 = [[""]];
const grid2 = [
  ["", ""],
  ["", ""],
];
const grid3 = [
  ["", "", ""],
  ["", "", ""],
  ["", "", ""],
];
const grid4 = [
  ["", "", "", "", ""],
  ["", "", "", "", ""],
  ["", "", "", "", ""],
];
const grid5 = [
  ["", "", "", "", "", ""],
  ["", "", "", "", "", ""],
  ["", "", "", "", "", ""],
  ["", "", "", "", "", ""],
  ["", "", "", "", "", ""],
  ["", "", "", "", "", ""],
];
console.log(chaosInTheGrid(grid1) === 1);
console.log(chaosInTheGrid(grid2) === 2);
console.log(chaosInTheGrid(grid3) === 6);
console.log(chaosInTheGrid(grid4) === 15);
console.log(chaosInTheGrid(grid5) === 252);
// All test cases should log true