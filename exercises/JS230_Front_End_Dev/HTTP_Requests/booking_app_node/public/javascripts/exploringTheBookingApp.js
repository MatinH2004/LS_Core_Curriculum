// Solution 1: Using XMLHttpRequest
function makeRequest(endpoint) {
  return new Promise((resolve, reject) => {
    let request = new XMLHttpRequest();
    request.open('GET', `/api/${endpoint}`);
    request.responseType = 'json';

    request.addEventListener('load', () => {
      resolve(request.response);
    });

    request.send();
  });
}

makeRequest('staff_members').then(result => console.log(result));
makeRequest('students').then(result => console.log(result));
makeRequest('schedules').then(res => console.log(res.filter(obj => obj.student_email !== null)));

// Solution 2: Using XHR
function makeGETRequest(route, callback) {
  let request = new XMLHttpRequest();

  request.open('GET', route);
  request.setRequestHeader('Accept', 'json');

  request.addEventListener('load', (event) => {
    let obj = JSON.parse(event.target.responseText);
    callback(obj);
  });

  request.send();
}

// Solution 3: Using fetch API
async function fetchRequest(endpoint) {
  const response = await fetch('/api/' + endpoint);
  const data = await response.json();
  return data;
}

fetchRequest('staff_members').then(res => console.log(res));
fetchRequest('students').then(res => console.log(res));
fetchRequest('schedules').then(res => console.log(res.filter(obj => obj.student_email !== null)));

// Solution 4: Using fetch API
function makeFetchGETRequest(route, callback) {
  fetch(route)
    .then(response => response.json())
    .then(obj => {
      callback(obj)
    });
}

const DOMAIN = 'http://localhost:3000'

makeGETRequest(DOMAIN + '/api/staff_members', (obj) => {
  console.log(obj.length);
});

makeGETRequest(DOMAIN + '/api/students', (obj) => {
  console.log(obj.length);
});

makeGETRequest(DOMAIN + '/api/schedules', (obj) => {
  console.log(obj.length);
});

makeGETRequest(DOMAIN + '/api/schedules', (list) => {
  console.log(list.filter((schedule) => schedule.student_email).length)
});