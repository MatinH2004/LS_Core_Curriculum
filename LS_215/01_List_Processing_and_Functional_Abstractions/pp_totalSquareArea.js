//Write a Function named totalArea that takes an Array of rectangles as an argument.
// The Function should return the total area covered by all the rectangles.

// Solution 1
function totalArea(rectangles) {
  const summed = rectangles.map(([width, height]) => width * height);
  return summed.reduce((total, num) => num + total, 0);
}

// Solution 2
function totalArea(rectangles) {
  return rectangles.reduce((sum, [width, height]) => {
    return sum + (width * height);
  }, 0);
}

let rectangles = [[3, 4], [6, 6], [1, 8], [9, 9], [2, 2]];

console.log(totalArea(rectangles));    // 141

// Write a second Function named totalSquareArea. This Function should calculate the total area of a set of rectangles, just like 
// totalArea. However, it should only include squares in its calculations: it should ignore rectangles that aren't squares.

// Solution 1
function totalSquareArea(array) {
  const squares = array.filter(([width, height]) => width === height);
  const areas = squares.map(([width, height]) => width * height);
  return areas.reduce((sum, area) => sum + area, 0);
}

// Solution 2
function totalSquareArea(rectangles) {
  let squares = rectangles.filter(([width, height]) => width === height);
  return totalArea(squares);
}

console.log(totalSquareArea(rectangles));    // 121