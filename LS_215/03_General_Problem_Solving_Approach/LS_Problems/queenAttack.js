// In the game of chess, a queen can attack pieces which are
// on the same row, column, or diagonal.
// Positions on the board equate to coordinate numbers.
// Given a set up like so:
//
// _ _ _ _ _ _ _ _
// _ _ _ _ _ _ _ _
// _ _ _ W _ _ _ _
// _ _ _ _ _ _ _ _
// _ _ _ _ _ _ _ _
// _ _ _ _ _ _ B _
// _ _ _ _ _ _ _ _
// _ _ _ _ _ _ _ _
//
// The white queen's position equates to (2, 3) and the black
// queen is at (5, 6). In this example the queens are on
// the same diagonal, and therefore can attack each other.
//
// Write a function which, given a string representation of
// the board with the two queens, returns true or false depending
// on whether the queens can attack each other or not.

/*
---- PROBLEM ----
- Input:
  - A string representation of a chess board
  - The string will include W for white queen and B for black queen
- Output:
  - Return true/false based on if the queens can attack each other
- Rules:
  - queen's coordinates are represented as (row, column)
    - the first row and column are 0
  - The queens can attack each other if they are on the:
    - same row -> Same 'row' coordinate, ex: (3, 5) and (3, 2)
    - same column -> Same 'column' coordinate, ex: (3, 5) and (7, 5)
    - same diagonal -> difference between row numbers == difference between
      column numbers, ex (2, 3) and (5, 6)
  - Board is 8x8 - coordinates span (0-7, 0-7)
  - Only queen pieces on the board
  - Queens are 'B' for black queen and 'W' for white queen
  - Queens may be missing
    - return undefined if one or both queens are missing
  - We will always be given a board

---- Data Structure ----
Board:
[
  "________",
  "________",
  "________",
  "________",
  "________",
  "________",
  "________",
  "________",
]

Coordinates:
[row, column] -> [2, 3]

---- Algorithm ----
High-level:
1. Parse the input string into the data structure
2. Get the coordinates of the W and B queens
3. Check both queens are present. If not, return undefined.
4. Check if queens can attack each other.

HELPER: queenCoordinates(board) => { 'W': [2, 3], 'B': [5, 6]} / {}
1. Initialize empty object 'coordinates'
2. Iterate over string values of the board
  - 'row' -> 'rowIndex'
  - for each string (row):
    - Check if 'B' is in the string
    - If it is:
        - Add 'B' key to `coordinates`
        - Set value to a coordinate pair: [`rowIndex`, index of 'B' in the
          current row] (indexOf)
    - Check if 'W' is in the string
    - If it is:
        - Add 'W' key to `coordinates`
        - Set value to a coordinate pair: [`rowIndex`, index of 'W' in the
          current row] (indexOf)
  - return `coordinates

HELPER: attackableCoordinates(coordinate1, coordinate2) => true / false
1. Check if coordinates are in the same row
  - If the first element in both arguments is the same, return true

2. Check if coordinates are in the same column
  - If the second element in both arguments is the same, return true

3. Check if coordinates are in the same diagonal
  - Calculate difference between first elements of each coordinate
  - Calculate difference between second elements of each coordinate
  - If the absolute value of the differences is the same, return true

4. If we make it to the end, return false

Detailed:
1. Parse the input string into the data structure
  - split the input string by the newline "\n" characters, and store string in an array 'board'.

2. Get the coordinates of the W and B queens
  - Use queenCoordinates, passing in our board, and get back our object with coordinates

3. Check both queens are present. If not, return undefined.
  - If the coordinates object doesn't include a 'B' and 'W' key, return undefined.

4. Check if queens can attack each other.
  - Invoke attackableCoordinated, passing in the two coordinate values.

*/

function queenAttack(board) {
  board = board.split('\n');
  const queens = queenCoordinates(board);

  if (!(queens.hasOwnProperty('W') && queens.hasOwnProperty('B'))) {
    return undefined;
  }

  return attackableCoordinates(queens['W'], queens['B']);
}

function queenCoordinates(board) {
  const coordinates = {};
  board.forEach((row, rowIndex) => {
    if (row.includes('W')) {
      coordinates['W'] = [rowIndex, row.indexOf('W')];
    }
    
    if (row.includes('B')) {
      coordinates['B'] = [rowIndex, row.indexOf('B')];
    }
  });

  return coordinates;
}

function attackableCoordinates(coordinate1, coordinate2) {
  if (coordinate1[0] === coordinate2[0]) return true;
  if (coordinate1[1] === coordinate2[1]) return true;
  
  const rowDifference = Math.abs(coordinate1[0] - coordinate2[0]);
  const columnDifference = Math.abs(coordinate1[1] - coordinate2[1]);

  return rowDifference === columnDifference;
}

// Diagonal Attack
console.log(queenAttack("________\n" +
                        "________\n" +
                        "___W____\n" +
                        "________\n" +
                        "________\n" +
                        "______B_\n" +
                        "________\n" +
                        "________\n") === true);

console.log(queenAttack("________\n" +
                        "________\n" +
                        "________\n" +
                        "________\n" +
                        "________\n" +
                        "________\n" +
                        "_B______\n" +
                        "W_______\n") === true);
// Row Attack
console.log(queenAttack("________\n" +
                        "________\n" +
                        "________\n" +
                        "________\n" +
                        "________\n" +
                        "________\n" +
                        "_B_____W\n" +
                        "________\n") === true);

console.log(queenAttack("BW______\n" +
                        "________\n" +
                        "________\n" +
                        "________\n" +
                        "________\n" +
                        "________\n" +
                        "________\n" +
                        "________\n") === true);
// Column Attack
console.log(queenAttack("________\n" +
                        "______W_\n" +
                        "________\n" +
                        "________\n" +
                        "________\n" +
                        "______B_\n" +
                        "________\n" +
                        "________\n") === true);

console.log(queenAttack("W_______\n" +
                        "________\n" +
                        "________\n" +
                        "________\n" +
                        "________\n" +
                        "________\n" +
                        "________\n" +
                        "B_______\n") === true);

// No Attack
console.log(queenAttack("________\n" +
                        "________\n" +
                        "________\n" +
                        "________\n" +
                        "________\n" +
                        "________\n" +
                        "__B_____\n" +
                        "W_______\n") === false);

console.log(queenAttack("________\n" +
                        "________\n" +
                        "______W_\n" +
                        "________\n" +
                        "________\n" +
                        "________\n" +
                        "____B___\n" +
                        "________\n") === false);

console.log(queenAttack("________\n" +
                        "________\n" +
                        "________\n" +
                        "________\n" +
                        "________\n" +
                        "________\n" +
                        "_______B\n" +
                        "W_______\n") === false);
// Edge Cases
console.log(queenAttack("________\n" +
                        "________\n" +
                        "_____W__\n" +
                        "________\n" +
                        "________\n" +
                        "________\n" +
                        "________\n" +
                        "________\n") === undefined);

console.log(queenAttack("________\n" +
                        "________\n" +
                        "________\n" +
                        "________\n" +
                        "________\n" +
                        "________\n" +
                        "_B______\n" +
                        "________\n") === undefined);

console.log(queenAttack("________\n" +
                        "________\n" +
                        "________\n" +
                        "________\n" +
                        "________\n" +
                        "________\n" +
                        "________\n" +
                        "________\n") === undefined);