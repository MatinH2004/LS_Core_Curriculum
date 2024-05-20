function myForEach(array, func) {
  for (let i = 0; i < array.length; i += 1) {
    func(array[i], i, array);
  }
}

let min = Infinity;
let getMin = value => (min = value <= min ? value : min);
myForEach([4, 5, 12, 23, 3], getMin);
console.log(min);                        // 3