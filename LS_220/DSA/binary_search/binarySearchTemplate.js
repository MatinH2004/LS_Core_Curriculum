/*
let left = 0;
let right = array.length - 1;

while (left <= right) {
  let mid = Math.floor((left + right) / 2);

  if (array[mid] === target) {
    // Optional early return
  } else if (***comparison***) {
    left = mid + 1;
  } else {
    right = mid - 1;
  }
}
*/  

// Most often, if the target is not found, additional handling
// or returning a specific value is needed. In many cases it will
// be the index that `left` variable holds, which would indicate
// where the target *would* fit into the array.

// Example Problem:

// input array needs to be sorted
// TC: O(logN)
function findZeroPosition(nums) {
  let left = 0;
  let right = nums.length - 1;
  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    if (nums[mid] === 0) {
      return mid;
    } else if (nums[mid] < 0) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return left;
}

console.log(findZeroPosition([-7, -5, -3, 0, 2])); // 3
console.log(findZeroPosition([3, 5, 7, 9, 11])); // 0
console.log(findZeroPosition([-8, -7, -5, -2, -1])); // 5