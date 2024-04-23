const rlSync = require('readline-sync');

console.log('What is the bill? ');
let bill = parseFloat(rlSync.prompt());

console.log('What is the tip percentage? ');
let tip_percentage = parseFloat(rlSync.prompt());

let tip = (tip_percentage / 100) * bill;
let total = tip + bill;

console.log(`The tip is $${tip.toFixed(2)}`);
console.log(`The total is $${total.toFixed(2)}`);