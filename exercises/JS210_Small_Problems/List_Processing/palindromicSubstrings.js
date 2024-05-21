function substrings(string) {
  let result = [];

  for (let i = 0; i < string.length; i += 1) {
    for (let j = 1; j <= string.length; j += 1) {
      if (string.slice(i, j).length > 1) {
        result.push(string.slice(i, j));
      }
    }
  }
  return result;
}

function isPalindrome(str) {
  return str === [...str].reverse().join('');
}

function palindromes(str) {;
  return substrings(str).filter(isPalindrome);
}

// console.log(palindromes('abcd'));       // []
console.log(palindromes('madam'));      // [ "madam", "ada" ]

console.log(palindromes('hello-madam-did-madam-goodbye'));
// returns
// [ "ll", "-madam-", "-madam-did-madam-", "madam", "madam-did-madam", "ada",
//   "adam-did-mada", "dam-did-mad", "am-did-ma", "m-did-m", "-did-", "did",
//   "-madam-", "madam", "ada", "oo" ]

console.log(palindromes('knitting cassettes'));
// returns
// [ "nittin", "itti", "tt", "ss", "settes", "ette", "tt" ]