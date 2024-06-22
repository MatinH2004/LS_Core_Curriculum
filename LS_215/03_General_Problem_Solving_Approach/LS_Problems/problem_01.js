/*

Write a program that cleans up user-entered phone numbers so that
they can be sent as SMS messages. Other than digits, the number may
also contain special character such as spaces, dash, dot, and
parentheses that should be ignored.

---- Problem ----
Input:
  - A string representing a phone number
Output:
  - A string of 10 digits representing the cleaned up phone number

General Rules:
  - If the phone number is less than 10 digits, assume that it is a bad number.
  - If the phone number is 10 digits, assume that it is good.
  - If the phone number is 11 digits and the first number is 1, trim the 1 and use the last 10 digits.
  - If the phone number is 11 digits and the first number is not 1, then it is a bad number.
  - If the phone number is more than 11 digits, assume that it is a bad number.
  - For bad numbers, just a return a string of 10 0s.

Edge Cases:
  - If string is empty, return zeros
  - If not input given, return zeros
  - If input contains chars other than digits and the valid chars, return zeros
  - If input is not a string, return zeros
  - The first char may not be a digit

Examples:
  - '111' ---> less than 10 numbers, return '0000000000'
  - '1234567899' ---> 10 numbers, return the numbers
  - '12222222222' ---> trim the 1, return the remaining numbers '222222222'
  - '22222222222' ---> first number is not 1, so it is a bad number, return '0000000000'
  - '9999999999999' ---> more than 11 digits, bad number, return '0000000000'
  - 'one two three' ---> string contains invalid chars, return '0000000000'

---- Data Structure ----
  - Using arrays and objects will not be necessary

---- Algorithm ----
1. Check if string only contains numbers, dashes, dots, spaces, and parentheses.
  - if not, return 10 zeros
2. Replace all special character in the string so that only the digits remain
3. Check if length of digits is 10
4. If length is eleven, makesure first number is 1
5. Return the 10 digits based on what the length is
  - if 10, return the string
  - if 11, chop off the first char and return the string

*/

const DEFAULT = '0'.repeat(10);

function cleanPhoneNumber(number) {
  if (typeof number !== 'string' || !validInput(number)) return DEFAULT;
  
  let digits = number.replace(/\D/g, '')
  if (!validLength(digits)) return DEFAULT;

  return digits.length === 10 ? digits : digits.slice(1);
}

function validInput(input) {
  return /^[\d\s?\-?\.\(\)?]+$/.test(input);
}

function validLength(string) {
  return string.length === 10 || (string.length === 11 && string[0] === '1');
}

console.log(cleanPhoneNumber('1234567899') === '1234567899');
console.log(cleanPhoneNumber('12222222222') === '2222222222');
console.log(cleanPhoneNumber('1 (778) 323-4696') === '7783234696');
console.log(cleanPhoneNumber('()(( .. 1234 .--- 567899   ') === '1234567899');

console.log(cleanPhoneNumber('111') === '0000000000');
console.log(cleanPhoneNumber('9999999999999') === '0000000000');
console.log(cleanPhoneNumber('one two three') === '0000000000');

console.log(cleanPhoneNumber(123456789) === '0000000000');
console.log(cleanPhoneNumber() === '0000000000');
console.log(cleanPhoneNumber([1,2,3,4,5]) === '0000000000');

// Updated Solution:

function cleanNumber(input) {
  if (typeof input !== 'string') return '0'.repeat(10);
  
  const digits = input.replace(/\D/g, '');

  if (digits.length === 10) return digits;
  if (digits.length === 11 && digits[0] === '1') return digits.slice(1);

  return '0'.repeat(10);
}