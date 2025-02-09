// You are given a 2D matrix of integers. Your task is to traverse the matrix
// in a spiral order, starting from the top-left corner and moving clockwise.
// Return an array containing all elements of the matrix in the order they
// are visited during the spiral traversal.

// The spiral order moves right, then down, then left, then up, and repeats
// this pattern until all elements have been visited.

// Example 1:
// Input:
// [
//  [10, 20, 30],
//  [40, 50, 60],
//  [70, 80, 90]
// ]
// Output: [10, 20, 30, 60, 90, 80, 70, 40, 50]

// [0, 0]
// [0, 1]
// [0, 2] // reached bounds
// [1, 2]
// [2, 2] // reached bounds
// [2, 1]
// [2, 0] // reached bounds
// [1, 0] // reached visited
// [1, 1] // reached end

// Example 2:
// Input:
// [
//  [1,  2,  3,  4],
//  [5,  6,  7,  8],
//  [9,  10, 11, 12],
//  [13, 14, 15, 16]
// ]
// Output: [1, 2, 3, 4, 8, 12, 16, 15, 14, 13, 9, 5, 6, 7, 11, 10]

/* 

ALGO:
  - init result to new array
  - if matrix is null, or matrix[0] is null 
    - return result

  - init top to 0
  - init left to 0
  - init bottom to length of matrix - 1
  - init right to length of first arr in matrix - 1

  - init size to area of matrix (length * height)

  - while length of result is less than size
    - iterate from left to right
      - add each value to result
    - increment top

    - iterate from top to bottom
      - add each value to result
    - decrement right

    - iterate from right to left
      - add each value to result
    - decrement bottom

    - iterate from bottom to top
      - add each value to result
    - increment left

  - return result

*/

function spiralTraversal(matrix) {
  const result = [];
  if (!matrix || !matrix[0]) return result;

  let top = 0,
      left = 0,
      bottom = matrix.length - 1,
      right = matrix[0].length - 1;

  const size = matrix.length * matrix[0].length;

  while (result.length < size) {
    for (let i = left; i <= right && result.length < size; i++) {
      result.push(matrix[top][i]);
    }
    top++;

    for (let i = top; i <= bottom && result.length < size; i++) {
      result.push(matrix[i][right]);
    }
    right--;

    for (let i = right; i >= left && result.length < size; i--) {
      result.push(matrix[bottom][i]);
    }
    bottom--;

    for (let i = bottom; i >= top && result.length < size; i--) {
      result.push(matrix[i][left]);
    }
    left++;
  }

  return result;
}

// Test cases
console.log(spiralTraversal([
  [10, 20, 30],
  [40, 50, 60],
  [70, 80, 90]
])); // Expected output: [10, 20, 30, 60, 90, 80, 70, 40, 50]

console.log(spiralTraversal([
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 10, 11, 12],
  [13, 14, 15, 16]
])); // Expected output: [1, 2, 3, 4, 8, 12, 16, 15, 14, 13, 9, 5, 6, 7, 11, 10]

console.log(spiralTraversal([
  [5, 10],
  [15, 20]
])); // Expected output: [5, 10, 20, 15]

console.log(spiralTraversal([
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [10, 11, 12]
])); // Expected output: [1, 2, 3, 6, 9, 12, 11, 10, 7, 4, 5, 8]

console.log(spiralTraversal([
  [1, 2, 3, 4, 5],
  [6, 7, 8, 9, 10],
  [11, 12, 13, 14, 15],
  [16, 17, 18, 19, 20]
])); // Expected output: [1, 2, 3, 4, 5, 10, 15, 20, 19, 18, 17, 16, 11, 6, 7, 8, 9, 14, 13, 12]

console.log(spiralTraversal([
  [1, 2, 3, 4, 5],
  [6, 7, 8, 9, 10],
  [11, 12, 13, 14, 15]
])); // Expected output: [1, 2, 3, 4, 5, 10, 15, 14, 13, 12, 11, 6, 7, 8, 9]

console.log(spiralTraversal([
  [42]
])); // Expected output: [42]

console.log(spiralTraversal([
  [1, 2, 3, 4, 5, 6]
])); // Expected output: [1, 2, 3, 4, 5, 6]

console.log(spiralTraversal([
  [1],
  [2],
  [3],
  [4],
  [5],
  [6]
])); // Expected output: [1, 2, 3, 4, 5, 6]