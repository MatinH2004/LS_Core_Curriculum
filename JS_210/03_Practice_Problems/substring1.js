function substr(string, start, length) {
  if (start < 0) {
    start = string.length + start;
  }

  let newString = '';

  for (let counter = 0; counter < length; counter += 1) {
    let index = start + counter;
    
    if (string[index] === undefined) {
      break;
    }

    newString += string[index];
  }

  console.log(newString);
  return newString;
}

let string = 'hello world';

substr(string, 2, 4);      // "llo "
substr(string, -3, 2);     // "rl"
substr(string, 8, 20);     // "rld"
substr(string, 0, -20);    // ""
substr(string, 0, 0);      // ""