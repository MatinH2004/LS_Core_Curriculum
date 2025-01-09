// TC: O(N * K)
// SC: O(N + K)
function findAverages(nums, k) {
  const averages = [];

  for (let i = 0; i <= nums.length - k; i++) {
    averages.push(nums.slice(i, i + k).reduce((sum, num) => sum + num, 0) / k);
  }

  return averages;
}

// Optimized solution
// TC: O(N)
// SC: O(N)
function findAverages(nums, k) {
  let result = [];
  let windowSum = 0;
  let left = 0;

  for (let right = 0; right < nums.length; right++) {
    windowSum += nums[right];

    if (right >= k - 1) {
      result.push(windowSum / k);
      windowSum -= nums[left];
      left++
    }
  }

  return result;
}

console.log(findAverages([1, 2, 3, 4, 5, 6], 3)); // [ 2, 3, 4, 5 ]
console.log(findAverages([1, 2, 3, 4, 5], 2));    // [1.5, 2.5, 3.5, 4.5]
console.log(findAverages([10, 20, 30, 40, 50], 4)); // [ 25, 35 ]
console.log(findAverages([5, 5, 5, 5, 5], 1));      // [ 5, 5, 5, 5, 5 ]
console.log(findAverages([1, 3, 2, 6, -1, 4, 1, 8, 2], 5)); // [2.2, 2.8, 2.4, 3.6, 2.8]