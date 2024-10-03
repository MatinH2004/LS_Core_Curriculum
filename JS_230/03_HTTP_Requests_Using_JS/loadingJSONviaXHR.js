// paste code into devtools console

let request = new XMLHttpRequest();
// request.open('GET', 'https://api.github.com/repos/rails/rails');

//invalid url
request.open('GET', 'hts://api.github.com/repos/rails/rails');

request.addEventListener('load', () => {
  let data = JSON.parse(request.response);
  console.log(request.status);
  console.log(data.open_issues);
});

request.addEventListener('error', (e) => {
  console.log('The request could not be completed!');
});

request.send();
