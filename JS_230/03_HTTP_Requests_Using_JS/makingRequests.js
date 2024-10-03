// init XHR object
var request = new XMLHttpRequest();

// set request using HTTP method and path
request.open('GET', '/path');

// send request
request.send();

// Add event to request
request.addEventListener('load', event => {
  // some code

  // request.status
  // request.statusText
  // request.response
  // request.responseText
  // request.getResponseHeader('Content-Type');
});