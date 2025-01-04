// O(logN)
// Note: data needs to be sorted
function binarySearch(sortedArray, target) {
  let start = 0;
  let end = sortedArray.length - 1;

  while (start <= end) {
    let mid = Math.floor((start + end) / 2);
    if (sortedArray[mid] === target) {
      return mid; // target found
    } else if (sortedArray[mid] < target) {
      start = mid + 1; // search right half
    } else {
      end = mid - 1; // search left half
    }
  }

  return -1; // target not found
}