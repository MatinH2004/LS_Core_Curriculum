/*

Write a function logMultiples that takes one argument number.
It should log all multiples of the argument between 0 and 100 (inclusive)
that are also odd numbers. Log the values in descending order.

You may assume that number is an integer between 0 and 100.

*/

// const logMultiples = (num) => {
//   for (let i = 100; i > 0; i -= 1){
//     if (i % num === 0 && i % 2 === 1) console.log(i);
//   }
// }

// FE

function logMultiples(number) {
  let multiple = Math.floor(100 / number) * number;

  while (multiple > 0) {
    if (multiple % 2 === 1) {
      console.log(multiple);
    }

    multiple -= number;
  }
}

logMultiples(17);
// output (5x, 3x and 1x)
// 85
// 51
// 17

logMultiples(21);
// output (3x and 1x)
// 63
// 21