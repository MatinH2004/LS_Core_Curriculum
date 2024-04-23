// function splitString(string, delimiter) {
//   if (delimiter === undefined) {
//     console.log('ERROR: No delimiter');
//     return;
//   }

//   let substring = '';
  
//   for (let i = 0; i < string.length; i += 1) {
//     if (delimiter === string[i]) {
//       console.log(substring);
//       substring = '';
//     } else if (delimiter === '') {
//       console.log(string[i])
//     } else {
//       substring += string[i];
//     }
//   }

//   console.log(substring);
// }

function splitString(string, delimiter) {
  if (delimiter === undefined) {
    console.log('ERROR: No delimiter');
    return;
  }

  let tempString = '';
  for (let index = 0; index < string.length; index += 1) {
    if (string[index] === delimiter) {
      console.log(tempString);
      tempString = '';
    } else if (delimiter === '') {
      console.log(string[index]);
    } else {
      tempString += string[index];
    }
  }

  if (tempString) {
    console.log(tempString);
  }
}

splitString('abc,123,hello world', ',');
// logs:
// abc
// 123
// hello world

splitString('hello');
// logs:
// ERROR: No delimiter

splitString('hello', '');
// logs:
// h
// e
// l
// l
// o

splitString('hello', ';');
// logs:
// hello

splitString(';hello;', ';');
// logs:
//  (this is a blank line)
// hello