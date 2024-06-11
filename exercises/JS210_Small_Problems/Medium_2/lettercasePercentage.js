/*
---------- PROBLEM ----------
Write a function that takes a string and returns an object containing the following three properties:

  - the percentage of characters in the string that are lowercase letters
  - the percentage of characters that are uppercase letters
  - the percentage of characters that are neither

You may assume that the string will always contain at least one character.

INPUT:
  - string of characters

OUTPUT:
  - an object with 3 properties (uppercase, lowercase, neither)

EXAMPLES:
  'abCdef 123' -> { lowercase: "50.00", uppercase: "10.00", neither: "40.00" }
  '123'        -> { lowercase: "0.00", uppercase: "0.00", neither: "100.00" }

----------- RULES -----------
  - Input string will always contain a character
  - String can contain any character alphanumeric and non alphanumeric

------- DATA STRUCTURE ------
  - Option 1:
    - split string into chars in array and iterate over array
  - Option 2:
    - manually iterate over chars of string

  - Either way, we're using an object to return the result

--------- SCRATCH PAD -------

---------- ALGORITHM --------
  - Initialize var total to length of input string
  - Initialize vars upper, lower, and neither to 0
  - Iterate over the input string
    - if current char is A-Z increment upper
    - if current char is a-z increment lower
    - else increment neither
  - return an object with keys: lowercase, uppercase, and neither
    - each key is the quotient of total / x

*/

function letterPercentages(string) {
  const total = string.length;
  let [lower, upper, neither] = [0, 0, 0];

  for (let i = 0; i < total; i++) {
    if (/[a-z]/.test(string[i])) lower += 1;
    if (/[A-Z]/.test(string[i])) upper += 1;
    if (/[^a-z]/i.test(string[i])) neither += 1;
  }

  return {
    lowercase: ((lower / total) * 100).toFixed(2),
    uppercase: ((upper / total) * 100).toFixed(2),
    neither: ((neither / total) * 100).toFixed(2),
  };
}

// refactor

function letterPercentages(str) {
  const total = str.length;

  return {
    lowercase: ((str.match(/[a-z]/g) || []).length / total * 100).toFixed(2),
    uppercase: ((str.match(/[A-Z]/g) || []).length / total * 100).toFixed(2),
    neither: ((str.match(/[^a-z]/ig) || []).length / total * 100).toFixed(2),
  }
}

console.log(letterPercentages('abCdef 123'));
// { lowercase: "50.00", uppercase: "10.00", neither: "40.00" }

console.log(letterPercentages('AbCd +Ef'));
// { lowercase: "37.50", uppercase: "37.50", neither: "25.00" }

console.log(letterPercentages('123'));
// { lowercase: "0.00", uppercase: "0.00", neither: "100.00" }