/*

Implement a recursive function that reverses a given string.
The function should take a string as input and return its reverse.
For example, if the input is "hello", the function should return "olleh".
Solve the problem using recursion.

Input: string
Output: reversed string

Base Case:
  - if input str length is 1 or less

Example:

let str = 'hello'

reverse('ello') + 'h'

Algo:
  - Remove the first char from string and reverse the rest of the string recursively
  - Combine results by adding first char to reversed result of the rest of the string

*/

function reverseString(str) {
  if (str.length < 2) return str;

  return reverseString(str.slice(1)) + str[0];
}

console.log(reverseString("hello") === "olleh");
console.log(reverseString("world") === "dlrow");
console.log(reverseString("a") === "a");
console.log(reverseString("") === "");
console.log(reverseString("recursion") === "noisrucer");

// All test cases should log true.