function isUppercase(text) {
  const chars = text.split('');

  for (let i = 0; i < chars.length; i += 1) {
    if (/[^a-z]/i.test(chars[i])) continue;
    if (chars[i] !== chars[i].toUpperCase()) return false;
  }

  return true;
}

// refactor
function isUppercase(string) {
  return !/[a-z]/.test(string);
}

// simple solution
function isUppercase(string) {
  return string === string.toUpperCase();
}

console.log(isUppercase('t'));               // false
console.log(isUppercase('T'));               // true
console.log(isUppercase('Four Score'));      // false
console.log(isUppercase('FOUR SCORE'));      // true
console.log(isUppercase('4SCORE!'));         // true
console.log(isUppercase(''));                // true