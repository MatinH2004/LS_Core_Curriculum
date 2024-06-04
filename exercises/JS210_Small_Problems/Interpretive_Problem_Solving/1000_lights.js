/*
Start time:

---------- PROBLEM ----------
INPUT:
  - Integer, representing n repetitions of toggling the lights equal to the number of switches
OUTPUT:
  - Array, representing the lights that are on after n repetition

EXAMPLES:

lightsOn(5);        // [1, 4]
// Detailed result of each round for `5` lights
// Round 1: all lights are on
  - [1, 2, 3, 4, 5]

// Round 2: lights 2 and 4 are now off;     1, 3, and 5 are on
  - [1, 3, 5]

// Round 3: lights 2, 3, and 4 are now off; 1 and 5 are on
  - [1, 5]

// Round 4: lights 2 and 3 are now off;     1, 4, and 5 are on
  - [1, 4, 5]

// Round 5: lights 2, 3, and 5 are now off; 1 and 4 are on
  - [1, 4]

Round 1 - toggle on
Round 2 - toggle even off
Round 3 - toggle odd off
Round 4 - toggle 

lightsOn(100);      // [1, 4, 9, 16, 25, 36, 49, 64, 81, 100]

----------- RULES -----------
  - All lights are initially off
  - On the first iteration, all lights are toggled on
  - On the 2nd pass, even indexes of lights are toggled [2, 4, 6...] + 2
  - On the 3rd pass, odd indexes of lights are toggled [3, 5...] + 3
    - first light is always on (start with light 2 onwards)

  - All even numbers toggled an even number of times is on
  - All odd numbers toggled an odd number of times 
  

------- DATA STRUCTURE ------
Array

--------- SCRATCH PAD -------

---------- ALGORITHM --------
- Initialize lights array
- Loop through the rounds from 1 to n, and for each round:
  - if current num is a perfect square, append to lights array
- return lights array

*/

function isPerfectSquare(num) {
  return Number.isInteger(Math.sqrt(num));
}

function lightsOn(switches) {
  const lights = [];

  for (let num = 1; num <= switches; num += 1) {
    if (isPerfectSquare(num)) lights.push(num);
  }

  return lights;
}

console.log(lightsOn(5));        // [1, 4]
console.log(lightsOn(100));      // [1, 4, 9, 16, 25, 36, 49, 64, 81, 100]
console.log(lightsOn(20));       // [1, 4, 9, 16]
