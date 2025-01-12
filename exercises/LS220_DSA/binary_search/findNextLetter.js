// Inefficient solution - (stupid)
// function nextLetter(chars, key) {
//   const alphabet = 'abcdefghijklmnopqrstuvwxyz'.repeat(2);
//   let i = alphabet.indexOf(key) + 1;
  
//   for (; i < alphabet.length; i++) {
//     if (chars.includes(alphabet[i])) {
//       return alphabet[i];
//     }
//   }
// }

// function findNextLetter(chars, key) {
//   const target = nextLetter(chars, key);

//   let left = 0;
//   let right = chars.length - 1;

//   while (left <= right) {
//     let mid = Math.floor((left + right) / 2);

//     if (chars[mid] === target) {
//       return chars[mid];
//     } else if (chars[mid] > target) {
//       right = mid - 1;
//     } else {
//       left = mid + 1;
//     }
//   }

//   return chars[0];
// }

// O(logN) solution
function findNextLetter(chars, key) {
  let left = 0, right = chars.length - 1, result = chars[0];

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);

    if (chars[mid] > key) {
      result = chars[mid];
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }

  return result;
}

console.log(findNextLetter(['b', 'd', 'f'], 'a') === 'b');
console.log(findNextLetter(['b', 'd', 'f'], 'c') === 'd');
console.log(findNextLetter(['b', 'd', 'f'], 'f') === 'b');
console.log(findNextLetter(['a', 'a', 'b', 'c'], 'a') === 'b');
console.log(findNextLetter(['c', 'f', 'j'], 'c') === 'f');
console.log(findNextLetter(['a', 'c', 'f', 'h', 'i', 'j'], 'g') === 'h');
// All test cases should log true.

// let left = 0;
// let right = array.length - 1;

// while (left <= right) {
//   let mid = Math.floor((left + right) / 2);

//   if (array[mid] === target) {
//     // Optional early return
//   } else if (***comparison***) {
//     left = mid + 1;
//   } else {
//     right = mid - 1;
//   }
// }

// Most often, if the target is not found, additional handling
// or returning a specific value is needed. In many cases it will
// be the index that `left` variable holds, which would indicate
// where the target *would* fit into the array.