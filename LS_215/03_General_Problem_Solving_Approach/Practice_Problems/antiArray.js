/*

Given two arrays, return whether the two arrays are opposites of each other.
That means both arrays are comprised only from elements a and b and the 
occurrences of these elements are swapped between the two arrays.

Input:
  - 2 array containing 2 types of elements (of any length)
Output:
  - True / False

Rules: 
  - The input arrays will always be provided
  - The function must determine if the arrays are opposites
  - The input arrays will:
    - not be sparse
    - be of any length
    - will contain only 2 distinct types of elements
    - will not contain non-primitive data types
    - the same length as each other
  - If both arrays' elements are in the same order, they are not opposites
  - In arr1 where element a is, arr2 must have element b in that position

DS:

Array -> Array -> Boolean

ALGO:
0. Determine if both arrays contain the same elements
  - if not, return false
  - use helper function sameElements()

1. using for loop, iterate from 0 to length of one of the arrays

2. At each index position, check if elements from both arrays are equal to each other
  - return false if they are equal

3. Return true

HELPER: sameElements(arr1, arr2) -> true/false
  - iterate through one of the arrays
    - for every element, check that the index of it is greater than or equal to 0 in the other array
*/

function isAntiArray(arr1, arr2) {
  if (!sameElements(arr1, arr2)) return false;

  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] === arr2[i]) return false;
  }

  return true;
}

// function sameElements(arr1, arr2) {
//   for (let i = 0; i < arr1.length; i++) {
//     if (arr2.indexOf(arr1[i]) === -1) return false;
//   }

//   return true;
// }

// optimized sameElements function:

function sameElements(arr1, arr2) {
  if (arr1.length !== arr2.length) return false;
  
  const set1 = new Set(arr1);
  const set2 = new Set(arr2);

  if (set1.size !== set2.size) return false;

  for (const elem of set1) {
    if (!set2.has(elem)) return false;
  }

  return true;
}

console.log(isAntiArray(["1", "0", "0", "1"], ["0", "1", "1", "0"])); // true

console.log(isAntiArray(["apples", "bananas", "bananas"], ["bananas", "apples", "apples"])); // true

console.log(isAntiArray([3.14, true, 3.14], [3.14, false, 3.14])); // false

console.log(isAntiArray([6.28, true, 6.28], [true, false, true])); // false