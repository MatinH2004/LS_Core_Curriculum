// Exercise 1

let x: any = "Launch School";
const y: number = x;
console.log(y);

function isNumber(value: any): value is number {
  return typeof value === 'number';
} 

if (isNumber(x)) {
  const y = x;
  console.log(y);
} else {
  console.log("x is not a number");
}

// Exercise 2

function safeGet<T>(arr: T[], idx: number) {
  if (idx >= 0 && idx < arr.length) {
    return arr[idx];
  }

  return undefined;
}