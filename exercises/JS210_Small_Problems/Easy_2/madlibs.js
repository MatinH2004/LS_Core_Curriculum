const rlSync = require('readline-sync');

function madlib() {
  let noun = rlSync.question("Enter a noun: ");
  let verb = rlSync.question("Enter a verb: ");
  let adjective = rlSync.question("Enter an adjective: ");
  let adverb = rlSync.question("Enter an adverb: ");

  console.log(`Do you ${verb} your ${adjective} ${noun} ${adverb}? That's hilarious!`);
}

madlib();

// Enter a noun: dog
// Enter a verb: walk
// Enter an adjective: blue
// Enter an adverb: quickly

// // console output
// Do you walk your blue dog quickly? That's hilarious!