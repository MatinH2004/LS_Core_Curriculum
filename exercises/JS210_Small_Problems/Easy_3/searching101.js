let first = prompt('Enter the first number: ');
let second = prompt('Enter the second number: ');
let third = prompt('Enter the third number: ');
let fourth = prompt('Enter the fourth number: ');
let fifth = prompt('Enter the fifth number: ');
let last = prompt('Enter the last number: ');

const numbers = [first, second, third, fourth, fifth].map(s => Number(s));

if (numbers.includes(Number(last))) {
  console.log(`The number ${last} appears in [${numbers}]`);
} else {
  console.log(`The number ${last} does not appear in [${numbers}]`);
}