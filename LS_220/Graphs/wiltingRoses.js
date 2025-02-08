// You're a botanist studying the spread of a peculiar wilting
// condition in a rose garden. The garden is represented as a
// grid where each cell can have one of three states:

// - 0 representing an empty plot,
// - 1 representing a healthy rose, or
// - 2 representing a wilted rose.

// Every day, any healthy rose that is adjacent (up, down, left,
// or right) to a wilted rose begins to wilt.
// Your task is to determine the minimum number of days it takes
// for all roses in the garden to wilt. If it's impossible for
// all roses to wilt, return -1.

// Example 1:

// Input:
// [
//   [2,1,1],
//   [1,1,0],
//   [0,1,1]
// ]

// Output: 4

// Explanation:
// Day 1: Roses at (0, 1) and (1, 0) will wilt.
// Day 2: Roses at (0, 2) and (1, 1) will wilt.
// Day 3: The rose at (2, 1) will wilt.
// Day 4: The final rose at (2, 2) will wilt.

// Example 2:

// Input:
// [
//   [2,1,1],
//   [0,1,1],
//   [1,0,1]
// ]

// Output: -1

// Explanation: The rose in the bottom left corner (2, 0)
// will never wilt because it's not adjacent to any
// other roses.

function wiltedRoses(garden) {
  const rows = garden.length;
  if (rows === 0) return -1;
  const cols = garden[0].length;

  let healthyRoses = 0;
  let queue = [];

  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      if (garden[r][c] === 2) {
        queue.push([r, c]);
      } else if (garden[r][c] === 1) {
        healthyRoses++;
      }
    }
  }

  let days = 0;

  while (queue.length > 0 && healthyRoses > 0) {
    let currentWiltedCount = queue.length;

    for (let i = 0; i < currentWiltedCount; i++) {
      const [x, y] = queue.shift();

      for (const [dx, dy] of [[1, 0], [-1, 0], [0, 1], [0, -1]]) {
        const xx = x + dx;
        const yy = y + dy;

        if (xx < 0 || xx >= rows || yy < 0 || yy >= cols) {
          continue;
        }
        if (garden[xx][yy] === 0 || garden[xx][yy] === 2) {
          continue;
        }

        garden[xx][yy] = 2;
        healthyRoses--;
        queue.push([xx, yy]);
      }
    }

    days++;
  }

  return healthyRoses > 0 ? -1 : days;
}

// Test Cases:

console.log(wiltedRoses([[2,1,1],[1,1,0],[0,1,1]]) === 4);
console.log(wiltedRoses([[2,1,1],[0,1,1],[1,0,1]]) === -1);
console.log(wiltedRoses([[0,2]]) === 0);
console.log(wiltedRoses([[1,1,1],[1,2,1],[1,1,1]]) === 2);
console.log(wiltedRoses([[2,2],[1,1],[0,0]]) === 1);
console.log(wiltedRoses([[1,1,1],[1,1,1],[1,1,1]]) === -1);
console.log(wiltedRoses([[2]]) === 0);
console.log(wiltedRoses([[1]]) === -1);
console.log(wiltedRoses([]) === -1);
console.log(wiltedRoses([[0,0,0],[0,1,0],[0,0,2]]) === -1);
console.log(wiltedRoses([[2,1,1],[1,1,1],[0,1,2]]) === 2);