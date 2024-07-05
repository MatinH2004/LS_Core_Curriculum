/*

Write a function that takes a two-dimensional array as the argument and turns it into a flat array with all 
duplicated elements removed. Treat numbers and number strings (e.g., 1 and '1') as duplicates, and keep the 
one that comes first in the result.

Input:
  - A 2D array

Output:
  - An array with all the arrays within the 2D array merged, with no duplicate values

Rules:
  - Assume the arrays only contain strings and numbers
    - arrays can contain NaN, Infinity, -Infinity values
  - Given an array that contains subarrays
    - merge the sub arrays into one single array
    - remove duplicate values (keep the ones seen first)
    - If input array contains no elements, return an empty array
  - number digits and digits in string form are considered the same 1 = '1'
  - Start with adding elements from the first subarr, then continue to the next
  
DS:
  - I: 2D Array
  - M: Array
  - O: Array

Algo:
  - if length of array is 0, return an empty array

  - init a result array

  - iterate over the input array
    - for every subarray
      - if result contains current element in number or string form; continue
      - add element to the result array

  - return result array
*/

function flattenAndUnique(arr) {
  if (arr.length === 0) return [];

  const result = [];

  arr.forEach(subarr => {
    for (elem of subarr) {
      if (result.some(n => n == elem)) continue;
      result.push(elem);
    }
  });

  return result;
}

console.log(flattenAndUnique([])); // []
console.log(flattenAndUnique([[1, 2, 3], ['3', 4, 5, 'a']])); // [1, 2, 3, 4, 5, 'a']
console.log(flattenAndUnique([[1, '2', 3], ['1', 2, '3']])); // [1, '2', 3]