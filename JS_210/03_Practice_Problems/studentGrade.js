/*

If the average score is greater than or equal to 90 then the grade is 'A'
If the average score is greater than or equal to 70 and less than 90 then the grade is 'B'
If the average score is greater than or equal to 50 and less than 70 then the grade is 'C'
If the average score is less than 50 then the grade is 'F'

*/

function calculateGrade(grade) {
  if (grade >= 90) {
    return 'A';
  } else if (grade >= 70) {
    return 'B';
  } else if (grade >= 50 && grade < 70) {
    return 'C';
  } else {
    return 'F';
  }
}

function average(...numbers) {
  if (numbers.length === 0) {
      return 0;
  }
  
  const sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
  const avg = sum / numbers.length;
  
  return avg;
}

const rlSync = require('readline-sync');
const scores = [];

let count = 1;
let calculate = false

do {
  console.log(`\nEnter score ${count}: `);
  scores.push(Number(rlSync.prompt()));

  console.log('Calculate score? y/n');
  calculate = rlSync.prompt();

  count += 1;
} while (calculate !== 'y');

let result = calculateGrade(average(scores));

console.log(`Based on the average of your ${scores.length} scores your letter grade is ${result}`);
