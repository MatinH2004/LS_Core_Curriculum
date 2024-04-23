/*

Please enter an integer greater than 0: 5
Enter "s" to compute the sum, or "p" to compute the product. s

The sum of the integers between 1 and 5 is 15.

*/

const rlSync = require('readline-sync');
let total = 1;

console.log('Please enter an integer greater than 0: ');
let integer = parseInt(rlSync.prompt(), 10);

console.log('Enter "s" to compute the sum, or "p" to compute the product: ');
let choice = rlSync.prompt().toLowerCase();

for (let i = 1; i <= integer; i += 1) {
  choice === 's' ? total += i : total *= i;
}

if (choice === 's') {
  console.log(`The sum of the integers between 1 and ${integer} is ${total - 1}.`);
} else {
  console.log(`The product of the integers between 1 and ${integer} is ${total}.`);
}