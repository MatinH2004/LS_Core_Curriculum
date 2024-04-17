function sum(values) {
  let total = 0;

  for (let idx = 0; idx < values.length; idx += 1) {
    total += values[idx];
  }

  return total;
}

function average(values) {
  return sum(values) / values.length;
}

console.log(average([1, 2, 3, 4, 5]));

let temperatures = [73, 58, 81, 64, 67];
console.log(average(temperatures));