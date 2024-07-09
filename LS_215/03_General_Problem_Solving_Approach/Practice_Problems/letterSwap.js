/*

Given an array of strings and an original string, write a function to output an array of boolean values - 
true if the word can be formed from the original word by swapping two letters only once and false otherwise.

Input:
  - Array of strings
  - Original string
Output:
  - Array of boolean values

Rules:
  - Original string will always consist of unique characters
  - If two letters can be swapped to create the original string => true
  - If more than two letters need to be swapped => false
  - Assume arg will always be a string, and will be provided

Modelling:

Test case 1:
  Original - "ABCDE"
  -> "BACDE" - 2 letters are out of place => true
  -> "BCDEA" - more than 2 letters are out of place => false
  -> "ACBED" - more than 2 letters are out of place => false
  -> "EBCDA" - 2 letters are out of place => true

Data Structure:
I: Array
M: String -> Boolean
O: Array

Algo:
1) iterate over the input array, performing transformation
  - init a swapCount var to 0
  - iterate over the strings with the index
    - if current char is not equal to the char the current index, increment swapCount
  - return if swapCount is equal to 2

2) Return the newly transformed array

*/

function validateSwaps(arr, original) {
  return arr.map(str => {
    if (str.length !== original.length) return false;
    let swapCount = 0;

    for (let i = 0; i < original.length; i++) {
      if (str[i] !== original[i]) swapCount += 1;
    }

    return swapCount === 2;
  })
}

console.log(validateSwaps(["BACDE", "EBCDA", "BCDEA", "ACBED"], "ABCDE")); // [true, true, false, false]

// Swap "A" and "B" from "ABCDE" to get "BACDE".
// Swap "A" and "E" from "ABCDE" to get "EBCDA".
// Both "BCDEA" and "ACBED" cannot be formed from "ABCDE" using only a single swap.

console.log(validateSwaps(["32145", "12354", "15342", "12543"], "12345")); // [true, true, true, true]

console.log(validateSwaps(["9786", "9788", "97865", "7689"], "9768")); // [true, false, false, false]

console.log(validateSwaps(['9786', '9788', '97865', '7689'], '9768')); // [true, false, false, false]