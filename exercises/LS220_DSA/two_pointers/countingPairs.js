/*

### P

Given an ascending array of integers, count the number of pairs in the array
that have a sum greater than the given target value.

INPUT: array of ints, target value int
OUTPUT: int (number of pairs)

### E

RULES:
  - assume a non empty array of ints is input
  - assume input array is always sorted in asc order
  - no duplicate pairs should be counted
  - assume array contains distinct numbers

([1, 2, 3, 4, 5], 6) => [2, 5], [3, 5], [4, 5], [3, 4]
  - dont count 2, 5 and 5, 2 (no duplicates)

### D

using anchor/runner technique -> O(N)

### A
  - init anchor = 0
  - init runner = 1
  - init count = 0

  - while anchor is less than or equal to nums.length - 1
    - if the sum of nums at anchor + runner is greater than target
      - increment count
    - if runner is at end of nums array
      - increment anchor
      - set runner to achor + 1
    - increment runner

  - return count

*/

// O(N^2)
function countPairs(nums, target) {
  let count = 0, anchor = 0, runner = 1;

  while (anchor < nums.length - 1) {
    if (nums[anchor] + nums[runner] > target) {
      count++;
    }

    if (runner === nums.length - 1) {
      anchor++
      runner = anchor + 1;
    } else {
      runner++;
    }
  }

  return count;
}

// Solution using start-end pointers
// O(N)
function countPairs(nums, target) {
  let count = 0, start = 0, end = nums.length - 1;

  while (start < end) {
    if (nums[start] + nums[end] > target) {
      count += end - start;
      end--;
    } else {
      start++;
    }
  }

  return count;
}

console.log(countPairs([1, 2, 3, 4, 5], 6) == 4);
// Pairs: (2, 5), (3, 4), (3, 5), (4, 5)

console.log(countPairs([1, 2, 3, 4, 5], 8) == 1);
// Pair: (4, 5)

console.log(countPairs([1, 3, 5, 7], 6) == 4);
// Pairs: (1, 7), (3, 5), (3, 7), (5, 7)

console.log(countPairs([1, 2, 3, 4], 5) == 2);
// Pairs: (2, 4), (3, 4)

console.log(countPairs([1, 2, 3, 4, 5], 10) == 0);
// No pairs