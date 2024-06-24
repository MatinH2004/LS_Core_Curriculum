/*

Input: A template (most likely an object)
Output: A string of random nouns, adjectives, adverbs, and verbs

Example:
  Template 1:
    => "The NOUN VERB ADVERB the ADJECTIVE yellow NOUN, who ADVERB VERB his NOUN and looks around"
  
  Template 2:
    => "The NOUN VERB the NOUN's NOUN"

Rules:
  - The template:
    - Must contain a list of nouns, verbs, adverbs, and adjectives
    - Must contain a sentence structure
  - Return empty string if arg is omitted
  - Everytime the function is called, the sentence must contain random words

Data Structure (template):

  template = {
    structure = "The NOUN VERB the NOUN's NOUN",
    nouns: [],
    verbs: [],
    adverbs: [],
    adjectives: [],
  }

Algorithm:
1) Make parameter default to empty string if no arg is provided

2) Initialize variables nouns, verbs...

3) Assign each variable to a random value from the arrays
  - define a random number generator that returns a number from 0 to an arrays length
  - assign the returned value to the variable

4) Return the string structure from the object

*/
function getRandomWord(arr) {
  return arr[Math.floor(Math.random() * arr.length)]
}

function madlibs(template = '') {
  const nouns = 'fox dog head leg tail cat'.split(' ');
  const verbs = 'jumps lifts bites licks pats'.split(' ');
  const adverbs = 'easily lazily noisily excitedly'.split(' ');
  const adjectives = 'quick lazy sleepy noisy hungry'.split(' ');

  let sentence = template.replace(/NOUN/g, () => getRandomWord(nouns))
                         .replace(/ADVERB/g, () => getRandomWord(adverbs))
                         .replace(/VERB/g, () => getRandomWord(verbs))
                         .replace(/ADJECTIVE/g, () => getRandomWord(adjectives));

  return sentence;
}

const template1 = 'The ADJECTIVE brown NOUN ADVERB VERB the ADJECTIVE yellow NOUN, who ADVERB VERB his NOUN and looks around';

const template2 = "The NOUN VERB the NOUN's NOUN";

// These examples use the following list of replacement texts:
// adjectives: quick lazy sleepy noisy hungry
// nouns: fox dog head leg tail cat
// verbs: jumps lifts bites licks pats
// adverbs: easily lazily noisily excitedly
// ------

console.log(madlibs(template1));
// The "sleepy" brown "cat" "noisily"
// "licks" the "sleepy" yellow
// "dog", who "lazily" "licks" his
// "tail" and looks around.

console.log(madlibs(template1));
// The "hungry" brown "cat" "lazily"
// "licks" the "noisy" yellow
// "dog", who "lazily" "licks" his
// "leg" and looks around.

console.log(madlibs(template2));      // The "fox" "bites" the "dog"'s "tail".

console.log(madlibs(template2));      // The "cat" "pats" the "cat"'s "head".