function transpose(matrix = []) {
  const numOfSubarrays = matrix[0].length;
  const result = [];

  for (let i = 0; i < numOfSubarrays; i++) {
    result.push([]);
  }

  matrix.forEach(subarray => {
    subarray.forEach((num, i) => {
      result[i].push(num)
    });
  });

  return result;
}

console.log(transpose([[1, 2, 3, 4]]));            // [[1], [2], [3], [4]]
console.log(transpose([[1], [2], [3], [4]]));      // [[1, 2, 3, 4]]
console.log(transpose([[1]]));                     // [[1]]

console.log(transpose([[1, 2, 3, 4, 5], [4, 3, 2, 1, 0], [3, 7, 8, 6, 2]]));
// // [[1, 4, 3], [2, 3, 7], [3, 2, 8], [4, 1, 6], [5, 0, 2]]