// function invoiceTotal(amount1, amount2, amount3, amount4) {
//   return amount1 + amount2 + amount3 + amount4;
// }

function invoiceTotal(...args) {
  return args.reduce((total, amount) => total + amount, 0);
}

console.log(invoiceTotal(20, 30, 40, 50));          // 140
console.log(invoiceTotal(20, 30, 40, 50, 40, 40));  // 220