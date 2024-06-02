/*
Start time: 12:51

---------- PROBLEM ----------
INPUT:
  - A string containing alphanumeric chars
OUTPUT:
  - A string with letters and numbers switched places.

EXAMPLES:
  ("1a2b3c") === "a1b2c3"

  ("abcd123") === "123dabc")

----------- RULES -----------
  - Assume the input will always be a string
  - Other types of characters may be present. You can add them to the new string as-is.
  - If an empty string is input, return an empty string
  - From the input string, swap the places of alphabetical chars with numbers
  - If string only contains numbers / letters, return the string
  - The string can contain upper case letters

------- DATA STRUCTURE ------
string -> array -> string

--------- SCRATCH PAD -------
- use match to get all non-numeric values
- use shift(1) to add values to the result string
- indexOf might be helpful

---------- ALGORITHM --------
- if input string is empty return empty string.
- split input stirng and assing it to `chars`
- initialize nums to digits in `chars`
- initialize letters to case-insensitive letters in `chars`
- return the input string if length of letters or nums is 0
- Iterate (map) through `chars`
  - if current char is a letter and nums array contains elements
    - transform to first element from the nums array
  - if current char is a number and letters array contains elements
    - transform first element from the letters array
  - if no condition are met return current char
- return joined array
*/

const isLetter = char => /[a-z]/i.test(char);
const isDigit = char => /\d/.test(char);

function swap(str) {
  if (str.length === 0) return str;

  const chars = str.split('');
  const letters = chars.filter(isLetter);
  const nums = chars.filter(isDigit);

  if (letters.length === 0 || nums.length === 0) return str;

  const swapped = chars.map(char => {
    if (isLetter(char) && nums.length > 0) return nums.shift();
    else if (isDigit(char) && letters.length > 0) return letters.shift();

    return char;
  });

  return swapped.join('');
}

console.log(swap("1a2b3c") === "a1b2c3");   // true
console.log(swap("abcd123") === "123dabc"); // true
console.log(swap("") === "");               // true

console.log(swap("12a") === "a21");         // true
console.log(swap("ab1") === "1ba");         // true
console.log(swap("abcd") === "abcd");       // true
console.log(swap("1") === "1");             // true

console.log(swap("123-4a#b$") === "ab3-41#2$"); // true               
console.log(swap("ab1CD23") === "12a3DbC");     // true