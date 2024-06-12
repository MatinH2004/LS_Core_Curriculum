/*
---------- PROBLEM ----------
INPUT:
  - array
OUTPUT:
  - array (bubble sorted)

EXAMPLES:

----------- RULES -----------
  - Assume an array with 2 elements will always be input
  - We can stop iterating once we make a pass through the array without making swaps

------- DATA STRUCTURE ------
  - Array

---------- ALGORITHM --------
  - initialize index to 0
  - while index is less than size of array, minus 1:
    - if current element is greater than next element
      - swap places using multiple assignment
      - reassign index to 0
    - otherwise:
      - increment index by one
  - return array
*/

function bubbleSort(arr) {
  let idx = 0;

  while (idx < arr.length - 1) {
    if (arr[idx] > arr[idx + 1]) {
      [arr[idx], arr[idx + 1]] = [arr[idx + 1], arr[idx]];
      idx = 0;
    } else {
      idx += 1;
    }
  }

  return arr;
}

// Optimized solution
function bubbleSort(arr) {
  let swapMade;
  let elemsToCheck = arr.length - 1;

  do {
    swapMade = false;

    for (let i = 0; i < elemsToCheck; i++) {
      if (arr[i] > arr[i + 1]) {
        [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
        swapMade = true;
      }
    }

    elemsToCheck--;
  } while (swapMade);

  return arr;
}

const array1 = [5, 3];
bubbleSort(array1);
console.log(array1);    // [3, 5]

const array2 = [6, 2, 7, 1, 4];
bubbleSort(array2);
console.log(array2);    // [1, 2, 4, 6, 7]

const array3 = ['Sue', 'Pete', 'Alice', 'Tyler', 'Rachel', 'Kim', 'Bonnie'];
bubbleSort(array3);
console.log(array3);    // ["Alice", "Bonnie", "Kim", "Pete", "Rachel", "Sue", "Tyler"]