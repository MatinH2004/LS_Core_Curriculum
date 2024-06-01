/*
Given a sentence with numbers representing a word's location embedded within each word, return the sorted sentence.
*/

// Examples

/*
--- Problem ----
Input:
  - A string of words with the location of the word embedded in the word
Output:
  - A string of words from the input, in the correct location

Rules:
  - Will always be a str argument
  - There will always be a location embedded in each word
  - Assume location will be positive
  - Assume unqiue word locations
  - Punctuation should be part of the word it was originally with, in the same location

--- DS ---
['is2', 'Thi1s...]

--- Algorithm ---
High level:
1. Split the input into an array of words
2. Initialize object `wordLocation`
3. Loop over the array of words and extract the location and the word
  - For each word in the array
    - split the word into characters
    - filter the chars to find the number in the array of characters
    - filter again to find just the non-integer chars in the array of characters
      - join the chars from the array
    - assign each word as a key in the object and the location as the value
4. Iterate over `wordLocation` concat the words to a new string to return as the result

*/

function rearrange(str) {
  let words = str.split(' ');
  let wordLocation = {};

  words.forEach(word => {
    let chars = word.split('');
    let location = chars.filter(char => /[0-9]/g.test(Number(char))).join('');
    let filteredWord = chars.filter(char => /[^0-9]/ig.test(char)).join('');

    wordLocation[location] = filteredWord;
  })

  let wordsArray = Object.keys(wordLocation);
  let result = [];

  for (let i = 1; i <= wordsArray.length; i += 1) {
    let w = wordLocation[i];
    result.push(w);
  }

  return result.join(' ');
}

console.log(rearrange("is2 Thi1s T4est? 3a")) // This is a Test?

console.log(rearrange("is2 Thi1s T4est 3a")) // ➞ "This is a Test"

console.log(rearrange("4of Fo1r pe6ople g3ood th5e the2")) // ➞ "For the good of the people"

console.log(rearrange(" ")) // ➞ ""

console.log(rearrange("is3 Cri1stiano 4the Rona2ldo 5best.")) // "Cristiano Ronaldo is the best."
console.log(rearrange("is2 Thi1s T4est 3a")) // "This is a Test"
console.log(rearrange("4of Fo1r pe6ople g3ood th5e the2")) // "For the good of the people"
console.log(rearrange(" ")) // ""
console.log(rearrange("samosa3 I1 e2at")) // "I eat samosa"
console.log(rearrange("h1appy y3all! coding2"))//, "happy coding yall!"

// function getVowels(word) {
//   return word.match(/[aeiou]/g);
// }

// function sameVowelGroup(array) {
//   let result = [array[0]];
//   let firstVowels = getVowels(array[0]);

//   return array.slice(1).forEach((word) => {
//     let vowels = getVowels(word);
//     vowels.forEach((vowel) => {
//       if (firstVowels.indexOf(vowel) !== -1) {
//         result.push(vowel);
//       }
//     });
//   });
// }

// console.log(sameVowelGroup(['toe', 'ocelot', 'maniac']));