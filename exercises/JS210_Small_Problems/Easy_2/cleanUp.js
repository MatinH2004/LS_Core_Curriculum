const isAlphabetic = str => /[a-z]/i.test(str);

function cleanUp(str) {
  let result = '';

  for (let i = 0; i < str.length; i++) {
    if (isAlphabetic(str[i])) {
      result += str[i];
    } else if (!isAlphabetic(str[i])) {
      if (result[result.length - 1] === ' ') continue;
      result += ' ';
    }
  }

  return result;
}

console.log(cleanUp("---what's my +*& line?"));    // " what s my line "