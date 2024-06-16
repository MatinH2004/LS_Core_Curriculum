// Using for loop
function isBalanced(str) {
  let count = 0;

  for (let i = 0; i < str.length; i++) {
    if (str[i] === '(') count += 1;
    if (str[i] === ')') count -= 1;
    if (count < 0) return false;
  }

  return count === 0;
}

// Using forEach()
function isBalanced(str) {
  let count = 0;
  let unbalanced = false;

  [...str].forEach(char => {
    if (char === '(') count += 1;
    if (char === ')') count -= 1;
    if (count < 0) unbalanced = !unbalanced;
  });

  return unbalanced ? false : count === 0;
}


console.log(isBalanced('What (is) this?'));        // true
console.log(isBalanced('What is) this?'));         // false
console.log(isBalanced('What (is this?'));         // false
console.log(isBalanced('((What) (is this))?'));    // true
console.log(isBalanced('((What)) (is this))?'));   // false
console.log(isBalanced('Hey!'));                   // true
console.log(isBalanced(')Hey!('));                 // false
console.log(isBalanced('What ((is))) up('));       // false