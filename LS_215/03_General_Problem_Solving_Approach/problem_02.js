/*
May 31, 2024

Start time: 4:30
End time: 5:08

---------- PROBLEM ----------
INPUT:
  - A string of numbers representing credit card / sin number
OUTPUT:
  - true/false based on if the numbers are valid according to Luhn formula

EXAMPLES:

Transforming to new digits:
  1111 -> 2121
  8763 -> 7733 (2 x 6 = 12; 12 - 9 = 3 AND 8 x 2 = 16; 16 - 9 = 7)

Summing digits
  2121 -> checksum of 6
  7733 -> checksum of 20

----------- RULES -----------
EXPLICIT:
  - Ignore all non-numeric numbers from input string
  - Starting from the rightmost digit, moving left:
    - double the value of every second digit
    - if the double value of the digit is more than 10, subtract 9 from the result
  - Add the new digits together to find the checksum of the number
  - If the checksum modulo 10 == 0:
    - the number is valid

IMPLICIT:
  - Only expect strings as input
  - If input is not a string or omitted, return false
  - If string is empty, return false

------- DATA STRUCTURE ------
input string -> array (reverse, iterate) -> boolean

--------- SCRATCH PAD -------

---------- ALGORITHM --------
Remove all non-numeric characters from the string
Split the string into an array of chars
Reverse the array of strings
Initialize a checksum array
Iterate through the array with element and index available
  - if index is odd, call helper function to double the value `doubler`
Sum the values of the checksum array
If the sum % 10 is 0 return true, return false otherwise

HELPER double(numStr) {} -> return num
  - convert input string to a number
  - double the number
  - if number is greater than 10, subtract 9
  - return the number

*/

function validLuhn(numStr) {
  if (numStr[0] === undefined) return false;

  let digits = numStr.match(/\d/g);
  let checksum = digits.reverse().reduce((arr, val, idx) => {
    if (idx % 2 !== 0) {
      arr.push(double(val));
    } else {
      arr.push(Number(val));
    }

    return arr;
  }, []);

  checksum = checksum.reduce((total, num) => total + num, 0);
  return checksum % 10 === 0;
}

function double(numStr) {
  let num = Number(numStr);
  num *= 2
  return num >= 10 ? (num - 9) : num;
}

// valid numbers
console.log(validLuhn("2323 2005 7766 3554") === true);  // true
console.log(validLuhn("8763") === true);                 // true
console.log(validLuhn("5454") === true);                 // true

// invalid numbers
console.log(validLuhn("1111") === false);                // false
console.log(validLuhn("9999") === false);                // false
console.log(validLuhn("4545") === false);                // false

// invalid inputs
console.log(validLuhn("") === false);                     // false