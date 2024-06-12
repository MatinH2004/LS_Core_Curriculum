/*
---------- PROBLEM ----------
INPUT:
  - integer
OUTPUT:
  - integer (featured num)

EXAMPLES:
  49 -> is a featured number
      - divisible by 7
      - odd
      - unique digits
  
  97 -> not a featured number
      - not a multiple of 7

  133 -> not a featured number
      - does not have unique digits

----------- RULES -----------
  - To be a featured number:
    - it must be odd
    - all of its digits must occur once
    - must be divisible by 7
  - Assume arg is always provided and is an integer

------- DATA STRUCTURE ------

--------- SCRATCH PAD -------

---------- ALGORITHM --------
PROGRAM:
  - iterate starting from input number
    - Check if input num is odd AND divisible by 7 AND has unique digits
      - use helper hasUniqueDigits()
      - use helper isMultipleOf7()
        - if conditions are met, return number
  - return "There is no possible number that fulfills those requirements."

HELPER: hasUniqueDigits() -> true/false
  - convert num to string
  - split num to array
  - compare length of num with array as Set object
  - return true or false based on if they have the same length;

HELPER: isMultipleOf7() -> true/false
  - check if input modulo 7 is equal to 0

*/

const LARGEST_FEATURED = 9876543201;
const ERROR_MSG = "There is no possible number that fulfills those requirements."

function featured(num) {
  let index = toNextOdd(num);

  while (index <= LARGEST_FEATURED) {
    if (hasUniqueDigits(index) && isMultipleOf7(index)) {
      return index;
    }
    
    index += 2;
  }

  return ERROR_MSG;
}

function hasUniqueDigits(num) {
  const digits = [...String(num)];
  return new Set(digits).size === digits.length;
}

function isMultipleOf7(num) {
  return num % 7 === 0;
}

function toNextOdd(num) {
  return num % 2 === 0 ? num + 1 : num + 2;
}

console.log(featured(12));           // 21
console.log(featured(20));           // 21
console.log(featured(21));           // 35
console.log(featured(997));          // 1029
console.log(featured(1029));         // 1043
console.log(featured(999999));       // 1023547
console.log(featured(999999987));    // 1023456987
console.log(featured(9876543186));   // 9876543201
console.log(featured(9876543200));   // 9876543201
console.log(featured(9876543201));   // "There is no possible number that fulfills those requirements."