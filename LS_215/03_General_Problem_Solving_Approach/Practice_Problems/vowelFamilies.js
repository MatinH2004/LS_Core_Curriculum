/*

Write a function that selects all words that have all the same vowels 
(in any order and/or number) as the first word, including the first word.

Input:
  - array of strings
Output:
  - array of strings with same vowels

Rules:
  - Return an array of strings with the same vowels
  - Always want to return the first string
  - The vowels in the strings can be in any order or any quantity
  - If array contains only one string, return an array with the string1
  - Assume the arg will always be an array and will be provided
  - Assume if input is empty, return an empty array
  - Assume no sparse arrays will be needed
  - Assume output array does not have to be sorted

Modelling:
['hello', 'hi', 'cello', 'ceo', 'bro']
  -> ['hello', 'cello', 'ceo']

DS:
I - Array
M - Regex, Strings to find vowels => append matches to result array
O - Result array

Algorithm:
  - if an empty array OR array with one element is input, return the input array

  - init `first` variable, to an array object of vowels present in the first string of input array
  
  - iterate over the input array, using selection:
    - using a helper func sameVowels(str1, str2) to compare if `first` and the current string have the same vowels
    - return this array as the result

Helper: sameVowels(str1, str2) -> true/false
  - convert both strings into an array of chars
  - iterate over the longest array
    - every element is present in the other array
      - return true
  - otherwise, return false

*/

function sameVowelGroup(words) {
  console.log(words);
  if (words.length === 0 || words.length === 1) return words;

  const firstVow = words[0];

  return words.filter((word) => sameVowels(firstVow, word));
}

function sameVowels(s1, s2) {
  const vow1 = (s1.match(/[aeiou]/ig) || []);
  const vow2 = (s2.match(/[aeiou]/ig) || []);

  return vow1.every(vow => vow2.indexOf(vow) !== -1);
}

console.log(sameVowelGroup(["toe", "ocelot", "maniac"]));                       // ["toe", "ocelot"]
console.log(sameVowelGroup(["many", "carriage", "emit", "apricot", "animal"])); // ["many"]
console.log(sameVowelGroup(["hoops", "chuff", "bot", "bottom"]));               // ["hoops", "bot", "bottom"]
console.log(sameVowelGroup(['hello', 'hi', 'cello', 'ceo', 'bro']));            // ['hello', 'cello', 'ceo']
console.log(sameVowelGroup(['code']));                                          // ['code']
console.log(sameVowelGroup([]));                                                // []

// Refactor using PFA

function sameVowelGroup(words) {
  if (words.length === 0 || words.length === 1) return words;
  const sameVowels = compareVowels(words[0]);
  return words.filter(sameVowels);
}

function compareVowels(s1) {
  const vow1 = (s1.match(/[aeiou]/ig) || []);

  return (s2) => {
    const vow2 = (s2.match(/[aeiou]/ig) || []);
    return vow2.every(vow => vow1.indexOf(vow) !== -1);
  }
}
