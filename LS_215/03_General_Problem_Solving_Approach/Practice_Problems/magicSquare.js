/*

Create a function that takes a square 2D array as an argument and returns a Boolean (if it is: true, if it isn't: false).
Magic square: if all diagonals, horizontals, and verticals sum to the same number

Input:
  - matrix
Output:
  - boolean true/false

Rules:
  - The sum of all horizontals / verticals / diagonals must be the same
  - Will an arg always be provided? - Yes
  - Will the arg always be a matrix? - Yes
  - Can the matrix contain values other than numbers? - No
  - Can the matrix contain 0, or negative values? -Yes
  - Can the matrix contain special values like Infinity / -Inifinity / NaN? - No
  - Will the matrix always be square, meaning number of rows = number of cols? - Yes

DS:

Array -> Array -> Boolean

1. Get sum of all horizontals

2. Get sum of all verticals

3. Get sum of all diagonals

ALGO:

0. init len to length of matrix, init targetSum to sum of first horizontal

1. Iterate over the matrix getting the sum of all subarrays
  - add all numbers in the array
  - if sum doesn equal targetSum return false

2. Iterate over the matrix getting the sum of all columns
  - from 0 to length of matrix
    - add all number from each array at the index postion defined in outer loop
  - if sum doesn equal targetSum return false

3. Iterate over the matix getting the sum of all diagonals
  - get num from current array at current index (arr 0 - get num 0, arr 1 - get num 1...)
  - do the same thing again for the other diagonal (arr.length - idx - 1)
  - if the two sums dont equal each other or if sum1 doesn equal targetSum return false

4. Return true

*/

const isMagicSquare = matrix => {
  const len = matrix.length;
  const targetSum = matrix[0].reduce((total, num) => total + num, 0);

  // horizontal sum (start at idx 1 because we already have first sum above)
  for (let i = 1; i < len; i++) {
    const rowSum = matrix[i].reduce((total, num) => total + num, 0);
    if (rowSum !== targetSum) return false;
  }

  //vertical sum
  for (let i = 0; i < len; i++) {
    const colSum = matrix.reduce((total, arr) => total + arr[i], 0);
    if (colSum !== targetSum) return false;
  }

  // diagonal sum #1
  const diagSum1 = matrix.reduce((total, arr, idx) => total + arr[idx], 0);
  const diagSum2 = matrix.reduce((total, arr, idx) => total + arr[arr.length - idx - 1], 0);
  if ((diagSum1 !== diagSum2) || (diagSum1 !== targetSum)) return false;

  return true; 
}

console.log(isMagicSquare([
  [2, 7, 6],
  [9, 5, 1],
  [4, 3, 8]
])); // true

console.log(isMagicSquare([
  [16, 3, 2, 13],
  [5, 10, 11, 8],
  [9, 6, 7, 12],
  [4, 15, 14, 1]
])); // true

console.log(isMagicSquare([
  [1, 14, 14, 4],
  [11, 7, 6, 9],
  [8, 11, 10, 5],
  [13, 2, 3, 15]
])); // false
