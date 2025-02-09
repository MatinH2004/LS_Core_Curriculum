// You're keeping score for a futuristic game called "Nexus Surge."
// In this game, players accumulate points in unusual ways. At the
// start of each round, you begin with an empty scoreboard.

// You receive a sequence of scoring actions as an array of strings.
// Each action in the sequence is one of the following:

//  -  An integer x:
//      - Add a new score of x points to the scoreboard.
//  - '+':
//      - Add a new score that is the sum of the two most recent scores.
//  - '*':
//      - Add a new score that is double the most recent score.
//  - '-':
//      - Remove the most recent score from the scoreboard.

// Create a function `nexusSurge` that calculates and returns the sum
//  of all scores on the scoreboard after applying all the given actions.

// The input will be an array of valid operations.

// For operation "+", there will always be at least two previous scores on the record.
// For operations "*" and "-", there will always be at least one previous score on the record.

// Example 1:

// Input: actions = ["7","3","-","*","+"]
// Output: 42
// Explanation:
// "7" - Add 7 to the scoreboard, scoreboard is now [7].
// "3" - Add 3 to the scoreboard, scoreboard is now [7, 3].
// "-" - Remove the previous score, scoreboard is now [7].
// "*" - Add 2 * 7 = 14 to the scoreboard, scoreboard is now [7, 14].
// "+" - Add 7 + 14 = 21 to the scoreboard, scoreboard is now [7, 14, 21].
// The total sum is 7 + 14 + 21 = 42.

// Example 2:

// Input: actions = ["8","-3","6","-","*","12","+","+"]
// Output: 35
// Explanation:
// "8" - Add 8 to the scoreboard, scoreboard is now [8].
// "-3" - Add -3 to the scoreboard, scoreboard is now [8, -3].
// "6" - Add 6 to the scoreboard, scoreboard is now [8, -3, 6].
// "-" - Remove the previous score, scoreboard is now [8, -3].
// "*" - Add 2 * -3 = -6 to the scoreboard, scoreboard is now [8, -3, -6].
// "12" - Add 12 to the scoreboard, scoreboard is now [8, -3, -6, 12].
// "+" - Add -6 + 12 = 6 to the scoreboard, scoreboard is now [8, -3, -6, 12, 6].
// "+" - Add 12 + 6 = 18 to the scoreboard, scoreboard is now [8, -3, -6, 12, 6, 18].
// The total sum is 8 + (-3) + (-6) + 12 + 6 + 18 = 35.

// Example 3:

// Input: actions = ["4","-"]
// Output: 0
// Explanation:
// "4" - Add 4 to the scoreboard, scoreboard is now [4].
// "-" - Remove the previous score, scoreboard is now [].
// Since the scoreboard is empty, the total sum is 0.

/*

INPUT:
  - array of valid nexus surge operations
OUTPUT:
  - sum of score board

RULES:
  - When processing:
    - integer: add to scoreboard
    - +: add sum of two previous scores to scoreboard
    - -: remove previous score from scoreboard
    - *: double previous score and add to scoreboard
  - When processing +/-, assume there is always at least 2 integers before the operation
  - after processing input array
    - sum up the scoreboard and return the value

DS:
  - using an array as a stack
    - keep track of scoreboard

ALGO:
  - init an array as a stack
  - iterate over the input array
    - if element is a number
      - push to stack
    - if element is '-'
      - pop last element from stack
    - if element is '*'
      - get last element from stack, double it
      - then push it to the stack
    - if element is '+'
      - get last to elements from stack
      - add their sum to stack
  - init total
  - while length of stack is more than 0
    - pop element and add to stack

*/

function nexusSurge(actions) {
  const stack = [];
  actions.forEach(operation => {
    if (Number(operation)) {
      stack.push(Number(operation));
    } else if (operation === '-') {
      stack.pop();
    } else if (operation === '*') {
      stack.push(stack[stack.length - 1] * 2);
    } else if (operation === '+') {
      stack.push(stack[stack.length - 1] + stack[stack.length - 2]);
    }
  });

  let total = 0;
  while (stack.length > 0) {
    total += stack.pop();
  }

  return total;
}

// refactored solution
function nexusSurge(actions) {
  const stack = [];

  for (const action of actions) {
    switch (action) {
      case '+':
        const a = stack.pop();
        const b = stack.pop();
        stack.push(a, b, a + b);
        break;
      case '*':
        const top = stack[stack.length - 1];
        stack.push(top * 2);
        break;
      case '-':
        stack.pop();
        break;
      default:
        stack.push(+action);
    }
  }

  let totalSum = 0;
  while (stack.length > 0) {
    totalSum += stack.pop();
  }

  return totalSum;
}

console.log(nexusSurge(["3", "4", "+"]) === 14);
console.log(nexusSurge(["5", "-", "-2"]) === -2);
console.log(nexusSurge(["1", "-", "-3", "*"]) === -9);
console.log(nexusSurge(["5", "-2", "+", "-", "7", "*"]) === 24);
console.log(nexusSurge(["-3", "-", "4", "8", "+", "*"]) === 48);
console.log(nexusSurge(["1", "-2", "3", "-", "+", "-"]) === -1);
console.log(nexusSurge(["-10", "*", "-", "5", "+", "7"]) === -3);
console.log(nexusSurge(["6", "-", "-8", "*", "2", "+"]) === -36);
console.log(nexusSurge(["1", "-", "2", "*", "+", "-10", "-", "*"]) === 24);
// All test cases should log true.