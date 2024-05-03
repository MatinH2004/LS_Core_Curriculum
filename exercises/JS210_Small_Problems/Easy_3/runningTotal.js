// const runningTotal = arr => {
//   let result = [];
//   let total = 0;

//   for (let i = 0; i < arr.length; i++) {
//     total += arr[i];
//     result.push(total);
//   }

//   return result;
// }

// using Array.prototype.map

let runningTotal = arr => {
  let total = 0;
  return arr.map(num => total += num);
}

console.log(runningTotal([2, 5, 13]));             // [2, 7, 20]
console.log(runningTotal([14, 11, 7, 15, 20]));    // [14, 25, 32, 47, 67]
console.log(runningTotal([3]));                    // [3]
console.log(runningTotal([]));                     // []
