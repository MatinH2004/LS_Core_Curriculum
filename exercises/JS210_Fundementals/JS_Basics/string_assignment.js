/*
let myName = 'Bob';
const saveName = myName;
myName = 'Alice';
console.log(myName, saveName); // Alice Bob
*/

const myName = 'Bob';
const saveName = myName;
myName.toUpperCase();     // doesnt mutate the caller
console.log(myName, saveName);
