// password = 'password'

// The program displays a dialog that asks the user to enter a password.
// If the user enters the wrong password, keep asking up to three times. After
// three failures, log the access denied.

// What is the password: 123
// What is the password: opensesame
// What is the password: letmein

// // message on the console
// You have been denied access.

// // If the user enters the right password, report login success.
// What is the password: password

// // message on the console
// You have successfully logged in.

let rlSync = require('readline-sync');

function authenticate() {
  let password = 'password';
  let guesses = 3;

  while (guesses > 0) {
    console.log('What is the password: ')
    let answer = rlSync.prompt();

    if (answer === password) {
      console.log('You have successfully logged in.');
      return;
    }

    guesses -= 1;
  }

  console.log('You have been denied access.');
}

authenticate();