"use strict";
/*
Start time: 11:47

---------- PROBLEM ----------
INPUT:
  - A string of a word
OUTPUT:
  - True/false based on if the word can be spelled.

EXAMPLES:

Blocks:
  B:O   X:K   D:Q   C:P   N:A
  G:T   R:E   F:S   J:W   H:U
  V:I   L:Y   Z:M

  'Batch' => true (every letter is from different blocks)
  'Butch' => false (H:U are together, cannot use both letters)

----------- RULES -----------
EXPLICIT:
  - Given the blocks of letters, determine if the input word can be spelled
  - Input string is case insensitive
  - Can only use each block once (dont use both letters from the block)

IMPLICIT:
  - Assuming if the input string is empty, return false
  - Assume the input string only contains alphabetic characters
  - If input contains duplicate letters, return false

------- DATA STRUCTURE ------
input: string
split: array
blocks: 2D array
  - [['B', 'O'], ...]
output: boolean

--------- SCRATCH PAD -------

---------- ALGORITHM --------
- Initialize BLOCKS constant to a 2d array of the letter blocks
- Return false if input string is empty or contains duplicate values
- make the input string uppercase to match block letters
- Split input into array of chars
- If chars includes duplicate values return false
- Iterate over BLOCKS array
  - for each sub array
    - check if both letters are present in the chars array
    - if yes, return false
- return true

HELPER: isUnique(string) {} -> true/false
- count each letter from the string
- if any letter count is greater than 1, return false, else true
*/

const BLOCKS = [
  ['B', 'O'],
  ['X', 'K'],
  ['D', 'Q'],
  ['C', 'P'],
  ['N', 'A'],
  ['G', 'T'],
  ['R', 'E'],
  ['F', 'S'],
  ['J', 'W'],
  ['H', 'U'],
  ['V', 'I'],
  ['L', 'Y'],
  ['Z', 'M'],
]

function isBlockWord(string) {
  string = string.toUpperCase();
  if (string.length === 0 || !isUnique(string)) return false;

  let chars = string.split('');
  for (let i = 0; i < BLOCKS.length; i += 1) {
    let block = BLOCKS[i];

    if (chars.includes(block[0]) && chars.includes(block[1])) {
      return false;
    }
  }

  return true;
}

function isUnique(string) {
  let count = string.split('').reduce((counter, char) => {
    if (counter[char]) {
      counter[char] += 1
    } else {
      counter[char] = 1;
    }

    return counter
  }, {})

  return Object.values(count).every(num => num === 1);
}

console.log(isBlockWord('BATCH'));      // true
console.log(isBlockWord('bAtCh'));      // true
console.log(isBlockWord('jest'));       // true
console.log(isBlockWord('floW'));       // true

console.log(isBlockWord('BUTCH'));      // false
console.log(isBlockWord('BATCHH'));     // false
console.log(isBlockWord('TTTTT'));      // false
console.log(isBlockWord(''));           // false

console.log(isBlockWord('APPLE'));      // false
console.log(isBlockWord('apple'));      // false
console.log(isBlockWord('apPLE'));      // false
console.log(isBlockWord('Box'));        // false
