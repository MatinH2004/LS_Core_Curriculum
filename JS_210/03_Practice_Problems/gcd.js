function gcd(a, b) {
  let divisor = Math.min(a, b);

  while (divisor > 0) {
    if (a % divisor === 0 && b % divisor === 0) {
      break;
    }

    divisor -= 1;
  }

  return divisor;
}

console.log(gcd(12, 4));   // 4
console.log(gcd(15, 10));  // 5
console.log(gcd(9, 2));    // 1
console.log(gcd(12, gcd(4, 8)));  // 4
console.log(gcd(gcd(12, 4), 8));  // 4