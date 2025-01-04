// Given an array of numbers, return its majority element.

// The majority element is the value in the array that appears
// as at least half of the elements in the array.

// It is guaranteed that only one majority element exists in the array.

/*

Explicit:
  - return majority element
  - majority = element that appears more than 1/2 length of the array
  - one majority element always exists

Implicit:
  - empty arrays will not be input
  - arrays will have more than 2 elements

DS:
  - Use a hash table to keep track of numbers and its occurences
  - { number: occurence }

ALGO:
  - init hash table to var counts
  - iterate thru the array
    - if current num doesnt exist on hash table as key
      - init key with value 0
    - else
      - increment current key

  - convert hash to 2d array (entries): [[key, val], [key, val]...]
  - iterate thru the hash table
    - return the key that contains a value >= len

*/

// Time complexity: O(N)
// function findMajority(arr) {
//   const counts = arr.reduce((hash, num) => {
//     hash[num] ? hash[num] += 1 : hash[num] = 1;
//     return hash;
//   }, {});
  
//   return Number(Object.entries(counts).reduce((maxKey, [key, value]) => {
//     return value > counts[maxKey] ? key : maxKey;
//   }, Object.keys(counts)[0]));
// }

// Solution using Map; also O(N)
function findMajority(arr) {
  const counts = new Map();
  const majorityCount = Math.ceil(arr.length / 2);

  for (let num of arr) {
    if (counts.has(num)) {
      counts.set(num, counts.get(num) + 1);
    } else {
      counts.set(num, 1);
    }

    if (counts.get(num) >= majorityCount) {
      return num;
    }
  }
}

// Test Cases:

console.log(findMajority([6, 4, 4, 6, 4]) === 4);
console.log(findMajority([4, 5, 2, 5, 5, 5, 1]) === 5);
console.log(findMajority([1, 2, 1, 2, 2, 1, 2]) === 2);
console.log(findMajority([1, 2, 3, 1, 4, 4, 1, 1]) === 1);
console.log(findMajority([5, 5, 5]) === 5);

// All test cases should log true