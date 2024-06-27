// Write a function, primeNumberPrinter, that prints all prime numbers present as
// substrings in a given string.

/*

### P:
Input: string containung numbers and letters
Ouptut: array of prime numbers

### E:
  - Arg will always be a string
  - If str is empty return empty array
  - Str will alwasy contains letters and numbers
  - Numbers in string will always be positive
  - consecutive numbers will be treated as one number

  Prime numbers:
    - only divisible by one and itself
    - numbers between one and target number
    7 % 1 

### D:
I: str
Intermiediate: array
O: array

### A:
1) If input string is empty, return an empty array;

2) Exctract all numbers from the string to an array
  - use regex to match all numbers from the string
  - append those numbers to an array

3) filter out non-prime numbers
  - on the array we're working with:
    - HELPER isPrime(num) -> true/false

4) Remove unqiue values from the filtered array
  - iterate over the array
  - return new array where idx of elements is not -1 in current array

5) Return array sorted in ascending order

HELPER: isPrime(target) -> true/false
  - create an array of numbers it can divisible by for prime numbers
    - [1, 7]
  - iterate from 1 to the target
    - if target num modulo i === 0 AND i is not 1 or target num
      - return false
  - return true

*/

function primeNumberPrinter(input) {
  if (input.length === 0) return [];

  const numbers = (input.match(/\d+/g) || []).map(Number);
  const uniqueNums = unique(numbers.filter(isPrime));

  return uniqueNums.sort((a, b) => a - b);
}

function unique(array) {
  // return array.reduce((arr, num) => {
  //   if (arr.indexOf(num) === -1) arr.push(num);
  //   return arr;
  // }, []);

  // refactor:
  return [...new Set(array)];
}

function isPrime(target) {
  const primeDivisible = [1, target];
  
  for (let i = 1; i <= target; i++) {
    if (target % i === 0 && !primeDivisible.includes(i)) {
      return false;
    }
  }

  return true;
}

console.log(primeNumberPrinter("a4bc2k13d"));                             // [2, 13]
console.log(primeNumberPrinter("asdf3n7n3pio10lka11"));                   // [3, 7, 11]
console.log(primeNumberPrinter(''));                                      // []
console.log(primeNumberPrinter('hello12hello'));                          // []
console.log(primeNumberPrinter("AB3C7cdA101h7UAOSD67aa5asldkj5"));        // [3, 5, 7, 67, 101]
console.log(primeNumberPrinter('67adaMvanp3aljs11ooo101vnb5jkj5jlla13')); // [3, 5, 11, 13, 67, 101]
console.log(primeNumberPrinter('11ioj11kl3a3a3ada7am11'));                // [3, 7, 11];
