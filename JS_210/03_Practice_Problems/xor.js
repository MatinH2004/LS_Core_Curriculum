function isXor(a, b) {
  if (a && !b) {
    return true;
  } else if (!a && b) {
    return true;
  } else {
    return false;
  }
}

function isXor(a, b) {
  return !!((a && !b) || (b && !a));
}

console.log(isXor(false, true));     // true
console.log(isXor(true, false));     // true
console.log(isXor(false, false));    // false
console.log(isXor(true, true));      // false


console.log(isXor(false, 3));        // true
console.log(isXor('a', undefined));  // true
console.log(isXor(null, ''));        // false
console.log(isXor('2', 23));         // false