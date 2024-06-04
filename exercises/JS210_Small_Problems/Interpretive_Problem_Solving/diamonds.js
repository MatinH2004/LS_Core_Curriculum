/*
Start time: 4:07

Write a function that displays a four-pointed diamond in an nxn grid, 
where n is an odd integer supplied as an argument to the function. 
You may assume that the argument will always be an odd integer.

---------- PROBLEM ----------
INPUT:
  - Integer (odd) representing height & width of triangle
OUTPUT:
  - String of stars * representing a triangle

EXAMPLES:

diamond(3);
// logs
 *
***
 *

diamond(9);
// logs
    *
   ***
  *****
 *******
*********
 *******
  *****
   ***
    *

----------- RULES -----------
  - input integer n will always be odd
  - the diamond has to be n x n
    - the height and width of the triangle will be n stars

------- DATA STRUCTURE ------
  - build each line using string
  - store lines with array
  - join array at the end with '\n'

--------- SCRATCH PAD -------

---------- ALGORITHM --------
HIGH LEVEL:
  - initialize firstHalf array
  - Iterate from 0 to n
    - create star string using helper - pass in index number
    - pad the string with spaces using helper - pass in star string and n
    - push resulting string to firstHalf array
  - Using a copy of firstHalf, reverse the array
    - slice the array from index 1, to avoid the duplicate line
  - combine firstHalf with the reversed array
  - return the final array joined with the "\n" delimiter

HELPER: createStar(idx) {} -> "***"
  - determine number of stars with: ((idx + 1) * 2) - 1
  - return star string

HELPER: centerPad(star, n) {} -> "  ***  "
  - get difference of lengths
    - n - star.length
  - divide difference by 2
    - create a string with ' ' repeated x number of times
  - create the resulting string with the spaces on both sides of the stars

*/

function diamond(n) {
  const firstHalf = [];

  for (let i = 0; i < (n / 2); i++) {
    let star = '*'.repeat(((i + 1) * 2) - 1);
    firstHalf.push(centerPad(star, n));
  }

  firstHalf.push([...firstHalf].reverse().slice(1));
  return firstHalf.flat().join('\n');
}

function centerPad(star, n) {
  let total = (n - star.length) / 2;
  let spaces = ' '.repeat(total);
  return spaces + star;
}

// Alternate Solution

function diamond(size) {
  let middleRow = Math.ceil(size / 2);

  for (let row = 1; row <= size; row += 1) {
    let spaces = Math.abs(middleRow - row);
    let stars = size - spaces * 2;
    console.log(' '.repeat(spaces) + '*'.repeat(stars));
  }
}

console.log(diamond(3));
// logs
//  *
// ***
//  *

console.log(diamond(9));
// logs
//     *
//    ***
//   *****
//  *******
// *********
//  *******
//   *****
//    ***
//     *

console.log(diamond(17));

// Hollow Triangle

function hollowDiamond(n) {
  const firstHalf = [];

  for (let i = 0; i < (n / 2); i++) {
    if (i === 0) {
      firstHalf.push(centerPad('*', n));
    } else {
      let space = ' '.repeat(i * 2 - 1);
      firstHalf.push(centerPad(('*' + space + '*'), n));
    }
  }

  firstHalf.push([...firstHalf].reverse().slice(1));
  return firstHalf.flat().join('\n');
}

console.log(hollowDiamond(3));
//  *
// * *
//  *

console.log(hollowDiamond(9));
//     *
//    * *
//   *   *
//  *     *
// *       *
//  *     *
//   *   *
//    * *
//     *