function shift(array) {
  let result;

  if (array.length !== 0) {
    result = array.splice(0, 1).pop();
  }

  return result;
}

function unshift(array, ...args) {
  for (let i = 0; i < args.length; i += 1) {
    array.splice(i , 0, args[i]);
  }

  return array.length;
}

shift([1, 2, 3]);                // 1
shift([]);                       // undefined
shift([[1, 2, 3], 4, 5]);        // [1, 2, 3]

unshift([1, 2, 3], 5, 6);        // 5
unshift([1, 2, 3]);              // 3
unshift([4, 5], [1, 2, 3]);      // 3

const testArray = [1, 2, 3];
shift(testArray);                // 1
testArray;                       // [2, 3]
unshift(testArray, 5);           // 3
testArray;                       // [5, 2, 3]