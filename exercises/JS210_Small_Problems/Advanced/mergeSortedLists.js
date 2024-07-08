/*

Write a function that takes two sorted arrays as arguments and returns a new array 
that contains all the elements from both input arrays in sorted order.

Input:
  - 2 arrays that include numeric values
Output:
  - Input arrays merged and sorted

Rules:
  - Assume arrays only contain numeric values
  - Assume both args will always be provided
  - Assume no sparse arrays will be input
  - Expect to have empty arrays input
  - No sorting of any kind is allowed
  - Result array must be built one element at a time

[1, 5, 9, 2, 6, 8]:

[1]

DS:
  - I: 2 arrays
  - M: Array
  - O: Result array

ALGO:
1) Initialize an empty result array.

2) Create a temporary array by spreading both input arrays (arr1 and arr2) into a single array.

3) Iterate over each element in the temporary array:
    - If the result array is empty, push the current element from the temporary array into the result array.
    - Otherwise:
      - Iterate over the result array to find the correct position to insert the current element from the temporary array.
      - If the current element from the temporary array is less than or equal to the current element in the result array, insert it at the current position.
      - If the current element from the temporary array is greater than all elements in the result array, append it to the end of the result array.
      
4) Return the result array which now contains all elements from both input arrays in sorted order.

*/

function merge(arr1, arr2) {
  const result = [];
  const temp = [...arr1, ...arr2];

  temp.forEach(element => {
    if (result.length === 0) {
      result.push(element);
    } else {
      let inserted = false;
      for (let j = 0; j < result.length; j++) {
        if (element <= result[j]) {
          result.splice(j, 0, element);
          inserted = true;
          break;
        }
      }
      if (!inserted) {
        result.push(element);
      }
    }
  });

  return result.filter(n => n);
}

console.log(merge([1, 5, 9], [2, 6, 8]));      // [1, 2, 5, 6, 8, 9]
console.log(merge([1, 1, 3], [2, 2]));         // [1, 1, 2, 2, 3]
console.log(merge([], [1, 4, 5]));             // [1, 4, 5]
console.log(merge([1, 4, 5], []));             // [1, 4, 5]
console.log(merge([], []));                    // []

// LS Solution

function merge(array1, array2) {
  const copy1 = array1.slice();
  const copy2 = array2.slice();
  const result = [];

  while (copy1.length > 0 && copy2.length > 0) {
    result.push(copy1[0] <= copy2[0] ? copy1.shift() : copy2.shift());
  }

  return result.concat(copy1.length === 0 ? copy2 : copy1);
}