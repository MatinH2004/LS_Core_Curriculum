/*

Write a function that takes an arbitrary MxN matrix, rotates it clockwise by 90-degrees as described above, 
and returns the result as a new matrix. The function should not mutate the original matrix.

*/

function rotate90(matrix) {
  const result = [];

  for (let i = 0; i < matrix[0].length; i++) {
    result.push([]);
  }

  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      result[j][matrix.length - 1 - i] = matrix[i][j];
    }
  }

  return result;
}

// refactor

function rotate90(matrix) {
  const rows = matrix.length;
  const cols = matrix[0].length;
  const result = Array.from({ length: cols }, () => Array(rows));

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      result[j][rows - 1 - i] = matrix[i][j];
    }
  }

  return result;
}

const matrix1 = [
  [1, 5, 8],
  [4, 7, 2],
  [3, 9, 6],
];

// console.log(matrix1[0]);

const matrix2 = [
  [3, 7, 4, 2],
  [5, 1, 0, 8],
];

const newMatrix1 = rotate90(matrix1);
const newMatrix2 = rotate90(matrix2);
const newMatrix3 = rotate90(rotate90(rotate90(rotate90(matrix2))));

console.log(newMatrix1);      // [[3, 4, 1], [9, 7, 5], [6, 2, 8]]
console.log(newMatrix2);      // [[5, 3], [1, 7], [0, 4], [8, 2]]
console.log(newMatrix3);      // `matrix2` --> [[3, 7, 4, 2], [5, 1, 0, 8]]