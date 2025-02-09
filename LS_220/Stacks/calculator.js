// Create a function `calculator` that evaluates arithmetic
// expressions given as strings. The function should support
// basic arithmetic operations: addition (+), subtraction (-),
// multiplication (*), and division (/).

// The function should:
// 1. Accept a string input representing a valid arithmetic expression.
//    The input will consist of non-negative integers, arithmetic
//    operator(+, -, *, /), and may contain whitespace characters.
// 2. Evaluate the expression following the standard order of operations
//    (multiplication and division before addition and subtraction).
// 3. Return the result as an integer.

// For division operations, the result should be rounded down to
// the nearest integer (floor division).

// You can assume that the input will never contain division by zero.

// Note: Implement the calculation logic yourself without using
// any built-in expression evaluation functions.

// Examples:
//
// 1. Input: "4 + 3 * 2"
//    Output: 10
//    Explanation: 3*2 is evaluated first (6), then added to 4.
//
// 2. Input: "15 / 3 - 2"
//    Output: 3
//    Explanation: 15/3 is 5, then 2 is subtracted.
//
// 3. Input: "10 + 8 / 3"
//    Output: 12
//    Explanation: 8/3 is 2 (rounded down), then added to 10.

/*

ALGO:
  - init stack to empty array
  - init num to empty string
  - init op to '+'
  - append an extra '+' to end of input string to ensure we calculate the final number
  - iterate through each char in the string
    - if char is a number
      - append char to num
    - if char is an operator, process num based on previous op
      - parse num to integer value
        - if op is '+', push num onto stack
        - if op is '-', push negative value of num onto stack
        - if op is '*', pop top element from stack, multiply by num, and push result back to stack
        - if op is '/', pop top element from stack, perform integer division with num (rounded down),
          and push result back into stack
      - update op to current character, char
      - reset num to empty string
    - if char is a space, ignore it and continue to next character
  - calculate the final result by summing values in stack
  - return sum

*/

function calculator(expression) {
  const stack = [];
  let num = '';
  let op = '+';

  expression += '+';

  for (let i = 0; i < expression.length; i++) {
    let char = expression[i];

    if (/[0-9]/.test(char)) {
      num += char;
    } else if (/[+\-*/]/.test(char)) {
      num = parseInt(num, 10);
      switch (op) {
        case '+':
          stack.push(num);
          break;
        case '-':
          stack.push(-num);
          break;
        case '*':
          stack.push(
            stack.pop() * num
          );
          break;
        case '/':
          stack.push(
            Math.trunc(stack.pop() / num)
          );
          break;
      }
      op = char;
      num = '';
    }
  }

  return stack.reduce((a, b) => a + b, 0);
}

console.log(calculator("6 - 2") === 4);
console.log(calculator(" 8 / 3") === 2);
console.log(calculator("2+3*4") === 14);
console.log(calculator("10 - 2 * 3 + 4 ") === 8);
console.log(calculator(" 20 / 4 * 2 + 7") === 17);
console.log(calculator("5 + 3 * 2 - 8 / 4") === 9);
console.log(calculator("10+5/4-3*2+2") === 7);
console.log(calculator(" 30 / 3 * 2 - 4 * 2 / 4 + 1 ") === 19);
console.log(calculator("100 - 20 * 3 / 2 + 5 * 4 - 10 / 2 * 3") === 75);
// All test cases should log true