// Imagine a series of vertical barriers arranged in a straight
// line at equal distances across a flat field.
// These barriers have different heights. After a rainstorm,
// water collects between the barriers, forming reservoirs.
// Your task is to determine the maximum volume of rainwater
// that can be captured between any two barriers, without
// the water spilling over the tops of those two barriers.

// Write a function `maxRainwater` that takes an array of
// barrier `heights` and calculates the maximum volume
// of rainwater that can be harvested between any two barriers.

// The array `heights` represents the height of each barrier,
// where `heights[i]` is the height of the i-th barrier.
// The distance between each barrier is uniform.

// The input array will contain at least 2 values.

// Example:
// Input: [1, 2, 1]
// Output: 2
// Explanation: The distance between the first and
// third barrier is 2, and the height is 1, so
// the maximum amount of rainfall is 2 * 1 = 2

//   |    =>    |
// |_|_|      |*|*|

// Example:
// Input: [2, 3, 4, 2]
// Output: 6
// Explanation: The distance between the first and
// fourth barrier is 3, and the height is 2, so the
// maximum amount of rainfall is 3 * 2 = 6

//     |            |
//   | |    =>    | |
// | | | |      |*|*|*|
// |_|_|_|      |*|*|*|

/*

### PROBLEM

Given an array of nums, representing barrier heights, determine the maximum volume of 
rainwater that can be capture between any two barrier, without the water overflowing

INPUT: array of integers
OUTPUT: integer (max volume; distance * height)

RULES:
  - must determine the max volume between ANY TWO barriers
  - input array will contain at least 2 values
  - between the two barriers, calculate the max volume using distance * (min height)

### DS

  - use integer to keep track of highest volume calculated
  - use anchor/runner pointers to capture all volumes between barriers

### ALGO

- init anchor = 0
- init runner = 1
- init maxVolume = 0
- init minBarrier = height[anchor];

- while anchor is less than runner
  - if current barrier at runner is smaller than minBarrier
    - reassign minBarrier
  - calculate volume
    - (runner idx position - anchor idx position) * min height
  - if calculated volume is greater than maxVolume
    - reassign maxVolume to calculated value

- return maxVolume

*/

function maxRainwater(heights) {
  let start = 0, end = heights.length - 1;
  let maxVolume = 0;

  while (start < end) {
    const minHeight = Math.min(heights[start], heights[end]);
    const volume = (end - start) * minHeight;
    maxVolume = Math.max(volume, maxVolume);

    if (heights[start] > heights[end]) {
      end--;
    } else {
      start++;
    }
  }

  return maxVolume;
}

console.log(maxRainwater([1, 1]) === 1);
console.log(maxRainwater([1, 3]) === 1);
console.log(maxRainwater([1, 2, 1]) === 2);
console.log(maxRainwater([2, 3, 4, 2]) === 6);
console.log(maxRainwater([2, 2, 2, 2, 2]) === 8);
console.log(maxRainwater([2, 9, 5, 10, 5, 6]) === 24);
console.log(maxRainwater([5, 4, 3, 2, 9, 10, 3, 4, 5]) === 40);
console.log(maxRainwater([3, 1, 2, 5, 2, 4, 2, 5, 6, 1, 5, 3, 2, 3, 4, 1, 2]) === 44);
console.log(maxRainwater([2, 2, 13, 9, 1, 15, 2, 5, 9, 7, 5, 3, 6, 3, 4, 1, 4, 5]) === 75);

// All test cases should log true