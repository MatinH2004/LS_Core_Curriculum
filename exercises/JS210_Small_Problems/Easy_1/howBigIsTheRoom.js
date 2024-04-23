const rlSync = require('readline-sync');
const SQMETERS_TO_SQFEET = 10.7639;

console.log('Enter the length of the room in meters: ');
let length = rlSync.prompt();
length = parseInt(length, 10);

console.log('Enter the width of the room in meters: ');
let width = rlSync.prompt();
width = parseInt(width, 10)

let areaInMeters = length * width;
let areaInFeet = (length * width) * SQMETERS_TO_SQFEET;

console.log(`The area of the room is ${areaInMeters.toFixed(2)} square meters (${areaInFeet.toFixed(2)} square feet).`)