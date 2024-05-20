// implementation of Array.prototype.every()

function myOwnEvery(array, func) {
  for (let i = 0; i < array.length; i += 1) {
    if (!func(array[i])) {
      return false;
    }
  }

  return true;
}

let isAString = value => typeof value === 'string';
console.log(myOwnEvery(['a', 'a234', '1abc'], isAString));       // true

// implementation of Array.prototype.some()

function myOwnSome(array, func) {
  for (let i = 0; i < array.length; i += 1) {
    if (func(array[i], i, array)) return true;
  }

  return false;
}

let hasString = isAString;
console.log(myOwnSome([12, 9.9, 'hello'], isAString));