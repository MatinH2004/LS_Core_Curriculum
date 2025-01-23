// Write a function named `minLengthForTargetSum` that
// determines the minimal length of a contiguous subarray
// within an array of positive integers, `nums`. This
// subarray should have a sum that is greater than or
// equal to a specified positive integer, `target`. The
// function should return the length of this subarray.
// If no such subarray exists, return 0.

// Example:
// Input: nums = [4, 2, 5, 7], target = 10
// Output: 2
// Explanation: In this example, the shortest subarray that
//              meets or exceeds the target sum of 10 is [5, 7].
//              This subarray sums to 12, which is greater than
//              the target sum of 10. The length of this
//              subarray is 2.

/*

INPUT: nums = array of integers; target = integer
OUTPUT: integer = min length

RULES:
  - assume input will always be a non-empty array
  - assume input array will always only include integers
  - assume target will always be a positive integer
  - assume we cannot sort input array
  - need to find the smallest sub-array that has a sum greater than target
  - need to return the length of the smallest sub-array found
  - if no sub-array with sum greater than target exists, return 0

DS:
  - use an integer to keep track of sub-arrays lengths

ALGO:

minLengthForTargetSum(nums, target)
  - init anchor = 0
  - init runner = 0
  - init currentSum = 0
  - init result = nums.length + 1

  - while runner is not out of bounds
    - add value at runner to currentSum
    - while currentSum is greater than or equal to target
      - reassign result to min(result, runner - anchor + 1)
      - subtract value at anchor from currentSum
      - increment anchor
    - increment runner      

  - if result equals length of nums + 1, return 0
    - else return result

*/

function minLengthForTargetSum(nums, target) {
  let anchor = 0;
  let runner = 0;
  let currentSum = 0;
  let result = nums.length + 1;

  while (runner < nums.length) {
    currentSum += nums[runner];
    
    while (currentSum >= target) {
      result = Math.min(result, runner - anchor + 1);
      currentSum -= nums[anchor];
      anchor++;
    }

    runner++;
  }

  return result === nums.length + 1 ? 0 : result;
}

console.log(minLengthForTargetSum([1, 2, 3], 5) === 2);
console.log(minLengthForTargetSum([1, 1, 1], 4) === 0);
console.log(minLengthForTargetSum([8, 2, 1, 4], 8) === 1);
console.log(minLengthForTargetSum([1, 2, 3, 4, 5], 9) === 2);
console.log(minLengthForTargetSum([1, 4, 1, 3, 6, 2], 9) === 2);
console.log(minLengthForTargetSum([1, 2, 3, 4], 10) === 4);
console.log(minLengthForTargetSum([1, 2, 6, 1, 1, 7], 9) === 3);
console.log(minLengthForTargetSum([4, 2, 2, 1, 5, 2], 14) === 5);

// All test cases should log true