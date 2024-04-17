//1

// function say() {
//   if (false) {
//     var a = 'hello from inside a block';
//   }

//   console.log(a);
// }

// say(); // undefined -> var is initialized to undefied, but not reassigned to string

//2

// function say() {
//   if (false) {
//     let a = 'hello from inside a block';
//   }

//   console.log(a);
// }

// say(); // ReferenceError; a is not defined (block-level scope)

//3

// function hello() {
//   a = 'hello';
//   console.log(a);

//   if (false) {
//     var a = 'hello again';
//   }
// }

// hello();        // 'hello'
// console.log(a); // a is not defined - it is defined at function-level

/* After hoisting:

function hello() {
  var a;
  a = 'hello';

  console.log(a);

  if (false) {
    a = 'hello again';
  }
}

hello();
console.log(a);

*/

//4

// function hello() {
//   a = 'hello';
//   console.log(a);

//   if (false) {
//     let a = 'hello again'; // `a` is confined to the block's scope
//                            // which makes the previous `a` a glob var
//   }
// }

// hello();          // 'hello'
// console.log(a);   // 'hello'

//5

// var a = 'hello';

// for (var index = 0; index < 5; index += 1) {
//   var a = index;
// }

// console.log(a); // 4
 
//6

// let a = 'hello';

// for (let index = 0; index < 5; index += 1) {
//   let a = index; // scoped at block-level
// }

// console.log(a);

//7

// let a = 1;

// function foo() {
//   a = 2;
//   let bar = function() {
//     a = 3;
//     return 4;
//   };

//   return bar();
// }

// console.log(foo()); // 4
// console.log(a);     // 3

//8

// var a = 'global';

// function checkScope() {
//   var a = 'local';
//   const nested = function() {
//     var a = 'nested';
//     let superNested = () => {
//       a = 'superNested';
//       return a;
//     };

//     return superNested();
//   };

//   return nested();
// }

// console.log(checkScope());  // superNested
// console.l og(a);             // global

//9

// let a = 'outer';
// let b = 'outer';

// console.log(a);   // outer
// console.log(b);   // outer
// setScope(a);
// console.log(a);   // outer
// console.log(b);   // outer

// function setScope(foo) {
//   foo = 'inner'; // Function arguments become local variables in the function
//   b = 'inner';   // Unlike ruby, functions have access to global variables
// }

//10

let total = 50;
let increment = 15;

function incrementBy(increment) {
  total += increment;
}

console.log(total);     // 50
incrementBy(10);
console.log(total);     // 60
console.log(increment); // 15

//11

let a = 'outer';

console.log(a);  // outer
setScope();      // error - setScope is not a function
console.log(a); 

var setScope = function () { // name of function is hoisted but not the body
  a = 'inner';
};

/* After hoisting:

var setScope;

let a = 'outer';

console.log(a);
setScope();
console.log(a);

setScope = function () {
  a = 'inner';
};

*/
