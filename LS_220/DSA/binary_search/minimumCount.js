// Given an array `nums` sorted in ascending order, determine
// the minimum between the count of positive integers and the
// count of negative integers.

// Please note that the number `0` is neither positive nor negative.

/*

INPUT:
  - sorted array of integers in ascending order
OUTPUT:
  - integer (representing the minimum count)

RULES:
  - input array will always be sorted
  - input array can be empty
  - 0 is neither positive nor negative
  - Return 0 if input is empty, or no min count is found

ALGORITHM

findFirstPositiveIndex:
  1. Init two pointers, left and right, representing the array's start and end

  2. Init firstPositiveIdx to the length of array, which assumes all numbers 
     could be negative until proven otherwise

  3. Calculate middle index mid

  4. Check if nums[mid] is less than or equal to 0
    - if it is, continue searching the right half of the array by setting left to 
      mid + 1
    - if it's not, meaning it's positive, set the firstPositiveIdx to the value 
      of mid and continue searching the left half of the array by setting right 
      to mid - 1

  5. Continue steps 3 and 4 until left exceeds right. At this point, 
     firstPositiveIdx will point to the first positive number, or it will have
     never been reassigned and remain as the length of the array, meaning all
     numbers were negative

findLastNegativeIndex:
  1. starts with left and right pointers and iteratively finds the last index 
     where a negative number exists, denoted by lastNegativeIdx. 
  
  2. If the array only contains positive numbers, the function returns -1

minimumCount:
  1. Get lastNegativeIdx from findLastNegativeIndex. The count of negative numbers
     is lastNegativeIdx + 1 since indices are zero-based
  2. Get firstPositiveIdx from findFirstPositiveIndex. The count of positive
     numbers is the total number of elements in the array minus firstPositiveIdx
  3. Return the smaller of the two counts.

TIME COMPLEXITY: O(2logN) -> simplify by eliminating constants -> O(logN)

SPACE COMPLEXITY: No extra data structures are grown with size of input -> O(1)
*/

function minimumCount(nums) {
  const firstPositiveIdx = findFirstPositiveIndex(nums);
  const lastNegativeIdx = findLastNegativeIndex(nums);

  const positiveCount = nums.length - firstPositiveIdx;
  const negativeCount = lastNegativeIdx + 1;

  return Math.min(negativeCount, positiveCount);
}

function findFirstPositiveIndex(nums) {
  let left = 0;
  let right = nums.length - 1;
  let firstPositiveIdx = nums.length;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);

    if (nums[mid] <= 0) {
      left = mid + 1;
    } else {
      firstPositiveIdx = mid;
      right = mid - 1;
    }
  }

  return firstPositiveIdx;
}

function findLastNegativeIndex(nums) {
  let left = 0;
  let right = nums.length - 1;
  let lastNegativeIdx = -1;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);

    if (nums[mid] < 0) {
      lastNegativeIdx = mid;
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  
  return lastNegativeIdx;
}

console.log(minimumCount([-4, -3, -2, -1, 3, 4]) === 2);
console.log(minimumCount([-3, 1, 2, 3, 4, 5]) === 1);
console.log(minimumCount([-5, -4, -3, -2, -1]) === 0);
console.log(minimumCount([1, 2, 3, 4, 5]) === 0);
console.log(minimumCount([-2, -1, 1, 2]) === 2);
console.log(minimumCount([-7, -5, -4, 1, 2, 6, 10]) === 3);
console.log(minimumCount([-3, -2, -1, 0, 5, 6]) === 2);
console.log(minimumCount([-1, 0, 1]) === 1);
console.log(minimumCount([]) === 0);

// All test cases should log true.