function isUrl(str) {
  return !!str.match(/^https?:\/\/\S+$/ig);
}

console.log(isUrl('https://launchschool.com'));   // -> true
console.log(isUrl('http://example.com'));         // -> true
console.log(isUrl('https://example.com hello'));  // -> false
console.log(isUrl('   https://example.com'));     // -> false

let fields = text => {
  return text.split(/[\t,]+/);
}

console.log(fields("Pete,201,Student"));    // ['Pete', '201', 'Student']
console.log(fields("Pete \t 201   ,  TA")); // ['Pete', '201', 'TA']
console.log(fields("Pete \t 201"));         // ['Pete', '201']
console.log(fields("Pete \n 201"));         // ['Pete', '\n', '201']

let mysteryMath = function (equation) {
  return equation.replace(/[+\-*\/]/, '?');
};

console.log(mysteryMath('4 + 3 - 5 = 2'));
// '4 ? 3 - 5 = 2'

console.log(mysteryMath('(4 * 3 + 2) / 7 - 1 = 1'));
// '(4 ? 3 + 2) / 7 - 1 = 1'

let danish = text => {
  return text.replace(/\b(apple|blueberry|cherry)\b/, 'danish');
}

console.log(danish('An apple a day keeps the doctor away'));
// -> 'An danish a day keeps the doctor away'

console.log(danish('My favorite is blueberry pie'));
// -> 'My favorite is danish pie'

console.log(danish('The cherry of my eye'));
// -> 'The danish of my eye'

console.log(danish('apple. cherry. blueberry.'));
// -> 'danish. cherry. blueberry.'

console.log(danish('I love pineapple'));
// -> 'I love pineapple'