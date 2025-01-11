/*

ALGORITHM:
  - init anchor = 0
  - init runner = 1

  - while (anchor != end of array)
    - if anchor * 3 is equal to runner
      - return true
    - if anchor * 3 < runner
      - increment anchor
    - else increment runner

*/

function checkTripleMatch(nums) {
  let anchor = 0, runner = 1;

  while (anchor !== nums.length - 1) {
    if (nums[anchor] * 3 === nums[runner]) {
      return true;
    } else if (nums[anchor] * 3 < nums[runner]) {
      anchor++;
    } else {
      runner++;
    }
  }

  return false;
}

console.log(checkTripleMatch([1, 3, 9, 28]) === true);
console.log(checkTripleMatch([1, 2, 4, 10, 11, 12]) === true);
console.log(checkTripleMatch([0, 5, 7, 55]) === false);
console.log(checkTripleMatch([4, 5, 7, 9, 13, 15, 17]) === true);
console.log(checkTripleMatch([2, 6, 13, 54]) === true);
console.log(checkTripleMatch([1, 5, 17, 51]) === true);
console.log(checkTripleMatch([1, 2, 4, 8]) === false);

// All test cases should log true.