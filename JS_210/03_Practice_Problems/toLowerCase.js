function toLowerCase(string) {
  const CONVERSION_OFFSET = 32;

  let result = string.split('').map(function(char) {
    if (/[A-Z]/.test(char)) {
      return String.fromCharCode(char.charCodeAt(0) + CONVERSION_OFFSET);
    } else {
      return char;
    }
  });

  return result.join('');
}

console.log(toLowerCase('ALPHABET'));    // "alphabet"
console.log(toLowerCase('123'));         // "123"
console.log(toLowerCase('abcDEF'));      // "abcdef"