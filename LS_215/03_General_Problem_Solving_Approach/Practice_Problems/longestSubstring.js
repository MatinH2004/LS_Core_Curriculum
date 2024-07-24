/*

Write a function that returns the longest non-repeating substring for a string input.

input:
  - string
output:
  - longest non repeating substring

rules:
  - input string will always contain alphabetic chars
  - input string will always be provided, and will always be a non-empty string
  - input string will never contain special values
  - the function will have to return the longest non-repeating substring
  - non-repeating meaning a string with unique chars
  - if there are more than 1 longest non-repeating substrings, return the first one found

DS:

string -> array -> string

1. "abcabcbb"
2. ['a', 'ab', 'abc']
3. return 'abc'

ALGO:

1. init substrings array

2. use a nested loop to push all non-repeating substrings to substrings array
  - iterate from 0 to length of string (i)
    - iterate from i + 1 to length of string
      - if string is (using helper) isNonRepeating()
        - push to substrings array

3. find the length of the longest substring
  - transform the substrings array into lengths of each string inside (non-mutative)
  - get the max string length from the array
  - set the value to a variable: max

4. return the first substring in the substrings array with the max length found in step 3
  - iterate through the substrings array
    - return the first substring that matches the max length

ALGO isNonRepeating() -> true/false:

1. convert input string into a Set

2. compare and return the length of input string and the size of Set

*/

function longestNonrepeatingSubstring(str) {
  const substrings = [];

  for (let i = 0; i < str.length; i++) {
    for (let j = i + 1; j <= str.length; j++) {
      if (isNonRepeating(str.slice(i, j))) {
        substrings.push(str.slice(i, j));
      }
    }
  }

  const max = Math.max(...substrings.map(s => s.length));
  return substrings.find(s => s.length === max);
}

function isNonRepeating(str) {
  return new Set(str).size === str.length;
}

console.log(longestNonrepeatingSubstring("abcabcbb")); // "abc"

console.log(longestNonrepeatingSubstring("aaaaaa")); // "a"

console.log(longestNonrepeatingSubstring("abcde")); // "abcde"

console.log(longestNonrepeatingSubstring("abcda")); // "abcd"

console.log(longestNonrepeatingSubstring("kjlmjsdfewii")); // "lmjsdfewi"

console.log(longestNonrepeatingSubstring("kjlmjjiiiidfewii")); // "idfew"

console.log(longestNonrepeatingSubstring("kjlmjjiiiidfiwii")); // "kjlm"