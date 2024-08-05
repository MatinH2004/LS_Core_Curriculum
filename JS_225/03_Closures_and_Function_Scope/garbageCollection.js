//1. Is JavaScript a garbage-collected language, and if so, what does this entail?

// - JS runtime handles garbage collection (frees up memory) when:
//   - variables are reassigned
//   - references to objects no longer used

//2.

let myNum = 1;

function foo() {
  let myArr = ['this is an array'];
  // what is eligible for GC here?
}

foo(); 

// what is eligible for GC here?
// - ['this is an array'] is garbage collected after foo() is run

// more code

//3.

function makeGreeting() {
  let foo = { greeting: 'hello' };
  return function(name) {
    foo.name = name;
    return foo;
  };
}

let greeting = makeGreeting();

// is the object eligible for GC here?
// - No, because its reference is still kept in the closure created by makeGreeting()

// more code

//4.

let bash = {};

// Will the object {} ever be eligible for garbage collection?
// - only when the program is done running