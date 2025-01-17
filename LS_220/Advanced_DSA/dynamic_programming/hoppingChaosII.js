// A puppy named Chaos is eager to reach a bowl of
// treats at the top of a series of n stacks of
// crates. Each stack is higher by 1 crate than
// the previous one, forming a structure similar
// to stairs. Each time, Chaos can hop either 1
// stack or 2 stacks upward in his excitement. In
// how many distinct ways can Chaos reach the bowl?

// Write a function `hoppingChaos` that, given a
// number n as the input, determines the number
// of distinct ways Chaos can reach the bowl.

// The minimum amount of stacks is 1 and the maximum is 50.

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

// Time and Space: O(N)
function hoppingChaos(n) {
  if (n === 1) {
    return 1;
  }
  if (n === 2) {
    return 2;
  }

  const dp = new Array(n + 1).fill(0);
  dp[1] = 1;
  dp[2] = 2;

  for (let i = 3; i <= n; i++) {
    dp[i] = dp[i - 1] + dp[i - 2];
  }

  return dp[n];
}

// Space: O(1)
function hoppingChaos(n) {
  if (n === 1) {
    return 1;
  }
  if (n === 2) {
    return 2;
  }

  let prev2 = 1;
  let prev1 = 2;

  for (let i = 3; i <= n; i++) {
    const temp = prev1 + prev2;
    prev2 = prev1;
    prev1 = temp;
  }

  return prev1;
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