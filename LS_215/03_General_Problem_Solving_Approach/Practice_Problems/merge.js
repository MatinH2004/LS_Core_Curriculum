// Write a function that takes two or more objects and returns 
// a new object which combines all the input objects.

// Objects are combined together so that the values of matching keys are added together.

// An example:

// const objA = { a: 10, b: 20, c: 30 }
// const objB = { a: 3, c: 6, d: 3 }
// combine(objA, objB) // Returns { a: 13, b: 20, c: 36, d: 3 }

// The combine function should not mutate the input objects.

/*

Input:
  - two or more objects
Output:
  - one object with all k/v pairs combined

Rules:
  - The argument will always be provided
  - The input will always be objects
  - When merging, combine the values of each key
    - if any values are a data type other than number, it will be 0 (ex. object, null, undefined)
  - A new object should be returned (no mutation allowed)
  - The values can be stringified numbers

Data Structure:
Input -> { a: 10, b: 20, c: 30 }, { a: 3, c: 6, d: 3 }

Intermediate (Array) ->
[
  [ [ 'a', 10 ], [ 'b', 20 ], [ 'c', 30 ] ],
  [ [ 'a', 3 ], [ 'c', 6 ], [ 'd', 3 ] ]
]

Combine => 

[ [ 'a', 13 ], [ 'b', 20 ], [ 'c', 36 ], [ 'd', 3 ] ]

Return Output => 

{ a: 13, b: 20, c: 36, d: 3 }

Algorithm:

0) Use spread syntax on the function param, so any number of objects can be input
  - filter out any data structure that isn't an object
  - use helper method: isObject()

1) Tranform all objects into arrays
  - assign array to `allPairs`

2) Flatten the array down so it is 2 dimensional

3) Iterate over the array
  - initialize a result object
  - for each sub array:
    - if key exists in result
      - convert value to number type or 0 if falsy, and add to key in result
    - if key does not exist
      - conver value to number type or 0 if falsy, and assign to key in result
  
4) Convert 2D array to Object and return

*/

function combine(...objects) {
  objects = objects.filter(isObject);
  const allPairs = objects.map(obj => Object.entries(obj));

  return allPairs.flat(1).reduce((res, [key, value]) => {
    if (res[key]) {
      res[key] += (Number(value) || 0);
    } else {
      res[key] = (Number(value) || 0)
    }
    
    return res;
  }, {});
}

function isObject(obj) {
  return typeof obj === 'object' && !Array.isArray(obj) && obj !== null;
}

let objA = { a: 10, b: 20, c: 30 }
let objB = { a: 3, c: 6, d: 3 }
console.log(combine(objA, objB)); // Returns { a: 13, b: 20, c: 36, d: 3 }

objA = { a: true, b: 20, c: 30 }
objB = { a: true, c: 6, d: 3 }
const objC = { a: false, b: null}
const arrA = [];       // (must be ignored)
const nullA = null;    // (must be ignored)
console.log(combine(objA, objB, objC, arrA, nullA)); // Returns { a: 2, b: 20, c: 36, d: 3 }

objA = {}
objB = {}
console.log(combine(objA, objB)); // Returns {}