/*

Given an array of integers, nums, return the third largest number in the array.

If the third largest number does not exist, return the greatest number.

You are not allowed to sort the array.

Input:
  - array of integers
Output:
  - integer (third largest)

Rules:
  - Assume an array will always be input
  - Assume array will only contain integers
  - Return null, if an empty array is input
  - If the third largest number doesn't exist, return the greatest

Examples:
[3, 2, 1] => 1 is the third largest
[3, 2] => 3 is the greatest
[3, 2, 2] => 3 is the greatest
[] => null

DS:
  I: Array
  M: Array
  O: Integer

  - Use Array to keep track of largest numbers
  - Splice()

Algo:
1) if input array is empty, return null

2) init nums array
  - this will contain the numbers from greatest to smallest
  - and will be used to return the final number at the end

3) iterate over the input array
  - find the greatest number, and append it to nums array (if it doesn't exist in nums)
  - delete the greatest number
  - repeat

4) Delete duplicate values from nums array

5) If the number at idx 2 doesn't exist, return the number at idx 0
  - from nums array

*/

function thirdMax(arr) {
  if (arr.length === 0) return null;

  const len = arr.length;
  const nums = [];

  for (let i = 0; i < len; i++) {
    let max = Math.max(...arr);
    if (nums.indexOf(max) === -1) nums.push(max);
    arr.splice(arr.indexOf(max), 1);
  }

  return nums[2] || nums[0];
}

console.log(thirdMax([3, 2, 1])); // 1
console.log(thirdMax([3, 2, 1, 4, 6])); // 3
console.log(thirdMax([3, 2, 2])); // 3
console.log(thirdMax([3])); // 3
console.log(thirdMax([])); // null

// optimized solution

function thirdMax(arr) {
  if (arr.length === 0) return null;

  let first = -Infinity, second = -Infinity, third = -Infinity;
  let uniqueCount = 0;

  for (const num of arr) {
    if (num === first || num === second || num === third) continue;

    uniqueCount++;

    if (num > first) {
      [first, second, third] = [num, first, second];
    } else if (num > second) {
      [second, third] = [num, second];
    } else if (num > third) {
      third = num;
    }
  }

  return uniqueCount >= 3 ? third : first;
}