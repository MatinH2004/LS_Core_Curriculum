// Bob Roades solution for last edge case

function sortBy(a, b) {
  if (String(a) === String(b)) {
    if (typeof a === 'number' && typeof b === 'string') return -1;
    if (typeof a === 'string' && typeof b === 'number') return 1;
    return 0;
  }

  if (String(a) < String(b)) return -1;
  if (String(a) > String(b)) return 1;
  return 0;
}

function areArraysEqual(array1, array2) {
  if (array1.length !== array2.length) return false;
  let sorted1 = [...array1].sort(sortBy);
  let sorted2 = [...array2].sort(sortBy);

  for (let i = 0; i < sorted1.length; i++) {
    if (sorted1[i] !== sorted2[i]) return false;
  }

  return true;
}

console.log(areArraysEqual(['1', 1], [1, '1']))                     // true