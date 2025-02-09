// You are given an array of intervals, where each interval is represented
// by an array [start, end] indicating the start and end points. Your task
// is to merge all overlapping intervals and return an array of
// non-overlapping intervals that cover all the original intervals.

/*

// Example 1:

// Input: intervals = [[2,5], [4,8], [10,12], [13,16]]
// Output: [[2,8], [10,12], [13,16]]
// Explanation: Intervals [2,5] and [4,8] overlap, so they are merged into [2,8].

[2, 4, 10, 13]
[5, 8, 12, 16]

// Example 2:

// Input: intervals = [[3,6], [3,4], [5,8], [7,9]]
// Output: [[3,9]]
// Explanation: All intervals overlap and are merged into a single interval.

[3, 3, 5, 7]
[6, 4, 8, 9]

algo:
  - init a result array
  - sort intervals based on first integer in subarrays
  - iterate over the intervals
    - if second number in first array is greater than the second number in second array
      - there is a full overlap => ignore second array
      - push first array to result
    - if second num in first array is greater than first num in second array
      - there is a partial overlap
        - create new array with first num of first arr and second num of second array
        - push new array to result
    - otherwise if no num from first arr is greater than any num in second arr,
      - no overlap
  - return result

*/

function mergeIntervals(intervals) {
  if (!intervals || intervals.length === 0) {
    return [];
  }

  intervals.sort((a, b) => a[0] - b[0]);
  const result = [intervals.shift()];

  intervals.forEach(([a, b]) => {
    let candidate = result[result.length - 1];

    if (candidate[1] > b) {
      return;
    } else if (candidate[1] >= a) {
      candidate[1] = b;
    } else {
      result.push([a, b])
    }
  });

  return result;
}

// LS Solution
function mergeIntervals(intervals) {
  if (!intervals.length) return [];

  intervals.sort((a, b) => a[0] - b[0]);
  const result = [intervals[0]];

  for (let i = 0; i < intervals.length; i++) {
    if (result[result.length - 1][1] >= intervals[i][0]) {
      result[result.length - 1][1] = Math.max(result[result.length - 1][1], intervals[i][1]);
    } else {
      result.push(intervals[i]);
    }
  }
  
  return result;
}

// Test Cases
console.log(mergeIntervals([[7,8], [1,3], [6,11], [2,4]]));
// Expected: [[1,4], [6,11]]

console.log(mergeIntervals([[2,5], [4,8], [10,12], [13,16]]));
// Expected: [[2,8], [10,12], [13,16]]

console.log(mergeIntervals([[3,6], [3,4], [5,8], [7,9]]));
// Expected: [[3,9]]

console.log(mergeIntervals([[1,3], [5,7], [9,11]]));
// Expected: [[1,3], [5,7], [9,11]]

console.log(mergeIntervals([[1,4], [0,4]]));
// Expected: [[0,4]]

console.log(mergeIntervals([[1,4], [2,3]]));
// Expected: [[1,4]]

console.log(mergeIntervals([]));
// Expected: []

console.log(mergeIntervals([[1,4], [4,5]]));
// Expected: [[1,5]]