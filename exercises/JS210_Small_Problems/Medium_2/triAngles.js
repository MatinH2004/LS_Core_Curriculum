/*
---------- PROBLEM ----------

Right: One angle is a right angle (exactly 90 degrees).
Acute: All three angles are less than 90 degrees.
Obtuse: One angle is greater than 90 degrees.

Valid triangle:
  - sum of angles must be 180 degrees
  - angles must be greater than 0 degrees

Write a function that takes the three angles of a triangle as arguments and 
returns one of the following four strings representing the triangle's 
classification: 'right', 'acute', 'obtuse', or 'invalid'.

INPUT:
  - 
OUTPUT:

EXAMPLES:

----------- RULES -----------
  - Assume all 3 args will be provided
  - Assume all args are integer values
  - All angles must sum to 180 AND they all must be greater than 0
  - If one angle is 90 degrees, return 'right'
  - If all three angles are less than 90 degrees, return 'acute'
  - If one angle is greater than 90 degrees, return 'obtuse'

------- DATA STRUCTURE ------
  - Use arrays for iteration methods
    - reduce
    - some()
    - every()
    - filter()

--------- SCRATCH PAD -------

---------- ALGORITHM --------
  - If sum of all angles are not 180º and any value is 0
    - return invalid
  - if one angle is 90
    - return right
  - if all angles are less than 90º
    - return acute
  - otherwise return 'obtuse'

*/

function triangle(...angles) {
  if (invalidTriangle(angles)) return 'invalid';
  
  if (angles.some(angle => angle === 90)) return 'right';
  if (angles.every(angle => angle <= 90)) return 'acute';
  return 'obtuse';
}

function invalidTriangle(angles) {
  const total = angles.reduce((total, angle) => angle + total, 0);
  const zeroValues = angles.filter(angle => angle === 0);
  return (total !== 180 || zeroValues.length > 0);
}

console.log(triangle(60, 70, 50));       // "acute"
console.log(triangle(30, 90, 60));       // "right"
console.log(triangle(120, 50, 10));      // "obtuse"
console.log(triangle(0, 90, 90));        // "invalid"
console.log(triangle(50, 50, 50));       // "invalid"