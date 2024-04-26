/*

Implement a function that takes a String as an argument and
returns an object that contains a count of the repeated characters.

*/

// function repeatedCharacters(str) {
//   let chars = str.toLowerCase().split('');
//   let count = {};

//   for (char of chars) {
//     if (!count[char]) {
//       count[char] = 1;
//     } else {
//       count[char] += 1;
//     }
//   }

//   for (key in count) {
//     if (count[key] === 1) {
//       delete count[key];
//     }
//   }

//   return count;
// }

// Refactor using reduce

function repeatedCharacters(str) {
  let chars = str.toLowerCase().split('');

  let count = chars.reduce((count, char) => {
    if (!count[char]) count[char] = 0;
    count[char] += 1;
    return count;
  }, {});

  for (let char in count) {
    if (count[char] === 1) {
      delete count[char];
    }
  }

  return count;
}

console.log(repeatedCharacters('Programming'));    // { r: 2, g: 2, m: 2 }
console.log(repeatedCharacters('Combination'));    // { o: 2, i: 2, n: 2 }
console.log(repeatedCharacters('Pet'));            // {}
console.log(repeatedCharacters('Paper'));          // { p: 2 }
console.log(repeatedCharacters('Baseless'));       // { s: 3, e: 2 }