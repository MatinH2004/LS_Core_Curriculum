// function crunch(str) {
//   let lastChar = '';
//   let newString = '';

//   for (let i = 0; i < str.length; i += 1) {
//     if (lastChar !== str[i]) {
//       newString += str[i];
//     }
//     lastChar = str[i];
//   }

//   return newString;
// }

// refactor
function crunch(str) {
  let newString = '';
  for (let i = 0; i < str.length; i += 1) {
    if (str[i] !== str[i + 1]) {
      newString += str[i];
    }
  }
  return newString;
}

console.log(crunch('ddaaiillyy ddoouubbllee'));    // "daily double"
console.log(crunch('4444abcabccba'));              // "4abcabcba"
console.log(crunch('ggggggggggggggg'));            // "g"
console.log(crunch('a'));                          // "a"
console.log(crunch(''));                           // ""