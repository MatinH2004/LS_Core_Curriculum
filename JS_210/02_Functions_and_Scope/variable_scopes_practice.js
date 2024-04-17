//1

let a = 'outer';

function testScope() {
  let a = 'inner';
  console.log(a);
}

console.log(a); // 'outer'
testScope();    // 'inner'
console.log(a); // 'outer'

//2

let a = 'outer';

function testScope() {
  a = 'inner';
  console.log(a);
}

console.log(a); // 'outer'
testScope();    // 'inner'
console.log(a); // 'inner'

//3

let basket = 'empty';

function goShopping() {
  function shop1() {
    basket = 'tv';
  }

  console.log(basket);  // empty

  let shop2 = function() {
    basket = 'computer';
  };

  const shop3 = () => {
    let basket = 'play station';
    console.log(basket);  // play station
  };

  shop1();
  shop2();
  shop3();

  console.log(basket);   // computer
}

goShopping();
// empty
// play station
// computer

//4

function hello() {
  a = 'hi'; // a becomes a global var because it isnt defined with let, const, var
}

hello();
console.log(a); // 'hi'

//5

function hello() {
  let a = 'hello'; // local variable in function scope
}

hello();
console.log(a); // ReferenceError; a is not defined

//6

console.log(a); // undefined

var a = 1;

/* The code above is equivalent to:

var a;
console.log(a);
a = 1;

*/

//7

console.log(a); // ReferenceError; can't reference a before init

let a = 1;

// JavaScript can tell that there is an a variable, but that variable lives in the Temporal Dead Zone;
// it is unset and cannot be accessed.

//8

// hello(); <- function must be called for the code below to work
console.log(a); // a is not defined (NOT undefined)

function hello() {
  a = 1;
}

/* The code above is equivalent to:

function hello() {
  a = 1;
}

console.log(a);

*/