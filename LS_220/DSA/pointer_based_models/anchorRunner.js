function moveOnes(arr) {
  let anchor = 0;
  let runner = 0;

  while (runner < arr.length) {
    if (arr[runner] !== 1) {
      // Swap the elements at `anchor` and `runner`
      [arr[anchor], arr[runner]] = [arr[runner], arr[anchor]];
      // Increment `anchor` only when a swap is made
      anchor++;
    }
    // Increment `runner` every iteration
    runner++;
  }

  return arr;
}

const nums1 = [1, 2, 1, 4, 8];
const transformedNums1 = moveOnes(nums1);
console.log(nums1 === transformedNums1); // true
console.log(transformedNums1); // [2, 4, 8, 1, 1]

const nums2 = [3, 1, 5, 1, 1, 4, 8, 1];
const transformedNums2 = moveOnes(nums2);
console.log(nums2 === transformedNums2); // true
console.log(transformedNums2); // [3, 5, 4, 8, 1, 1, 1, 1]