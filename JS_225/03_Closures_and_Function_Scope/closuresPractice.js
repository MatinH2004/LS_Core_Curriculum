// 1.

function makeMultipleLister(multiple) {
  return () => {
    for (let i = multiple; i < 100; i += multiple) {
      console.log(i);
    }
  }
}

let lister = makeMultipleLister(13);
lister();
// 13
// 26
// 39
// 52
// 65
// 78
// 91

// 2.

let total = 0

function add(num) {
  total += num;
  console.log(total);
}

function subtract(num) {
  total -= num;
  console.log(total);
}

add(1);
// 1
add(42);
// 43
subtract(39);
// 4
add(6);
// 10

// 3.

function startup() {
  let status = 'ready';
  return function() {
    console.log('The system is ready.');
  };
}

let ready = startup();
let systemStatus; // NO WAY TO ACCESS `status` -> It is private from outside the func
