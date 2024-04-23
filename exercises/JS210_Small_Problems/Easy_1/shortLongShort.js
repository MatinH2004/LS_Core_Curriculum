function shortLongShort(a, b) {
  if (a.length > b.length) {
    return b + a + b;
  } else {
    return a + b + a;
  }
}

// refactor
function shortLongShort(str1, str2) {
  [shorter, longer] = str1.length > str2.length ? [str2, str1] : [str1, str2];
  return shorter + longer + shorter;
}

console.log(shortLongShort('abc', 'defgh'));    // "abcdefghabc"
console.log(shortLongShort('abcde', 'fgh'));    // "fghabcdefgh"
console.log(shortLongShort('', 'xyz'));         // "xyz"