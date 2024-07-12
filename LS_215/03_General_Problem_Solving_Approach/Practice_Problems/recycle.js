// Task
// You will be given a list of objects. Each object has type, material, and 
// possibly secondMaterial. The existing materials are: paper, glass, organic, 
// and plastic.

// Your job is to sort these objects across the 4 recycling bins according to 
// their material (and secondMaterial if it's present), by listing the type's 
// of objects that should go into those bins.

// Notes
// The bins should come in the same order as the materials listed above
// All bins should be listed in the output, even if some of them are empty
// If an object is made of two materials, its type should be listed in 
// both of the respective bins
// The order of the type's in each bin should be the same as the order of 
// their respective objects was in the input list

// Example
// input = [
//   {"type": "rotten apples", "material": "organic"},
//   {"type": "out of date yogurt", "material": "organic", "secondMaterial": "plastic"},
//   {"type": "wine bottle", "material": "glass", "secondMaterial": "paper"},
//   {"type": "amazon box", "material": "paper"},
//   {"type": "beer bottle", "material": "glass", "secondMaterial": "paper"}
// ]

// output = [
//   ["wine bottle", "amazon box", "beer bottle"],
//   ["wine bottle", "beer bottle"],
//   ["rotten apples", "out of date yogurt"],
//   ["out of date yogurt"]
// ]

/*

Input: 
  - array of objects representing garbage item. 
  - Object Properties: type=name, material=materialName, secondMaterial=materialName (optional)
Output:
  - 2D Array representing the bins:
    [
      paper -> [],
      glass -> [],
      organic -> [],
      plastic -> [],
    ]

Rules:
  - Sort the objects in the input object to each respective bin
  - The bins in the output should be listed as the same order in OUTPUT section above
  - All bins should be listed, even if they are empty
  - If an object contains a secondMaterial property, it should be listed in both bins
  - In the output (aka the bins) the order of the types should come in as they are in
    the input list
  - If input data is invalid, or missing, still return the bins
  - Assume all objects in array contain type and material properties

Data Structure:
Bins:

bins = {
  paper: [],
  glass: [],
  organic: [],
  plastic: []
}

Return [
  bins[paper],
  bins[glass],
  bins[organic],
  bins[plastic],
]

Algorithm:
1) Assign param to an empty array, incase it is not provided

2) init bins object with each bin type as properties

3) iterate over the garbage items
  - if "material" property exists:
    - push "type" property to array in the bin object
  - if "secondMaterial" exists:
    - push "type" property to array in the bin object
  
4) Return the bins 2D array

*/

function recycle(items = []) {
  const bins = {
    'paper': [],
    'glass': [],
    'organic': [],
    'plastic': [],
  }

  items.forEach(item => {
    let itemType = item['type'];
    let itemDestination = Object.keys(item).slice(1);

    itemDestination.forEach(destination => bins[item[destination]].push(itemType));
  });

  return [
    bins['paper'],
    bins['glass'],
    bins['organic'],
    bins['plastic'],
  ]
}

let input = [
  {"type": "rotten apples", "material": "organic"},
  {"type": "out of date yogurt", "material": "organic", "secondMaterial": "plastic"},
  {"type": "wine bottle", "material": "glass", "secondMaterial": "paper"},
  {"type": "amazon box", "material": "paper"},
  {"type": "beer bottle", "material": "glass", "secondMaterial": "paper"}
]

console.log(recycle(input));

// output = [
//   ["wine bottle", "amazon box", "beer bottle"],
//   ["wine bottle", "beer bottle"],
//   ["rotten apples", "out of date yogurt"],
//   ["out of date yogurt"]
// ]

input = [
  {"type": "rotten apples", "material": "organic"},
  {"type": "black banana", "material": "organic"},
  {"type": "paper airplane", "material": "paper"},
  {"type": "baby toys", "material": "plastic", "secondMaterial": "glass"},
  {"type": "vodka", "material": "glass", "secondMaterial": "paper"},
  {"type": "tomato", "material": "organic"},
  {"type": "expired milk", "material": "paper", "secondMaterial": "organic"},
]

console.log(recycle(input));

// output = [
//   ["paper airplane", "vodka", "expired milk"],
//   ["baby toys", "vodka"],
//   ["rotten apples", "black banana", "tomato", "expired milk"],
//   ["baby toys"]
// ]

input = [];

console.log(recycle(input));

// [
//   [],
//   [],
//   [],
//   []
// ]