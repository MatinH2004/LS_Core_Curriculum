function firstElementOf(arr) {
  return arr[0];
}

// console.log(firstElementOf(['U', 'S', 'A']));  // returns "U"


function lastElementOf(arr) {
  return arr[arr.length - 1];
}

// console.log(lastElementOf(['U', 'S', 'A']));;  // returns "A"


function nthElementOf(arr, index) {
  return arr[index];
}

// let digits = [4, 8, 15, 16, 23, 42];

// console.log(nthElementOf(digits, 3));   // returns 16
// console.log(nthElementOf(digits, 8));   // what does this return?
// console.log(nthElementOf(digits, -1));  // what does this return?


function firstNOf(arr, count) {
  let result = [];
  for (let i = 0; i < 3; i++) {
    result.push(arr[i]);
  }

  return result;

  // or:
  // return arr.slice(0, count);
}

// let digits = [4, 8, 15, 16, 23, 42];
// console.log(firstNOf(digits, 3));    // returns [4, 8, 15]


function lastNOf(arr, count) {
  let index = arr.length - count;

  if (index < 0) {
    index = 0;
  }

  return arr.slice(index);
}

// let digits = [4, 8, 15, 16, 23, 42];
// console.log(lastNOf(digits, 8));    // returns [16, 23, 42]


function endsOf(beginningArr, endingArr) {
  return [beginningArr[0], endingArr[endingArr.length - 1]];
}

console.log(endsOf([4, 8, 15], [16, 23, 42]));  // returns [4, 42]