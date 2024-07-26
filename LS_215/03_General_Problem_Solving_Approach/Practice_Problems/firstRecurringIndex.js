/*

INPUT:
  - a string of characters
OUTPUT:
  - an object with the character as key, and an array of first and second occurence idx
  - ex. {'A': [0, 5]}

RULES:
  - if the argument is not provided / empty str, null or undefined is input:
    - return an empty obj
  - the input string will not contain spaces
  - the input string can contain any character
  - the input string can contain lowercase or uppercase characters
  - given the string:
    - find the first character that recurrs in the string
    - find the first and second occurence of the char in the string
    - return an object with the char as its key and an array with the two index positions
    - ex. 'ABCDA' => {'A': [0, 4]}

DS: string -> array -> object

'ABCDA' => {'A': [0, 4]}
'' / null / undefined => {}

"YXZXYTUVXWV" =>
['Y', 'X', 'Z', 'X']

=> return {'X' => [1, 3]}

Helpful functions:
indexOf()
lastIndexOf()

ALGO:
1. if input is not a valid string, return an empty obj
  - invalid: '', null, indefined

2. init chars array

3. iterate over input string pushing the characters to chars array until a duplicate is found
  - if current char is present in chars array
    - push it to chars array
    - break out of loop
  - push current char to chars array

4. determine which char is the duplicate
  - the duplicate char would be the char we pushed last to the array

5. find the indexes of the duplicate char

6. Assemble the result object and return it

*/

function recurIndex(str) {
  if (!str) return {};

  const chars = [];

  for (let i = 0; i < str.length; i++) {
    if (chars.includes(str[i])) {
      chars.push(str[i]);
      break;
    }

    chars.push(str[i]);
  }

  const duplicate = chars[chars.length - 1];
  const positions = [chars.indexOf(duplicate), chars.lastIndexOf(duplicate)];

  return { duplicate: positions };
}

console.log(recurIndex("DXTDXTXDTXD")); // {"D": [0, 3]}
// D first appeared at index 0, resurfaced at index 3
// T appeared and resurfaced at indices 3 and 6 but D completed the cycle first

console.log(recurIndex("YXZXYTUVXWV")); // {"X": [1, 3]}

console.log(recurIndex("YZTTZMNERXE")); // {"T": [2, 3]}

console.log(recurIndex("AREDCBSDERD")); // {"D": [3, 7]}

console.log(recurIndex("")); // {}

console.log(recurIndex(null)); // {}