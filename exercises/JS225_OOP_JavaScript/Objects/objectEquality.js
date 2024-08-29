const objectsEqual = (obj1, obj2) => {
  const keys1 = Object.keys(obj1).sort();
  const keys2 = Object.keys(obj2).sort();

  const keysEqual = () => {
    if (keys1.length !== keys2.length) {
      return false;
    } else if (keys1.length === 0) {
      return true;
    } else {
      return keys1.every((key, index) => key === keys2[index]);
    }
  }
  const valuesEqual = () => 
    keys1.every(key => obj1[key] === obj2[key]);

  return keysEqual() && valuesEqual();
}

console.log(objectsEqual({a: 'foo'}, {a: 'foo'}));                      // true
console.log(objectsEqual({a: 'foo', b: 'bar'}, {a: 'foo'}));            // false
console.log(objectsEqual({a: 'foo', b: 'bar'}, {b: "bar", a: 'foo'}));  // true
console.log(objectsEqual({}, {}));                                      // true
console.log(objectsEqual({a: 'foo', b: undefined}, {a: 'foo', c: 1}));  // false