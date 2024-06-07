/*

Write a function that rotates the last n digits of a number. For the rotation, 
rotate by one digit to the left, moving the first digit to the end.

---------- PROBLEM ----------
INPUT:
  - Integer: number
  - Integer: n (shift factor)

OUTPUT:
  - Integer: shifted number

EXAMPLES:

735291 shift by 2 === 735219

735291 shift by 4 === 732915

----------- RULES -----------
  - function should switch places of the last n digit with the last digit
  - assume input integers are positive integers

------- DATA STRUCTURE ------
  - array

--------- SCRATCH PAD -------

---------- ALGORITHM --------
  - coerce number into string
  - split string into digits
  - get the last part of the array starting with the nth digit
  - use shift function from previous exercise to rotate the first num to end of array
  - combine rotated array with the unshifted array
  - join array and coerce back to number and return

*/

function rotateArray(arr) {
  if (!Array.isArray(arr)) return undefined;
  if (arr.length === 0) return [];

  return arr.slice(1).concat(arr[0]);
}

function rotateRightmostDigits(number, n) {
  const digits = number.toString().split('');
  const unchanged = digits.slice(0, -n);
  const rotated = rotateArray(digits.slice(-n));

  return Number([...unchanged, ...rotated].join(''));
}

console.log(rotateRightmostDigits(735291, 1) === 735291);   // true
console.log(rotateRightmostDigits(735291, 2) === 735219);   // true
console.log(rotateRightmostDigits(735291, 3) === 735912);   // true
console.log(rotateRightmostDigits(735291, 4) === 732915);   // true
console.log(rotateRightmostDigits(735291, 5) === 752913);   // true
console.log(rotateRightmostDigits(735291, 6) === 352917);   // true