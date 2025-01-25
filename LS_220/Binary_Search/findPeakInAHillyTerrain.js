// Write a function `findPeakInTerrain` that finds any peak in a
// given hilly terrain. A peak is an element that is strictly
// greater than its neighbors. The first and last elements can
// be peaks if they are strictly greater than their single neighbor.
// Adjacent elements in the terrain cannot be equal.

// The function should take an array of integers as input,
// representing the elevations of spots in the terrain.
// It should return the index of any peak in the terrain.
// There is guaranteed to be at least one peak in the input array.

/*

INPUT:
  - array of integers representing elevation spots in the terrain
OUTPUT:
  - integer representing index position of peak point

RULES:
  - Assume input array will always contain integers
  - There can be more than 1 peak point in the array
  - A peak is an element that that is greater than its neighbors
  - Adjacent elements in the terrain cannot be equal

  Example:
  Input: terrain = [1, 3, 2, 1, 4, 5]
  Output: 1 or 5
  Explanation: Both index 1 (elevation 3) and index 5
              (elevation 5) are peaks.

DS:
  - Use variable that holds an integer
    - update value each time a greater value is found

ALGO:
  - initialize result to 0, and left and right values to each end of the array
    - result = 0
    - left = 0
    - right = arr.length - 1

  - perform binary search to find the greatest number in array
    - while left is less than right
      - assign mid to (left + right) / 2
      - assign value at mid to result
      - if result is less than previous element
        - reassign right to mid + 1
      - otherwise reassign left to mid - 1

  - return index of highest value found

*/

function findPeakInTerrain(terrain) {
  let result = 0;
  let left = 0;
  let right = terrain.length - 1;
  let target = Math.max(...terrain);

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    result = terrain[mid];

    if (result === target) {
      return mid;
    } else if (result < terrain[mid + 1]) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return terrain.indexOf(result);
}

function findPeakInTerrain(terrain) {
  if (terrain.length === 0) return null;
  if (terrain.length === 1) return 0;

  const isPeak = (terrain, mid) => 
    terrain[mid - 1] < terrain[mid] && terrain[mid + 1] < terrain[mid];

  let result, left = 0, right = terrain.length - 1;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    result = mid;

    if (isPeak(terrain, mid)) {
      return mid;
    } else if (terrain[mid - 1] > terrain[mid]) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }

  return result;
}

console.log(findPeakInTerrain([1, 2, 1]) === 1);
console.log(findPeakInTerrain([1, 3, 4, 1]) === 2);
console.log(findPeakInTerrain([3, 2, 1]) === 0);
console.log(findPeakInTerrain([1, 2, 3]) === 2);
console.log([1, 4].includes(findPeakInTerrain([1, 3, 2, 1, 5, 4])));
console.log(findPeakInTerrain([1, 2, 3, 4, 5, 7, 3]) === 5);
console.log(findPeakInTerrain([1, 2, 3, 4, 3, 2, 1]) === 3);
console.log([0, 8].includes(findPeakInTerrain([5, 4, 3, 2, 1, 2, 3, 4, 5])));
console.log(findPeakInTerrain([1, 2, 3, 4, 5, 4, 3, 2, 1]) === 4);
console.log(findPeakInTerrain([10, 9, 8, 7, 6, 5, 4, 3, 2, 1]) === 0);
console.log(findPeakInTerrain([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]) === 9);

// All test cases should log true