function partition(arr) {
  const pivot = arr[0];
  let left = 1;
  let right = arr.length - 1;

  while (left <= right) {
    while (left <= right && arr[left] < pivot) {
      left++;
    }

    while (left <= right && arr[right] >= pivot) {
      right--;
    }

    if (left < right) {
      // swap values at left and right pointers
      [arr[left], arr[right]] = [arr[right], arr[left]];
    }
  }

  // swap pivot with the element at the right pointer
  [arr[0], arr[right]] = [arr[right], arr[0]];

  return arr;
}