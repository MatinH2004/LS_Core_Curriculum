// You are given an array of integers. Your task is to create a new array
// where each element is the product of all numbers in the original array
// except the number at that index.

// Implement a function that takes an integer array as input and returns
// a new array where the element at index i is the product of all
// elements in the input array except the element at index i.


// Example 1:

// Input: [2, 3, 4, 5]
// Output: [60, 40, 30, 24]
// Explanation:
    // For index 0: 3 * 4 * 5 = 60
    // For index 1: 2 * 4 * 5 = 40
    // For index 2: 2 * 3 * 5 = 30
    // For index 3: 2 * 3 * 4 = 24

// Example 2:

// Input: [-2, 1, -3, 4]
// Output: [-12, 24, -8, 6]
// Explanation:
    // For index 0: 1 * (-3) * 4 = -12
    // For index 1: (-2) * (-3) * 4 = 24
    // For index 2: (-2) * 1 * 4 = -8
    // For index 3: (-2) * 1 * (-3) = 6

// Note: Your solution must have a time complexity of O(n).

// O(N^2) time and space
function exclusiveProduct(nums) {
  return nums.map((_, i) => {
    return nums.filter((_, j) => i !== j)
               .reduce((product, num) => product * num, 1);
  });
}

// O(N) time and space
function exclusiveProduct(nums) {
  const getProduct = (nums) => {
    let product = 1;
    let productIgnoringZero = 1;

    for (let i = 0; i < nums.length; i++) {
      if (nums[i] !== 0) {
        productIgnoringZero *= nums[i];
      }
      product *= nums[i];
    }

    return [product, productIgnoringZero]
  }

  const result = [];
  const [a, b] = getProduct(nums);

  for (let j = 0; j < nums.length; j++) {
    result.push(nums[j] === 0 ? b : a / nums[j]);
  }

  return result;
}

// Test cases
console.log(exclusiveProduct([2, 3, 4, 5]));
// Expected: [60, 40, 30, 24]

console.log(exclusiveProduct([-2, 1, -3, 4]));
// Expected: [-12, 24, -8, 6]

console.log(exclusiveProduct([1, 2, 3, 4]));
// Expected: [24, 12, 8, 6]

console.log(exclusiveProduct([0, 1, 2, 3]));
// Expected: [6, 0, 0, 0]

console.log(exclusiveProduct([1, 1, 1, 1]));
// Expected: [1, 1, 1, 1]

console.log(exclusiveProduct([2, 1, 5, 3]));
// Expected: [15, 30, 6, 10]

console.log(exclusiveProduct([-1, -1, -1, -1]));
// Expected: [-1, -1, -1, -1]

console.log(exclusiveProduct([10]));
// Expected: [1]