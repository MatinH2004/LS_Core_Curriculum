// You are provided with an 'm x n' 2D grid map where each cell
// is either marked as a tree ('T') or open land ('O'). Your task
// is to find the largest contiguous forest area on the map. A 
// forest area consists of a group of tree cells ('T') connected
// 4-directionally (horizontally or vertically, but not diagonally).

// Write a function largestForestArea that accepts a nested
// array grid representing the 2D map. The function should
// return the size of the largest forest area, which is the
// number of contiguous 'T' cells in the largest forest.
// If there are no trees in the grid, return 0.

// Example:
// Input:
// [
//   ['O', 'T', 'O', 'O'],
//   ['T', 'T', 'O', 'T'],
//   ['O', 'O', 'O', 'T'],
//   ['O', 'O', 'T', 'T']
// ]
// Output: 4 (The largest forest area has 4 connected tree cells)

/*

RULES:
  - input will be an empty array or a m x n grid
  - assume nested arrays will only contain strings of "O" or "T"
  - goal is to find the largest forest area ('T's)
  - forest area consists of a group of trees connected horizontally/vertically
    but not diagonally
  - output will be an integer representing the largest tree area or forest

ALGORITHM:
0. initialize data structures
  - assign numRows to length of grid
  - assign numCols to length of grid's first element
  - assign visited to new Set
  - assign forestCount to new array

1. if grid is not input OR input grid is empty, return 0;

2. using a nested loop iterate over each row and col
  - if a tree is discovered, and it hasn't been visited
    - call dfs function and push the result to forestCount

3. perform DFS over unvisited tree cells, counting all trees in forest
  - base case: if current position is out of bounds, open land or has been visited, return
  - add coords as string to visited
  - recursive call dfs to positions: Left, Up, Right, Down
  - count all trees found

4. return largest count of forests discovered
  - sort forestCount nested arrays by length of array in descending order
  - return first nested array

*/

function largestForestArea(grid) {
  if (!grid || grid.length === 0) return 0;

  const numRows = grid.length;
  const numCols = grid[0].length;
  const visited = new Set();
  const forestCount = [];

  const dfs = (row, col) => {
    const coord = `${row},${col}`;

    if (
      row < 0 || row >= numRows || col < 0 || col >= numCols ||
      grid[row][col] === 'O' || visited.has(coord)
    ) {
      return 0;
    }

    visited.add(coord);
    let count = 1;

    count += dfs(row, col - 1);
    count += dfs(row - 1, col);
    count += dfs(row, col + 1);
    count += dfs(row + 1, col);

    return count;
  }

  for (let row = 0; row < numRows; row++) {
    for (let col = 0; col < numCols; col++) {
      if (grid[row][col] === 'T' && !visited.has(`${row},${col}`)) {
        forestCount.push(dfs(row, col));
      }
    }
  }

  return forestCount.length > 0 ? Math.max(...forestCount) : 0;
}

// alternate solution - converting seen trees to open land
function largestForestArea(grid) {
  if (!grid || grid.length === 0) return 0;

  const numRows = grid.length;
  const numCols = grid[0].length;

  const dfs = (row, col) => {
    if (
      row < 0 || row >= numRows || col < 0 || col >= numCols ||
      grid[row][col] === 'O'
    ) {
      return 0;
    }

    grid[row][col] = 'O';

    let count = 1;

    count += dfs(row, col - 1);
    count += dfs(row - 1, col);
    count += dfs(row, col + 1);
    count += dfs(row + 1, col);

    return count;
  }

  let currentForestSize = 0;
  let largestForestSize = 0;

  for (let row = 0; row < numRows; row++) {
    for (let col = 0; col < numCols; col++) {
      if (grid[row][col] === 'T') {
        currentForestSize = dfs(row, col);
        largestForestSize = Math.max(largestForestSize, currentForestSize);
      }
    }
  }

  return largestForestSize;
}

// Test cases
const grid1 = [];
console.log(largestForestArea(grid1) === 0);

const grid2 = [
  ['O', 'O', 'O'],
  ['O', 'O', 'O'],
  ['O', 'O', 'O']
];
console.log(largestForestArea(grid2) === 0);

const grid3 = [
  ['T', 'T', 'O'],
  ['T', 'T', 'O'],
  ['O', 'O', 'O']
];
console.log(largestForestArea(grid3) === 4);

const grid4 = [
  ['O', 'O', 'T', 'T', 'O'],
  ['T', 'T', 'O', 'T', 'O'],
  ['T', 'T', 'O', 'O', 'O'],
  ['O', 'O', 'O', 'T', 'T'],
  ['O', 'O', 'O', 'O', 'O'],
];
console.log(largestForestArea(grid4) === 4);

const grid5 = [
  ['T', 'T', 'T'],
  ['T', 'O', 'T'],
  ['T', 'T', 'T']
];
console.log(largestForestArea(grid5) === 8);

const grid6 = [
  ['T', 'O', 'T', 'O', 'T'],
  ['O', 'O', 'O', 'O', 'O'],
  ['T', 'O', 'T', 'O', 'T'],
  ['O', 'O', 'O', 'O', 'O'],
  ['T', 'O', 'T', 'O', 'T']
];
console.log(largestForestArea(grid6) === 1);

const grid7 = [
  ['T', 'T', 'T'],
  ['T', 'T', 'T'],
  ['T', 'T', 'T']
];
console.log(largestForestArea(grid7) === 9);

const grid8 = [
  ['O', 'T', 'O', 'T', 'T'],
  ['O', 'T', 'O', 'O', 'O'],
  ['O', 'O', 'T', 'O', 'O'],
  ['O', 'O', 'T', 'T', 'T'],
  ['T', 'O', 'T', 'T', 'T']
];
console.log(largestForestArea(grid8) === 7);

const grid9 = [
  ['T', 'O', 'T', 'T'],
  ['O', 'T', 'O', 'T'],
  ['T', 'T', 'O', 'O'],
  ['O', 'T', 'T', 'T']
];
console.log(largestForestArea(grid9) === 6);

const grid10 = [
  ['O', 'T', 'O', 'O'],
  ['T', 'T', 'O', 'T'],
  ['O', 'O', 'O', 'T'],
  ['O', 'O', 'T', 'T']
];
console.log(largestForestArea(grid10) === 4);

const grid11 = [
  ['O', 'T', 'T', 'T', 'O'],
  ['T', 'T', 'O', 'T', 'T'],
  ['O', 'O', 'O', 'O', 'O'],
  ['T', 'T', 'O', 'T', 'O'],
  ['T', 'T', 'O', 'T', 'T']
];
console.log(largestForestArea(grid11) === 7);

// All test cases should log true