function objectHasProperty(obj, property) {
  let keys = Object.keys(obj);
  return keys.indexOf(property) !== -1;
}

let pets = {
  cat: 'Simon',
  dog: 'Dwarf',
  mice: null,
};

// console.log(objectHasProperty(pets, 'dog'));       // true
// console.log(objectHasProperty(pets, 'lizard'));    // false
// console.log(objectHasProperty(pets, 'mice'));      // true


function incrementProperty(obj, property) {
  if (objectHasProperty(obj, property)) {
    obj[property] += 1;
  } else {
    obj[property] = 1;
  }

  return obj[property];
}

let wins = {
  steve: 3,
  susie: 4,
};

// console.log(incrementProperty(wins, 'susie'));   // 5
// console.log(wins);                               // { steve: 3, susie: 5 }
// console.log(incrementProperty(wins, 'lucy'));    // 1
// console.log(wins);                               // { steve: 3, susie: 5, lucy: 1 }


function copyProperties(source, destination) {
  let count = 0
  for (let property in source) {
    destination[property] = source[property];
    count += 1;
  }

  return count;
}

// let hal = {
//   model: 9000,
//   enabled: true,
// };

// let sal = {};
// console.log(copyProperties(hal, sal));  // 2
// console.log(sal);                       // { model: 9000, enabled: true }


function wordCount(str) {
  let words = str.split(' ');
  let count = {};

  for (let i = 0; i < words.length; i++) {
    if (objectHasProperty(count, words[i])) {
      count[words[i]] += 1;
    } else {
      count[words[i]] = 1;
    }
  }

  return count;
}

console.log(wordCount('box car cat bag box'));
// { box: 2, car: 1, cat: 1, bag: 1 }

// Alternate solution without objectHasProperty function:

// function wordCount(text) {
//   let count = {};
//   let words = text.split(' ');

//   for (let index = 0; index < words.length; index += 1) {
//     let word = words[index];
//     if (!count[word]) {
//       count[word] = 0;
//     }

//     count[word] += 1;
//   }

//   return count;
// }