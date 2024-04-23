function multisum(num) {
  let total = 0;

  for (let i = 0; i <= num; i += 1) {
    if (i % 3 === 0 || i % 5 === 0) {
      total += i;
    }
  }

  return total;
}

console.log(multisum(3));       // 3
console.log(multisum(5));       // 8
console.log(multisum(10));      // 33
console.log(multisum(1000));    // 234168