/*

Implement a binarySearch function that takes an array and a search item as arguments, and returns the index of
the search item if found, or -1 otherwise. You may assume that the array argument will always be sorted.

Input:
  - Array (sorted)
  - Search item
Output:
  - Integer: index of search item

Rules:
  - Assume all args will be provided
  - Assume input arr is sorted
  - Assume arr contains same data type as search item
  - Get middle element in array
    - if search item is greater, discard first half of array
    - or vice versa
  - Continue this process until the search item is found
  
*/

function binarySearch() {

}

const yellowPages = ['Apple Store', 'Bags Galore', 'Bike Store', 'Donuts R Us', 'Eat a Lot', 'Good Food', 'Pasta Place', 'Pizzeria', 'Tiki Lounge', 'Zooper'];
console.log(binarySearch(yellowPages, 'Pizzeria'));                   // 7
console.log(binarySearch(yellowPages, 'Apple Store'));                // 0

console.log(binarySearch([1, 5, 7, 11, 23, 45, 65, 89, 102], 77));    // -1
console.log(binarySearch([1, 5, 7, 11, 23, 45, 65, 89, 102], 89));    // 7
console.log(binarySearch([1, 5, 7, 11, 23, 45, 65, 89, 102], 5));     // 1

console.log(binarySearch(['Alice', 'Bonnie', 'Kim', 'Pete', 'Rachel', 'Sue', 'Tyler'], 'Peter'));  // -1
console.log(binarySearch(['Alice', 'Bonnie', 'Kim', 'Pete', 'Rachel', 'Sue', 'Tyler'], 'Tyler'));  // 6