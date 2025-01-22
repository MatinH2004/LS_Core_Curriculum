/*

Given an array of integers nums, find sum of all of its elements using recursion.

Base Case:
  - length of array is 0

Example:

let nums = [1, 2, 3]

sum([2, 3]) + 1
sum([3]) + 3
sum([]) + 6 (base case)

= 6

*/

// Non-mutating solution
function sum(nums) {
  if (nums.length === 0) return 0;

  return sum(nums.slice(1)) + nums[0];
}

// Mutating solution
function sum(nums) {
  if (nums.length === 0) return 0;

  return nums.pop() + sum(nums);
}

console.log(sum([1,2,3]) === 6);
console.log(sum([10, 15, 20, 10, 5]) === 60);
console.log(sum([-5, -1, 5, 2, -3]) === -2);
console.log(sum([7]) === 7);
console.log(sum([]) === 0);

// All test cases should log true.