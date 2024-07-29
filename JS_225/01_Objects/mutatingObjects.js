// Example 1
function change(a) {
  a = 2;
  console.log(a);
}

var b = 1;
change(b);          // => 2
console.log(b);     // => 1

/*

b is not changed, because in the within the function scope
of change() the VALUE of 1 was passed and not a reference

So b still points to its initial value

*/

// Example 2

function increment(thing) {
  thing.count += 1;
  console.log(thing.count);
}

var counter = { count: 0 };
increment(counter); // 1

counter // { count: 1 }

/*

In this case a since objects are mutable, a reference of counter
was passed into increment() and within the function the property
of counter, count was reassigned to a new primitive value.

Because both thing and counter REFERENCE the same object
the mutation occurs.

*/

/*

PRIMITIVE VALUES:
  - String
  - Number
  - Boolean
  - Undefined
  - Null
  - Symbol (ES6)

Stored on STACK (holds limited data - FAST)

REFERENCE VALUES:
  - Object: Array

Stored on HEAP (holds a lot of data)

*/