//1. 

const shape = {
  getType() {
    return this.type;
  }
}

function Triangle(a, b, c) {
  this.type = 'triangle'
  this.a = a;
  this.b = b;
  this.c = c;
}

Triangle.prototype = shape;

Triangle.prototype.getPerimeter = function() {
  return this.a + this.b + this.c;
}

Triangle.prototype.constructor = Triangle;

// let t = new Triangle(3, 4, 5);
// console.log(t.constructor);                 // Triangle(a, b, c)
// console.log(shape.isPrototypeOf(t));        // true
// console.log(t.getPerimeter());              // 12
// console.log(t.getType());                   // "triangle"

//2.

// console.log("Hello".constructor.name);
// console.log([1,2,3].constructor.name);
// console.log({name: 'Srdjan'}.constructor.name);

//3.

function User(first, last) {
  if (!(this instanceof User)) {
    return new User(first, last);
  }

  this.name = first + ' ' + last;
}

// let name = 'Jane Doe';
// let user1 = new User('John', 'Doe');
// let user2 = User('John', 'Doe');

// console.log(name);         // => Jane Doe
// console.log(user1.name);   // => John Doe
// console.log(user2.name);   // => John Doe

//4.

function createObject(obj) {
  function F() {};
  F.prototype = obj;
  return F();
}

function createdObject(obj) {
  // warning: not recommended due to poor performance issues
  return Object.setPrototypeOf({}, obj);
}

// let foo = {
//   a: 1
// };

// let bar = createObject(foo);
// console.log(foo.isPrototypeOf(bar));         // true

//5.

Object.prototype.begetObject = function() {
  function F(){};
  F.prototype = this;
  return new F();
}

let foo = {
  a: 1
};

// let bar = createObject(foo);
// foo.isPrototypeOf(bar);         // true

//6.

function neww(constructor, args) {
  let object = Object.create(constructor.prototype);
  let result = constructor.apply(object, args);

  return typeof result === 'object' ? result : object;
}

function Person(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
}

Person.prototype.greeting = function() {
  console.log('Hello, ' + this.firstName + ' ' + this.lastName);
};

let john = neww(Person, ['John', 'Doe']);
john.greeting();          // => Hello, John Doe
john.constructor;         // Person(firstName, lastName) {...}