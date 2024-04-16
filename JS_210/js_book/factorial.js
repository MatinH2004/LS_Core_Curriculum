// function factorial(n) {
//   let result = 1
//   for (let i = 1; i <= n; i += 1) {
//     result *= i;
//   }
//   return result;
// }

// console.log(factorial(1));     // => 1
// console.log(factorial(2));     // => 2
// console.log(factorial(3));     // => 6
// console.log(factorial(4));     // => 24
// console.log(factorial(5));     // => 120
// console.log(factorial(6));     // => 720
// console.log(factorial(7));     // => 5040
// console.log(factorial(8));     // => 40320

// // Recursion

// function factorial(n) {
//   if (n === 1) return 1;

//   return n * factorial(n - 1);
// }

// console.log(factorial(1));     // => 1
// console.log(factorial(2));     // => 2
// console.log(factorial(3));     // => 6
// console.log(factorial(4));     // => 24
// console.log(factorial(5));     // => 120
// console.log(factorial(6));     // => 720
// console.log(factorial(7));     // => 5040
// console.log(factorial(8));     // => 40320

// let myArray = [
//   1, 3, 6, 11,
//   4, 2, 4, 9,
//   17, 16, 0,
// ];

// let copy = myArray.map(function(num) {
//   if (num % 2 === 0) {
//     return 'even';
//   } else {
//     return 'odd';
//   }
// });

// console.log(copy)

// function findIntegers(arr) {
//   return arr.filter(value => Number.isInteger(value));
// }

// let things = [1, 'a', '1', 3, NaN, 3.1415, -4, null, false];
// let integers = findIntegers(things);
// console.log(integers); // => [1, 3, -4]

// function oddLengths(arr) {
//   let lengths = arr.map(letters => letters.length);
//   return lengths.filter(num => num % 2 === 1);
// }
 
// let arr = ['a', 'abcd', 'abcde', 'abc', 'ab'];
// console.log(oddLengths(arr)); // => [1, 5, 3]

// function sumOfSquares(arr) {
//   return arr.reduce(function(acc, value) {
//     return acc + (value * value);
//   }, 0);
// }

// let array = [3, 5, 7];
// console.log(sumOfSquares(array)); // => 83

// function oddLengths(arr) {
//   return arr.reduce(function(acc, str) {
//     let length = str.length;

//     if (length % 2 == 1) {
//       acc.push(length);
//     }

//     return acc;
//   }, []);
// }

// let arr = ['a', 'abcd', 'abcde', 'abc', 'ab'];
// console.log(oddLengths(arr)); // => [1, 5, 3]

// function copyObj(sourceObj, keys) {
//   let destinationObj = {};

//   if (keys) {
//     keys.forEach(function(key) {
//       destinationObj[key] = sourceObj[key];
//     });

//     return destinationObj;
//   } else {
//     return Object.assign(destinationObj, sourceObj);
//   }
// }

// let objToCopy = {
//   foo: 1,
//   bar: 2,
//   qux: 3,
// };

// let newObj = copyObj(objToCopy);
// console.log(newObj);        // => { foo: 1, bar: 2, qux: 3 }

// let newObj2 = copyObj(objToCopy, [ 'foo', 'qux' ]);
// console.log(newObj2);       // => { foo: 1, qux: 3 }

// let newObj3 = copyObj(objToCopy, [ 'bar' ]);
// console.log(newObj3);       // => { bar: 2 }

// let obj = {
//   foo: { a: "hello", b: "world" },
//   bar: ["example", "mem", null, { xyz: 6 }, 88],
//   qux: [4, 8, 12]
// };

// obj.bar[3].xyz = 606

// console.log(obj)

// function allMatches(list, regex) {
//   let result = [];

//   list.forEach(function(word) {
//     if (word.match(regex)) {
//       result.push(word);
//     }
//   });

//   return result;
// }

// function allMatches(words, pattern) {
//   return words.filter((word) => pattern.test(word));
// }

// let words = [
//   'laboratory',
//   'experiment',
//   'flab',
//   'Pans Labyrinth',
//   'elaborate',
//   'polar bear',
// ];

// console.log(allMatches(words, /lab/)); // => ['laboratory', 'flab', 'elaborate']

function isNotANumber(value) {
  return value !== value;
}