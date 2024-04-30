const transactionLog = [];

// function processInput(input) {
//   const numericalData = parseFloat(input);

//   if (Number.isNaN(numericalData)) {
//     throw (new Error('Data could not be converted to numerical amount.'));
//   }

//   return numericalData;
// }

// function logTransaction() {
//   let data = prompt('Please enter the transaction amount: ');

//   try {
//     data = processInput(data);
//     transactionLog.push(data);

//     alert('Thank you. Data accepted.');
//   } catch {
//     alert(error.message);
//   }
// }

// NaN is falsy, so no need for throwing errors
// Can be resolved in if statement in logTransaction()

// Only use try/catch block when:
// - A built-in JavaScript Function or method can throw an Error and you need to handle or prevent that Error.
// - A simple guard clause is impossible or impractical. (here it's possible with the parseFloat function)

function processInput(input) {
  return parseFloat(input);
}

function logTransaction() {
  let data = prompt('Please enter the transaction amount: ');

  data = processInput(data);

  if (data) {
    transactionLog.push(data);
    alert('Thank you. Data accepted.');
  } else {
    alert('Data could not be converted to numerical amount.')
  }
}

function transactionTotal() {
  let total = 0;

  for (let i = 0; i < transactionLog.length; i++) {
    total += transactionLog[i];
  }

  return total;
}

logTransaction();
logTransaction();
logTransaction();

console.log(transactionTotal());