function interleave(a, b) {
  const result = [];
  for (let idx = 0; idx < a.length; idx++) {
    result.push(a[idx], b[idx]);
  }

  return result;
}

console.log(interleave([1, 2, 3], ['a', 'b', 'c']));    // [1, "a", 2, "b", 3, "c"]

// Genius solution

function interleave(arr, arr1) {
  return arr.flatMap( (element, idx) => [element, arr1[idx]] )
}

// Which is the same as:

function interleave(arr1, arr2) {
  return arr1.map((ele, index) => [ele, arr2[index]]).flat();
}