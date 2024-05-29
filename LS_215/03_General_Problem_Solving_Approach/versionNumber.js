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
  - The rules to compare two version numbers
    - start from the left most parts of the two version numbers
    - if the number part of the first version number is larger, then the first version number is larger
    - if the number part of the second version number is larger, then the first version number is smaller
    - if the number parts of both version numbers are the same, move to the next number part of the two version numbers
      - do the same comparison and decide which version number is larger
      - keep moving to the right until the result of the comparison is determined
      - if we get to the last number part of the two version numbers and they're equal,
        then the two version numbers are equal
  - if any inputs contain invalid characters, return null
    - any characters other than digits and . are considered invalid
    - a version number that begins or ends with a period or has more than one period in a row, is invalid.

Example of number versioning system:

0.1 < 1 = 1.0 < 1.1 < 1.2 = 1.2.0.0 < 1.18.2 < 13.37

---- Data Structure ----
Version:
['1', '18', '2']
['13', '37']

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

3. Iterate through each array until a larger value is found
  - if one number is greater than the other, stop looping and return whichever is larger
  - only continue iteration if previous numbers were equal
  - if one version number contains more sections that the other:
    - keep iterating:
      - if following numbers are greater than 0, the number being iterated on is larger
    - else both are equal

4. Return the correct return value based on whichever value was larger

*/

// Need to implement: handling version numbers with period at beginning/end of strings.

function compareVersions(version1, version2) {
  if (!(validVersion(version1) && validVersion(version2))) return null;

  version1 = removeTrailingZeros(version1.split('.'));
  version2 = removeTrailingZeros(version2.split('.'));

  longestVersion = version1.length > version2.length ? version1 : version2;

  for (let i = 0; i < longestVersion.length; i++) {
    if ((Number(version1[i]) > Number(version2[i])) ||
        (Number(version1[i]) > 0 && version2[i] === undefined)) return 1;
    if ((Number(version1[i]) < Number(version2[i])) ||
        (Number(version1[i]) === undefined && version2[i] > 0)) return -1;
  }

  return 0;
}

function validVersion(versionStr) {
  return /^[0-9.]+$/.test(versionStr);
}

function removeTrailingZeros(version) {
  let result = [];
  let copyMode = false;
  version = [...version].reverse();

  for (let i = 0; i < version.length; i++) {
    if (version[i] !== '0') copyMode = true;
    if (copyMode) result.push(version[i]);
  }

  return result.reverse();
}

console.log(compareVersions('1.1', '1.0') === 1);

console.log(compareVersions('13.37', '1.18.2') === 1);

console.log(compareVersions('0.1', '1') === -1);

console.log(compareVersions('1.1', '1.2') === -1);

console.log(compareVersions('1', '1.0') === 0);

console.log(compareVersions('1.2', '1.2.0.0') === 0);

console.log(compareVersions('1.1?', '1.0!') === null);

console.log(compareVersions('hello', 'world') === null);
