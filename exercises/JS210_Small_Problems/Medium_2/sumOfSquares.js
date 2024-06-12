/*
---------- PROBLEM ----------
Write a function that computes the difference between the square of the sum of the
first n positive integers and the sum of the squares of the first n positive integers.

INPUT:
  - n: integer

OUTPUT:
  - integer

EXAMPLES:

  3 => 22 --> (1 + 2 + 3)**2 - (1**2 + 2**2 + 3**2)

  2 => --> 4 (1 + 2)**2 - (1**2 + 2**2)

----------- RULES -----------
  - Assume an integer will always be input
  - Sum numbers from 1 to n (inclusive) when operating on them

------- DATA STRUCTURE ------

--------- SCRATCH PAD -------

---------- ALGORITHM --------
  - initialize array with numbers from 1 to n
    - use array constructor
    - fill() method?
  - A: copy the original array and sum its numbers
    - get the square of the sum
  - B: copy the array and map over the numbers
    - transform each number to its square
  - return A - B

*/

function sumSquareDifference(n) {
  const numbers = Array(n).fill(0).map((_, i) => i + 1);
  const squareOfSums = [...numbers].reduce((sum, num) => sum + num, 0) ** 2;
  const sumOfSquares = [...numbers].reduce((sum, num) => sum + (num ** 2), 0);

  return squareOfSums - sumOfSquares;
}

console.log(sumSquareDifference(3));      // 22 --> (1 + 2 + 3)**2 - (1**2 + 2**2 + 3**2)
console.log(sumSquareDifference(10));     // 2640
console.log(sumSquareDifference(1));      // 0
console.log(sumSquareDifference(100));    // 25164150