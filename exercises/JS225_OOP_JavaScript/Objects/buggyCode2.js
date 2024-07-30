// Write a function objectsEqual that accepts two object arguments and returns 
// true or false depending on whether the objects have the same key/value pairs.

const objectsEqual = (a, b) => {
  if (a === b) return true;

  const [arrA, arrB] = [Object.entries(a).sort(), Object.entries(b).sort()];
  if (arrA.length !== arrB.length) return false;

  for (let i = 0; i < arrA.length; i++) {
    if (arrA[i][0] !== arrB[i][0] || arrA[i][1] !== arrB[i][1]) return false;
  }

  return true;
}

console.log(objectsEqual({a: 'foo'}, {a: 'foo'}));                      // true
console.log(objectsEqual({a: 'foo', b: 'bar'}, {a: 'foo'}));            // false
console.log(objectsEqual({a: 'foo', b: 'bar'}, {b: "bar", a: 'foo'}));  // true
console.log(objectsEqual({}, {}));                                      // true
console.log(objectsEqual({a: 'foo', b: undefined}, {a: 'foo', c: 1}));  // false

// Solution using recursion that checks for deep equality comparison for objects as values:
// - Bob Rodes

function objectsEqual(a, b) {
  if (a === b) return true;
  if (typeof a !== 'object') return false;

  let [arrA, arrB] = [Object.entries(a).sort(), Object.entries(b).sort()];
  if (arrA.length !== arrB.length) return false;

  for (let i = 0; i < arrA.length; i++) {
    if (arrA[i][0] !== arrB[i][0]) return false;
    if (typeof arrA[i][1] === 'object' && typeof arrB[i][1] === 'object') {
      if (!objectsEqual(arrA[i][1], arrB[i][1])) return false;
    } else {
      if (arrA[i][1] !== arrB[i][1]) return false;
    }
  }

  return true;
}
