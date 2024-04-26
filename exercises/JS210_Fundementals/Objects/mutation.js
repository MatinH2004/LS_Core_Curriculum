const array1 = ['Moe', 'Larry', 'Curly', 'Shemp', 'Harpo', 'Chico', 'Groucho', 'Zeppo'];
const array2 = [];

for (let i = 0; i < array1.length; i += 1) {
  array2.push(array1[i]);
}

for (let i = 0; i < array1.length; i += 1) {
  if (array1[i].startsWith('C')) {
    array1[i] = array1[i].toUpperCase();
  }
}

console.log(array2);

// [
//   'Moe',     'Larry',
//   'Curly',   'Shemp',
//   'Harpo',   'Chico',
//   'Groucho', 'Zeppo'
// ]

// To make the changes appear in array2 we must assign array2 = array1 when declaring it