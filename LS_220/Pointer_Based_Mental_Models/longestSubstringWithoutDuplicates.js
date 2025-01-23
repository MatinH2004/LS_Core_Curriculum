// Write a function `longestSubstringLenth` that finds the
// length of the longest substring without duplicates in a
// given string. The function should take a string as input
// and return an integer representing the length of the longest
// substring without any repeating characters. The input
// string will only contain lowercase characters.

/*

Given a string containing alphabetic characters, find the longest substring
without any duplicate characters, and return its length.

INPUT: string
OUTPUT: integer (length of longest substring)

RULES:
  - a string will always be input
  - find the longest unique substring and return its length
  - input string will only contain lowercase chars
  - if input is empty return 0

  Example:
  Input: s = "helloworld"
  Output: 5
  Explanation: The longest substring without repeating characters is "world",
  which has a length of 5.

DATA STRUCTURE
  - use a Set to keep track of seen chars
  - use anchor/runner pointers

ALGO: BRUTE FORCE O(N^2)
  - use nested loop to look for all substrings
  - find the larget substring without duplicates
  - return the length of the substring

ALGO: OPTIMIZED
  1. use a Map to keep track of characters in the substring
    - letter: index

  2. iterate over the string using anchor runner technique
    - start anchor and runner at idx 0
    - move anchor while there are duplicates in the current substring
      - before moving anchor, update value of char in Map to runner
    - move runner if while there are no duplicates in the substring
      - before moving runner, calculate the current substring length.
      - if greater than current result, update result
      - add char at runner in Map and set value to runner

  3. Stop iterating when runner goes out of bounds

*/

// Brute force O(n^2)
function longestSubstringLength(string) {
  const isUnique = (str) => new Set(str).size === str.length;
  let result = 0;

  for (let i = 0; i < string.length; i++) {
    for (let j = i + 1; j <= string.length; j++) {
      const substring = string.slice(i, j);
      if (isUnique(substring)) {
        result = Math.max(result, substring.length);
      }
    }
  }

  return result;
}

// Optimized
function longestSubstringLength(string) {
  const charMap = new Map();
  let result = 0;
  let a = 0;

  for (let r = 0; r < string.length; r++) {
    let char = string[r];

    if (charMap.has(char) && charMap.get(char) >= a) {
      a = charMap.get(char) + 1;
    }

    const currLen = r - a + 1;
    result = Math.max(result, currLen);
    charMap.set(char, r);
  }

  return result;
}

console.log(longestSubstringLength("a") === 1);
console.log(longestSubstringLength("aa") === 1);
console.log(longestSubstringLength("ab") === 2);
console.log(longestSubstringLength("abba") === 2);
console.log(longestSubstringLength("abc") === 3);
console.log(longestSubstringLength("helloworld") === 5);
console.log(longestSubstringLength("dvdf") === 3);
console.log(longestSubstringLength("tmmzuxt") === 5);
console.log(longestSubstringLength("thisishowwedoit") === 6);
console.log(longestSubstringLength("longestsubstring") === 8);
console.log(longestSubstringLength("aabbccddeffghijklmno") === 10);
console.log(longestSubstringLength("abcdefghijklmnopqrstuvwxyz") === 26);