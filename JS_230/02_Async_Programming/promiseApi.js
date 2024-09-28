function flakyService() {
  return new Promise((resolve, reject) => {
    if (Math.random() > 0.5) {
      resolve("Operation successful");
    } else {
      reject("Operation failed");
    }
  });
}

function loadData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() > 0.5) {
        resolve("Data loaded");
      } else {
        reject("Network error");
      }
    }, 1000);
  });
}

// Promise.all([flakyService(), flakyService(), loadData()])
//   .then((results) => {
//     console.log(results);
//   })
//   .catch(() => {
//     console.error('One or more operations failed');
//   })

const firstResource = new Promise((resolve) =>
  setTimeout(() => resolve("First resource loaded"), 500)
);
const secondResource = new Promise((resolve) =>
  setTimeout(() => resolve("Second resource loaded"), 1000)
);

// Promise.race([firstResource, secondResource]).then(console.log);

const services = [flakyService(), flakyService(), flakyService()];

// Promise.allSettled(services).then(results => {
//   results.forEach((result, index) => {
//     if (result.status === 'fulfilled') {
//       console.log(
//         `Service ${index + 1} succeeded with message: ${result.value}`
//       );
//     } else {
//       console.log(
//         `Service ${index + 1} failed with error: ${result.reason}`
//       );
//     }
//   });
// });

// Promise.any(services)
//   .then(result => {
//     console.log(`First successful service result: ${result}`);
//   })
//   .catch((error) => {
//     console.error(`All services failed:`, error);
//   });

function loadResource(url) {
  return fetch(url)
    .then((response) => response.json())
    .catch(() => "Failed to fetch");
}

loadResource("https://jsonplaceholder.typicode.com/todos/1").then(console.log);
// Success response

// loadResource("badUrl.xyz").then(console.log);
// Failed to fetch

// function loadMultipleResources(urls) {
//   const fetchedPromises = urls.map(url =>
//     fetch(url)
//       .then(response => response.json())
//       .catch(() => 'Failed to fetch')
//   );

//   return Promise.allSettled(fetchedPromises);
// }

// refactor

function loadMultipleResources(urls) {
  const fetchPromises = urls.map(loadResource);
  return Promise.allSettled(fetchPromises);
}

loadMultipleResources([
  "https://jsonplaceholder.typicode.com/todos/1",
  "invalidUrl",
]).then((results) => {
  results.forEach((result) => {
    if (result.status === "fulfilled") {
      console.log("Fetched data:", result.value);
    } else {
      console.error(result.reason);
    }
  });
});

// Fetched data: {userId: 1, id: 1, title: 'delectus aut autem', completed: false }
// Fetched data: Failed to fetch