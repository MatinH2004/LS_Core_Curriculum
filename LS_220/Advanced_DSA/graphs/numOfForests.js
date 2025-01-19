// You are provided with a 2D grid map where each cell is either
//  marked as a tree ('T') or open land ('O'). Your goal is to
// count the number of distinct forest regions on the map. A forest
// region consists of a contiguous group of tree cells ('T'). For
// this problem, two tree cells are considered connected if they
// share an edge horizontally or vertically, but not diagonally.

// Write a function numOfForests that accepts a nested array grid
// representing the 2D map. The function should return the total
// number of forest regions in the grid.

function numOfForests(grid) {
  if (!grid || grid.length === 0) return 0;

  const numRows = grid.length;
  const numCols = grid[0].length;
  const visited = new Set();

  function dfs(row, col) {
    if (
      row < 0 || row >= numRows || col < 0 || col >= numCols ||
      grid[row][col] === 'O' || visited.has(`${row},${col}`)
    ) {
      return;
    }

    visited.add(`${row},${col}`);

    dfs(row, col - 1);
    dfs(row - 1, col);
    dfs(row, col + 1);
    dfs(row + 1, col);
  }

  let forestCount = 0;

  for (let row = 0; row < numRows; row++) {
    for (let col = 0; col < numCols; col++) {
      if(grid[row][col] === 'T' && !visited.has(`${row},${col}`)) {
        dfs(row, col);
        forestCount++;
      }
    }
  }

  return forestCount;
}

// Instead of keeping track of visited forests, 
// we can cut them to make sure we don't count them again.
// NOT RECOMENDED
function numOfForests(grid) {
  if (!grid || grid.length === 0) return 0;

  const numRows = grid.length;
  const numCols = grid[0].length;

  function dfs(row, col) {
    if (
      row < 0 || row >= numRows || col < 0 || col >= numCols ||
      grid[row][col] === 'O'
    ) {
      return;
    }

    // convert tree into open land
    grid[row][col] = 'O';

    dfs(row, col - 1);
    dfs(row - 1, col);
    dfs(row, col + 1);
    dfs(row + 1, col);
  }

  let forestCount = 0;

  for (let row = 0; row < numRows; row++) {
    for (let col = 0; col < numCols; col++) {
      if (grid[row][col] === 'T') {
        dfs(row, col);
        forestCount++;
      }
    }
  }

  return forestCount;
}

const grid1 = [];
console.log(numOfForests(grid1) === 0);

const grid2 = [
  ['O', 'O', 'O'],
  ['O', 'O', 'O'],
  ['O', 'O', 'O']
];
console.log(numOfForests(grid2) === 0);
const grid3 = [
  ['T', 'T', 'O'],
  ['T', 'T', 'O'],
  ['O', 'O', 'O']
];
console.log(numOfForests(grid3) === 1);
const grid4 = [
  ['O', 'O', 'T', 'T', 'O'],
  ['T', 'T', 'O', 'T', 'O'],
  ['T', 'T', 'O', 'O', 'O'],
  ['O', 'O', 'O', 'T', 'T'],
  ['O', 'O', 'O', 'O', 'O'],
];
console.log(numOfForests(grid4) === 3);

const grid5 = [
  ['T', 'T', 'T'],
  ['T', 'O', 'T'],
  ['T', 'T', 'T']
];
console.log(numOfForests(grid5) === 1);

const grid6 = [
  ['T', 'O', 'T', 'O', 'T'],
  ['O', 'O', 'O', 'O', 'O'],
  ['T', 'O', 'T', 'O', 'T'],
  ['O', 'O', 'O', 'O', 'O'],
  ['T', 'O', 'T', 'O', 'T']
];
console.log(numOfForests(grid6) === 9);

const grid7 = [
  ['T', 'T', 'T'],
  ['T', 'T', 'T'],
  ['T', 'T', 'T']
];
console.log(numOfForests(grid7) === 1);

// All test cases should log true