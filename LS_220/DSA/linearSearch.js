// O(N)
// Note: does not need data to be sorted
function linearSearch(array, target) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === target) {
      return i; // Element found
    }
  }
  return -1; // Element not found
}