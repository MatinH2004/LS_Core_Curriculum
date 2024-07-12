// You are given a table, in which every key is a stringified number, and each 
// corresponding value is an array of characters, e.g.

// {
//   "1": ["A", "B", "C"],
//   "2": ["A", "B", "D", "A"],
// }
// Create a function that returns a table with the same keys, but each 
// character should appear only once among the value-arrays, e.g.

// {
//   "1": ["C"],
//   "2": ["A", "B", "D"],
// }
// Rules
// Whenever two keys share the same character, they should be compared numerically, 
// and the larger key will keep that character. That's why in the example above the 
// array under the key "2" contains "A" and "B", as 2 > 1.
// If duplicate characters are found in the same array, the first occurance should be kept.

// Example 1
// input = {
//   "1": ["C", "F", "G"],
//   "2": ["A", "B", "C"],
//   "3": ["A", "B", "D"],
// }

// output = {
//   "1": ["F", "G"],
//   "2": ["C"],
//   "3": ["A", "B", "D"],
// }

// Example 2
// input = {
//   "1": ["A"],
//   "2": ["A"],
//   "3": ["A"],
// }

// output = {
//   "1": [],
//   "2": [],
//   "3": ["A"],
// }

// Example 3
// input = {
//   "432": ["A", "A", "B", "D"],
//   "53": ["L", "G", "B", "C"],
//   "236": ["L", "A", "X", "G", "H", "X"],
//   "11": ["P", "R", "S", "D"],
// }

// output = {
//   "11": ["P", "R", "S"],
//   "53": ["C"],
//   "236": ["L", "X", "G", "H"],
//   "432": ["A", "B", "D"],
// }

/*

Input:
  - Object: containing stringified numbers as keys, and arrays of upper case letters
Output:
  - Object, with removed duplicate values, according to the problem rules

Rules:
  - Return a new object
  - The result should contain the same keys, but with the letters should appear once in the value-arrays
  - If duplicate characters are found in the same array, the first occurance should be kept.
  - If two keys contain the same letter, the numerically larger key keeps the letter
  - Assume some letters may be lowercase
  - Assume an object will not always be input
  - Assume an arg will not always be provided
  - Assume the keys are sorted in ascending order

Data Structure:
Input -> Object:

{
  "1": ["C", "F", "G"],
  "2": ["A", "B", "C"],
  "3": ["A", "B", "D"],
}

Intermediate -> Array:
Object.entries()

[
  [ '1', [ 'C', 'F', 'G' ] ],
  [ '2', [ 'A', 'B', 'C' ] ],
  [ '3', [ 'A', 'B', 'D' ] ]
]

=>

[ 
  [ '1', [ 'F', 'G' ] ],
  [ '2', [ 'C' ] ],
  [ '3', [ 'A', 'B', 'D' ] ]
]

Object.fromEntries() =>

Output:

{
    "1": ["F", "G"],
    "2": ["C"],
    "3": ["A", "B", "D"],
}

Algorithm:
0) If input is not an object data type, return an empty object

1) Initialize `seen` array, to store letters that have been already seen

2) Convert input object to an array of arrays, for iteration

3) Iterate on array from right to left
  - initialize a new result array
  - iterate through value array
    - initialize values array
    - push letters to the values array
    - if letters haven't been seen before, push them to `seen` array
    - if current letter is present in `seen` array, do not push it to values array
  - push the key number along with its letters array to the result array like so:
    - [key, [values]]
    - so it can be converted back to an object

4) Convert result array to an object and return it

*/

function sortDuplicates(input = {}) {
  if (!(!Array.isArray(input) && input !== null && typeof input === 'object')) {
    return {};
  }

  const seen = [];
  const result = Object.entries(input).reduceRight((res, [key, letters]) => {
    const values = [];

    letters.forEach(letter => {
      if (!seen.includes(letter.toUpperCase())) {
        seen.push(letter.toUpperCase());
        values.push(letter);
      }
    })

    res.push([key, values]);
    return res;
  }, []);

  return Object.fromEntries(result);
}

// Example 1
let input = {
  "1": ["C", "F", "G"],
  "2": ["A", "B", "C"],
  "3": ["A", "B", "D"],
}

console.log(sortDuplicates(input));

// output = {
//   "1": ["F", "G"],
//   "2": ["C"],
//   "3": ["A", "B", "D"],
// }

// Example 2
input = {
  "1": ["A"],
  "2": ["A"],
  "3": ["A"],
}

console.log(sortDuplicates(input));

// output = {
//   "1": [],
//   "2": [],
//   "3": ["A"],
// }

// Example 3
input = {
  "432": ["A", "A", "B", "D"],
  "53": ["L", "G", "B", "C"],
  "236": ["L", "A", "X", "G", "H", "X"],
  "11": ["P", "R", "S", "D"],
}

console.log(sortDuplicates(input));

// output = {
//   "11": ["P", "R", "S"],
//   "53": ["C"],
//   "236": ["L", "X", "G", "H"],
//   "432": ["A", "B", "D"],
// }

// Edge Case 1
input = 69

console.log(sortDuplicates(input));

// output = {}

// Edge Case 2
input = {
  "1": ["c", "F", "G"],
  "2": ["A", "B", "C"],
  "3": ["a", "b", "D"],
}

console.log(sortDuplicates(input));

// output = {
//   "1": ["F", "G"],
//   "2": ["C"],
//   "3": ["a", "b", "D"],
// }

// Edge Case 3

input = {
  "3": ["c", "F", "G"],
  "2": ["A", "B", "C"],
  "1": ["a", "b", "D"],
}

console.log(sortDuplicates(input)); // automatically sorts by itself

// output = {
//   "1": ["D"],
//   "2": ["A", "B"],
//   "3": ["c", "F", "G"],
// }