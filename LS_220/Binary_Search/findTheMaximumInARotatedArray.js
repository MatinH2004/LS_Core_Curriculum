// Write a function `findMax` that finds the maximum element in
// a rotated sorted array.

// A rotated sorted array is an array that was originally sorted
// in ascending order, but has been rotated (shifted) by some
// number of positions. The function should take an array of
// integers as input, representing the rotated sorted array,
// and it should return the maximum element in the array.
// The array is guaranteed to have at least one element.

// The solution should be in O(logN) time complexity.

/*

INPUT:
  - an array of integers
  - the integers used to be sorted in ascending order
  - however they are shifted by some unknown number of positions
OUTPUT:
  - max integer in the array

RULES:
  - assume the array only contains integers
  - assume an array will always be input
  - assume array will be non-empty
  - find max integer in the array
  - return the max integer

EDGE CASES:
  - array containing 2 or less numbers
  - max number on edges of array

EXAMPLE:
  Input: nums = [8, 9, 10, 2, 5, 6]
  Output: 10
  Explanation: The original sorted array [2, 5, 6, 8, 9, 10]
              was rotated 3 times.

DS:
  - Use pointer to largest value found in each iteration

ALGO:
  - if length of array is 1, return the element inside

  - initialize result, left, and right pointers
  
  - use helper function to see if the mid number is max OR determine which direction to go
    - if mid is greater than left and right element => max int is found
      - if left or right elements are undefined, wrap to start or end of array
    - if first element of array is greater than mid => go left
    - else go right

  - perform binary search

  - return result (max number found)

*/

function findMax(nums) {
  if (nums.length === 1) return nums[0];

  const isMax = (nums, mid) => {
    return (nums[mid - 1] || nums[nums.length - 1]) < nums[mid] && 
           (nums[mid + 1] || nums[0]) < nums[mid];
  }

  const goLeft = (nums, mid) => nums[0] > nums[mid];

  let left = 0, right = nums.length - 1;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);

    if (isMax(nums, mid)) {
      return nums[mid];
    } else if (goLeft(nums, mid)) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }
}

// LS Solution
function findMax(nums) {
  let left = 0;
  let right = nums.length - 1;
  let firstElem = nums[0];
  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    let midNumber = nums[mid];

    if ((mid === 0 || nums[mid - 1] < midNumber) && (mid === nums.length - 1 || nums[mid + 1] < midNumber)) {
      return midNumber;
    } else if (midNumber < firstElem) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }
}

console.log(findMax([8, 9, 10, 2, 5, 6]) === 10);
console.log(findMax([15, 18, 2, 3, 6, 12]) === 18);
console.log(findMax([7, 8, 2, 3, 4, 5, 6]) === 8);
console.log(findMax([3, 1]) === 3);
console.log(findMax([5]) === 5);
console.log(findMax([9, 10, 11, 12, 13, 14, 15, 1, 2, 3]) === 15);
console.log(findMax([4, 5, 1, 2, 3]) === 5);
console.log(findMax([23, 34, 38, 40, 41, 14, 15, 16, 17, 18, 19, 20, 21]) === 41);
console.log(findMax([100, 200, 300, 400, 500]) === 500);
console.log(findMax([45, 47, 49, 51, 53, 55, 57, 59, 61, 63, 44]) === 63);
console.log(findMax([11, 13, 15, 17, 19, 21, 1, 3, 5, 7, 9]) === 21);