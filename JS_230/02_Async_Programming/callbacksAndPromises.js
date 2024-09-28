// function basicCallback(callback, num) {
//   setTimeout(() => callback(num), 2000);
// }

// // Example usage:
// basicCallback((number) => {
//   console.log(number * 2);
// }, 5);
// // After 2 seconds, logs: 10

// function downloadFile(callback) {
//   console.log('Downloading file...');
//   setTimeout(() => callback('Download complete!'), 1500);
// }

// downloadFile((arg) => console.log(arg));

// function processData(array, callback) {
//   setTimeout(() => {
//     console.log(array.map(callback));
//   }, 1000);
// }

// // Example usage:
// processData([1, 2, 3], (number) => number * 2);
// // After 1 second, logs: [2, 4, 6]

// function waterfallOverCallbacks(callbacks, num) {
//   let result = num;
//   callbacks.forEach(callback => {
//     result = callback(result);
//   });
//   console.log(result);
// }

// // Example usage:
// const double = (x) => x * 2;
// waterfallOverCallbacks([double, double, double], 1);
// // Logs: 8

// function startCounter(callback) {
//   let counter = 0;
//   const intervalId = setInterval(() => {
//     counter++;
//     if (callback(counter)) {
//       clearInterval(intervalId);
//     }
//   }, 1000);
// }

// ------- PROMISES --------

// function downloadFile(callback) {
//   console.log('Downloading file...');
//   setTimeout(() => callback('Download complete!'), 1500);
// }

function downloadFile() {
  return new Promise((resolve) => {
    console.log('Downloading file...');
    setTimeout(() => {
      resolve('Download complete!');
    }, 1500);
  });
}

// function processData(array, callback) {
//   setTimeout(() => {
//     console.log(array.map(callback));
//   }, 1000);
// }

function processDataPromise(numbers, callback) {
  return new Promise(resolve => {
    setTimeout(() => {
      const processed = numbers.map(callback);
      resolve(processed);
    }, 1000);
  });
}

// Example usage:
// processDataPromise([1, 2, 3], (number) => number * 2).then((processedNumbers) => {
//   console.log(processedNumbers);
//   // After 1 second, logs: [2, 4, 6]
// });

let flakyService = () => {
  return new Promise((resolve, reject) => {
    if (Math.random() > 0.5) resolve('Operation successful');
    else reject('Operation failed');
  });
};

// flakyService()
//   .then(console.log)
//   .catch(console.error)

// Using .finally() for teardown code
function operation() {
  return new Promise((resolve) => {
    console.log('Operation started');
    setTimeout(() => {
      resolve('Operation complete');
    }, 1000);
  });
}

// operation()
//   .then(console.log)
//   // logs: Operation complete
//   .finally(() => {
//     console.log('Cleaning up resources...');
//   });

Promise.resolve(7)
  .then((number) => number * 2)
  .then((number) => number + 5)
  .then((result) => console.log(result));
  // => 19