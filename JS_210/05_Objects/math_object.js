// Math.PI
const radiansToDegrees = radians => (radians * 180) / Math.PI;
// OR
let radiansToDegrees1 = radians => radians / (Math.PI / 180);

// Getting absolute value of a number
let degrees = -180;
console.log(`Absolute value of ${degrees}: ${Math.abs(degrees)}`);

// Getting square root of a number
console.log(`Square root of 16777216: ${Math.sqrt(16777216)}`)

// Calculate the power
console.log(Math.pow(16, 6));

// Rounding numbers:
let a = 50.72;
let b = 49.2;
let c = 49.86;

console.log(Math.floor(a));
console.log(Math.ceil(b));
console.log(Math.round(c));

// Random number

const randomInt = function(min, max) {
  if (min === max) {
    return min;
  } else if (min > max) {
    [min, max] = [max, min];
  }

  let difference = max - min + 1;
  return Math.floor(Math.random() * difference) + min;
};

console.log(randomInt(1, 5));
