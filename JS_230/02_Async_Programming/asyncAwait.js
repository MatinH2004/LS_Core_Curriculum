// function downloadFilePromise() {
//   return new Promise((resolve) => {
//     console.log("Downloading file...");
//     setTimeout(() => {
//       resolve("Download complete!");
//     }, 1500);
//   });
// }

async function asyncDownloadFile() {
  console.log("Downloading file...");
  const message = await new Promise((resolve) => {
    setTimeout(() => {
      resolve("Download complete!");
    }, 1500);
  });
  console.log(message);
}

// asyncDownloadFile();

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

async function asyncLoadData() {
  try {
    const message = await new Promise((resolve, reject) => {
      setTimeout(() => {
        if (Math.random() > 0.5) {
          resolve("Data loaded");
        } else {
          reject("Network error");
        }
      }, 1000);
    });
    console.log(message);
  } catch (error) {
    console.log(error);
  }
}

// asyncLoadData();

async function fetchResource(url) {
  try {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error('Failed to load resource');
  } finally {
    console.log('Resource fetch attempt made');
  }
}

// Example usage:
// fetchResource("https://jsonplaceholder.typicode.com/todos/1");
// Logs fetched data, then "Resource fetch attempt made"
// fetchResource("invalidUrl");
// Logs "Failed to load resource", then "Resource fetch attempt made"

async function fetchUserProfile(id) {
  try {
    const userProfile = await fetch(
      `https://jsonplaceholder.typicode.com/users/${id}`
    ).then((response) => response.json());

    console.log('User Profile', userProfile);
  } catch (error) {
    console.error('Error fetching profile:', error);
  }

  try {
    const userPosts = await fetch(
      `https://jsonplaceholder.typicode.com/users/${id}/posts`
    ).then((response) => response.json());

    console.log('User Posts', userPosts);
  } catch (error) {
    console.error('Error fetching posts:', error);
  }

  try {
    const userTodos = await fetch(
      `https://jsonplaceholder.typicode.com/users/${id}/todos`
    ).then((response) => response.json());

    console.log('User Todos', userTodos);
  } catch (error) {
    console.error('Error fetching todos:', error);
  }
}

// Example usage:
// fetchUserProfile(1);
// Logs user profile, posts, and todos. Catches and logs errors at each step if they occur.