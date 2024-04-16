let rlSync = require('readline-sync');

function getFirstName() {
  let firstName = rlSync.question("What's your first name?\n");
  return firstName;
}

function getLastName() {
  let lastName = rlSync.question("What's your last name?\n");
  return lastName;
}

console.log(`Hello, ${getFirstName()} ${getLastName()}!`);
