function buyFruit(arr) {
  const result = [];

  arr.forEach(subArray => {
    appendNTimes(result, subArray[0], subArray[1]);
  });

  return result;
}

function appendNTimes(array, item, times) {
  for (let i = times; i > 0; i -= 1) {
    array.push(item);
  }
}

console.log(buyFruit([['apple', 3], ['orange', 1], ['banana', 2]]));
// returns ["apple", "apple", "apple", "orange", "banana", "banana"]

// Solution using Array constructor
function buyFruit(groceryList) {
  return groceryList.flatMap(multiplyFruit);
}

function multiplyFruit([fruit, quantity]) {
  return Array(quantity).fill(fruit);
}

// Another cool solution
function buyFruit(list) {
  return list.flatMap(([fruit, quantity]) => new Array(quantity).fill(fruit));
}