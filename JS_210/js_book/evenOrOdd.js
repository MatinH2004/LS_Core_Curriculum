function evenOrOdd(num) {
  if (!Number.isInteger(num)) {
    console.log('Argument is not an integer!');
  } else if (num % 2 === 0) {
    console.log('even')
  } else {
    console.log('odd');
  }
}

let a = 1
let b = 2
let c = '3'

evenOrOdd(a);
evenOrOdd(b);
evenOrOdd(c);