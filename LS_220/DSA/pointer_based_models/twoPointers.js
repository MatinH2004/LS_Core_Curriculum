function twoPointers(array, target) {
  let start = 0;
  let end = array.length - 1;

  while (start !== end) {
    const currentSum = array[start] + array[end];

    if (currentSum === target) {
      return [array[start], array[end]];
    } else if (currentSum < target) {
      start++;
    } else {
      end--;
    }
  }

  return null;
}

console.log(twoPointers([2, 6, 8, 10], 17))
console.log(twoPointers([2, 6, 7, 8, 10], 14))