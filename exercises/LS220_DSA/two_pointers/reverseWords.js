/*

### P

Given a string, reverse all the characters in each word while ensuring that the 
case of the each word remains unchanged. The spaces between words should also be
preserved as they are, and order of the words must not be altered.

Don't use Array#reverse method.

INPUT: string of words
OUTPUT: string of words (letters of words reversed)

RULES:
  - reverse all characters in each word
  - case and spaces should remain the same
  - dont alter order of words
  - assume a non-empty string will always be output

### E

'Hello' => 'olleH'
'Xing Ping' => 'gniX gniP'
'X' => 'X'

### D
str -> array -> str
Using arrays to split each word and map thru the array to make changes

### A
reverseWords(str): str {
  - split str into words
  - map over the array of words
    - for each stringin array, call reverseString() on the current string
  - join array back into a string using ' ' delimiter
  - return final string
}

reverseString(str): str {
  - init start and end pointers to 0 and array.length - 1 respectively
  - convert string into chars
  - while start is less than end
    - swap chars at idx start and end
    - increment start, decrement end
  - join chars back into string
  - return string
}

*/

function reverseWords(str) {
  return str.split(' ').map(reverseString).join(' ');
}

function reverseString(str) {
  let chars = str.split('');
  let end = str.length - 1;

  for (let start = 0; start < end; start++) {
    [chars[start], chars[end]] = [chars[end], chars[start]];
    end--;
  }

  return chars.join('');
}

console.log(reverseWords("Hello World") === "olleH dlroW");
console.log(reverseWords("JavaScript is fun") === "tpircSavaJ si nuf");
console.log(reverseWords("Coding in the sun") === "gnidoC ni eht nus");
console.log(reverseWords("Launch School") === "hcnuaL loohcS");
console.log(reverseWords("") === "");
