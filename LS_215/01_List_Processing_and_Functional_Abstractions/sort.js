// callback function for sort

// function compareFunction(item1, item2) {
//   if (item1 is less than item2 based on some comparison criterion) {
//     return -1;
//   } else if (item1 is greater than item2 based on some comparison criterion) {
//     return 1;
//   } else {  // item1 and item2 are equal
//     return 0;
//   }
// }

// Return value

// sort mutates the original array and returns a reference to the mutated (sorted) array.
// Thus, you can use sort for either its return value or its side effect.

// Examples

let studentGrades = [
  { name: 'StudentA', grade: 90.1 },
  { name: 'StudentB', grade: 92 },
  { name: 'StudentC', grade: 91.8 },
  { name: 'StudentD', grade: 95.23 },
  { name: 'StudentE', grade: 91.81 },
];

function compareGrades(student1, student2) {
  if (student1.grade < student2.grade) {
    return 1;
  } else if (student1.grade > student2.grade) {
    return -1;
  } else {
    return 0;
  }
}

console.log(studentGrades.sort(compareGrades));

// [
//   { name: 'StudentD', grade: 95.23 },
//   { name: 'StudentB', grade: 92 },
//   { name: 'StudentE', grade: 91.81 },
//   { name: 'StudentC', grade: 91.8 },
//   { name: 'StudentA', grade: 90.1 }
// ]

// Using inline style

studentGrades.sort((student1, student2) => {
  if (student1.grade < student2.grade) {
    return 1;
  } else if (student1.grade > student2.grade) {
    return -1;
  } else {
    return 0;
  }
});