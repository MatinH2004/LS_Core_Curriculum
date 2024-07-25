/*

INPUT:
  - an array of objects
OUTPUT:
  - an array of objects (with thier counts)

RULES:
  - Input array will always contain one or more elements
  - Each element will contain a brand and name property
  - All duplicate elements will be listed in order
  - Assume input array will not be sparse
  - Assume input array can be of any length >= 1
  - Assume input array will only contain objects
  - Assume arg array will always be provided
  - Assume output array will contain elements in the same order as input array


DS: Array -> Object -> Array

{ item: { brand: "NARS", name: "Cosmetics Voyageur Pallete" }, count: 1}

result = [
  { brand: "NARS", name: "Cosmetics Voyageur Pallete", count: 0},
  { brand: "Urban Decay", name: "Naked Honey Pallete", count: 0},
  { brand: "Stila", name: "Stay All Day Liquid Lipstick", count: 0},
]

ALGO:

1. Get all unique objects into an array
  - use helper func: uniqueElements(arr) -> arr

2. Iterate over the objects and set the property of count to count in input array
  - filter the input array to objects with same brand and name
  - set the length of returned array to count property

3. Return array

ALGO unqiueElements(arr) -> arr:

1. init result array
2. iterate over the input array
3. if current element doesn't exist in result, push it to result

*/

function simplifyList(arr) {
  const items = uniqueElements(arr);
  return items.map(obj => {
    obj.count = arr.filter(element => sameBrandAndName(element, obj)).length;
    return obj;
  })
}

function uniqueElements(arr) {
  const result = [];

  arr.forEach(element => {
    if (!result.find(obj => sameBrandAndName(element, obj))) {
      result.push(element);
    }
  })

  return result;
}

function sameBrandAndName(a, b) {
  return a.brand === b.brand && a.name === b.name;
}

console.log(simplifyList([
  { brand: "NARS", name: "Cosmetics Voyageur Pallete" },
  { brand: "NARS", name: "Cosmetics Voyageur Pallete" },
  { brand: "Urban Decay", name: "Naked Honey Pallete" },
  { brand: "Stila", name: "Stay All Day Liquid Lipstick" },
  { brand: "Stila", name: "Stay All Day Liquid Lipstick" },
  { brand: "Stila", name: "Stay All Day Liquid Lipstick" }
]));

// [
//   { brand: "NARS", name: "Cosmetics Voyageur Pallete", count: 2 },
//   { brand: "Urban Decay", name: "Naked Honey Pallete", count: 1 },
//   { brand: "Stila", name: "Stay All Day Liquid Lipstick", count: 3 }
// ]

console.log(simplifyList([
  { brand: "NARS", name: "Cosmetics Voyageur Pallete" },
]));

// [
//   { brand: "NARS", name: "Cosmetics Voyageur Pallete", count: 1 }
// ]