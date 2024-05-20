function myFilter(array, func) {
  const result = [];

  for (let i = 0; i < array.length; i += 1) {
    if (func(array[i], i, array)) result.push(array[i]);
  }

  return result;
}

let isPythagoreanTriple = function (triple) {
  return Math.pow(triple.a, 2) + Math.pow(triple.b, 2) === Math.pow(triple.c, 2);
};

console.log(myFilter([{ a: 3, b: 4,  c: 5 },
          { a: 5, b: 12, c: 13 },
          { a: 1, b: 2,  c: 3 },], isPythagoreanTriple));

// returns [ { a: 3, b: 4, c: 5 }, { a: 5, b: 12, c: 13 } ]

// LS Solution (I dont like it)

// function myFilter(array, func) {
//   let result = [];

//   array.forEach(value => {
//     if (func(value)) {
//       result.push(value);
//     }
//   });

//   return result;
// }

function multiplesOfThreeOrFive(values) {
  return myFilter(values, isMultipleOfThreeOrFive);
}

function isMultipleOfThreeOrFive(value) {
  return value % 5 === 0 || value % 3 === 0;
}

multiplesOfThreeOrFive([1, 3, 5, 7, 11, 18, 16, 15]);  // [ 3, 5, 18, 15 ]
