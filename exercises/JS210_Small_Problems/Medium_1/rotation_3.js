/*

Write a function that takes an integer as an argument and returns the maximum rotation of that integer.
---------- PROBLEM ----------
INPUT:
  - integer
OUTPUT:
  - integer (max rotated)

EXAMPLES:

735291 => 321579

idx 0 shifted
735291 -> 352917

idx 1 shifted
352917 -> 329175

idx 2 shifted
329175 -> 321759

idx 3 shifted
321759 -> 321597

idx 4 shifted
321597 -> 321579

----------- RULES -----------
  - to get max rotation we must rotate length of number - 1 times
  - 

------- DATA STRUCTURE ------

--------- SCRATCH PAD -------

---------- ALGORITHM --------
  - using for loop
    - iterate from 0 to length of input number - 1
      - for every index in iteration:
      - call rotateRightmostDigit with number and index passed in
      - reassign number to return value of function call above
  - return final number
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

function maxRotation(number) {
  for (let idx = String(number).length; idx > 1; idx--) {
    number = rotateRightmostDigits(number, idx);
  }

  return number;
}

console.log(maxRotation(735291));          // 321579
console.log(maxRotation(3));               // 3
console.log(maxRotation(35));              // 53
console.log(maxRotation(105));             // 15 -- the leading zero gets dropped
console.log(maxRotation(8703529146));      // 7321609845