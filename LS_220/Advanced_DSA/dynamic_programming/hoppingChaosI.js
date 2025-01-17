// A puppy named Chaos is eager to reach a bowl of
// treats at the top of a series of n stacks of
// crates. Each stack is higher by one crate than
// the previous one, forming a structure similar
// to stairs. Each time, Chaos can hop either one
// stack or two stacks upward in his excitement. In
// how many distinct ways can Chaos reach the bowl?

// Write a function `hoppingChaos` that, given a
// number `N` as the input, determines the number
// of distinct ways Chaos can reach the bowl.

// The minimum amount of stacks is one, and the maximum is 50.

// Example 1:

    // Input: 2
    // Output: 2

    // Chaos can reach the top of the stack in two distinct ways:

    // 1. Hop 1 stack, then hop 1 more stack.
    // 2. Hop 2 stacks in one go.

// Example 2:

    // Input: 4
    // Output: 5

    // Chaos can reach the top of the stack in five distinct ways:

    // 1. Hop 1 stack, hop 1 stack, hop 1 stack, then hop 1 stack.
    // 2. Hop 1 stack, hop 1 stack, then hop 2 stacks in one go.
    // 3. Hop 1 stack, then hop 2 stacks in one go, then hop 1 stack.
    // 4. Hop 2 stacks in one go, hop 1 stack, then hop 1 stack.
    // 5. Hop 2 stacks in one go, then hop 2 stacks in one go again.

// brute-force solution - O(2^N)
function hoppingChaos(n) {
  if (n === 1) {
    return 1;
  }
  if (n === 2) {
    return 2;
  }
  return hoppingChaos(n - 1) + hoppingChaos(n - 2);
}

// memoized solution - O(N)
function hoppingChaos(n) {
  const memo = new Map();

  function waysToN(n) {
    if (n === 1) {
      return 1;
    }
    if (n === 2) {
      return 2;
    }
    if (memo.has(n)) {
      return memo.get(n);
    }
    const result = waysToN(n - 1) + waysToN(n - 2);
    memo.set(n, result);
    return result;
  }

  return waysToN(n);
}

console.log(hoppingChaos(2) === 2);
console.log(hoppingChaos(3) === 3);
console.log(hoppingChaos(4) === 5);
console.log(hoppingChaos(8) === 34);
console.log(hoppingChaos(13) === 377);
console.log(hoppingChaos(17) === 2584);
console.log(hoppingChaos(21) === 17711);
console.log(hoppingChaos(50) === 20365011074);
// All test cases should log true.