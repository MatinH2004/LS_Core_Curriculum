function countOccurrences(list) {
  const counter = list.reduce((count, item) => {
    count[item] ? count[item] += 1 : count[item] = 1;
    return count;
  }, {});

  logOccurrences(counter);
  // console.table(counter)
}

function logOccurrences(occurrences) {
  for (let item in occurrences) {
    console.log(`${item} => ${occurrences[item]}`);
  }
}

const vehicles = ['car', 'car', 'truck', 'car', 'SUV', 'truck',
                'motorcycle', 'suv', 'motorcycle', 'car', 'truck'];

countOccurrences(vehicles);

// console output
// car => 4
// truck => 3
// SUV => 1
// motorcycle => 2
// suv => 1