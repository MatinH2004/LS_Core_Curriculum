/*

Write a function that removes the last vowel in each word in a sentence.

Input:
  - a string of words
Output:
  - string of words with every word's last vowel removed

Rules:
  - remove every word's last vowel
  - vowels are: a e i o u
  - if arg is omitted or input string is empty, return an emtpy string
  - if a word is 1 char long and a vowel, replace with an empty string
  - Questions:
    - can the string contain any character? - yes
    - can the string be of any length? - yes
    - what if the string contains no alphabetic chars? - ignore non-alpha chars
    - does case matter? - yes
    - if an input is provided, will it always be a string? - yes

DS:
String -> Array -> String

"Love is a serious mental disease."
=> ["Love", "is", "a", "serious", "mental", "disease."]
=> ["Lov", "s", "", "serios", "mentl", "diseas."]
=> 'Lov s  serios mentl diseas.'

ALGO:
1. assign func param to empty string incase it is omitted

2. init words variable to the input string splitted into words

3. init result array

4. Iterate and remove last vowel from each word
  - init removed to false
  - init newWord to empty array
  - iterate over the word string from last index pos to 0
    - if current char is vowel and removed is false
      - reassign removed to true
    - else
      - add current char to begining of newWord
  - join word string and push it to result

5. Join string back to a string
  - join using space as delimiter

*/

function removeLastVowel(sentence = '') {
  const words = sentence.split(' ');
  const result = [];

  words.forEach(word => {
    const newWord = [];
    let removed = false;

    [...word].reverse().forEach(char => {
      if (/[aeiou]/i.test(char) && !removed) {
        removed = true;
      } else {
        newWord.unshift(char);
      }
    });

    result.push(newWord.join(''));
  });

  return result.join(' ');
}

console.log(removeLastVowel("Those who dare to fail miserably can achieve greatly."));
// => "Thos wh dar t fal miserbly cn achiev gretly."

console.log(removeLastVowel("Love is a serious mental disease."));
// => "Lov s  serios mentl diseas"

console.log(removeLastVowel("Get busy living or get busy dying."));
// => "Gt bsy livng r gt bsy dyng"

console.log(removeLastVowel());
// => ""

console.log(removeLastVowel(""));
// => ""

console.log(removeLastVowel("1234 code 4567 .,:"));
// => "1234 cod 4567 .,:"

console.log(removeLastVowel("AA EE II oo uu"));
// => "A E I o u"

