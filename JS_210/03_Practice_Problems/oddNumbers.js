/*

Write a function that takes a positive integer as an argument,
and logs all the odd numbers from 1 to the passed in number (inclusive).
All numbers should be logged on separate lines.

*/

function logOddNumbers(num) {
  for (let i = 0; i <= num; i += 1) {
    if (i % 2 === 1) {
      console.log(i);
    }
  }
}

// FE

function logOddNumbers(num) {
  for (let i = 0; i <= num; i += 1) {
    if (i % 2 === 0) continue;
    console.log(i);
  }
}

// OR

function logOddNumbers(number) {
  for (let currentNumber = 1; currentNumber <= number; currentNumber += 2) {
    console.log(currentNumber);
  }
}

logOddNumbers(19);

// output on console
// 1
// 3
// 5
// 7
// 9
// 11
// 13
// 15
// 17
// 19