// Q: What is behavior delegation? How can we tell if a property is defined on an object itself versus on its prototype chain? Demonstrate with a code example.

// A: Behavior delegation refers to the ability to access data and behaviors not only in an object itself, but also anywhere on that object’s prototype chain. In the following code snippet, an object literal containing two methods `run` and `speak` is assigned to the `animal` variable. Then the object referenced by `animal` is passed as argument to the `Object.create` function which returns a new object whose object prototype is set to the object referenced by `animal`.

// We see on the final line that the `dog` object thus created has access to the `speak` method through behavior delegation. Even though `speak` isn't a method defined on the `dog` object itself, JavaScript searches for a `speak` method up the prototype lookup chain and finds it in the object prototype for the `dog` object.

// let animal = {
//   run() {
//     console.log('Running!');
//   },
  
//   speak() {
//     console.log(this.name + ' says Woof!')
//   }
// }

// let dog = Object.create(animal);

// dog.name = 'Clifford';

// dog.__proto__; // { run: [Function: run], speak: [Function: speak] }
// dog.speak(); // Clifford says Woof!
// console.log(dog.hasOwnProperty('speak'))
// console.log(dog.__proto__.hasOwnProperty('speak'));

// --------------------------

// 1. What is an object factory? Give an example of one.

// function createDog(name, breed) {
//   return {
//     name,
//     breed,
//     speak() {
//       console.log(`Woof I'm ${this.name}!`);
//     }
//   }
// }

// let sparky = createDog('Sparky', 'pit bull');
// sparky.speak();

// 2. What are some of the disadvantages of an object factory?
// objects all contain their own copies of methods defined in the object factory which can require lots of memory resources; they also don't have a 'type', ie we can't tell that they were created by an object factory by using a method such as `instanceof`

// 3. What is `this`?

// The `this` keyword refers to the execution context of a function. When a function is called as an object's method, `this` refers to the object that owns the method.
// In the global context, `this` refers to the global object, or the window object. In strict mode, in the global context, `this` is undefined.

// 4. What is execution context?

// Execution context is accessible through the keyword `this`. Can be called implicitly or explicitly.

// 5. What is strict mode, and how does it change how a program runs? 
// "use strict";

// Strict mode sets the implicit function execution context to `undefined` at the global level. 

// 6. What are the benefits to using strict mode? When should you use it?

// Using strict mode can cut down on bugs -- it prevents certain 'silent' errors from occurring by causing an error to be thrown, such as typos in variable references being treated as assigning properties to the global object. It can result in cleaner code.

// let value = 1;

// va1ue = 2;

// console.log(value) // 1
// global.va1ue // 2

// 7. What is implicit function execution context?

// JS implicitly sets the function execution context of a method to the object that owns the method. For function declarations, the `this` keyword refers to the global object. The `this` would refer to the global object, if the function is invoked at the top level of the program. The implicit execution context depends on where the function is invoked. For strict mode, the implicit context execution for function calls is `undefined`.

// function foo() {
//   console.log(this);

//   function bar() {
//     console.log(this);
//   }

//   bar();
// }

// // foo();

// let baz = {
//   foo() {
//     let self = this;
//     function bar() {
//       console.log(self);
//     }

//     bar()
//     console.log(this)
//   }
// }

// baz.foo()

// 8. What is explicit function execution context?
// Explicitly providing a function execution context with `call`, `apply`, or `bind`.

// 9. How can we change a function's execution context at execution time?

// let thingOne = {
//   a: 'hello',
//   b: ' world',
// };

// let thingTwo = {
//   a: 1,
//   b: 2,
//   add() {
//     console.log(this.a + this.b);
//   },
// };

// console.log(thingTwo.add.call(thingOne));
// console.log(thingTwo.add.apply(thingOne));
// let greeting = thingTwo.add.bind(thingOne);
// console.log(greeting());

// 10. What do call() and apply() do, and how are they different? Give an example of using each.

// let thingOne = {
//   a: 'hello',
//   b: ' world',
// };

// let thingTwo = {
//   a: 1,
//   b: 2,
//   add(n) {
//     console.log(this.a + this.b + n);
//   },
// };

// console.log(thingTwo.add.call(thingOne));
// console.log(thingTwo.add.apply(thingOne));
// let greeting = thingTwo.add.bind(thingOne);
// console.log(greeting());

// thingTwo.add.call(thingOne, 5);
// thingTwo.add.apply(thingOne, [5]);

// - `call` takes arguments separated by commas
// - `apply` takes arguments in an array

// 11. What is the global object, and how can we access it?



// 12. What is the bind() method, and how does it differ from call() an apply()?

// The bind method does not invoke the calling function, but it returns a new function with context provided. The new context is permanently bound to the new returned function.

// 11. What is the global object, and how can we access it?

// The global object is the top level execution context, which in a browser is `window` or `global` in Node. We can use those keywords to access the global object.

// console.log(global) // lots of property/value pairs

// 13. What do we mean when we say a function can "lose it's context"? What are two ways a function can experience context loss? 

// 1) nested function definitions - inner function loses context
// 2) callback function losing context

// let obj = {
//   a: 'hello',
//   b: 'world',

//   foo() {
//     [1, 2, 3].forEach(function(number) {
//       console.log(String(number) + ` ${this.a} ${this.b}`);
//     }.bind(this));
//   }
// }

// obj.foo()

// 14. What is a closure? What are the benefits of closures, and how can we create one?

// - A closure a snapshot of our program at a given time, where the program has access to variables, functions, and objects, in lexical scope. The benefit of closures is that we are able to create private data.

// function makeCounter() {
//   let count = 0; // not accessible outside

//   return function() {
//     count += 1;
//     console.log(count)
//   };
// }

// let c = makeCounter()
// c()

// 19. What is garbage collection? Which values in JS participate in GC? Why do we need to be aware of garbage collection, as software engineers?

// function makeCounter() {
//   let count = 0; // not accessible outside

//   return function() {
//     count += 1;
//     console.log(count)
//   };
// }

// let c = makeCounter()
// c = null

// 20. In the following code, how can we retain access to the value "Steve"? When can JS garbage collect "Steve"? 

// function makeHello(name) {
//   return function() {
//     console.log("Hello, " + name + "!");
//   };
// }

// let helloSteve = makeHello("Steve");
// helloSteve = null;
// or reassign to another value

// 21. What is an IIFE? Give an example. Why would we use an IIFE in code?

// IIFEs are functions that are executed immediately after they're defined. creates private scope; we can use it avoid global namespace pollution. (or declutter)


// (function(owner) {
//   let pet = { name: 'Mister', animal: 'cat'}; 
//   console.log(`${pet.name}, ${owner}'s ${pet.animal}`);
// })('Mike');

// console.log(pet.name);

// 22. How can you call an IIFE with an argument? 

// 24. What is a first-class function? Give an example.
// a first-class function is one that can be assigned, passed, returned as a value just like other data types

// let greetName = function (name) {
//   console.log(`Hello ${name}!`);
// }

// function greet(greetFunc, name) {
//   return greetFunc(name);
// }

// greet(greetName, 'David');

// 25. What concept(s) does the following code demonstrate? How does this work?

// function multiply(first, second) {
//   return first * second;
// }

// function makeMultiplyN(multiplicand) {
//   return function(number) {
//     return multiply(multiplicand, number);
//   }
// }

// let multiplyBy5 = makeMultiplyN(5);
// console.log(multiplyBy5(5))

// 26. What is partial function application, and what are the benefits of using it?
/*
Partial function application is a way of composing functions in JavaScript which makes use of closures and leverages the first-class status of functions in JavaScript. The general idea is that we start with a function defined with multiple parameters. We can call this this ‘primary’ function. Next we define a 'generator' that returns a function which is ‘pre-loaded’ with one of the arguments for the ‘primary’ function, both of which (primary function and argument) are stored in a closure. In the example below, the primary function is the `add` function. We might want or need to have the ability to repeatedly add a specific number or numbers. In our example, we decide to create functions that will always add 5 and 10, so we define an `addN` function which takes a func and an a parameter, and returns a function which itself takes a b parameter, and finally returns the result of invokingfunc with a and b as arguments. 


GPT response:
Partial function application is a technique in JavaScript that leverages closures and the language's first-class functions. It involves taking a function with multiple parameters (the "primary" function) and returning a new function with some arguments pre-filled. This "generator" function returns a closure that holds both the primary function and the pre-applied argument, allowing for repeated use of specific values. For example, given an add function, we can create functions like add5 or add10 by using an addN function that pre-loads one argument and returns a new function to complete the addition with another argument.
*/
// primary
function add(a, b) {
  return a + b;
}

// generator
function addN(func, a) {
  // applicator
  return function(b) {
    return func(a, b)
  }; 
}

const add10 = addN(add, 10);
const add5 = addN(add, 5);

let num = 5;
num = add10(num); // 15
num = add5(num); // 20
// 27. Create a reusable function using partial function application.

/* 
28. What is the difference between a constructor function and a regular function?

Constructor function:
  - returns this
  - creates a new object who's prototype points to the func
  - is invoked with the `new` operator
  - is pascal case (JS convention)

Regular function:
  - does not return function
  - does not 

*/
// function Dog(name, breed, age, personality) {
//   console.log(this);
//   this.name = name;
//   this.breed = breed;
//   this.age = age;
//   this.personality = personality;
// } 

// Dog.prototype.run = function() {
//   console.log("running!");
// }

// let bailey = new Dog('Bailey', 'mutt', 14, 'sweet old gal');
// // console.log(Object.getPrototypeOf(bailey) === Dog.prototype); // true 

// // console.log(bailey.hasOwnProperty('run')); // false
// // console.log(bailey.__proto__.hasOwnProperty('run')); // true
// // console.log(Dog.prototype.hasOwnProperty('run')); // true
// // logs: Dog {}
// // return Dog instance

// function Puppy(name, breed, age=0, personality="don't know yet") {
//   if (!(this instanceof Puppy)) {
//     return new Puppy(name, breed, age, personality);
//     // return {  error msg }
//   }

//   Dog.call(this, name, breed, age, personality);
// }

// Puppy.prototype = Object.create(Dog.prototype);
// Puppy.prototype.constructor = Puppy;

// Puppy.prototype.walk = function() {
//   console.log('learning to walk!');
// }

// let milo = new Puppy('Milo', 'yorkie', 1, 'shy');
// milo.walk();
// // puppy instances need to be able to invoke run
// milo.run();
// // milo(puppy instance) instanceof Dog // true
// console.log(milo instanceof Dog); // true

// // milo.__proto__ points to { walk }
// console.log(milo.__proto__);
// console.log(Object.getPrototypeOf(milo));
// console.log(Puppy.prototype)

// // milo.__proto__.__proto__ should be Dog.prototype
// console.log(milo.__proto__.__proto__ === Dog.prototype); // true

// console.log(Object.getPrototypeOf(milo).constructor);// Puppy


// let notAPuppyObject = Puppy('Dud', 'some weird breed', 0, 'hard to track'); 
// logs: global object 
// returns undefined



// 29. What does the `new` operator do?

// 30. What does the following code log to the console? Note: Remember we're running it in coderpad.

// let a = 1;
// let foo;
// let obj;

// function Foo() {
//   this.a = 2;
//   this.bar = function() {
//     console.log(this.a);
//   };
//   this.bar();
// }

// foo = new Foo(); // 2

// foo.bar(); // 2
// // Foo(); // error

// obj = {};
// Foo.call(obj); // 2
// obj.bar(); // 2

// console.log(this.a); // undefined


// 31. What will the following code log and why?

// let ninja;
// function Ninja() {
//   this.swung = true;
// }

// ninja = new Ninja();
// // { swung: true }

// Ninja.prototype.swingSword = function() {
//   return this.swung;
// };

// // behavior delegation allows ninja to invoke swingSword
// console.log(ninja.swingSword()); // logs: true


// 32. Implement the method described in the comments:
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


// 33. What does `Object.create` do, and how is it used?

// function Ninja() {
//   this.swung = false;
// }

// Ninja.prototype.swing = function() {
//   this.swung = true;
//   return this;
// }

// let ninjaPrototype = new Ninja();

// // let pirateNinjaProto = Object.create(ninjaPrototype);
// let pirateNinjaProto = Object.create(Ninja.prototype);


// function PirateNinja() {
//   this.drinkRum = true;
// }

// PirateNinja.prototype = pirateNinjaProto;
// PirateNinja.prototype.constructor = PirateNinja;

// let pirateNinja = new PirateNinja();

// console.log(pirateNinjaProto.__proto__ === ninjaPrototype); // true
// console.log(pirateNinja.__proto__ === PirateNinja.prototype); // true
// console.log(pirateNinja instanceof Ninja); // true
/*
34. What is the `function.prototype`? 

In the case of a constructor function, the `prototype` property of the constructor references an object which is used as the object prototype for new instances created and returned by the constructor.


The prototype property is a special property of functions, and it references an object that is said to be the ‘function prototype’ of the constructor. When a function is invoked as a constructor with the new operator, the function prototype is the object that forms the first link in the newly created object’s prototype lookup chain. That is to say, the hidden [[Prototype]] property of the new object, as well as __proto__, are set to reference the ‘function prototype’, which is the object that the constructor references with its prototype property. 


This relationship is demonstrated in the code below. After a new Dog instance is created and assigned to bailey , we check with the strict equality operator whether bailey.__proto__ and Dog.prototype reference the same object. And they do. The prototype lookup chain is in place, and we are ready to start implementing prototypal inheritance/behavior delegation if we so choose.

function Dog(name) {
  this.name = name;
}

let bailey = new Dog('Bailey');

//console.log(bailey.__proto__ === Dog.prototype); // true
console.log(Object.getPrototypeOf(bailey) === Dog.prototype); // true

*/
// 35. What is behavior delegation? How does JS implement inheritance differently than Ruby?

// - objects are linked to each other to create a prototype chain
// - JS object will traverse up the prototypal chain and return the first method found.
// - JS implements inheritance using Prototypes, whereas Ruby implements inheritance using the classical way (aka true classes).


// let obj = { sayHello: function() { console.log('hello') } };
// let foo = Object.create(obj);
// let bar = Object.create(foo);
// let qux = Object.create(bar);

// qux.sayHello();

// console.log(obj.__proto__ === Object.prototype); // Object.prototype


// 36. What is OLOO? Give an example. What are the benefits to organizing your code this way?
/*
const Dog = {
  wake() {
    console.log('wide awake! any squirrels around here?');
  },
  hunt() {
    console.log('chasing a squirrel!!!');
  },
  eat() {
    console.log('nom nom nom, eating!');
  },
  sleep() {
    console.log('zzzzzzzzz....');
  },
  
  init(name, age, breed, disposition) {
    this.name = name;
    this.age = age;
    this.breed = breed;
    this.disposition = disposition; 
    return this;
  },
}; 

let bailey = Object.create(Dog)
                   .init('Bailey', 14, 'mutt', 'sweet old lady dog');
                   
bailey.wake(); // wide awake! any squirrels around here?
bailey.hunt(); // chasing a squirrel!!!

console.log(Object.getPrototypeOf(bailey));


37. What is the Pseudo-Classical Pattern? Give an example. What are the benefits to organizing your code this way?

38. What are some things we need to consider when designing our code? 
- legacy codebase
- preferences of your team
- requirements of the project: do you need inheritance? do you need types?
- no existing codebase: how many objects are you going to need to work with? can you get away with using object factories or does it make more sense to define a class/classes?
- performance considerations
- security considerations


39. What's the difference between using OLOO/ the Pseudo-Classical Pattern and using factory functions? 
- OLOO and Pseudo-classical are comparable, but one key difference is that you have types with pseudo-classical
- object factories also give you objects without types, and produce redundant code in terms of objects all having copies of the defined methods
- OLOO and pseudo-classical patterns both deal with the redundancy issue that object factories have
- OLOO and pseudo-classical patterns both allow for implementing inheritance

40. How does ES6 `class` syntax work? Give an example.

41. How does inheritance work with `class` syntax?

42. Write a constructor function. 

43. What is the prototype chain?

44. What is the `.constructor` property?
Puppy.prototype.constructor === Puppy
*/

class Person {
  #id;

  constructor(name, age) {
    this._name = name;
    this.age = age;
    this.#id = 101;
  }

  instanceMethod() {

  }

  #privateMethod() {

  }

  get name() {
    return this._name;
  }

  set setName(name) {
    this.name = name;
  }
}

// new Person(..).name

class Child extends Person {
  static PI = 3.14159;
  static talk() {
    console.log('goo goo gaga');
    this;
  }
  
  constructor(name, age, hair=undefined) {
    super(name, age);
    this.hair = hair;
  }

  instanceMethod() {
    super.instanceMethod()
    this;
    this.constructor // Child
  }
} 

Child.talk()

// function Dog(name, breed, age, personality) {
//     console.log(this);
//     this.name = name;
//     this.breed = breed;
//     this.age = age;
//     this.personality = personality;
//   } 
  
//   Dog.prototype.run = function() {
//     console.log("running!");
//   }
  
//   let bailey = new Dog('Bailey', 'mutt', 14, 'sweet old gal');
//   // console.log(Object.getPrototypeOf(bailey) === Dog.prototype); // true 
  
//   // console.log(bailey.hasOwnProperty('run')); // false
//   // console.log(bailey.__proto__.hasOwnProperty('run')); // true
//   // console.log(Dog.prototype.hasOwnProperty('run')); // true
//   // logs: Dog {}
//   // return Dog instance
  
//   function Puppy(name, breed, age=0, personality="don't know yet") {
//     if (!(this instanceof Puppy)) {
//       return new Puppy(name, breed, age, personality);
//       // return {  error msg }
//     }
  
//     Dog.call(this, name, breed, age, personality);
//   }
  
//   Puppy.prototype = Object.create(Dog.prototype);
//   Puppy.prototype.constructor = Puppy;
  
//   Puppy.prototype.walk = function() {
//     console.log('learning to walk!');
//   }
  
//   let milo = new Puppy('Milo', 'yorkie', 1, 'shy');
//   milo.walk();
//   // puppy instances need to be able to invoke run
//   milo.run();
//   // milo(puppy instance) instanceof Dog // true
//   console.log(milo instanceof Dog); // true
  
//   // milo.__proto__ points to { walk }
//   console.log(milo.__proto__);
//   console.log(Object.getPrototypeOf(milo));
//   console.log(Puppy.prototype)

//   console.log(milo.constructor === Puppy);
//   console.log(milo.constructor = Child);
//   console.log(milo instanceof Puppy); // true
//   // console.log(Puppy.prototype.constructor === Puppy);
