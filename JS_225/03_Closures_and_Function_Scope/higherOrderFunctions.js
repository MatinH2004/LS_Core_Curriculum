// 1. What defines higher order functions?

// A higher order function must either:

// - Take a function as argument
// - return a function
// - or both

// 2.

let numbers = [1, 2, 3, 4];
function checkEven1(number) {  // NOT a higher order func
  return number % 2 === 0;
}

numbers.filter(checkEven1); // higher order func

// 3.

function makeCheckEven() {
  return (number) => number % 2 === 0;
}

let checkEven2 = makeCheckEven();

numbers.filter(checkEven2); // [2, 4]

// 4.

function execute(func, operand) {
  return func(operand);
}

execute(function(number) {
  return number * 2;
}, 10); // 20

execute(function(string) {
  return string.toUpperCase();
}, 'hey there buddy'); // "HEY THERE BUDDY"

// 5.

function makeListTransformer(func) {
  return (collection) => {
    return collection.map(func);
  }
}

let timesTwo = makeListTransformer(function(number) {
  return number * 2;
});

console.log(timesTwo([1, 2, 3, 4])); // [2, 4, 6, 8]