/*

BACKTRACK TEMPLATE

function someProblem(candidates) {
  function backtrack(candidates, candidate, result) {
    if ( <<success condition>> ) {
      result.push([...candidate]);
      return;
    }

    for (let elem of candidates) {
      if (true) {  // replace true with the dead-end condition
        continue;
      }

      candidate.push(elem);  // take
      backtrack(candidates, candidate, result);  // explore
      candidate.pop();  // clean up
    }
  }

  const result = [];
  const candidate = [];
  backtrack(candidates, candidate, result);
  return result;
}

### PROBLEM

Create a function `combinations` that takes an array of integers and an
integer, k, and returns all possible combinations of k numbers chosen
from the array. The input array will contain at most 20 numbers.

INPUT: nums (array of ints, maxlenght = 20), k (integer)
OUTPUT: Nested array (representing all of the combinations)

### EXAMPLES

Input: nums = [1,2,3,4], k = 2
Output: [
  [1,2], [1,3], [1,4], [2,3], [2,4], [3,4]
]
*/

function combinations(candidates, k) {
  function backtrack(candidates, candidate, result, position) {
    if (candidate.length === k) {
      result.push([...candidate]);
      return;
    }
    for (let idx = position; idx < candidates.length; idx++) {
      const elem = candidates[idx];
      candidate.push(elem);
      backtrack(candidates, candidate, result, idx + 1);
      candidate.pop();
    }
  }

  const result = [];
  const candidate = [];
  let position = 0;
  backtrack(candidates, candidate, result, position);
  return result;
}

function testCombinations(nums, k, expectedLength) {
  const result = combinations(nums, k);
  if (result.length !== expectedLength) return false;

  const stringifiedCombs = result.map(JSON.stringify);
  const uniqueCombs = new Set(stringifiedCombs);
  return uniqueCombs.size === expectedLength;
}

// Test Cases:
console.log(testCombinations([1,2,3,4], 2, 6)); // C(4,2) = 6
console.log(testCombinations([1,2,3,4,5], 3, 10)); // C(5,3) = 10
console.log(testCombinations([1,2,3,4,5,6], 4, 15)); // C(6,4) = 15
console.log(testCombinations([1,2,3,4,5,6,7], 3, 35)); // C(7,3) = 35
console.log(testCombinations([1,2,3,4,5,6,7,8], 5, 56)); // C(8,5) = 56
console.log(testCombinations([...Array(10).keys()].map(x => x + 1), 6, 210)); // C(10,6) = 210
console.log(testCombinations([...Array(20).keys()].map(x => x + 1), 10, 184756)); // C(20,10) = 184,756