function identity<T>(arg: T): T {
  return arg;
}

function pair<T>(a: T, b: T): T[] {
  return [a, b];
}

const pairOfNumbers = pair(1, 2); // returns [1, 2]
const pairOfStrings = pair("hello", "world"); // returns ["hello", "world"]