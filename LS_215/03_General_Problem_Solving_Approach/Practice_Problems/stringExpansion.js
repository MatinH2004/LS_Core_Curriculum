/*

INPUT:
  - txt, a string
OUTPUT:
  - a new string

RULES:
  - The numeric values represent the occurence of EACH LETTER preceding that
  - The first occurence of the a numeric value should be the number of times each
    character behind it is repeated, until the next numeric value appears.
  - If there are consecutive numeric characters, ignore them all except the last one
  - If there are no numeric values in the string, it will remain unchanged
  - If input is an empty string, return an empty string

DS:
  - I: String
  - M: Arrays (for iteration and transformations capabilities)
  - O: String

ALGO:
1) If input string is empty return empty string

2) If input string contains only letters, return the string

3) Get all substrings that include a number until the next number is seen
  - initialize an array and store the substrings there

4) Iterate over the array performing transformation
  - extract the multiplier from the string
  - split and iterate over the letters in substring
    - repeat the letters by the multiplier
    - join the array back to a string
  - join array back to the string

5) Return final string

*/

function stringExpansion(txt) {
  if (txt.length === 0 || txt.match(/^[a-z]*$/gi)) return txt;

  return (txt.match(/^[a-z]+|\d[a-z]+/gi) || []).map((string) => {
    const multiplier = parseInt(string[0], 10);

    if (isNaN(multiplier)) return string;

    return [...string.slice(1)].map(letter => letter.repeat(multiplier)).join('');
  }).join('');
}

console.log(stringExpansion("3M2u5b2a1s1h2i1r")); // "MMMuubbbbbaashiir"
console.log(stringExpansion("3Mat"));             // "MMMaaattt"
console.log(stringExpansion("3M123u42b12a"));     // "MMMuuubbaa"
console.log(stringExpansion("airforce"));         // "airforce"
console.log(stringExpansion(""));                 // ""
console.log(stringExpansion("A4g1b4d"));          // "Aggggbdddd"