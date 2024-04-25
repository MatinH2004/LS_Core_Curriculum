function oddElementsOf(arr) {
  let result = [];
  for (let i = 0; i < arr.length; i += 1) {
    if (i % 2 === 1) result.push(arr[i]);
  }

  return result;
}

// let digits = [4, 8, 15, 16, 23, 42];
// console.log(oddElementsOf(digits));    // returns [8, 16, 42]


function mirroredArray(arr) {
  // let result = [].concat(arr);
  // for (let i = arr.length - 1; i >= 0; i -= 1) {
  //   result.push(arr[i]);
  // }

  // refactor
  let result = arr.concat(arr.slice().reverse());
  return result;
}

// console.log(mirroredArray([1, 2, 3, 4, 5])); // [1, 2, 3, 4, 5, 5, 4, 3, 2, 1]


function sortDescending(arr) {
  let sorted = arr.slice().sort((a, b) => b - a);
  return sorted;
}

// let array = [23, 4, 16, 42, 8, 15];
// let result = sortDescending(array);
// console.log(result);                 // logs    [42, 23, 16, 15, 8, 4]
// console.log(array);                  // logs    [23, 4, 16, 42, 8, 15]

function matrixSums(arr) {
  let sums = [];

  for (let i = 0; i < arr.length; i++) {
    let sum = 0;

    for (let j = 0; j < arr[i].length; j++) {
      sum += arr[i][j];
    }

    sums.push(sum);
  }

  return sums;
}

// console.log(matrixSums([[2, 8, 5], [12, 48, 0], [12]]));  // returns [15, 60, 12]


function uniqueElements(arr) {
  let uniqueArray = [];
  
  for (let i = 0; i < arr.length; i++) {
    if (!uniqueArray.includes(arr[i])) {
      uniqueArray.push(arr[i]);
    }
  }

  return uniqueArray;
}

console.log(uniqueElements([1, 2, 4, 3, 4, 1, 5, 4]));  // returns [1, 2, 4, 3, 5]