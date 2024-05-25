// - There must be one @ sign.
// - The local part must contain one or more letters (A-Z, a-z) and/or digits (0-9). 
//   It may not contain any other characters.
// - The domain part must contain two or more components with a single dot (.) between 
//   each component. Each component must contain one or more letters (A-Z, a-z) only.

function isValidEmail(email) {
  return /^[a-z0-9]+@([a-z]+\.)+[a-z]+$/i.test(email);
}

// - The entire regex must match starting at the beginning: ^
// - The local part has letters or numbers only: [a-z0-9]+
// - The @ sign comes next: @
// - The email server name contains one or more components; each component contains 
//   letters followed by a single dot: ([a-z]+\.)+. Notice the use of grouping parentheses 
//   here to treat both [a-z] and \. as a single pattern, and that we apply + to that pattern as a whole.
// - The top-level domain: [a-z]+
// - The entire regex must match up to the end: $
// - And finally, we apply the i modifier so that the regex is case-insensitive.

console.log(isValidEmail('Foo@baz.com.ph'));          // returns true
console.log(isValidEmail('Foo@mx.baz.com.ph'));       // returns true
console.log(isValidEmail('foo@baz.com'));             // returns true
console.log(isValidEmail('foo@baz.ph'));              // returns true
console.log(isValidEmail('HELLO123@baz'));            // returns false
console.log(isValidEmail('foo.bar@baz.to'));          // returns false
console.log(isValidEmail('foo@baz.'));                // returns false
console.log(isValidEmail('foo_bat@baz'));             // returns false
console.log(isValidEmail('foo@bar.a12'));             // returns false
console.log(isValidEmail('foo_bar@baz.com'));         // returns false
console.log(isValidEmail('foo@bar.....com'));         // returns false