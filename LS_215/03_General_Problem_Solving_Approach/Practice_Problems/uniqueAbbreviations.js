/*

Write a function that returns true if all given abbreviations uniquely identifies a word

INPUT:
  - An array of abbreviations
  - An array of words
OUTPUT:
  - Boolean true / false

EXAMPLES:
  ["ho", "h", "ha"], ["house", "hope", "happy"] => return false
    - 'ho' can be used to identify 'house' and 'hope'
    - 'h' can be used to identify all of the words
  
  ["bi", "ba", "bat"], ["big", "bard", "battery"] => return false
    - 'ba' identifies two words
  
  ["mo", "ma", "me"], ["moment", "many", "mean"] => return true
    - each abbreviation uniquely identifies a word :)

RULES:
  - Assume both inputs will always be provided
  - Assume both inputs will always be arrays
  - Assume both inputs will be the same length
  - Assume no sparse or empty arrays are provided
  - If any abbreviation matches more than 1 word return false
  - Each abbreviation must match exactly 1 word

DS:
  - I: Arrays
  - M: Arrays (for built in functionality such as filter(), some(), etc)
  - O: Boolean (t/f)

ALGO:
  - Iterate over the abbreviations array
    - count how many words in words array start with current abbreviation
    - if more than 1 word is matched, return false
  - return true

*/

function uniqueAbbrev(list, words) {
  return !list.some(abbr => words.filter(word => word.startsWith(abbr)).length > 1);
}

// true test cases
console.log(uniqueAbbrev(["s", "t", "v"], ["stamina", "television", "vindaloo"]));
console.log(uniqueAbbrev(["mo", "ma", "me"], ["moment", "many", "mean"]));
console.log(uniqueAbbrev(["at", "o", "abe"], ["atom", "original", "abet"]));
console.log(uniqueAbbrev(["rh", "par", "re"], ["rhino", "parry", "residue"]));

// false test cases
console.log(uniqueAbbrev(["ho", "h", "ha"], ["house", "hope", "happy"]));
console.log(uniqueAbbrev(["bi", "ba", "bat"], ["big", "bard", "battery"]));
console.log(uniqueAbbrev(["b", "c", "ch"], ["broth", "chap", "cardigan"]));
console.log(uniqueAbbrev(["to", "too", "t"], ["topology", "took", "torrent"]));
