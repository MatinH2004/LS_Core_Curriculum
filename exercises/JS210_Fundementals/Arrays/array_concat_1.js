/*
P:
Write a function that returns a new array. The function should contain all the values from the first
array argument, and the second value(s). If the second argument can be an array or a single value.

Explicit:
- The first argument will always be an array.
- The second argument can be either an array or another value.
- The function should return a new array.
- The elements in the new array should be in the same order as they appear in the arguments.
- The function should copy any object references from the arguments into the new array — i.e., if you make a change to a reference object from one of the arguments after calling concat, those changes should show up in the output array as well.
- The function should copy the values of primitives (e.g., strings, numbers, and booleans).

D:
- Use an array to return the result

A:
1. Initialize result array to the first argument
2. Determine if the second argument is an array (object)
  - if yes, iterate thru array and push elements to result array
  - else, push value to result array
3. return result array

*/

function concat(array1, secondArgument) {
  let result = array1.slice();

  if (Array.isArray(secondArgument)) {
    secondArgument.forEach((value) => result.push(value));
  } else {
    result.push(secondArgument);
  }

  console.log(result);
  return result;
}

// Refactor

function concat(arr, value) {
  return Array.isArray(value) ? [...arr, ...value] : [...arr, value];
}

concat([1, 2, 3], [4, 5, 6]);          // [1, 2, 3, 4, 5, 6]
concat([1, 2], 3);                     // [1, 2, 3]
concat([2, 3], ['two', 'three']);      // [2, 3, "two", "three"]
concat([2, 3], 'four');                // [2, 3, "four"]


const obj = { a: 2, b: 3 };
const newArray = concat([2, 3], obj);
newArray;                              // [2, 3, { a: 2, b: 3 }]
obj.a = 'two';
console.log(newArray);                 // [2, 3, { a: "two", b: 3 }]

const arr1 = [1, 2, 3];
const arr2 = [4, 5, obj];
const arr3 = concat(arr1, arr2);
arr3;                                  // [1, 2, 3, 4, 5, { a: "two", b: 3 }]
obj.b = 'three';
console.log(arr3);                     // [1, 2, 3, 4, 5, { a: "two", b: "three" }]

arr3[5].b = 3;                         // or, `arr3[5]['b'] = 3;`
console.log(obj);                      // { a: "two", b: 3 }