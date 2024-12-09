// function concatenateStrings(a: string, b: string): string {
//   return a + b;
// }

// function addNumbers(a: number, b: number): number {
//   return a + b;
// }

// const result = concatenateStrings("Hello", "World");
// const numericResult = addNumbers(1, 2);

type stringOrNum = string | number;

function combine(a: stringOrNum, b: stringOrNum): stringOrNum {
  if (typeof a === 'string' && typeof b === 'string') {
    return a.concat(b);
  } else if (typeof a === 'number' && typeof b === 'number') {
    return a + b;
  } else {
    throw new Error('Invalid Input Types: Both must be string or numbers');
  }
}