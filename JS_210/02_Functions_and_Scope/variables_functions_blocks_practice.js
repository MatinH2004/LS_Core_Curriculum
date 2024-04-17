//1

let color = 'yellow';
let colors = ['red', 'green', 'blue'];

function updateColors(colors) {
  colors.push(color);
}

updateColors(colors)
console.log(colors); // [ red green blue yellow ]

//2

let color = 'yellow';
let colors = ['red', 'green', 'blue'];

function updateColors(colors, color) {
  colors.push(color);
}

updateColors(colors)
console.log(colors); // [red green blue undefined]

//3

let color1 = 'purple';
let color2 = 'pink';
let colors = ['red', 'green', 'blue'];

function updateColors(colors, color) {
  colors.push(color);
}

updateColors(colors, color1);
updateColors(colors, color2);
console.log(colors); // [red green blue purple pink]

//4

let color1 = 'purple';
let color2 = 'pink';
let colors = ['red', 'green', 'blue'];

function updateColors(colors, color) {
  colors.push(color);
  return colors;
}

let newColors = updateColors(colors, color1);
updateColors(newColors, color2);
console.log(colors); // [red green blue purple pink]

//5

let color = 'purple';
let colors = ['red', 'green', 'blue'];

function addColor(colors, color) {
  colors.push(color);
  return colors;
}

function removeColor(colors) {
  color = colors.pop(); // color is reassigned from 'purple' to 'blue'
  return colors;
}

let newColors = removeColor(colors);
addColor(colors, color);
console.log(newColors); // [ red green blue ]

//6

function capitalize() {
  return word[0].toUpperCase() + word.slice(1);
}

function exclaim() {
  return word += '!!!'; // word = word + '!!!'; word is reassigned and global var is affected
}

let word = 'hello';
let capitalizedWord = capitalize(word);
let exclaimedWord = exclaim(capitalizedWord);

console.log(word);            // hello!!!
console.log(capitalizedWord); // Hello
console.log(exclaimedWord);   // hello!!!

//7

function capitalize(word) { // takes param
  return word[0].toUpperCase() + word.slice(1);
}

function exclaim(word) { // takes param => doesnt change original value
  return word += '!!!';
}

let word = 'hello';
let capitalizedWord = capitalize(word);
let exclaimedWord = exclaim(capitalizedWord);

console.log(word);            // hello
console.log(capitalizedWord); // Hello
console.log(exclaimedWord);   // Hello!!!