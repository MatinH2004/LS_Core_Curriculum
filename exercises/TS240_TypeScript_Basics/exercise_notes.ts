let p = console.log;

// function firstElement<T>(arr: T[]): T | undefined {
//   return arr[0];
// }

// let a = firstElement([7, 9, 11]);
// let b = firstElement(['hello', 'world']);
// let x = firstElement([]);

// interface KeyValuePair<Key, Value> {
//   key: Key;
//   value: Value;
// }

// const x: KeyValuePair<string, number> = {
//   key: 'id',
//   value: 101,
// }

// function filterByType<T>(arr: Array<any>, type: string): T[] {
//   return arr.filter(value => typeof value === type);
// }

// p(filterByType<string>(["hello", "world", 42, true], "string"))

///////////////////////////////////////////////////////////////////////////

// function printLength(param: string | string[]): void {
//   if (Array.isArray(param)) {
//     p('Array count: ' + param.length);
//   } else {
//     p('String count: ' + param.length);
//   }
// }

// printLength('hello');
// printLength(['hello', 'world', 'typscript'])

// function foo(value?: string | undefined): void {
//   value && value !== '' && console.log('Input is not empty');
// }

// foo('')
// foo()
// foo('tyo')

// type Circle = {
//   kind: 'circle';
//   radius: number;
// };

// type Square = {
//   kind: 'square';
//   sideLength: number;
// };

// type Shape = Circle | Square;

// function getArea(type: Shape): number {
//   switch (type.kind) {
//     case 'circle':
//       return type.radius * type.radius * Math.PI;
//     case 'square':
//       return type.sideLength * type.sideLength;
//     default:
//       return assertNever(type);
//   }
// }

// p(getArea({ kind: "circle", radius: 10 }));
// p(getArea({ kind: "square", sideLength: 10 }));
// p(getArea({ kind: 'triangle' sideLength: 5 }));

// function assertNever(value: never): never {
//   throw new Error(`Unhandled value: ${value}`);
// }

// function logUnknown(value: unknown): void {
//   if (typeof value === 'string') p(value);
// }

// logUnknown('yo')
// logUnknown(212);
// logUnknown(true)

// interface Person {
//   name: string;
//   age: number;
// };

// interface Employee extends Person {
//   employeeId: number;
// };

// const employee: Employee = {
//   name: 'Tyler Carpenter',
//   age: 42,
//   employeeId: 9801,
// }

// interface Dog {
//   bark(): void;
// }

// interface Cat {
//   meow(): void;
// }

// type Pet = Dog & Cat;

// const pet: Pet = {
//   bark: () => p('woof'),
//   meow: () => p('meow'),
// }

// pet.bark();
// pet.meow();

// interface StringMap {
//   [key: string]: string; 
// };

// const dictionary: StringMap = {
//   key: 'value',
//   hello: 'goodbye',
// };

// const otherDictionary: Record<string, string> = {
//   cashierId: '9810',
//   password: '23',
// };

interface UserData {
  name: string;
  age: number;
  email: string;
};

// type UserKeys = keyof UserData;

// function printUserDataField(userData: UserData, key: UserKeys): void {
//   console.log(userData[key]);
// }

const userData: UserData = {
  name: "Alice",
  age: 25,
  email: "alice@example.com",
};

// printUserDataField(userData, "name");
// // Output should be "Alice"
// printUserDataField(userData, "age");
// // Output should be 25

function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key];
}

// another way to do it:
// function getProperty<T>(obj: T, prop: keyof T) {
//   return obj[prop];
// }

let a = getProperty(userData, "name");
let b = getProperty(userData, "age");
