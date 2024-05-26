function staggeredCase(str) {
  let capitalize = true;
  let result = [];
  str = str.toLowerCase();

  for (let i = 0; i < str.length; i += 1) {
    if (/[^a-z]/i.test(str[i])) {
      result.push(str[i])
      continue;
    }

    if (capitalize) {
      result.push(str[i].toUpperCase());
    } else {
      result.push(str[i]);
    }

    capitalize = !capitalize;
  }

  return result.join('');
}

// using map
function staggeredCase(string) {
  let needUpper = true;
  let newChar;

  return string.split('').map(char => {
    if (char.match(/[a-z]/i)) {
      if (needUpper) {
        newChar = char.toUpperCase();
      } else {
        newChar = char.toLowerCase();
      }

      needUpper = !needUpper;
      return newChar;
    } else {
      return char;
    }
  }).join('');
}

// using reduce
function staggeredCase(str) {
  return [...str].reduce((obj, char) => {
    obj.result += obj.counter % 2 === 0 ? char.toUpperCase() : char.toLowerCase();

    if (char.match(/[A-Za-z]/)) obj.counter ++;

    return obj;
  }, {result: '', counter: 0}).result;
}

console.log(staggeredCase('I Love Launch School!'));        // "I lOvE lAuNcH sChOoL!"
console.log(staggeredCase('ALL CAPS'));                     // "AlL cApS"
console.log(staggeredCase('ignore 77 the 444 numbers'));    // "IgNoRe 77 ThE 444 nUmBeRs"