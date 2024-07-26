/*

Create a function that takes an array of students and returns an object representing their notes distribution.
Keep in mind that all invalid notes should not be counted in the distribution. Valid notes are: 1, 2, 3, 4, 5

INPUT:
  - array of objects (representing students)
OUTPUT:
  - an object distributed notes

RULES:
  - assume input array is not empty/sparse
  - assume an array will always be input
  - assume the array will only contain objects
  - assume the array will always contain at least 1 element
  - assume the objects will not be empty
  - assume the objects will always contain a "name" and "notes" property
  - assume the "notes" property will always contain integer values
  - valid notes are 1, 2, 3, 4, 5. Ignore all other notes
  - goal: return an object with counts of all notes from all students

DS: array -> array -> object

count = {
  5: 0,
  4: 0,
  3: 0,
  2: 0,
  1: 0,
}

ALGO:
0. init valid notes array
  - containing numbers from 1 to 5

1. init count object
  - empty object

2. iterate over the student notes and increment each valid note
  - if current number is present in validNotes array
    - if the current number doesnt exist as a key in count
      - set the key to 1
    - if it exists, increment by 1

3. return counts

*/

function getNotesDistribution(arr) {
  const validNotes = [1, 2, 3, 4, 5];
  const count = {};

  arr.forEach(({notes}) => {
    const valid = notes.filter(note => validNotes.includes(note));
    valid.forEach(validNote => {
      if (count[validNote]) {
        count[validNote] += 1;
      } else {
        count[validNote] = 1;
      }
    });
  });

  return count;
}

// refactor

function getNotesDistribution(arr) {
  const validNotes = [1, 2, 3, 4, 5];

  return arr.reduce((count, {notes}) => {
    notes
      .filter(note => validNotes.includes(note))
      .forEach(validNote => {
        count[validNote] = (count[validNote] || 0) + 1;
      });
    return count;
  }, {});
}

console.log(getNotesDistribution([
  {
    "name": "Steve",
    "notes": [5, 5, 3, -1, 6]
  },
  {
    "name": "John",
    "notes": [3, 2, 5, 0, -3]
  }
]));

// {
//   5: 3,
//   3: 2,
//   2: 1
// }

console.log(getNotesDistribution([
  {
    "name": "Steve",
    "notes": [51, 55, 30, -1, 6]
  },
  {
    "name": "John",
    "notes": [33, -12, 19, 0, -3]
  }
]));

// {}