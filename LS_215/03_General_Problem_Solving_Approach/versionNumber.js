// Write a function that takes any two version numbers in this format and compares them,
// with the result of this comparison showing whether the first is less than, equal to, 
// or greater than the second version:

// If version1 > version2, we should return 1.
// If version1 < version2, we should return -1.
// If version1 === version2, we should return 0.
// If either version number contains characters other than digits and the . character, we should return null.

/*
---- Problem ----
- Input:
  - two strings representing version numbers, version1 and version2 
- Output:
  - 1, -1, 0; or null invalid inputs
- Rules:
  - if any inputs contain invalid characters, return null
    - any characters other than digits and . are considered invalid
  - Compare the two input versions
    - if version1 > version2, return 1
    - if version1 < version2, return -1
    - if version1 === version2, return 0
  - The rules to compare two version numbers:
    - start from the left most parts of the two version numbers
    - if the number part of the first version number is larger, then the first version number is larger
    - if the number part of the second version number is larger, then the first version number is smaller
    - if the number parts of both version numbers are the same, move to the next number part of the two version numbers
      - do the same comparison and decide which version number is larger
      - keep moving to the right until the result of the comparison is determined
        - if we reach the end of only one number, pad that number with a 0 part
      - if we get to the last number part of the two version numbers and they're equal,
        then the two version numbers are equal

Example of number versioning system:

0.1 < 1 = 1.0 < 1.1 < 1.2 = 1.2.0.0 < 1.18.2 < 13.37

---- Data Structure ----
Version:
['1', '18', '2']
['13', '37']

- iterate through the version numbers, part by part
- compare part numbers

---- Algorithm ----
High-level:
1. Check if both inputs are present and valid, otherwise return null.
2. Split the input strings by the '.' character
3. Iterate through each array until a larger value is found
4. Return the correct return value based on whichever value was larger

HELPER: validVersion(version1, version2) => true/false
1. Use regex to match any chars other than digits and period '.'.
  - if any matches, return false

Detailed:
1. Check if both inputs are present and valid, otherwise return null.
  - pass each version number to the validVersion function
  - if false is returned, return null

2. Split the input strings by the '.' character

3. Loop through the two version numbers' parts
  - for each step, access one part from each version number
  - if one version number runs out of parts, use 0
  - compare the two parts
    - if part1 < part2
      - return -1
    - if part1 > part2
      - return 1
    - if part1 === part2
      - we move to the next pair of parts

4. Return 0 if no other values were returned

*/

// Initial Solution:
// function compareVersions(version1, version2) {
//   if (!(validVersion(version1) && validVersion(version2))) return null;

//   version1 = removeTrailingZeros(version1.split('.'));
//   version2 = removeTrailingZeros(version2.split('.'));

//   longestVersion = version1.length > version2.length ? version1 : version2;

//   for (let i = 0; i < longestVersion.length; i++) {
//     if ((Number(version1[i]) > Number(version2[i])) ||
//         (Number(version1[i]) > 0 && version2[i] === undefined)) return 1;
//     if ((Number(version1[i]) < Number(version2[i])) ||
//         (Number(version1[i]) === undefined && version2[i] > 0)) return -1;
//   }

//   return 0;
// }

// function removeTrailingZeros(version) {
//   let result = [];
//   let copyMode = false;
//   version = [...version].reverse();

//   for (let i = 0; i < version.length; i++) {
//     if (version[i] !== '0') copyMode = true;
//     if (copyMode) result.push(version[i]);
//   }

//   return result.reverse();
// }

// LS Solution:
function compareVersions(versionA, versionB) {
  if (!(validVersion(versionA) && validVersion(versionB))) return null;

  let aParts = versionA.split('.').map(Number);
  let bParts = versionB.split('.').map(Number);

  let maxLength = Math.max(aParts.length, bParts.length);

  for (let i = 0; i < maxLength; i += 1) {
    let aValue = aParts[i] || 0;
    let bValue = bParts[i] || 0;

    if (aValue > bValue) {
      return 1;
    } else if (aValue < bValue) {
      return -1;
    }
  }

  return 0;
}

function validVersion(versionStr) {
  return /^[0-9]+(\.[0-9]+)*$/.test(versionStr);
}

console.log(compareVersions('1', '1'));            // 0
console.log(compareVersions('1.1', '1.0'));        // 1
console.log(compareVersions('2.3.4', '2.3.5'));    // -1
console.log(compareVersions('1.a', '1'));          // null
console.log(compareVersions('.1', '1'));           // null
console.log(compareVersions('1.', '2'));           // null
console.log(compareVersions('1..0', '2.0'));       // null
console.log(compareVersions('1.0', '1.0.0'));      // 0
console.log(compareVersions('1.0.0', '1.1'));      // -1
console.log(compareVersions('1.0', '1.0.5'));      // -1
