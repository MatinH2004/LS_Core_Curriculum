// As a hydrologist, you're studying a unique rectangular island
// situated between the Atlantic Ocean and the Indian Ocean. The
// island's terrain varies in elevation across its surface.
// The island is represented as an m x n grid, where each cell has
// a specific elevation.

// The ocean borders are as follows:

// The Atlantic Ocean borders the island's western and northern coasts.
// The Indian Ocean borders the island's southern and eastern coasts.

// You're given an m x n integer matrix `heights` where `heights[r][c]`
// represents the height above sea level of the cell at coordinate (r, c).
// During the rainy season, water accumulates on the island and
// flows according to these rules:

// Water can flow from a cell to adjacent cells in four directions,
// north, south, east, and west if the adjacent cell's elevation
// is less than or equal to the current cell's elevation.
// Water can flow from any edge cell directly into the bordering ocean.

// Your task is to identify all the locations on the island where accumulated
// rainwater has the potential to eventually reach *both* the Atlantic and
// Indian Oceans, either directly or through connected cells.


// Example 1:

// Input:
// [
//  [1, 2, 1, 3, 6],
//  [2, 2, 3, 4, 4],
//  [2, 3, 5, 2, 1],
//  [9, 8, 1, 3, 5],
//  [5, 1, 2, 2, 3]
// ]

// Output: [[0,4],[1,3],[1,4],[2,2],[3,0],[3,1],[4,0]]

// Explanation:
// - [0,4] with an elevation of 6 can flow to the Atlantic Ocean (north) and the Indian Ocean (east) directly.
// - [1,3] with an elevation of 4 can flow to the Atlantic via [0,3] (as well as several other paths) and
//   can reach the Indian ocean via [1,4] (as well as several other paths).
// - [1,4] can flow to both oceans in a similar fashion as [1, 3].
// - [2,2] can reach Atlantic Ocean directly to the north or west and the Indian ocean directly to the east.
// - [3,0], [3,1], and [4,0] can flow to the Atlantic to the west and reach the Indian ocean to the south.

// Example 2:

// Input:
// [[1]]

// Output: [[0,0]]

// Explanation: On a single-cell island, water from the sole cell can reach both oceans.

/*

ALGO:
  - init atlanticReachable to Set
  - init indianReachable to Set
  - init prevHeight to 0
  - init result to empty array

  - define dfs function (row, col, set)
    - if out of bounds, or prevHeight is greater than current value
      - return from function
    - add coordinates to set
    - perform dfs search
      - up, right, down, left

  - iterate over first row and column
    - call dfs passing in atlanticReachable set

  - iterate over last row and column
    - call dfs passing in indianReachable set

  - iterate over grid
    - if coords are in both sets
      - add coords to array
      - push array to result

  - return result

*/

function waterFlow(heights) {
  if (!heights || heights.length === 0 || heights[0].length === 0) {
    return [];
  }

  const rows = heights.length;
  const cols = heights[0].length;

  const atlanticReachable = new Set();
  const indianReachable = new Set();
  
  const result = [];

  function dfs(row, col, set, prevHeight = 0) {
    if (
      row < 0 ||
      col < 0 ||
      row >= rows ||
      col >= cols ||
      set.has(`${row},${col}`) ||
      heights[row][col] < prevHeight      
    ) {
      return;
    }

    let height = heights[row][col];
    set.add(`${row},${col}`);

    dfs(row - 1, col, set, height);
    dfs(row, col + 1, set, height);
    dfs(row + 1, col, set, height);
    dfs(row, col - 1, set, height);
  }

  for (let row = 0; row < rows; row++) {
    dfs(row, 0, atlanticReachable, heights[row][0]);
    dfs(row, cols - 1, indianReachable, heights[row][cols - 1]);
  }

  for (let col = 0; col < cols; col++) {
    dfs(0, col, atlanticReachable, heights[0][col]);
    dfs(rows - 1, col, indianReachable, heights[rows - 1][col]);
  }

  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols; col++) {
      const key = `${row},${col}`;
      if (atlanticReachable.has(key) && indianReachable.has(key)) {
        result.push([row, col]);
      }
    }
  }

  return result;
}

// Helper function for the test cases

function coordinateSetsEqual(set1, set2) {
  if (set1.length !== set2.length) return false;
  const stringSet1 = new Set(set1.map(JSON.stringify));
  return set2.every(coord => stringSet1.has(JSON.stringify(coord)));
}

// Test Cases:

const grid1 = [
  [1, 2, 1, 3, 6],
  [2, 2, 3, 4, 4],
  [2, 3, 5, 2, 1],
  [9, 8, 1, 3, 5],
  [5, 1, 2, 2, 3]
];
const expected1 = [[0,4],[1,3],[1,4],[2,2],[3,0],[3,1],[4,0]];
console.log(coordinateSetsEqual(waterFlow(grid1), expected1));

const grid2 = [[1]];
const expected2 = [[0,0]];
console.log(coordinateSetsEqual(waterFlow(grid2), expected2));

const grid3 = [
  [3, 3, 3, 3, 3],
  [3, 2, 2, 2, 3],
  [3, 2, 1, 2, 3],
  [3, 2, 2, 2, 3],
  [3, 3, 3, 3, 3]
];
const expected3 = [[0,0],[0,1],[0,2],[0,3],[0,4],[1,0],[1,4],[2,0],[2,4],[3,0],[3,4],[4,0],[4,1],[4,2],[4,3],[4,4]];
console.log(coordinateSetsEqual(waterFlow(grid3), expected3));

const grid4 = [
  [1, 2, 3],
  [8, 9, 4],
  [7, 6, 5]
];
const expected4 = [[0,2],[1,0],[1,1],[1,2],[2,0],[2,1],[2,2]];
console.log(coordinateSetsEqual(waterFlow(grid4), expected4));

const grid5 = [
  [10, 10, 10, 10],
  [10,  1,  1, 10],
  [10,  1,  1, 10],
  [10, 10, 10, 10]
];
const expected5 = [[0,0],[0,1],[0,2],[0,3],[1,0],[1,3],[2,0],[2,3],[3,0],[3,1],[3,2],[3,3]];
console.log(coordinateSetsEqual(waterFlow(grid5), expected5));