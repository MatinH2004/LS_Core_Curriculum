function push(arr, val) {
  arr[arr.length] = val;
  return arr.length;
}

// let count = [0, 1, 2];
// console.log(push(count, 3));         // 4
// console.log(count);                  // [ 0, 1, 2, 3 ]

// function pop(arr) {
//   if (arr.length === 0) {
//     return undefined;
//   }

//   let newLength = arr.length - 1;
//   let value = arr[newLength];
//   arr.length = newLength;
//   return value;
// }

// let count = [1, 2, 3];
// console.log(pop(count));             // 3
// console.log(count);                  // [ 1, 2 ]

// let unshift = function(array, value) {
//   for (let index = array.length; index > 0; index -= 1) {
//     array[index] = array[index - 1];
//   }

//   array[0] = value;
//   return array.length;
// };

// function shift(arr) {
//   let val = arr[0];

//   if (arr.length === 0) {
//     return undefined;
//   }

//   for (let idx = 0; idx < arr.length; idx += 1) {
//     arr[idx] = arr[idx + 1];
//   }

//   arr.length = arr.length - 1;
//   return val;
// }

// let count = [1, 2, 3];
// console.log(shift(count));           // 1
// console.log(count);                  // [ 2, 3 ]

// let indexOf = (arr, value) => {
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] === value) return i;
//   }

//   return -1;
// }

// console.log(indexOf([1, 2, 3, 3], 3));         // 2
// console.log(indexOf([1, 2, 3], 4));            // -1

// function lastIndexOf(arr, value) {
//   let idx;
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] === value) {
//       idx = arr[i];
//     }
//   }

//   return idx || -1;
// }

// console.log(lastIndexOf([1, 2, 3, 3], 3));     // 3
// console.log(lastIndexOf([1, 2, 3], 4));        // -1

// function slice(arr, start, end) {
//   let sliced = [];
//   for (let i = start; i < end; i++) {
//     sliced.push(arr[i]);
//   }

//   return sliced;
// }

// console.log(slice([1, 2, 3, 4, 5], 0, 2));                      // [ 1, 2 ]
// console.log(slice(['a', 'b', 'c', 'd', 'e', 'f', 'g'], 1, 3));  // [ 'b', 'c' ]

// const splice = (arr, start, num) => {
//   let removed = [];
//   for (let i = start; i < arr.length; i++) {
//     if (i < start + num) {
//       push(removed, arr[i]);
//     }

//     arr[i] = arr[i + num]
//   }

//   arr.length = arr.length - removed.length;
//   return removed;
// }

// let count = [1, 2, 3, 4, 5, 6, 7, 8];
// console.log(splice(count, 2, 5));                   // [ 3, 4, 5, 6, 7 ]
// console.log(count);                                 // [ 1, 2, 8 ]

// const concat = function(a, b) {
//   let result = [...a];
//   for (let i = 0; i < a.length; i++) {
//     push(result, b[i]);
//   }

//   return result;
// }

// console.log(concat([1, 2, 3], [4, 5, 6]));       // [ 1, 2, 3, 4, 5, 6 ]

// LS Solution

// function concat(firstArray, secondArray) {
//   let newArray = [];
//   for (let index = 0; index < firstArray.length; index += 1) {
//     push(newArray, firstArray[index]);
//   }

//   for (let index = 0; index < secondArray.length; index += 1) {
//     push(newArray, secondArray[index]);
//   }

//   return newArray;
// }

const join = (a, b) => {
  let result = '';
  for (let i = 0; i < a.length; i++) {
    if (i === a.length - 1) {
      result += String(a[i]);
      continue;
    }

    result = result + String(a[i]) + b
  }

  return result;
}

console.log(join(['bri', 'tru', 'wha'], 'ck '));       // 'brick truck wha'
console.log(join([1, 2, 3], ' and '));                 // '1 and 2 and 3'

// LS Solution

// function join(array, separator) {
//   let result = '';

//   for (let index = 0; index < array.length; index += 1) {
//     result += String(array[index]);

//     if (index < array.length - 1) {
//       result += separator;
//     }
//   }

//   return result;
// }