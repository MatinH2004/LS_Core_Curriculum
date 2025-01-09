// Write a function `areMatched` that takes a string as an argument
// and returns true if all types of brackets (parentheses (),
// square brackets [], and curly braces {}) in the string are
// properly matched. For the brackets to be considered
// matched, every opening bracket must have a corresponding
// closing bracket of the same type, and the brackets must be
// correctly nested.

/*

### P

INPUT: string containing brackets () {} []
OUTPUT: boolean true/false

RULES:
  - input will always be a string
  - input will always contain bracket characters
  - if input is empty return true
  - all of the brackets in the string must closed to return true
  - open/close brackets must be nested correctly
    - ex. ([{])} -> false; ([{}]) -> true

### E

()           => true
([()]{})     => true
{{[[(())]]}} => true

([((}]({}))  => false
({)}         => false
((([][)]))   => false
)(           => false

### D

Use stack data structure:
  - at the end if stack still contains any data (open brackets), return false
  - at the end if stack is empty, all brackets have been closed, return true

( -> )
( -> [ -> ( -> ) -> ] -> { -> } -> )

  - when matching bracket is found pop the open bracket reducing stack size

( -> { -> ) -> }

  - closing bracket ) does not match open bracket {
    - return false

### A

0. if input str is empty, return true

1. init an empty array as a stack

2. init strings containing open and close brackets

3. iterate over input string
  - if current bracket is open, add to stack
  - if current bracket is closed
    - if topmost item in stack is matches closing bracket
    - if true, pop the topmost stack item
    - if false, return false
  
4. if array is empty return true.

*/

// Brute-force solution
// function areMatched(input) {
//   if (input.length === 0) return true;

//   const [open, closed] = [['(', '{', '['], [')', '}', ']']];
//   const stack = [];

//   for (let idx = 0; idx < input.length; idx++) {
//     const bracket = input[idx];

//     if (open.includes(bracket)) {
//       stack.push(bracket);
//     } else if (closed.includes(bracket)) {
//       const equal = open[(closed.indexOf(bracket))];
//       if (stack[stack.length - 1] === equal) {
//         stack.pop();
//       } else {
//         return false;
//       }
//     }
//   }

//   return stack.length === 0;
// }

// refactored solution
function areMatched(input) {
  if (input.length === 0) return true;

  const bracketMap = new Map([
    [')', '('],
    ['}', '{'],
    [']', '['],
  ]);

  const stack = [];

  for (const bracket of input) {
    if (bracketMap.has(bracket)) {
      if (stack.pop() !== bracketMap.get(bracket)) {
        return false;
      }
    } else {
      stack.push(bracket);
    }
  }

  return stack.length === 0;
}

console.log(areMatched("()"));              // Output: true
console.log(areMatched("([()]{})"));        // Output: true
console.log(areMatched("([((}]({}))"));     // Output: false
console.log(areMatched("{{[[(())]]}}"));    // Output: true
console.log(areMatched(""));                // Output: true
console.log(areMatched("([)]"));            // Output: false