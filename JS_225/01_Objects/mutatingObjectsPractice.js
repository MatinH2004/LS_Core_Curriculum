// Problem 1
let message = 'Hello from the global scope!';

function func(message) {
  message = 'Hello from the function scope!';
  console.log(message);
}

func(message);
console.log(message);

// Hello from the function scope!
// Hello from the global scope!

// Problem 2
let myObj = { message: 'Greetings from the global scope!' };

function func(obj) {
  obj.message = 'Greetings from the function scope!';
  console.log(obj.message);
}

func(myObj);

console.log(myObj.message);

// Greetings from the function scope!
// Greetings from the function scope!

// The reference to the myObj was mutated in the function, when we reassigned
// it to the new string. When the message property was reassigned, the both
// references to myObj was affected.

// Whereas, in the first problem, the value passed
// in was reassigned to a completely new value.

// Problem 3
let message = 'Hello from the global scope!';

function func() {
  message = 'Hello from the function scope!';
  console.log(message);
}

func();
console.log(message);

// In the function, a global variable is initialized to the string
// 'Hello from the function scope!' is logged to the console.

// Since the message variable isn't passed into the function, a new
// variable is not declared in its scope. Instead message simply resolves
// to the global scope variable, and its reassignment is reflected in the global
// scope.

// Problem 4
let a = 10;
let obj = {
  a
}

let newObj = obj;
newObj.a += 10;

console.log(obj.a === a);
// false because obj.a now references 20 and a references 10 and 20 != 10

console.log(newObj.a === obj.a);
// true because both newObj.a and obj.a reference the same object
// and both properties references the same value of 20

// Problem 5
let animal = {
  name: 'Pumbaa',
  species: 'Phacochoerus africanus',
};

let menagerie = {
  warthog: animal,
};

animal = {
  name: 'Timon',
  species: 'Suricata suricatta',
};

menagerie.meerkat = animal;

menagerie.warthog === animal; // false
// false because animal is reassigned to a new object in memory, rather than mutated.

menagerie.meerkat === animal; // true