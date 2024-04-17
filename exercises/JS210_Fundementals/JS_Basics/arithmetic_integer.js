/*
Write a program that prompts the user for two positive integers,
and then prints the results of the following operations on those two numbers:
addition, subtraction, product, quotient, remainder, and power.

Do not worry about validating the input.

==> Enter the first number:
23
==> Enter the second number:
17
==> 23 + 17 = 40
==> 23 - 17 = 6
==> 23 * 17 = 391
==> 23 / 17 = 1
==> 23 % 17 = 6
==> 23 ** 17 = 1.4105003956066297e+23

*/

function arithmeticInteger(num1, num2) {
  let result = num1 + num2;
  console.log(`==> ${num1} + ${num2} = ${result}`);

  result = num1 - num2;
  console.log(`==> ${num1} - ${num2} = ${result}`);

  result = num1 * num2;
  console.log(`==> ${num1} * ${num2} = ${result}`);

  result = num1 / num2;
  console.log(`==> ${num1} / ${num2} = ${result}`);

  result = num1 % num2;
  console.log(`==> ${num1} % ${num2} = ${result}`);

  result = num1 ** num2;
  console.log(`==> ${num1} ** ${num2} = ${result}`);
}

const rlSync = require('readline-sync');
console.log("==> Enter the first number:");
let firstNum = Number(rlSync.prompt());
console.log("==> Enter the second number:");
let secondNum = Number(rlSync.prompt());

arithmeticInteger(firstNum, secondNum);