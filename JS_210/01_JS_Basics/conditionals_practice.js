// 1-9.

let apples = 1;
let bananas = undefined;
let areEqual = (apples === bananas);
let eitherOr = (apples || bananas);

console.log(areEqual);
console.log(eitherOr);

// if (apples == bananas) {
if (apples === bananas) {
  console.log("They are strictly equal!");
}  else {
  if (apples == bananas) {
    console.log("Same number but different types");
  } else {
    console.log("Not strictly equal!");
  }
}

// 10.

let lastName = 'Hassan Pour';
let familyMessage = lastName === 'Hassan Pour' ? (console.log('You\'re part of the family!')) : (console.log('You\'re not family'));
