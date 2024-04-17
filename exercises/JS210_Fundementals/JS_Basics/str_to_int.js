const DIGITS = {
  '0': 0, '1': 1, '2': 2, '3': 3, '4': 4,
  '5': 5, '6': 6, '7': 7, '8': 8, '9': 9,
};

function stringToSignedInteger(str) {
  let value = 0;
  const numbers = stringToNumbers(str);

  for (let i = 0; i < numbers.length; i += 1) {
    value = 10 * value + numbers[i];    
  }

  return value;
}

function stringToSignedInteger(string) {
  switch (string[0]) {
    case '-': return -stringToInteger(string.slice(1));
    case '+': return stringToInteger(string.slice(1));
    default:  return stringToInteger(string);
  }
}

function stringToNumbers(str) {
  const result = [];

  for (let i = 0; i < str.length; i += 1) {
    result.push(DIGITS[str[i]]);
  }

  return result;
}

stringToSignedInteger('4321');      // 4321
stringToSignedInteger('-570');      // -570
stringToSignedInteger('+100');      // 100