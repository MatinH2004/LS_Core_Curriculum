// You are given a string `s` consisting of lowercase English letters.
// Your task is to find all possible ways to partition the string such
// that each substring in the partition is a palindrome.

// A palindrome is a string that reads the same backward as forward.
// Return all possible palindrome partitionings of the string `s`.

// Example 1:
// Input: s = "x"
// Output: [["x"]]
// Explanation: A single character is always a palindrome.

// Example 2:
// Input: s = "abba"
// Output: [["a","b","b","a"], ["a","bb","a"], ["abba"]]
// Explanation:
// The string can be partitioned as ["a","b","b","a"] where each
// character is treated as a palindrome.
// It can be partitioned as ["a","bb","a"] where "a" and "bb" are palindromes.
// The entire string "abba" is also a palindrome, so ["abba"] is valid.

const isPalindrome = str => str === str.split('').reverse().join('');

function allPalindromePartitions(str) {
  function backtrack(str, candidate, result, position) {
    if (position === str.length) {
      result.push([...candidate]);
      return;
    }

    for (let idx = position; idx < str.length; idx++) {
      let substring = str.substring(position, idx + 1);
      if (isPalindrome(substring)) {
        candidate.push(substring);
        backtrack(str, candidate, result, idx + 1);
        candidate.pop();
      }
    }
  }

  const result = [];
  const candidate = [];
  backtrack(str, candidate, result, 0);
  return result;
}

function testPartitionWithPalindromes(s, expected) {
    const result = allPalindromePartitions(s);
    if (result.length !== expected.length) return false;

    const stringifyPartition = partition => partition.map(subset => subset.join(',')).sort().join('|');
    const resultSet = new Set(stringifyPartition(result));
    const expectedSet = new Set(stringifyPartition(expected));

    return resultSet.size === expectedSet.size &&
           [...resultSet].every(item => expectedSet.has(item));
}

// Test cases
console.log(
  testPartitionWithPalindromes('aab', [
    ['a', 'a', 'b'],
    ['aa', 'b'],
  ])
);

console.log(
  testPartitionWithPalindromes('aabaa', [
    ['a', 'a', 'b', 'a', 'a'],
    ['a', 'a', 'b', 'aa'],
    ['a', 'aba', 'a'],
    ['aa', 'b', 'a', 'a'],
    ['aa', 'b', 'aa'],
    ['aabaa'],
  ])
);

console.log(
  testPartitionWithPalindromes('abcba', [
    ['a', 'b', 'c', 'b', 'a'],
    ['a', 'bcb', 'a'],
    ['abcba'],
  ])
);

console.log(
  testPartitionWithPalindromes('racecar', [
    ['r', 'a', 'c', 'e', 'c', 'a', 'r'],
    ['r', 'a', 'cec', 'a', 'r'],
    ['r', 'aceca', 'r'],
    ['racecar'],
  ])
);

console.log(
  testPartitionWithPalindromes('abcdefgfedcba', [
    ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'f', 'e', 'd', 'c', 'b', 'a'],
    ['a', 'b', 'c', 'd', 'e', 'fgf', 'e', 'd', 'c', 'b', 'a'],
    ['a', 'b', 'c', 'd', 'efgfe', 'd', 'c', 'b', 'a'],
    ['a', 'b', 'c', 'defgfed', 'c', 'b', 'a'],
    ['a', 'b', 'cdefgfedc', 'b', 'a'],
    ['a', 'bcdefgfedcb', 'a'],
    ['abcdefgfedcba'],
  ])
);

console.log(
  testPartitionWithPalindromes('abbaabba', [
    ['a', 'b', 'b', 'a', 'a', 'b', 'b', 'a'],
    ['a', 'b', 'b', 'a', 'a', 'bb', 'a'],
    ['a', 'b', 'b', 'a', 'abba'],
    ['a', 'b', 'b', 'aa', 'b', 'b', 'a'],
    ['a', 'b', 'b', 'aa', 'bb', 'a'],
    ['a', 'b', 'baab', 'b', 'a'],
    ['a', 'bb', 'a', 'a', 'b', 'b', 'a'],
    ['a', 'bb', 'a', 'a', 'bb', 'a'],
    ['a', 'bb', 'a', 'abba'],
    ['a', 'bb', 'aa', 'b', 'b', 'a'],
    ['a', 'bb', 'aa', 'bb', 'a'],
    ['a', 'bbaabb', 'a'],
    ['abba', 'a', 'b', 'b', 'a'],
    ['abba', 'a', 'bb', 'a'],
    ['abba', 'abba'],
    ['abbaabba'],
  ])
);

