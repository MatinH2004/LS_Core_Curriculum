/*

Write a function that takes two arguments, an array and an object.
The array will contain two or more elements that, when combined with spaces,
produce a person's full name. The object will contain two keys, title and
occupation, and suitable values for both items.

Your function should log a greeting to the console that uses the person's
full name, and mentions the person's title and occupation.

*/

function greetings(nameArray, { title, occupation }) {
  let fullName = nameArray.join(' ');
  console.log(`Hello, ${fullName}! Nice to have a ${title} ${occupation} around.`)
}

greetings(['John', 'Q', 'Doe'], { title: 'Master', occupation: 'Plumber' });

// console output
// Hello, John Q Doe! Nice to have a Master Plumber around.