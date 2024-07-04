/*

Given an array of strings, arr, and an integer, k, return the kth distinct string present in arr.
If there are fewer than k distinct strings, return an empty string "".

Input:
  - Array of strings
  - Integer (the kth distinct string)

Output:
  - the kth distinct string
  
Rules:
  - Assume an array and integer will always be input
  - Assume the array and its strings can be of any length
  - Assume integer is not 0 or negative
  - Assume strings can contain any char
  - Assume array will not be sparse
  - Return empty string if array is empty
  - A distinct string defines a string that only occurs once in the array
  - If number of distinct strings is less than k, return an empty string

Examples:
  - (["d","b","c","b","c","a"], 2) => "a"
    - "a" is the second distinct string in the array, after "d"
  - (["hello", "hi", "hello", "goodbye"], 1) => "hi"
  - (["hi", "hello", "world"], 5) => ""
    - return empty string because k > number of distinct strings

DS:
  - Object: tally number of distinct strings
  - Array: to keep the order of the distinct strings, and use index to get it

ALGO:
  - if array is empty, return an empty string

  - count the occurence of each string in the array using an object
    - iterate over the array input:
      - if the key doesnt exist, assign the current string to the value 0
      - increment the string's value in the object, if seen again
    - assing the resulting object to a variable `count`

  - filter the strings that occur only once in the array
    - turn the `count` object to a 2d array where every sub array contains a [string, count]
    - iterate over the array and filter out subarrays that have a count greater than 1
    - assign array to a var `distinct`

  - return the kth string
    - from the `distinct` array
    - access the element at index k - 1
      - from the subarray return the element at index 1 which will be the distinct string
*/

function distinctString(arr, k) {
  if (arr.length === 0) return '';

  const count = arr.reduce((obj, str) => {
    if (!obj[str]) obj[str] = 0;
    obj[str] += 1;

    return obj;
  }, {});

  const distinct = [];
  
  arr.forEach(str => {
    if (count[str] === 1) distinct.push(str);
  });

  if (distinct.length < k) return '';

  return distinct[k - 1];
}

// refactor

function distinctString(arr, k) {
  if (arr.length === 0) return '';

  const count = {};
  arr.forEach(str => count[str] = (count[str] || 0) + 1);

  const distinct = arr.filter(str => count[str] === 1);

  return distinct.length < k ? '' : distinct[k - 1];
}

console.log(distinctString(["d","b","c","b","c","a"], 2)); // "a"
console.log(distinctString(["hello", "hi", "hello", "goodbye"], 1)); // "hi"
console.log(distinctString(["hi", "hello", "world"], 5)); // ""
console.log(distinctString([], 1)); // ""
console.log(distinctString(["1", "2", "3", "3", "5", "5", "8", "0"], 3)); // "8"
