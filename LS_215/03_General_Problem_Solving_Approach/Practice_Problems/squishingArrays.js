/*

Write a function that squishes an array from the left or the right.

Input:
  - array of numbers
  - string, representing direction of squish
Output:
  - 2D array of input array being squished
    - ex. [[1, 0, 2, -3], [1, 0, -1], [1, -1], [0]]
  
Rules:
  - Squishing from left is to successively sum the first two elements
  - Squishing from right is to successively sum the last two elements 
  - Include the original array in either squish
  - If input array is empty, return an empty array
  - Assume input array will not be sparse
  - Assume the 2nd arg will always be a string - 'right' or 'left'
  - Assume array only contains number data types

Modelling:
[1, 2, 3, 4, 5], "left" => [[1, 2, 3, 4, 5], [3, 3, 4, 5], [6, 4, 5], [10, 5], [15]]

iteration 1:
  [[1, 2, 3, 4, 5]]

iteration 2:
  [[1, 2, 3, 4, 5], [3, 3, 4, 5]]

iteration 3;
  [[1, 2, 3, 4, 5], [3, 3, 4, 5], [6, 4, 5]]

iteration 4:
  [[1, 2, 3, 4, 5], [3, 3, 4, 5], [6, 4, 5], [10, 5]]

iteration 5:
  [[1, 2, 3, 4, 5], [3, 3, 4, 5], [6, 4, 5], [10, 5], [15]]

[1, 2, 3, 4, 5], "right") => [[1, 2, 3, 4, 5], [1, 2, 3, 9], [1, 2, 12], [1, 14], [15]]

DS:
Array -> 2D Array

.slice()
.forEach()

Algorithm:

1. Define function `squishArray(arr, direction)`:
   - Input: `arr` (array of numbers), `direction` (string, "left" or "right")
   - Output: 2D array showing squish progression

2. If `arr` is empty:
   - Return an empty array

3. Initialize `result` as a 2D array with `arr` as its first element

4. Define helper function `squish(array)`:
   - If `direction` is "left":
     - Set `sum` = `array[0]` + `array[1]`
     - Return new array: `[sum, ...rest of array from index 2 onward]`
   - If `direction` is "right":
     - Set `sum` = `array[array.length - 2]` + `array[array.length - 1]`
     - Return new array: `[...array up to last 2 elements, sum]`

5. Set `currentArray` = `arr`

6. While `currentArray` has more than one element:
   - Set `currentArray` = `squish(currentArray)`
   - Append `currentArray` to `result`

7. Return `result`

*/

function squish(arr, direction) {
  if (arr.length === 0) return arr;

  const result = [arr.slice()];

  const squishArr = (array) => {
    if (direction === 'left') {
      const sum = array[0] + array[1];
      return [sum, ...array.slice(2)];
    } else {
      const sum = array[array.length - 2] + array[array.length - 1];
      return [...array.slice(2), sum];
    }
  }

  let currentArray = arr.slice();

  while (currentArray.length > 1) {
    currentArray = squishArr(currentArray);
    result.push(currentArray);
  }

  return result;
}

console.log(squish([1, 2, 3, 4, 5], "left"));     // [[1, 2, 3, 4, 5], [3, 3, 4, 5], [6, 4, 5], [10, 5], [15]]
console.log(squish([1, 0, 2, -3], "left"));       // [[1, 0, 2, -3], [1, 2, -3], [3, -3], [0]]
console.log(squish([4, 9, -3, 2, 5], "left"));    // [[4, 9, -3, 2, 5], [13, -3, 2, 5], [10, 2, 5], [12, 5], [17]]
console.log(squish([8, -7, 6, 1, 0, 2], "left")); // [[8, -7, 6, 1, 0, 2], [1, 6, 1, 0, 2], [7, 1, 0, 2], [8, 0, 2], [8, 2], [10]]
console.log(squish([8, 7], "left"));              // [[8, 7], [15]]
console.log(squish([8], "left"));                 // [[8]]
console.log(squish([], "left"));                  // []

// // Right Squish Tests
console.log(squish([1, 2, 3, 4, 5], "right"));    // [[1, 2, 3, 4, 5], [1, 2, 3, 9], [1, 2, 12], [1, 14], [15]]
console.log(squish([1, 0, 2, -3], "right"));      // [[1, 0, 2, -3], [1, 0, -1], [1, -1], [0]]
console.log(squish([4, 9, -3, 2, 5], "right"));    // [[4, 9, -3, 2, 5], [4, 9, -3, 7], [4, 9, 4], [4, 13], [17]]
console.log(squish([8, -7, 6, 1, 0, 2], "right")); // [[8, -7, 6, 1, 0, 2], [8, -7, 6, 1, 2], [8, -7, 6, 3], [8, -7, 9], [8, 2], [10]]
console.log(squish([8, 7], "right"));              // [[8, 7], [15]]
console.log(squish([8], "right"));                 // [[8]]
console.log(squish([], "right"));                  // []

// Refactor

function squishArray(arr, direction) {
  if (!arr.length) return [];

  const result = [arr];
  let current = arr;

  const squishLeft = ([first, second, ...rest]) => [first + second, ...rest];
  const squishRight = (arr) => {
    const lastIndex = arr.length - 1;
    return [...arr.slice(0, -2), arr[lastIndex - 1] + arr[lastIndex]];
  };

  const squish = direction === 'left' ? squishLeft : squishRight;

  while (current.length > 1) {
    current = squish(current);
    result.push(current);
  }

  return result;
}