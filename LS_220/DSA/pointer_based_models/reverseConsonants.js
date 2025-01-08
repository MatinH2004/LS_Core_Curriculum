// Given a string `str`, reverse all the consonants in the string and return it.
// Consonants are all alphabetic characters except for the vowels `'a'`, `'e'`, `'i'`,
// `'o'`, and `'u'`, which can appear in both lower and upper cases.
// The consonants can appear more than once in the string.

/*

RULES:
  - reverse all non-vowel letters
  - all vowels must keep the same position
  - string is case insensitive
  - empty string input should return "";

DS: string

ALGORITHM:
  - define start and end, at idx 0 and length - 1 positions
  - split string into individual letters in array
  - loop while start is less than end:
    - if letters at both positions are consonants, swap places
    - if letter at position start is a vowel, increment start
    - if letter at position end is a vowel, increment end
  - join array back into string
  - return string

V2:
  - gather all consonants from the input string
  - iterate over input string starting from the last index:
    - if current letter is a consonant
      - replace with first consonant available in array
  - return new string
*/

// My Solution:
// TC O(N)
// SC O(N)
function reverseConsonants(str) {
  const consonants = str.match(/[^aeiou]/ig);
  const letters = str.split('');

  for (let i = letters.length - 1; i >= 0; i--) {
    if (/[^aeiou]/i.test(letters[i])) {
      letters[i] = consonants.shift();
    }
  }

  return letters.join('')
}

// LS Solution:
// TC O(N)
// SC O(1)
const isConsonant = char => /[^aeiou]/i.test(char);

function reverseConsonants(str) {
  let chars = str.split('');
  let s = 0;
  let e = str.length - 1;

  while (s < e) {
    if (!isConsonant(chars[s])) {
      s++;
      continue;
    }

    if (!isConsonant(chars[e])) {
      e--;
      continue;
    }

    [chars[s], chars[e]] = [chars[e], chars[s]];
    s++;
    e--;
  }

  return chars.join('');
}

console.log(reverseConsonants("") === "");
console.log(reverseConsonants("s") === "s");
console.log(reverseConsonants("HELLO") === "LELHO");
console.log(reverseConsonants("leetcode") === "deectole");
console.log(reverseConsonants("example") === "elapmxe");
console.log(reverseConsonants("Consonants") === "sotnonasnC");

// All test cases should log true