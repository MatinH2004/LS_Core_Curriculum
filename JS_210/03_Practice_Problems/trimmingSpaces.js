// function trim(string) {
//   let lastChar;
//   let result = '';

//   for (let i = 0; i < string.length; i += 1) {
//     if (string[i] !== ' ') {
//       result += string[i];
//     }

//     lastChar = i
//   }

//   return result
// }

function trimLeft(str) {
  let copyMode = false;
  let result = '';

  for (let i = 0; i < str.length; i += 1) {
    if (str[i] !== ' ') copyMode = true;

    if (copyMode) {
      result += str[i]
    }
  }

  return result;
}

function trimRight(str) {
  let copyMode = false;
  let result = '';

  for (let i = str.length - 1; i >= 0; i -= 1) {
    if (str[i] !== ' ') copyMode = true;

    if (copyMode) {
      result = str[i] + result
    }
  }

  return result;
}

function trim(str) {
  return trimLeft(trimRight(str));
}

console.log(trim('  abc  '));  // "abc"
console.log(trim('abc   '));   // "abc"
console.log(trim(' ab c'));    // "ab c"
console.log(trim(' a b  c'));  // "a b  c"
console.log(trim('      '));   // ""
console.log(trim(''));         // ""