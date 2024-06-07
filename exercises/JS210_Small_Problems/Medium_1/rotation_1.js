/*
Start time:

---------- PROBLEM ----------
INPUT:
  - array
OUTPUT:
  - new array

EXAMPLES:

----------- RULES -----------
  - rotate an array by moving the first element to the end of the array
  - do not mutate the input array (create copy)
  - if input is not an array, return undefined
  - if input is an empty array, return an empty array
  - assume sparse arrays will not be input

------- DATA STRUCTURE ------
  - array

--------- SCRATCH PAD -------

---------- ALGORITHM --------
  - check if input array is an array
    - otherwise return undefined
  - initialize copy to a copy of input array
  - initialize first to first element of array
  - push first to copy
  - return copy array

*/

function rotateArray(arr) {
  if (!Array.isArray(arr)) return undefined;
  if (arr.length === 0) return [];

  return arr.slice(1).concat(arr[0]);
}

// LS Solution

function rotateArray(array) {
  if (!Array.isArray(array)) {
    return;
  }

  if (array.length === 0) {
    return [];
  }

  return array.slice(1).concat(array[0]);
}

console.log(rotateArray([7, 3, 5, 2, 9, 1]));       // [3, 5, 2, 9, 1, 7]
console.log(rotateArray(['a', 'b', 'c']));          // ["b", "c", "a"]
console.log(rotateArray(['a']));                    // ["a"]
console.log(rotateArray([1, 'a', 3, 'c']));         // ["a", 3, "c", 1]
console.log(rotateArray([{ a: 2 }, [1, 2], 3]));    // [[1, 2], 3, { a: 2 }]
console.log(rotateArray([]));                       // []

// return `undefined` if the argument is not an array
console.log(rotateArray());                         // undefined
console.log(rotateArray(1));                        // undefined


// the input array is not mutated
const array = [1, 2, 3, 4]
console.log(rotateArray(array));                    // [2, 3, 4, 1]
console.log(array);                                 // [1, 2, 3, 4]