function insertionSort(arr) {
  const len = arr.length;

  // Iterate over the array starting from the second element
  for (let i = 1; i < len; i++) {
    // Store the current element, creating a 'gap' at index `i`
    let current = arr[i];
    // Set the index to compare against to the left of our 'gap'
    let j = i - 1;

    // Keep shifting as long as the element we are
    // comparing to is greater than the currently stored
    // element, or we run out of elements
    while (j >= 0 && arr[j] > current) {
      // Shift the element we're comparing to the right
      arr[j + 1] = arr[j];
      j--;
    }

    // Insert the stored element into the gap
    arr[j + 1] = current;
  }

  return arr;
}

const array = [4, 2, 1, 3];
console.log(insertionSort(array)); // Output: [1, 2, 3, 4]