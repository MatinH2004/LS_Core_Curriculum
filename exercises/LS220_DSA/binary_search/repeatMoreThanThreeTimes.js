function isTargetFrequent(nums, target) {
  const firstIdx = findFirstIndex(nums, target);
  const lastIdx = findLastIndex(nums, target);

  if (firstIdx < 0) {
    return false;
  } else {
    return lastIdx - firstIdx + 1 > 3;
  }
}

function findFirstIndex(nums, target) {
  let left = 0, right = nums.length - 1, firstIdx = -1;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);

    if (nums[mid] === target) {
      firstIdx = mid;
      right = mid - 1;
    } else if (nums[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return firstIdx;
}

function findLastIndex(nums, target) {
  let left = 0, right = nums.length - 1, lastIdx = -1;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);

    if (nums[mid] === target) {
      lastIdx = mid;
      left = mid + 1;
    } else if (nums[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return lastIdx;
}

console.log(isTargetFrequent([1, 2, 3, 3, 3, 3, 4], 3) === true);
console.log(isTargetFrequent([1, 1, 1, 1, 2, 3, 4], 1) === true);
console.log(isTargetFrequent([1, 2, 3, 4, 5], 2) === false );
console.log(isTargetFrequent([1, 1, 3, 4, 5], 2) === false );
console.log(isTargetFrequent([2, 2, 2, 3, 3, 3, 4], 3) === false);
console.log(isTargetFrequent([4, 4, 4, 4, 4, 4, 4], 4) === true);

// All test cases should log true.