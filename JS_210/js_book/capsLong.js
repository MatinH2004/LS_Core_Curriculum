// function capsLong(str) {
//   if (str.length > 10) {
//     return str.toUpperCase();
//   } else {
//     return str;
//   }
// }

// // ternary version
// function capsLong(str) {
//   return ((str.length > 10) ? str.toUpperCase() : str);
// }

// console.log(capsLong('Hello world'));
// console.log(capsLong('goodbye'));

function numberRange(num) {
  switch (true) {
    case (num < 0):
      console.log(`${num} is less than 0`);
      break;
    case (num >= 0 && num < 51):
      console.log(`${num} is between 0 and 51`);
      break;
    case (num >= 51 && num < 101):
      console.log(`${num} is between 51 and 100`);
      break;
    default:
      console.log(`${num} is greater than 100`);
      break;
  }
}

numberRange(25);
numberRange(75);
numberRange(125);
numberRange(-25);