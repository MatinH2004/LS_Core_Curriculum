// You're a clever thief planning a heist in a neighborhood
// where houses are arranged in a line. Each house contains a
// certain amount of valuable loot. However, the houses have a
// unique security system: if two adjacent houses are robbed, it
// triggers a neighborhood-wide alarm.

// Given an array of integers representing the value of loot in
// each house, determine the maximum amount of loot you can
// steal without triggering the alarm system.


// Example 1:
// Input: houses = [3,1,4,1,5]
// Output: 12
// Explanation: Rob house 1 (loot = 3), house 3 (loot = 4), and house 5 (loot = 5).
// Total loot stolen = 3 + 4 + 5 = 12.

// Example 2:
// Input: houses = [6,2,7,9,3,1]
// Output: 16
// Explanation: Rob house 1 (loot = 6), house 3 (loot = 7), and house 5 (loot = 3).
// Total loot stolen = 6 + 7 + 3 = 16.

/*

RECURSIVE DEFINITION:
  - The max amount of money that the robber can take is the greater amount between taking the money
    from house N and robbing all houses from the the first house up to N - 2, or robbing all the houses
    from the first house up to house N - 1

BASE CASE:
  - if there's one house, take the loot from the house
  - if there's two houses, rob the house with the greater loot
  - if there's no houses, return 0



*/

// solution from the first house
function maximizeLoot(houses) {
  const cache = new Map();

  const helper = idx => {
    if (idx >= houses.length) return 0;

    if (!cache.has(idx)) {
      cache.set(idx, Math.max(houses[idx] + helper(idx + 2), helper(idx + 1)));
    }

    return cache.get(idx);
  };

  return helper(0);
}

// solution from the last house
function maximizeLoot(houses) {
  const cache = new Map();

  const helper = idx => {
    if (idx < 0) return 0;

    if (!cache.has(idx)) {
      cache.set(idx, Math.max(houses[idx] + helper(idx - 2), helper(idx - 1)));
    }

    return cache.get(idx);
  }

  return helper(houses.length - 1);
}

// bottom-up solution
function maximizeLoot(houses) {
  if (!houses || houses.length === 0) return 0;
  if (houses.length === 1) return houses[0];

  const dp = Array(houses.length + 1).fill(0);
  dp[1] = houses[0]; 

  for (let i = 2; i <= houses.length; i++) {
    dp[i] = Math.max(dp[i - 1], dp[i - 2] + houses[i - 1])
  }

  return dp[houses.length];
}

// Test cases
console.log(maximizeLoot([3,1,4,1,5]) === 12);
console.log(maximizeLoot([6,2,7,9,3,1]) === 16);
console.log(maximizeLoot([2,1,1,2]) === 4);
console.log(maximizeLoot([1,2,3,1]) === 4);
console.log(maximizeLoot([2,7,9,3,1]) === 12);
console.log(maximizeLoot([1,1,1,1,1,1,1,1,1,1]) === 5);
console.log(maximizeLoot([10,1,1,10]) === 20);
console.log(maximizeLoot([5,3,4,11,2]) === 16);
console.log(maximizeLoot([1]) === 1);
console.log(maximizeLoot([]) === 0);

// All test cases should log true