function showMultiplicativeAverage(arr) {
  const total = arr.reduce((acc, num) => acc * num);
  return (total / arr.length).toFixed(3);
}

console.log(showMultiplicativeAverage([3, 5]));                   // "7.500"
console.log(showMultiplicativeAverage([2, 5, 7, 11, 13, 17]));    // "28361.667"