function getNumber(prompt) {
  let rlSync = require('readline-sync');
  let number = Number(rlSync.question(prompt));
  return number;
}

function multiplyEquation(first, second) {
  return `${first} * ${second} = ${first * second}`;
}

let first = getNumber("Enter the first number: ");
let second = getNumber("Enter the second number: ");

console.log(multiplyEquation(first, second))