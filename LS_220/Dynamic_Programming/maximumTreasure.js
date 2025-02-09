// An adventurer is embarking on a quest through a mysterious grid-like
// landscape filled with hidden treasures. The landscape is represented by a grid
// with M rows and N columns. Our adventurer begins their journey in the top-left
// corner and aims to reach the bottom-right corner, all while gathering as much
// treasure as possible.
//
// Rules:
// 1. The adventurer can only move in two directions: right and down.
// 2. Each cell in the grid contains a certain amount of treasure, represented by
//    a non-negative integer.
// 3. Upon entering a cell, the adventurer automatically collects the treasure there.
//
// Task:
// Create a function `maxTreasure` that takes a 2D grid as input. Each cell
// in the grid contains a non-negative integer representing the amount of treasure.
// The function should return the maximum possible treasure the adventurer can
// accumulate while traveling from the top-left to the bottom-right corner.
//
// Example:
// grid = [
//   [1, 3, 1, 5],
//   [2, 2, 4, 1],
//   [5, 0, 2, 3],
//   [0, 6, 1, 2]
// ]
//
// maxTreasure(grid) should return 17
//
// Explanation: The optimal path is 1 -> 3 -> 2 -> 4 -> 2 -> 3 -> 2
// collecting a total of 17 treasure units.
//
// Constraints:
// - The grid will always have at least one cell.
// - All values in the grid will be non-negative integers.
// - The grid dimensions M and N will be positive integers.

/*

BOTTOM-UP ALGO:
  - init total to 0
  - init rows to length of grid
  - init cols to length of first array in grid
  - init row and col to 0
  - while row is less than or equal to rows AND col is less than or equal to cols
    - increment total to value in current position of grid
    - if element to the right is greater than element to the bottom
      - increment col
    - else increment row
  - return total

TOP-DOWN ALGO:
  - init total to 0
  - init rows to length of grid
  - init cols to length of first array in grid

  - define function bestPath(row, col);
    - base case:
      - if row and col are 0:
        - return current value in grid
      - if row = 0
        - decrement col
        - return current value in grid
      - if col = 0
        - decrement row
        - return current value in grid
    
  - invoke bestPath(rows - 1, cols - 1)

*/

// bottom-up
function maxTreasure(grid) {
  const rows = grid.length;
  const cols = grid[0].length;

  let total = 0;
  let row = 0;
  let col = 0;

  while (row < rows && col < cols) {
    total += grid[row][col];

    if (row === rows - 1) {
      col++;
      continue;
    } else if (col === cols - 1) {
      row++;
      continue;
    }
    
    if (grid[row][col + 1] > grid[row + 1][col]) {
      col++;
    } else {
      row++;
    }
  }

  return total;
}

// bottom-up refactor
function maxTreasure(grid) {
  let row = 0, col = 0, total = 0;
  const rows = grid.length, cols = grid[0].length;

  while (row < rows && col < cols) {
    total += grid[row][col];

    if (row === rows - 1) {
      col++;
    } else if (col === cols - 1) {
      row++;
    } else {
      (grid[row][col + 1] > grid[row + 1][col]) ? col ++ : row++;
    }
  }

  return total;
}

// top-down
function maxTreasure(grid) {
  const rows = grid.length, cols = grid[0].length;

  function bestPath(row, col, total = 0) {
    total += grid[row][col];

    if (row === 0 && col === 0) {
      return total;
    } else if (row === 0) {
      col--;
    } else if (col === 0) {
      row--;
    } else {
      (grid[row - 1][col] > grid[row][col - 1]) ? row-- : col--;
    }

    return bestPath(row, col, total);
  }

  return bestPath(rows - 1, cols - 1);
}

// top-down refactor
function maxTreasure(grid) {
  const rows = grid.length, cols = grid[0].length;

  const bestPath = (row, col, total = 0) => {
    total += grid[row][col];

    if (row === 0 && col === 0) return total;
    if (row === 0) return bestPath(row, col - 1, total);
    if (col === 0) return bestPath(row - 1, col, total);

    return (grid[row - 1][col] > grid[row][col - 1])
      ? bestPath(row - 1, col, total)
      : bestPath(row, col - 1, total);
  };

  return bestPath(rows - 1, cols - 1);
}

// top-down memoized solution - most optimized
function maxTreasure(grid) {
  const rows = grid.length, cols = grid[0].length;
  const cache = new Map();

  const bestPath = (row, col) => {
    if (row < 0 || col < 0) return 0;
    if (row === 0 && col === 0) return grid[row][col];

    const key = `${row},${col}`;
    if (cache.has(key)) return cache.get(key);

    const fromTop = row > 0 ? bestPath(row - 1, col) : 0;
    const fromLeft = col > 0 ? bestPath(row, col - 1) : 0;

    const maxTreasure = grid[row][col] + Math.max(fromLeft, fromTop);
    cache.set(key, maxTreasure);
    return maxTreasure;
  };

  return bestPath(rows - 1, cols - 1);
}

// Test cases
const grid1 = [[7]];
const grid2 = [[1, 3], [2, 4]];
const grid3 = [
  [1, 3, 1, 5],
  [2, 2, 4, 1],
  [5, 0, 2, 3],
  [0, 6, 1, 2]
];

const grid4 = [
  [1, 2, 3, 4, 5],
  [6, 7, 8, 9, 10],
  [11, 12, 13, 14, 15],
  [16, 17, 18, 19, 20],
  [21, 22, 23, 24, 25]
];

const grid5 = [
  [1, 1, 1, 1, 1, 1],
  [1, 2, 2, 2, 2, 1],
  [1, 2, 3, 3, 2, 1],
  [1, 2, 3, 3, 2, 1],
  [1, 2, 2, 2, 2, 1],
  [1, 1, 1, 1, 1, 1]
];

const largeGrid = Array(200).fill().map(() => Array(200).fill(1));

console.log(maxTreasure(grid1) === 7);
console.log(maxTreasure(grid2) === 8);
console.log(maxTreasure(grid3) === 17);
console.log(maxTreasure(grid4) === 149);
console.log(maxTreasure(grid5) === 21);
// The test case below should time out with a brute force approach.
console.log(maxTreasure(largeGrid) === 399);

// All test cases should log true