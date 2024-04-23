function utf16Value(string) {
  let sum = 0;

  for (let idx = 0; idx < string.length; idx += 1) {
    sum += string.charCodeAt(idx);
  }

  return sum;
}