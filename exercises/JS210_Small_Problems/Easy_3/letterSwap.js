// const swap = str => {
//   let words = str.split(' ');

//   for (let i = 0; i < words.length; i++) {
//     if (words[i].length === 1) continue;

//     let first = words[i][0];
//     let middle = words[i].slice(1, -1);
//     let last = words[i].slice(-1)

//     words[i] = last + middle + first
//   }

//   return words.join(' ');
// }

// Using map

function swapFirstLastCharacters(word) {
  if (word.length === 1) {
    return word;
  }

  return word[word.length - 1] + word.slice(1, -1) + word[0];
}

function swap(str) {
  return str.split(' ').map(swapFirstLastCharacters).join(' ');
}

console.log(swap('Oh what a wonderful day it is'));  // "hO thaw a londerfuw yad ti si"
console.log(swap('Abcde'));                          // "ebcdA"
console.log(swap('a'));                              // "a"