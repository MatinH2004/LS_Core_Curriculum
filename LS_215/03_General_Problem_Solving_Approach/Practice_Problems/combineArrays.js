/*

Create a function that takes three arrays and returns one array where all passed arrays are combined into nested arrays.

These arrays should be combined based on indexes: the first nested array should contain only the items on index 0, 
the second array on index 1, and so on.

If any array contains fewer items than necessary, supplement the missing item with "*".

Input:
  - 3 arrays
Output:
  - 1 nested array [[elems at index 0], [ elems at index 1], [elems at index 2]]

Rules:
  - combine elements based their index in the input array
  - if any array contains fewer elements than necessary, sub in '*'
  - the subarrays can contain
  - the arrays will always be provided
  - there will always be 3 arrays input and the result nested array should contain 3 subarrays
  - the input arrays will never be sparse
  - the input arrays can contain any data type (number, string, obj...)
  - the elements should be in the same order in the result array, as they came from the iput array
  - return empty array with the right number of subarrays if arrays dont contain any elements

DS:

- iterate over the 3 input arrays
- get element at index i (0-2)
  - if undefined, use '*'
- push to resulting array at index i

result = [ [], [], [] ]

Algo:

1. init result array to an array with 3 empty sub arrays

2. iterate from index 0 to 3
  - iterate through each input array
  - if the element at current index (of outer loop) is undefined:
    - push '*' to the subarray at current index (of outer loop) of the result array
  - otherwise:
    - push the element element at current index (of outer loop) to the correct subarray in result

3. return result

*/

function combineArrays(...arrays) {
  const result = [[], [], []];

  for (let i = 0; i < 3; i++) {
    arrays.forEach(arr => {
      result[i].push(arr[i] !== undefined ? arr[i] : '*');
    })
  }

  return result;
}

console.log(combineArrays([false, 'false'], ['true', true, 'bool'], ['null', 'undefined'])); // [[false, 'true', 'null'], ['false', true, 'undefined'], ['*', 'bool', '*']];
console.log(combineArrays([1, 2, 3], [4, 5, 6], [7, 8, 9]));                                 // [[1, 4, 7], [2, 5,  8], [3, 6, 9]];
console.log(combineArrays(['Jack', 'Joe', 'Jill'], ['Stuart', 'Sammy', 'Silvia'], ['Rick', 'Raymond', 'Riri'])); // [['Jack', 'Stuart', 'Rick'], ['Joe', 'Sammy',  'Raymond'], ['Jill', 'Silvia', 'Riri']])
console.log(combineArrays(['JS', 'TS', 'CS'], ['React', 'Vue', 'Angular'], ['C', 'C++'])); // [['JS', 'React', 'C'], ['TS', 'Vue', 'C++'], ['CS', 'Angular', '*']];