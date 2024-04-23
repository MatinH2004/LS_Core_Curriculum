/*

P:

  - if the char is alphabetic, change it 13 positions later in the alphabet.
    - a becomes n
  - Letter transformations persevere case
  - Only modify alphabetic chars

E:

console.log(rot13('Teachers open the door, but you must enter by yourself.'));

// logs:
Grnpuref bcra gur qbbe, ohg lbh zhfg ragre ol lbhefrys.

// [
//   'a', 'b', 'c', 'd', 'e', 'f',
//   'g', 'h', 'i', 'j', 'k', 'l',
//   'm', 'n', 'o', 'p', 'q', 'r',
//   's', 't', 'u', 'v', 'w', 'x',
//   'y', 'z'
// ]

// low case: 97 - 122
// upp case: 65 - 90

A:

1. initialize encrypted (new string) var to a empty string.
2. iterate through the input string
  - init charCode to ascii value
  - if char is alphabetical
    - add 13 if charCode is between 97-109 or 65-77
    - subtract 13 if charCode is between 110-122 or 78-90
  - add new char to encrypted string
3. Return encrypted string

*/

const ROT_SIZE = 13;
const LOWER_CASE_RANGE = { min: 97, max: 109 };
const UPPER_CASE_RANGE = { min: 65, max: 77 };

const isBetween = (value, min, max) => {
  return value >= min && value <= max;
}

const isAlphabetic = str => /[a-z]/i.test(str);

const rotateChar = charCode => {
  if (isBetween(charCode, LOWER_CASE_RANGE.min, LOWER_CASE_RANGE.max) ||
      isBetween(charCode, UPPER_CASE_RANGE.min, UPPER_CASE_RANGE.max)) {
    return charCode + ROT_SIZE;
  } else {
    return charCode - ROT_SIZE;
  }
}

function rot13(str) {
  let encrypted = '';

  for (let i = 0; i < str.length; i += 1) {
    let charCode = str[i].charCodeAt(0);

    if (isAlphabetic(str[i])) {
      charCode = rotateChar(charCode);
    }

    encrypted += (String.fromCharCode(charCode));
  }

  return encrypted;
}

console.log(rot13('Teachers open the door, but you must enter by yourself.'));

// logs:
// Grnpuref bcra gur qbbe, ohg lbh zhfg ragre ol lbhefrys.

console.log(rot13(rot13('Teachers open the door, but you must enter by yourself.')));

// logs:
// Teachers open the door, but you must enter by yourself.
