function selectionSort(arr) {
  const len = arr.length;

  for (let i = 0; i < len - 1; i++) {
    // Initialize `minIndex` as the first element in
    // the unsorted portion of the array
    let minIndex = i;

    // Iterate over the rest of the unsorted part of the array
    for (let j = i + 1; j < len; j++) {
      // Check if the element in the current iteration is
      // less than the element at the current `minIndex`
      if (arr[j] < arr[minIndex]) {
        minIndex = j;
      }
    }

    // If the minimum element is already at
    // index `i`, we don't need to swap
    if (minIndex !== i) {
      // Swap the first element of the unsorted portion
      // with the element at `minIndex`
      [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
    }
  }

  return arr;
}

const array = [3, 8, 2, 1];
console.log(selectionSort(array)); // Output: [1, 2, 3, 8]