function isSquareInteger(num) {
  let left = 0, right = num;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    let square = mid * mid;

    if (num === square) {
      return true;
    } else if (num < square) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }

  return false;
}

// optimized further using Math.ceil
function isSquareInteger(num) {
  let left = 0;
  let right = Math.ceil(num / 2);

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    let square = mid ** 2;

    if (square > num) {
      right = mid - 1;
    } else if (square < num) {
      left = mid + 1;
    } else {
      return true;
    }
  }

  return false;
}

console.log(isSquareInteger(1) === true);
console.log(isSquareInteger(4) === true);
console.log(isSquareInteger(16) === true);
console.log(isSquareInteger(14) === false);
console.log(isSquareInteger(25) === true);
console.log(isSquareInteger(26) === false);

// All test cases should log true.