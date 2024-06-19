/*
Write a function that takes in an array of integers and returns the integers that are either palindromes or almost-palindromes. An almost-palindrome is any integer that can be rearranged to form a palindrome.

For example, the numbers 677 and 338 are both almost-palindromes, since they can be rearranged to form 767 and 383, respectively.

Examples
palindromeSieve([443, 12, 639, 121, 3232]) ➞ [443, 121, 3232]
// Since 443 => 434; 121 is a palindrome; 3232 => 2332 or 3223

palindromeSieve([5, 55, 6655, 8787]) ➞ [5, 55, 6655, 8787]
// Single-digit numbers are automatically palindromes.

palindromeSieve([897, 89, 23, 54, 6197, 53342]) ➞ []
Notes
Return an empty array if none of the numbers are palindromes or almost-palindromes.


palindromeSieve([443, 12, 639, 121, 3232]), [443, 121, 3232])
palindromeSieve([5, 55, 6655, 8787]), [5, 55, 6655, 8787])
palindromeSieve([897, 89, 23, 54, 6197, 53342]), [])


Start time: 8:20 - 9:10
---------- PROBLEM ----------
RESTATE:
Given an array of numbers, return a new array containing palindromic and almost-palindrome numbers.

INPUT:
- Array of integers

OUTPUT:
- New array of palindromic and almost-palindromic numbers

EXAMPLES:
- palindrome:
  - 121
  - 5
  - 55

- almost-palindrome:
  - 443 => 434
  - 3232 => 3223 / 2332
  - 6655 => 6556 / 5665

----------- RULES -----------
  - In the resulting array, include palindrome and almost-palindrome numbers
  - If input array contains no such numbers, reutrn empty array
  - If array contains non-integer values, simply ingore them
  - If no arg is provided, return empty Array
  - Numbers must be palindrome / almost-palindrome to be in resulting array
    - single and double digit numbers are considered palindromes
  - Almost-palindromes:
    - if the length of the digit is odd; there must be an even number of the same digits
      - 443 => 434
      - 53555 => 55355
    - if the length of the digit is even; there must be the same number of the two digits
      - 3232 => 3223
      - 6565 => 5665 / 6556

------- DATA STRUCTURE ------
Input: array [443, 12, 639, 121, 3232]
['4', '4', '3']

53555 => digitsCount = {5: 4, 3: 1}
433 => digitCount = {4: 1, 3: 2}

Output: array []

.filter()

---------- ALGORITHM --------
1) If arg is not an array return an empty array
2) Initialize a result array
3) Iterate over the input array; pushing palindromes and almost-palindromes to result
4) Return result

----

1) If arg is not an array return an empty array

2) Initialize a result array

3) Iterate over the input array; pushing palindromes and almost-palindromes to result
  - If the current element is not an integer value; do nothing;
  - If integer is a palindrome OR almost-palindrome
    - push to result array

4) Return result

HELPER: isPalindrome(int) -> true/false
  - convert the integer into a string
  - split the string to get individual digits
  - compare the original number string to reversed version of the array joined

HELPER: isAlmostPalindrome(int) -> true/false
  - initialize a digitCount obj
  - convert integer to string
    - split the string into digits
    - iterate over the digits, counting them (assign as keys, and count for values)
  - if length of digits is odd:
    - if the object contains 2 keys, and at least one of the count of digits is even
      - return true
  - if length of digits is even:
    - return true if all values of DigitCount is even
  - return false

*/

function palindromeSieve(array) {
  if (!Array.isArray(array)) return [];

  return array.filter(elem => {
    if (!Number.isInteger(elem)) return false;
    return isPalindrome(elem) || isAlmostPalindrome(elem);
  });
}

function isPalindrome(int) {
  const strNum = String(int);
  return strNum === [...strNum].reverse().join('');
}

function isAlmostPalindrome(int) {
  const digits = [...String(int)].map(Number);
  const digitCount = digits.reduce((obj, num) => {
    obj[num] = obj[num] || 0;
    obj[num] += 1;
    return obj
  }, {});

  if (digits.length % 2 === 1 && 
      Object.keys(digitCount).length === 2 &&
      Object.values(digitCount).some(num => num % 2 === 0)) {
    return true;
  } else if (digits.length % 2 === 0 && 
             Object.values(digitCount).every(num => num % 2 === 0)) {
    return true;
  }

  return false;
}

console.log(palindromeSieve([443, 12, 639, 121, 3232]));        // [443, 121, 3232]
console.log(palindromeSieve([5, 55, 6655, 8787, 5555555]));     // [5, 55, 6655, 8787, 5555555]
console.log(palindromeSieve([897, 89, 23, 54, 6197, 53342]));   // []
console.log(palindromeSieve());                                 // []
console.log(palindromeSieve([443, 12, 55355, 5855255]));        // [443, 55355]
