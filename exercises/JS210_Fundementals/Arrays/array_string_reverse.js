// function reverse(inputForReversal) {
//   if (Array.isArray(inputForReversal)) {
//     return reverseArray(inputForReversal);
//   } else {
//     return reverseString(inputForReversal);
//   }
// }

// function reverseArray(inputForReversal) {
//   const reversed = [];
//   const length = inputForReversal.length;

//   for (let i = 0; i < length; i += 1) {
//     reversed[length - i] = inputForReversal[i];
//   }

//   return reversed;
// }

// function reverseString(inputForReversal) {
//   const stringArray = inputForReversal.split(' ');
//   return reverseArray(stringArray).join(' ');
// }

// console.log(reverse('Hello'));           // "olleH"
// console.log(reverse('a'));               // "a"
// console.log(reverse([1, 2, 3, 4]));      // [4, 3, 2, 1]
// console.log(reverse([]));                // []

// const array = [1, 2, 3];
// console.log(reverse(array));             // [3, 2, 1]
// console.log(array);                      // [1, 2, 3]

// My solution:

function reverse(inputForReversal) {
  if (Array.isArray(inputForReversal)) {
    return reverseArray(inputForReversal);
  }

  return reverseArray(inputForReversal.split('')).join('');
}

function reverseArray(arr) {
  let reversed = [];

  for (let i = arr.length - 1; i >= 0; i -= 1) {
    reversed.push(arr[i]);
  }

  return reversed;
}

// My new solution using reduceRight:

function reverse(input) {
  if (typeof input === 'string') {
    return reverseArray(input.split('')).join('');
  } else {
    return reverseArray(input);
  }
}

function reverseArray(arr) {
  return arr.reduceRight((result, elem) => {
    result.push(elem);
    return result;
  }, []);
}

console.log(reverse('Hello'));           // "olleH"
console.log(reverse('a'));               // "a"
console.log(reverse([1, 2, 3, 4]));      // [4, 3, 2, 1]
console.log(reverse([]));                // []

const array = [1, 2, 3];
console.log(reverse(array));             // [3, 2, 1]
console.log(array);                      // [1, 2, 3]