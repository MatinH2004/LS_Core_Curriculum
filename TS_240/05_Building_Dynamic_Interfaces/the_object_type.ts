// function getProperty(obj: object, key: string) {
//   return obj[key]; // Error: No index signature with a parameter of type 'string' was found on type '{}'
// }

// function getProperty(obj: { [key: string]: string | number }, key: string) {
//   return obj[key];
// }

// automatically infer object k/v types
function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key];
}

const obj = {
  name: 'John',
  age: 30,
}

const x = getProperty(obj, 'name');
const y = getProperty(obj, 'age');

console.log(x, y);
// John 30
