// Solution 1
function substrings(string) {
  let result = [];

  for (let i = 0; i < string.length; i += 1) {
    for (let j = 1; j <= string.length; j += 1) {
      if (string.slice(i, j) !== '') {
        result.push(string.slice(i, j));
      }
    }
  }
  return result;
}

// Solution 2
function leadingSubstrings(str) {
  return [...str].map((_, idx) => str.substring(0, idx + 1))
}

function substrings(str) {
  return [...str].flatMap((_, idx) => leadingSubstrings(str.slice(idx)));
}

console.log(substrings('abcde'));

// returns
[ "a", "ab", "abc", "abcd", "abcde",
  "b", "bc", "bcd", "bcde",
  "c", "cd", "cde",
  "d", "de",
  "e" ]