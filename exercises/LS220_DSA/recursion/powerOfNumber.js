/*



*/

function power(n, e) {
  if (e === 0) return 1;

  if (e < 0) {
    return (1 / n) * power(n, e + 1);
  }

  return n * power(n, e - 1);
}

console.log(power(2, -2) === 0.25); // FE
console.log(power(2, 3) === 8);
console.log(power(5, 0) === 1);
console.log(power(3, 4) === 81);
console.log(power(7, 2) === 49);
console.log(power(10, 1) === 10);

// All test cases should log true.