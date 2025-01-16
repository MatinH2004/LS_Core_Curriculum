function partition(arr, low = 0, high = arr.length - 1) {
  const pivotIndex = Math.floor((low + high) / 2);
  const pivot = arr[pivotIndex];

  // move pivot to the beginning of the array segment
  [arr[pivotIndex], arr[low]] = [arr[low], arr[pivotIndex]];

  let left = low + 1;
  let right = high;

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
      left++;
      right--;
    }
  }

  // swap pivot with the element at the right pointer
  // thus putting it at its correct position
  [arr[low], arr[right]] = [arr[right], arr[low]];

  // return pivot index
  return right;
}

function quicksort(arr, low = 0, high = arr.length - 1) {
  if (low < high) {
    const pivotIndex = partition(arr, low, high);
    quicksort(arr, low, pivotIndex - 1);
    quicksort(arr, pivotIndex + 1, high);
  }
}

const arr = [7, 3, 9, 8, 5, 1];
quicksort(arr);
console.log(arr); // => [ 1, 3, 5, 7, 8, 9 ]