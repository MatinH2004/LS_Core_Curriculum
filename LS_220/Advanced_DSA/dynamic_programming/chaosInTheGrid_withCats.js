// You are given a grid represented as a
// nested array filled with strings.

// Chaos is standing at the top-left corner of
// the grid and can move either down or right at
// any point in time. However, there are sleeping
// cats in certain squares, represented by the
// letter "C" in the grid, and Chaos cannot go through
// these squares.

// Determine the number of distinct paths Chaos
// can take to reach a bowl of treats placed at
// the bottom-right corner of the grid.

// Define a function `chaosInTheGridWithCats` that,
// given a nested array, returns the number of
// unique paths that Chaos can take to reach the
// bottom-right corner.

// The grid will have at least 1 row and 1 column.

// INPUT: matrix representing a grid
// OUTPUT: integer representing distinct number of ways from
//         top left to bottom right of array

// Example:

// Given the following 2x3 grid:

const grid = [
  ["", "C", ""],
  ["", "", ""],
];

// There is only one distinct path Chaos can take:
// 1. Down -> Right -> Right

/*

BOTTOM-UP ALGO:
  - populate first row and column with 1s
  - populate squares that arent the first row/col
    - if any squares contain cats, count them as 0
  - return the number of bottom-right square

*/

// initial solution
function chaosInTheGridWithCats(grid) {
  const rows = grid.length;
  const cols = grid[0].length;
  let catSeen = false;
  
  for (let col = 0; col < cols; col++) {
    if (grid[0][col] === 'C' || catSeen) {
      grid[0][col] = 0;
      catSeen = true;
    } else {
      grid[0][col] = 1;
    }
  }

  catSeen = false;
  for (let row = 0; row < rows; row++) {
    if (grid[row][0] === 'C' || catSeen) {
      grid[row][0] = 0;
      catSeen = true;
    } else {
      grid[row][0] = 1;
    }
  }

  for (let row = 1; row < rows; row++) {
    for (let col = 1; col < cols; col++) {
      if (grid[row][col] === 'C') {
        grid[row][col] = 0;
      } else {
        grid[row][col] = grid[row - 1][col] + grid[row][col - 1];
      }
    }
  }

  return grid[rows - 1][cols - 1];
}

// refactored
function chaosInTheGridWithCats(grid) {
  const rows = grid.length;
  const cols = grid[0].length;

  const dp = new Array(rows).fill().map(() => new Array(cols).fill(0));

  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols; col++) {
      if (grid[row][col] === 'C') {
        dp[row][col] = 0;
      } else if (row === 0 && col === 0) {
        dp[row][col] = 1;
      } else {
        let fromTop = row > 0 ? dp[row - 1][col] : 0;
        let fromLeft = col > 0 ? dp[row][col - 1] : 0;
        dp[row][col] = fromTop + fromLeft;
      }
    }
  }

  return dp[rows - 1][cols - 1];
}

// RECURSIVE SOLUTIONS; TOP-DOWN

/*

Recursive definition:
   - The number of unique paths to get to the bottom-right square is the
     sum of the number of paths to get to the square immediately above it
     plus the number of distinct paths to get to the square immediately to
     its left.

Memoization:
  - We can opt to use a Map with a string representing the square coordinates
    as the key, or we can use a nested array.

Base Case:
  - If the square contains a sleeping cat or is out of bounds of the grid
    return 0, otherwise if the square is (0, 0) return 1

*/

// brute force
function chaosInTheGridWithCats(grid) {
  const rows = grid.length;
  const cols = grid[0].length;

  function helper(row, col) {
    if (row < 0 || col < 0 || grid[row][col] === 'C') {
      return 0;
    }
    if (row === 0 && col === 0) {
      return 1;
    }

    return helper(row - 1, col) + helper(row, col - 1);
  }

  return helper(rows - 1, cols - 1);
}

// Using Map for cache
function chaosInTheGridWithCats(grid) {
  const rows = grid.length;
  const cols = grid[0].length;
  const cache = new Map();

  function helper(row, col) {
    if (row < 0 || col < 0 || grid[row][col] === 'C') {
      return 0;
    }
    if (row === 0 && col === 0) {
      return 1;
    }

    const key = `${row} ${col}`;

    if (cache.has(key)) {
      return cache.get(key);
    }

    const paths = helper(row - 1, col) + helper(row, col - 1);

    cache.set(key, paths);

    return paths;
  }

  return helper(rows - 1, cols - 1);
}

// using nested array for cache
function chaosInTheGridWithCats(grid) {
  const rows = grid.length;
  const cols = grid[0].length;

  const cache = new Array(rows).fill().map(() => new Array(cols).fill(0));

  function helper(row, col) {
    if (row < 0 || col < 0 || grid[row][col] === 'C') {
      return 0;
    }
    if (row === 0 && col === 0) {
      return 1;
    }

    if (cache[row][col] !== 0) {
      return cache[row][col];
    }

    cache[row][col] = helper(row - 1, col) + helper(row, col - 1);

    return cache[row][col];
  }

  return helper(rows - 1, cols - 1);
}

// Test Cases:

const grid1 = [
  ["", "C"],
  ["", ""],
];
const grid2 = [["", "C"]];
const grid3 = [
  ["", "", ""],
  ["", "C", ""],
  ["", "", ""],
];
const grid4 = [
  ["", "", "", "", "C"],
  ["", "C", "", "", ""],
  ["", "", "", "C", ""],
];
const grid5 = [
  ["", "", "", "", "C", ""],
  ["", "C", "", "", "", ""],
  ["", "", "", "", "", ""],
  ["", "", "", "C", "", ""],
  ["", "C", "", "", "", ""],
  ["", "", "", "", "", ""],
];

console.log(chaosInTheGridWithCats(grid1) === 1);
console.log(chaosInTheGridWithCats(grid2) === 0);
console.log(chaosInTheGridWithCats(grid3) === 2);
console.log(chaosInTheGridWithCats(grid4) === 2);
console.log(chaosInTheGridWithCats(grid5) === 43);