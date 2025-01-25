// Write a function named `minLengthForTargetSum` that
// determines the minimal length of a contiguous subarray
// within an array of positive integers, `nums`. This
// subarray should have a sum that is greater than or
// equal to a specified positive integer, `target`.
// The function should return the length of this
// subarray. If no such subarray exists, return 0.

// The time complexity of your solution should be O(NlogN).

/*

INPUT:
  - an array of integers (not sorted), target integer
OUTPUT:
  - minimum length that sums up to the target number or greater

RULES:
  - input array will always be a non empty array of integers
  - target will always be a position integer
  - need to find the minimum CONTIGUOUS sub array that sums up to target num or greater
    - and return the length
  - if no subarray exists, return 0 

  Example:
  Input: nums = [4, 2, 5, 7], target = 10
  Output: 2
  Explanation: In this example, the shortest subarray that
              meets or exceeds the target sum of 10 is [5, 7].
              This subarray sums to 12, which is greater than
              the target sum of 10. The length of this subarray is 2.

DS:
  - BINARY SEARCH COMPONENT O(logN)
    - min length = 1
    - max length = nums.length
    - find middle
      - use middle number, k, to search every k element in the array for target num
      - if a sum greater than or equal to target is found, move left (smaller)
      - else go right to find sum with larger length

  - LINEAR COMPONENT O(N)
    - init anchor, runner, sum = 0
    - increment sum by value of runner. Move until we add k elements
    - after adding k elements, start sliding process:
      - decrement sum by value at anchor, increment anchor
      - increment sum by value at runner
    - if at any point, sum is greater or equal to target, return true
    - if runner is out of bounds, return false

*/

function minLengthForTargetSum(nums, target) {
  const validLength = (nums, target, k) => {
    let anchor = 0, runner = 0, sum = 0;

    while (runner < k && runner < nums.length) {
      sum += nums[runner];
      runner++;
    }
    
    if (sum >= target) return true;

    while (runner < nums.length) {
      sum -= nums[anchor];
      anchor++
      sum += nums[runner];
      runner++;

      if (sum >= target) return true;
    }

    return false;
  };

  let left = 1, right = nums.length, result = 0;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);

    if (validLength(nums, target, mid)) {
      result = mid;
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }

  return result;
}

console.log(minLengthForTargetSum([1, 2, 3], 5) === 2);
console.log(minLengthForTargetSum([1, 1, 1], 4) === 0);
console.log(minLengthForTargetSum([8, 2, 1, 4], 8) === 1);
console.log(minLengthForTargetSum([1, 2, 5, 4, 3], 9) === 2);
console.log(minLengthForTargetSum([1, 4, 1, 3, 6, 2], 9) === 2);
console.log(minLengthForTargetSum([1, 2, 3, 4], 10) === 4);
console.log(minLengthForTargetSum([1, 2, 6, 1, 1, 7], 9) === 3);
console.log(minLengthForTargetSum([4, 2, 2, 1, 5, 2], 14) === 5);

// All test cases should log true