/*

Problem:

Write a function that takes an array of arrays that represents 
a 3x3 matrix and returns the transpose of the matrix.

Input: a matrix (outer array containing 3 sub arrays)
Output: transposed matrix

Examples:

const matrix = [
  [1, 5, 8],
  [4, 7, 2],
  [3, 9, 6],
];

matrix[0][0]
matrix[1][0]
matrix[2][0]

Iteration 1: [
  [1],
  [5],
  [8]
]

matrix[0][1]
matrix[1][1]
matrix[2][1]

Iteration 2: [
  [1, 4, ],
  [5, 7, ],
  [8, 2, ]
]

matrix[0][2]
matrix[1][2]
matrix[2][2]

Iteration 3: [
  [1, 4, 3],
  [5, 7, 9],
  [8, 2, 2]
]

Transposed:

[1, 5, 8],
[4, 7, 2],
[3, 9, 6]

Rules:
  - Assume if arg is not provided return empty array
  - Input array is a matrix which includes an outer array with 3 subarrays containing 3 numbers each
  - To transpose the matrix, we are transforming each row into a column
  - Function must not modify the calling array (return new matrix)

Data Structure:
I: array (matrix)
M: array (for built in functions)
O: array (matrix)

Algo:
1) Set default param to empty array incase no arg is provided

2) Initialize a new matrix

3) Iterate over the input matrix
  - Using a nested loop, iterate over the sub arrays
    - for every element in the sub array
      - set each value to the inner index of the subarrays

4) return matrix

*/

// Initial Solution
function transpose(matrix = []) {
  const transposed = [[], [], []];

  matrix.forEach(subarray => {
    subarray.forEach((num, i) => {
      transposed[i].push(num)
    });
  });

  return transposed;
}

// refactor
function transpose(matrix = []) {
  return matrix.map((row, rowIdx) => row.map((_, colIdx) => matrix[colIdx][rowIdx]));
}

const matrix = [
  [1, 5, 8],
  [4, 7, 2],
  [3, 9, 6]
];

const newMatrix = transpose(matrix);

console.log(newMatrix);      // [[1, 4, 3], [5, 7, 9], [8, 2, 6]]
// console.log(matrix);         // [[1, 5, 8], [4, 7, 2], [3, 9, 6]]

const test = [
  [5, 5, 5],
  [6, 6, 6],
  [7, 7, 7]
]

const transposed = transpose(test);

// console.log(test);
console.log(transposed);    // [[5, 6, 7], [5, 6, 7], [5, 6, 7]]