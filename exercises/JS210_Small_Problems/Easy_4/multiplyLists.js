function multiplyList(a, b) {
  return a.map((num, idx) => num * b[idx]);
}

console.log(multiplyList([3, 5, 7], [9, 10, 11]));    // [27, 50, 77]