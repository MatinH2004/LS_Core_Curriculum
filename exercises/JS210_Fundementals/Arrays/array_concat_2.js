function concat(...args) {
  let result = [];

  args.forEach(function(value) {
    if (Array.isArray(value)) {
      value.forEach((element) => result.push(element));
    } else {
      result.push(value);
    }
  });

  return result;
}

concat([1, 2, 3], [4, 5, 6], [7, 8, 9]);    // [1, 2, 3, 4, 5, 6, 7, 8, 9]
concat([1, 2], 'a', ['one', 'two']);        // [1, 2, "a", "one", "two"]
concat([1, 2], ['three'], 4);               // [1, 2, "three", 4]

// Refactor

function concat(...args){
  return args.flat(Infinity); // Infinity for flattening deep layers of arrays
}

console.log(concat([1, 2, 3], [4, 5, 6], [7, 8, 9]));    // [1, 2, 3, 4, 5, 6, 7, 8, 9]
console.log(concat([1, 2], 'a', ['one', 'two']));        // [1, 2, "a", "one", "two"]
console.log(concat([1, 2], ['three'], 4));               // [1, 2, "three", 4]
console.log(concat([1, 2], ['three'], 4, [5], [6, 7, [8]])); // [ 1, 2, 'three', 4, 5, 6, 7, 8 ]
console.log(concat([1, 2], ['three'], 4, [5], [6, 7, [8]], [[[[2]]]])); // [ 1, 2, 'three', 4, 5, 6, 7, 8, 2 ]
