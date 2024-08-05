//1.

// function() {
//   console.log("Sometimes, syntax isn't intuitive!")
// }();

//2.

// => ERROR, gotta use parentheses to make it a func expression

(function() {
  console.log("Sometimes, syntax isn't intuitive!")
}());

//3.

var sum = 0;
var numbers;

sum += 10;
sum += 31;

numbers = [1, 7, -3, 3];

sum += (function sum(arr) {
  return arr.reduce(function(sum, number) {
    sum += number;
    return sum;
  }, 0);
})(numbers); // => 49

//4.

let countdown = (function(num) {
  for (; num >= 0; num--) {
    console.log(num);
  }

  console.log('Done!');
})

countdown(7);
// 7
// 6
// 5
// 4
// 3
// 2
// 1
// 0
// Done!

//5.

(function foo() {
  console.log('Bar');
})();

foo() // => foo is not a function

// Not available to global scope

//6. Call the func in IIFE using recursion

function countdown2(count) {
  (function recursiveSub(n) {
    console.log(n);

    if (n === 0) {
      console.log('Done!');
    } else {
      recursiveSub(n - 1);
    }
  })(count);
}

countdown2(7);