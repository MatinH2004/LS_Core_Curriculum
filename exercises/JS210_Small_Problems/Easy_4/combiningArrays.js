const union = (a, b) => {
  let result = [];

  for (let idx = 0; idx < a.length; idx++) {
    if (!result.includes(a[idx])) result.push(a[idx]);
    if (!result.includes(b[idx])) result.push(b[idx]);
  }

  return result;
}

// Refactor using sets (only allows unique values)

function union(arrayOne, arrayTwo) {
  return Array.from(new Set([...arrayOne, ...arrayTwo]));
}

console.log(union([1, 3, 5], [3, 6, 9]));    // [1, 3, 5, 6, 9]