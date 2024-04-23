function indexOf(firstString, secondString) {
  for (let i = 0; i < firstString.length; i++) {
    for (let j = i + 1; j <= firstString.length; j++) {
      if (firstString.slice(i, j) === secondString) {
        return i;
      }
    }
  }

  return -1;
}

function lastIndexOf(firstString, secondString) {
  let substrings = [];

  for (let i = 0; i < firstString.length; i++) {
    for (let j = i + 1; j <= firstString.length; j++) {
      if (firstString.slice(i, j) === secondString) {
        substrings.push(i);
      }
    }
  }

  return (substrings[substrings.length - 1] || -1);
}

console.log(indexOf('Some strings', 's'));                      // 5
console.log(indexOf('Blue Whale', 'Whale'));                    // 5
console.log(indexOf('Blue Whale', 'Blute'));                    // -1
console.log(indexOf('Blue Whale', 'leB'));                      // -1

console.log(lastIndexOf('Some strings', 's'));                  // 11
console.log(lastIndexOf('Blue Whale, Killer Whale', 'Whale'));  // 19
console.log(lastIndexOf('Blue Whale, Killer Whale', 'all'));    // -1