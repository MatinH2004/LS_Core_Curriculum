function bubbleSort(arr) {
  const len = arr.length;

  for (let i = 0; i < len - 1; i++) {
    // Flag to track if any swaps were made
    let swapped = false;

    // Last i elements are already in place
    for (let j = 0; j < len - 1 - i; j++) {
      // Check if the element in the current iteration
      // is greater than the one in the next iteration
      if (arr[j] > arr[j + 1]) {
        // Swapping elements
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        swapped = true;
      }
    }

    if (!swapped) {
      // If no swaps were made in this iteration, the array is already sorted
      break;
    }
  }

  return arr;
}

const array = [5, 3, 8, 7, 2];
console.log(bubbleSort(array)); // Output: [2, 3, 5, 7, 8]