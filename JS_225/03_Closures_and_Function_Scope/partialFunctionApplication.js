//1.

function subtract(a, b) {
  return a - b;
}

function makeSub() {
  return function(a) {
    return subtract(a, 5);
  }
}

const sub5 = makeSub(5);

sub5(10); // 5
sub5(20); // 15

//2.

function makeSubN(n) {
  return function(a) {
    return subtract(a, n);
  }
}

const sub4 = makeSubN(4);
const sub7 = makeSubN(7);

sub4(10); // 6
sub4(20); // 16
sub7(10); // 3
sub7(20); // 13

//3.

function makePartialFunc(func, b) {
  return function(a) {
    return func(a, b);
  }
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  return a / b;
}

let multiplyBy5 = makePartialFunc(multiply, 5);
let divideBy2 = makePartialFunc(divide, 2);

multiplyBy5(100); // 500
divideBy2(100); // 50

//4.

let subjects = {
  English: ['Bob', 'Tyrone', 'Lizzy'],
  Math: ['Fatima', 'Gary', 'Susan'],
  Biology: ['Jack', 'Sarah', 'Tanya'],
};

function rollCall(subject, students) {
  console.log(subject + ':');
  students.forEach(function(student) {
    console.log(student);
  });
}

function makeMathRollCall() {
  return function(names) {
    return rollCall('Math', names);
  }
}

let mathRollCall = makeMathRollCall();
mathRollCall(subjects['Math']);
// => Math:
// => Fatima
// => Gary
// => Susan