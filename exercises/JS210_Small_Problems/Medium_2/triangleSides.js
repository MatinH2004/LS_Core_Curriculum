/*
---------- PROBLEM ----------

Equilateral: All three sides are of equal length.
Isosceles: Two sides are of equal length, while the third is different.
Scalene: All three sides are of different lengths.

Valid triangle (must fulfill both conditions):
  - the sum of the lengths of the two shortest sides must be greater than the length of the longest side
  - sides must have a length of greater than 0

Write a function that takes the lengths of the three sides of a triangle as arguments and returns one of the 
following four strings representing the triangle's classification: 'equilateral', 'isosceles', 'scalene', or 'invalid'.

INPUT:
  - three integers representing sides of the triangle

OUTPUT:
  - string representing the classification of triangle OR invalid

EXAMPLES:
- triangle(3, 3, 3);        // "equilateral"
- triangle(3, 3, 1.5);      // "isosceles"
- triangle(3, 4, 5);        // "scalene"
- triangle(0, 3, 3);        // "invalid"

----------- RULES -----------
  - Assume all args will be provided
  - Assume all args will be non-negative integers
  - For triangle to be valid:
    - all inputs must be greater than 0
    - the two smallest values' sum must be greater than the largest value
  - Triangle classification:
    - If all inputs are the same => equilateral
    - If two inputs are the same => isosceles
    - If all three inputs are different => scalene
    
------- DATA STRUCTURE ------
  - Use arrays, for sorting and slicing purposes
  - object for counting sides

--------- SCRATCH PAD -------

---------- ALGORITHM --------
  - use rest syntax to automatically get params in array
  - sort the param array
  - if the two smallest values' sum is not greater than the biggest value
    OR any value is 0 or less
      - return 'invalid'
  - iterate over the array of sides
    - using an object: for each value, assign current side as key, and its count as the value
  - using switch statement the count object
    - if lenght of object is 1, return equilateral
    - if length of object is 2, return isosceles
    - if length of object is 3, return scalene
  
*/

function triangle(...sides) {
  sides = sides.sort();

  if ((sides[0] + sides[1] < sides[2]) || sides.some(value => value <= 0)) {
    return 'invalid';
  }

  const count = sides.reduce((obj, val) => {
    if (!obj[val]) {
      obj[val] = 0;
    }

    obj[val] += 1;
    
    return obj;
  }, {});

  switch (Object.keys(count).length) {
    case 1:
      return 'equilateral';
    case 2:
      return 'isosceles';
    case 3:
      return 'scalene';
  };
}

// Refactor

function triangle(...sides) {
  const [shortest, middle, longest] = sides.sort((a, b) => a - b);

  const validTriangle = () => {
    if (sides.some((n) => n === 0))  return false;
    if (shortest + middle < longest) return false;
    return true;
  };

  const triangleType = () => {
    if (longest === shortest)                      return 'equilateral';
    if (longest === middle || middle === shortest) return 'isosceles';
    return 'scalene';
  };

  return validTriangle() ? triangleType() : 'invalid';
}

console.log(triangle(3, 3, 3));        // "equilateral"
console.log(triangle(3, 3, 1.5));      // "isosceles"
console.log(triangle(3, 4, 5));        // "scalene"
console.log(triangle(0, 3, 3));        // "invalid"
console.log(triangle(3, 1, 1));        // "invalid"