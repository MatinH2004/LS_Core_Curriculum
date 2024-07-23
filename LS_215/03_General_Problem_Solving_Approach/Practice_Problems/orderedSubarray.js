/*

Write a function that, given arrays smarr and bigarr, decides if smarr is an ordered subarray of bigarr.

Input:
  - 2 arrays smarr and bigarr. smarr is an ordered subarray that can be found in bigarr
Output:
  - True / False

Rules:
  - Find out if smarr is an ordered subarray of bigarr
  - Smarr elements must be in the exact same order in bigarr
    - even though there might be numbers in between (test case #3)
  - Questions:
    - Will both args be provided?
    - Will both args be arrays?
    - Can both arrays include any length of elements?
    - What if smarr has a greater length than bigarr?
    - What if the arrays are empty? (both or either)
    - How do we handle sparse arrays?
    - Will the arrays only contain number values?

DS:
-> array of elements
-> methods to keep in mind:
  - every();
  - push();
  - forEach();

Algo:
1. Init seen array

2. Init idx var to 0

3. Iterate through bigarr
  - if current elements matches the element in smarr at position idx
    - push current element to seen array
    - increment idx

4. Iterate through seen array
  - if every element matches the same element postion in smarr
    - return true

*/

function isOrdSub(smarr, bigarr) {
  const seen = [];
  let idx = 0;

  bigarr.forEach(num => {
    if (num === smarr[idx]) {
      seen.push(num);
      idx += 1;
    }
  });

  return smarr.every((num, i) => num === seen[i]);
}

console.log(isOrdSub([4, 3, 2], [5, 4, 3, 2, 1])); // true

console.log(isOrdSub([5, 3, 1], [5, 4, 3, 2, 1])); // true

console.log(isOrdSub([5, 3, 1], [1, 2, 3, 4, 5])); // false

console.log(isOrdSub([1, 2, 3], [3, 2, 1, 2, 3])); // true