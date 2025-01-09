/*

### P

Given an array nums, and target integer, fidn the maximum sum that can be
obtained by adding two distinct elements from the array, where this sum is
less than the target.

INPUT: nums array, target int
OUTPUT: int -> maximum sum / -1

RULES:
  - assume a non empty array and a positive target int is always provided
  - find the maxium sum of two distinct ints below the target num
  - if max sum below target not possible, return -1

### E

([3, 1, 4], 5) -> [1, 3, 4]

([5, 8, 3, 2, 1], 6) -> [1, 2, 3, 5, 8]

([1, 2, 3, 4, 5], 100) === 9) -> [1, 2, 3, 4, 5]

  - if anchor is greater than or equal to target, skip
  - runner always starts at idx anchor + 1

### A
  - init maxSum = -1
  - init start = 0
  - init end = nums.length - 1

  - sort the array

  - iterate while start < end:
    - assign sum to start + end
    - if sum >= target
      - decrement end
    - else 
      - increment start

  - return maxSum

*/

// TC: O(NlogN) -> O(logN)
// SC: O(1) -> since we mutate the nums array instead of creating a new array
function twoSumLessThanTarget(nums, target) {
  nums.sort();

  let start = 0;
  let end = nums.length - 1;
  let maxSum = -1;

  while (start < end) {
    let sum = nums[start] + nums[end];

    if (sum < target) {
      maxSum = Math.max(sum, maxSum);
      start++;
    } else {
      end--;
    }
  }

  return maxSum;
}

console.log(twoSumLessThanTarget([3, 1, 4], 5) === 4);
console.log(twoSumLessThanTarget([8, 2, 4, 9, 5, 10, 1, 7], 16) === 15);
console.log(twoSumLessThanTarget([5, 8, 3, 2, 1], 6) === 5);
console.log(twoSumLessThanTarget([6, 8, 10, 12], 5) === -1);
console.log(twoSumLessThanTarget([1, 2, 3, 4, 5], 100) === 9);
console.log(twoSumLessThanTarget([10, 20, 30, 40, 50], 40) === 30);
console.log(twoSumLessThanTarget([7, 4, 15, 11, 21, 9], 24) === 22);
// All test cases should log true