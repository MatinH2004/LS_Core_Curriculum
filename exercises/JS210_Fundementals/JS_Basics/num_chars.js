/*
Please enter a phrase: walk
// console output
There are 4 characters in "walk".

Please enter a phrase: walk, don't run
// console output
There are 15 characters in "walk, don't run".
*/

const rlSync = require('readline-sync');

console.log("Please enter a phrase: ");
let phrase = rlSync.prompt();
let charCount = phrase.replace(/\s/g, '').length; // replace spaces with ''
// use /[^a-z]/gi to only non alphabetic chars

console.log(`There are ${charCount} characters in ${phrase}.`)
