/*

Create a function that splits a bunch into singular objects inside an array.

INPUT:
  - array of objects

OUTPUT:
  - array of objects

RULES:
  - The input array will never be empty.
  - Objects will always have a name and quantity over 0.
  - The returned object should have each fruit in the same order as the original.
  - The goal is to multiply the object by the number specified in quantity
  - and each object in the result array must have a quantity set to 1

DS:

array of elements
push()

ALGO:

0. init result array

1. iterate over array's objects
  - pass each object into multiply(obj, n) helper func

2. return result

ALGO multiply(obj, n):

0. set quanitity of obj to 1
1. iterate from 0 to n
2. push each object to result arr


*/

function splitBunches(arr) {
  const result = [];
  const multiply = (obj, n) => {
    obj.quantity = 1
    for (let i = 0; i < n; i++) {
      result.push(obj);
    }
  }

  arr.forEach(obj => multiply(obj, obj.quantity));
  return result;
}

console.log(splitBunches([
  { name: "grapes", quantity: 2 }
]));

// [
//   { name: "grapes", quantity: 1 },
//   { name: "grapes", quantity: 1 }
// ]


console.log(splitBunches([
  { name: "currants", quantity: 1 },
  { name: "grapes", quantity: 2 },
  { name: "bananas", quantity: 2 }
]));

// [
//   { name: "currants", quantity: 1},
//   { name: "grapes", quantity: 1 },
//   { name: "grapes", quantity: 1 },
//   { name: "bananas", quantity: 1 },
//   { name: "bananas", quantity: 1 }
// ]