/*

Write a function that logs the integers from 1 to 100 (inclusive)
that are multiples of either 3 or 5. If the number is divisible by
both 3 and 5, append an "!" to the number.

*/

const multiplesOfThreeAndFive = function() {
  for (let num = 1; num <= 100; num += 1) {
    if (num % 3 === 0 && num % 5 === 0) {
      console.log(num.toString() + '!');
    } else if (num % 5 === 0 || num % 3 === 0) {
      console.log(num.toString());
    }
  }
}

// FE

const multiplesOfThreeAndFive = (min, max) => {
  for (let num = min; num <= max; num += 1) {
    if (num % 3 === 0 && num % 5 === 0) {
      console.log(num.toString() + '!');
    } else if (num % 5 === 0 || num % 3 === 0) {
      console.log(num.toString());
    }
  }
}

multiplesOfThreeAndFive(50, 150);

// output on console
// '3'
// '5'
// '6'
// '9'
// '10'
// '12'
// '15!'
// … remainder of output omitted for brevity
