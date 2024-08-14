// 1. What does the following code log to the console?

// let a = 1;
// let foo;
// let obj;

function Foo() {
  this.a = 2;
  this.bar = function() {
    console.log(this.a);
  };
  this.bar();
}

// foo = new Foo(); // 2

// foo.bar(); // 2
// Foo();     // 2

// obj = {};
// Foo.call(obj);  // 2
// obj.bar();      // 2

// console.log(this.a); // 2

// 2. What does the following code log to the console?

let RECTANGLE = {
  area() {
    return this.width * this.height;
  },
  perimeter() {
    return 2 * (this.width + this.height);
  },
};

function Rectangle(width, height) {
  this.width = width;
  this.height = height;
  // this.area = RECTANGLE.area();            -> NaN
  // this.perimeter = RECTANGLE.perimeter();  -> NaN
  this.area = RECTANGLE.area.call(this);
  this.perimeter = RECTANGLE.perimeter.call(this);
}

// let rect1 = new Rectangle(2, 3);
// console.log(rect1.area);
// console.log(rect1.perimeter);

// 3. Write a constructor function Circle, that takes a radius as an argument.
//    You should be able to call an area method on the created objects to get the circle's area

// area = Math.PI * (radius ** 2)

function Circle(radius) {
  this.radius = radius;
}

Circle.prototype.area = function() {
  return Math.PI * (this.radius ** 2);
}

// let a = new Circle(3);
// let b = new Circle(4);

// console.log(a.area().toFixed(2)); // => 28.27
// console.log(b.area().toFixed(2)); // => 50.27

// 4. What will the following code log out and why?

// let ninja;
// function Ninja() {
//   this.swung = true;
// }

// ninja = new Ninja();

// Ninja.prototype.swingSword = function() {
//   return this.swung;
// };

// console.log(ninja.swingSword()); // => true: prototype chain lookup happens when the function is called

// 5. What will the following code log out and why?

// let ninja;
// function Ninja() {
//   this.swung = true;
// }

// ninja = new Ninja(); // inheriting from the original Ninja object

// // not being mutated - now pointing to a different object
// Ninja.prototype = {
//   swingSword: function() {
//     return this.swung;
//   },
// };

// if new Ninja() was called here, true would be logged

// console.log(ninja.swingSword());

// 6. Implement the method described in the comments below:

// let ninjaA;
// let ninjaB;
// function Ninja() {
//   this.swung = false;
// }

// ninjaA = new Ninja();
// ninjaB = new Ninja();

// // Add a swing method to the Ninja prototype which
// // returns the calling object and modifies swung
// Ninja.prototype.swing = function() {
//   this.swung = true;
//   return this;
// }

// console.log(ninjaA.swing().swung);      // must log true
// console.log(ninjaB.swing().swung);      // must log true

// 7. create a new instance of an object, without having direct access to the constructor function:

let ninjaA = (function() {
  function Ninja(){};
  return new Ninja();
})();

// create a ninjaB object
let ninjaB = Object.create(Object.getPrototypeOf(ninjaA));

console.log(ninjaB.constructor === ninjaA.constructor);    // should log true