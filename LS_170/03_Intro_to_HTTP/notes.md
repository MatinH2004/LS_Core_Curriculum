# Intro To HTTP

## The Application Layer

- The application layer is the topmost layer in the TCP/IP and the OSI model
- The protocols that exist in the Application layer are the ones with which the application most directly interacts

### Application Layer Protocols

- We can perhaps think of Application layer protocols as being the rules for how applications talk to each other at a syntactical level
- Different types of applications have different requirements with regards to how they communicate at a syntactical level, and so as a result there are many different protocols which exist at the application layer.

## HTTP and the Web

- The Internet and the Web are used interchangeably, but they are distinctly different
- The Internet is a network of networks, an infrastructure that enables inter-network communication
- The World Wide Web, or web, is a **service** that can be accessed via the internet. It is a vast information system compromised of resources which are navigable by means of a URL. HTTP is closely tied to this.

## Summary

- The Domain Name System (DNS) is a distributed database which maps a domain name such as google.com to an IP Address such as 216.58.213.14.

- A URI is an identifier for a particular resource within an information space.

- A URL is a subset of URI, but the two terms are often used interchangeably.

- URL components include the scheme, host (or hostname), port, path, and query string.

- Query strings are used to pass additional data to the server during an HTTP Request. They take the form of name/value pairs separated by an = sign. Multiple name/value pairs are separated by an & sign. The start of the query string is indicated by a ?.

- URL encoding is a technique whereby certain characters in a URL are replaced with an ASCII code.

- URL encoding is used if a character has no corresponding character in the ASCII set, is unsafe because it is used for encoding other characters, or is reserved for special use within the url.

- A single HTTP message exchange consists of a Request and a Response. The exchange generally takes place between a Client and a Server. The client sends a Request to the server and the server sends back a Response.

- An HTTP Request consists of a request line, headers, and an optional body.

- An HTTP Response consists of a status line, optional headers, and an optional body.

- Status codes are part of the status line in a Response. They indicate the status of the request. There are various categories of status code.

- HTTP is a stateless protocol. This means that each Request/ Response cycle is independent of Request and Responses that came before or those that come after.

- Statefulness can be simulated through techniques which use session IDs, cookies, and AJAX.

- HTTP is inherently insecure. Security can be increased by using HTTPS, enforcing Same-origin policy, and using techniques to prevent Session Hijacking and Cross-site Scripting.