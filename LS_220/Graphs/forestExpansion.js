// You are provided with a 2D grid map where each cell
// is either marked as a tree ('T') or open land ('O').
// Your goal is to transform specific regions of open land into trees.
// An open land region consists of open land cells that are
// connected horizontally or vertically.

// Any region of open land that is completely surrounded by trees
// on all four sides should be converted into a tree area by changing
// its designation to 'T'.

// The transformation rules are as follows:
// - If an open land cell ('O') is connected to other open land cells
//   horizontally or vertically, they form an open land region.
// - If an entire open land region is completely surrounded by tree
//   cells ('T') on all four sides (up, down, left, and right), then
//   all cells in this region should be changed to tree cells ('T').
// - Open land regions that are not completely surrounded by trees will remain unchanged.

// Implement a function `forestExpansion` that
// accepts a nested array grid representing the 2D map.
// The function should return the same grid, modified
// so that all open land regions surrounded by trees
// on all four sides are converted to trees.

// Example 1:

// Input:
// [
// ['T', 'T', 'O'],
// ['T', 'O', 'T'],
// ['T', 'T', 'T']
// ]

// Output:
// [
// ['T', 'T', 'O'],
// ['T', 'T', 'T'],
// ['T', 'T', 'T']
// ]

// Explanation:
// There are two distinct open land regions - cell (0, 2) and cell (1, 1).
// The region made up of cell (1, 1) is completely surrounded by trees,
// horizontally and vertically, so it's converted to a tree.


// Example 2:

// Input:
// [
// ['T', 'O', 'T'],
// ['O', 'O', 'O'],
// ['T', 'O', 'T']
// ]

// Output:
// [
// ['T', 'O', 'T'],
// ['O', 'O', 'O'],
// ['T', 'O', 'T']
// ]

// Explanation:
// There is only one open land region in this case made up of
// cells (0, 1), (1, 0), (1, 1), (1, 2), and (2, 1).
// This region is not fully surrounded by trees, so it remains unchanged.

//solution using Set
function forestExpansion(grid) {
  if (!grid || grid.length === 0) return grid;

  const rows = grid.length;
  const cols = grid[0].length;
  const visited = new Set();

  function dfs(row, col) {
    if (
      row < 0 ||
      row >= rows ||
      col < 0 ||
      col >= cols ||
      visited.has(`${row},${col}`) ||
      grid[row][col] === 'T'
    ) {
      return;
    }

    visited.add(`${row},${col}`);

    dfs(row, col - 1);
    dfs(row - 1, col);
    dfs(row, col + 1);
    dfs(row + 1, col);
  }

  // check top & bottom borders
  for (let row = 0; row < rows; row++) {
    for (let col of [0, cols - 1]) {
      if (grid[row][col] === 'O') {
        dfs(row, col);
      }
    }
  }

  // check side borders
  for (let col = 0; col < cols; col++) {
    for (let row of [0, rows - 1]) {
      if (grid[row][col] === 'O') {
        dfs(row, col);
      }
    }
  }

  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols; col++) {
      if (grid[row][col] === 'O' && !visited.has(`${row},${col}`)) {
        grid[row][col] = 'T';
      }
    }
  }

  return grid;
}

// solution without Set
function forestExpansion(grid) {
  const rows = grid.length;
  const cols = grid[0].length;

  function dfs(row, col) {
    if (
      row < 0 ||
      col < 0 ||
      row >= rows ||
      col >= cols ||
      grid[row][col] !== 'O'
    ) {
      return;
    }

    grid[row][col] = 'V';

    dfs(row, col - 1);
    dfs(row - 1, col);
    dfs(row, col + 1);
    dfs(row + 1, col);
  }

  for (let col = 0; col < cols; col++) {
    if (grid[0][col] === 'O') {
      dfs(0, col);
    }
    if (grid[rows - 1][col] === 'O') {
      dfs(rows - 1, col);
    }
  }

  for (let row = 0; row < rows; row++) {
    if (grid[row][0] === 'O') {
      dfs(row, 0);
    }
    if (grid[row][cols - 1] === 'O') {
      dfs(row, cols - 1);
    }
  }

  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols; col++) {
      if (grid[row][col] === 'O') {
        grid[row][col] = 'T';
      }
      if (grid[row][col] === 'V') {
        grid[row][col] = 'O';
      }
    }
  }

  return grid;
}

// Helper function for the test cases
function gridsAreEqual(grid1, grid2) {
  if (grid1.length !== grid2.length) return false;

  return grid1.every((row, i) => row.length === grid2[i].length && row.every((cell, j) => cell === grid2[i][j]));
}

// Test Cases:

const grid1 = [
['T', 'T', 'O'],
['T', 'O', 'T'],
['T', 'T', 'T']
]
const expected1 = [
['T', 'T', 'O'],
['T', 'T', 'T'],
['T', 'T', 'T']
];

console.log(gridsAreEqual(forestExpansion(grid1), expected1));

const grid2 = [
['T', 'O', 'T'],
['O', 'O', 'O'],
['T', 'O', 'T']
];
const expected2 = [
['T', 'O', 'T'],
['O', 'O', 'O'],
['T', 'O', 'T']
];

console.log(gridsAreEqual(forestExpansion(grid2), expected2));

const grid3 = [
['T', 'T', 'T', 'T'],
['T', 'O', 'T', 'T'],
['T', 'T', 'O', 'T'],
['T', 'T', 'T', 'T']
];
const expected3 = [
['T', 'T', 'T', 'T'],
['T', 'T', 'T', 'T'],
['T', 'T', 'T', 'T'],
['T', 'T', 'T', 'T']
];

console.log(gridsAreEqual(forestExpansion(grid3), expected3));

const grid4 = [
['O', 'T', 'O', 'T'],
['T', 'O', 'T', 'O'],
['O', 'T', 'O', 'O']
];
const expected4 = [
['O', 'T', 'O', 'T'],
['T', 'T', 'T', 'O'],
['O', 'T', 'O', 'O']
];

console.log(gridsAreEqual(forestExpansion(grid4), expected4));

const grid5 = [
['T', 'T', 'T', 'O', 'T'],
['T', 'O', 'T', 'O', 'T'],
['T', 'O', 'T', 'T', 'T'],
['T', 'T', 'T', 'T', 'T'],
];
const expected5 = [
['T', 'T', 'T', 'O', 'T'],
['T', 'T', 'T', 'O', 'T'],
['T', 'T', 'T', 'T', 'T'],
['T', 'T', 'T', 'T', 'T'],
];

console.log(gridsAreEqual(forestExpansion(grid5), expected5));