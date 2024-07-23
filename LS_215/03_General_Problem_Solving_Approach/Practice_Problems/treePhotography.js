/*

A tree is hidden if it is shorter or the same height as the tree in front.

Given an array of tree heights, create a function which returns "left" or "right",
depending on which side allows me to see as many trees as possible.

Input:
  - array of integers
Output:
  - "left" or "right"

Rules:
  - There will always be a best side -> there wont be an array where all nums are the same
  - Trees are hidden if they are the same height or lower than the tree in front
  - Find the best side where the most trees are visible
  - Questions:
    - Will the arg always be provided? - yes
    - Will the arg always be a non-empty array? - yes
    - Will the array be sparse? - No
    - Will the array contain any other data types than numbers? - Maybe
      - Will the array contain numbers as strings? - yes
    - Will the array contain any special values like NaN, Infinity, or -Infinity? - no
    - Can I assume that the array will always contain more than 2 numbers? - yes

DS:

Array => Array => String

Array methods to keep in mind:
  - reduce()
  - reduceRight()

HIGH LEVEL ALGO:
1. Count how many trees are visible from left side
2. Count how many trees are visible from right side
3. Return the string based on which side is greater

---

1. Count how many trees are visible from left side
  - init max to -Infinity
  - init count to 0
  - iterate from 0 to length of input array
    - if current value is higher than max
    - reassign max to current value
    - increment count

2. Count how many trees are visible from right side
  - init max to -Infinity
  - init count to 0
  - iterate from end of array to idx 0
    - if current value is higher than max
    - reassign max to current value
    - increment count

3. Return the string based on which side is greater
  - compare the values using ternary operator

*/

function treePhotography(arr) {
  const trees = arr.map(Number);

  const visibleFromLeft = () => {
    let count = 0, max = -Infinity;

    for (let i = 0; i < trees.length; i++) {
      if (trees[i] > max) {
        max = trees[i];
        count++;
      }
    }

    return count;
  }

  const visibleFromRight = () => {
    let count = 0, max = -Infinity;

    for (let i = trees.length - 1; i >= 0; i--) {
      if (trees[i] > max) {
        max = trees[i];
        count++;
      }
    }

    return count;
  }

  return visibleFromLeft() > visibleFromRight() ? 'left' : 'right';
}

console.log(treePhotography([5, 6, 5, 4])); // "right"

console.log(treePhotography([1, 2, 3, 3, 3, 3, 3])); // "left"

console.log(treePhotography([3, 1, 4, 1, 5, 9, 2, 6])); // "left"

console.log(treePhotography([3, 1, '4', 1, '5', '9', 2, 6])); // "left"

console.log(treePhotography([5, 1, 2])); // right
