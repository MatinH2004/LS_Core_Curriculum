# The Request Response Cycle

### 1. What are the required components of an HTTP request? What are the additional optional components?

The required components of an HTTP request are:
  - HTTP Method (`GET`, `POST`, etc)
  - Path
  - `Host` Header (since HTTP 1.1)

The optional components are:
  - Other headers
  - Body
  - Parameters

Technically speaking the 'path' portion of the request-line is known as the 'request-URI', and incorporates the actual path to the resource and the optional parameters if present. In practice, most people simply refer to this part of the request-line as the 'path'.

### 2. What are the required components of an HTTP response? What are the additional optional components?

The required components of an HTTP response are:
  - Status (200, 302, 404, 500)

The optional components are:
  - Headers
  - Body

### 3. What determines whether a request should use GET or POST as its HTTP method?

We use the `GET` HTTP method to request or fetch data from a server, and use the `POST` HTTP method when sending data to the server.