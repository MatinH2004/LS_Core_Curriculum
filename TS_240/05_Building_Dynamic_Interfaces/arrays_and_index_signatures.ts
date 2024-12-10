type CustomArray = {
  [index: number]: string | number;
};

const customArray: CustomArray = ["apple", 42, "banana"];

function processCustomArray(arr: CustomArray) {
  if (Array.isArray(arr)) {
    return arr
      .filter(element => typeof element === 'string')
      .map(element => element.toUpperCase());
  }

  return [];
}

console.log(processCustomArray(customArray)); // [ 'APPLE', 'BANANA' ]