function missing(arr) {
  let missingNums = [];
  let start = arr[0];
  let end = arr[arr.length - 1];

  for (let i = start; i < end; i += 1) {
    if (arr.indexOf(i) === -1) {
      missingNums.push(i);
    }
  }

  return missingNums;
}

const succ = num => num + 1;

console.log(missing([-3, -2, 1, 5]));                  // [-1, 0, 2, 3, 4]
console.log(missing([1, 2, 3, 4]));                    // []
console.log(missing([1, 5]));                          // [2, 3, 4]
console.log(missing([6]));                             // []