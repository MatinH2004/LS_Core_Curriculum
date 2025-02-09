// You are given two strings. Your task is to find the length of
// the longest subsequence that is shared between both strings.

// A subsequence is a sequence that can be derived from another
// sequence by deleting some or no elements without changing the
// order of the remaining elements. For example, "ace" is a
// subsequence of "abcde".

// Implement a function `longestSharedSubsequence` that takes
// two strings as input and returns the length of the longest
// shared subsequence between them.

// Example 1:
// Input: str1 = "abcde", str2 = "ace"
// Output: 3
// Explanation: The longest shared subsequence is "ace" and its length is 3.

// Example 2:
// Input: str1 = "abcbdab", str2 = "bdcaba"
// Output: 4
// Explanation: There are three shared subsequences with length 4.
//              'bcab', 'bcba', and 'bdab'.

// Example 3:
// Input: str1 = "xmjyauz", str2 = "mzjawxu"
// Output: 4
// Explanation: The longest shared subsequence is "mjau".

/*

Algo:
  - init cache to new Map()
  - define helper function which takes length of both strings
    - set key to 'length1,length2'
    - if cache contains the key, return the value
    - if length1 or length2 = 0, return 0
    - init result;
    - if s1 at current char is equal to char at s2
      - set result to 1 + recursive call of lenght1 - 1 and length2 - 2
    - else
      - set result to maximum of rest of s1 or s2
    - set cache with key to result
    - return result
  - call helper function passing in lengths of the input strings

*/

function longestSharedSubsequence(s1, s2) {
  const cache = new Map();

  const helper = (len1, len2) => {
    const key = `${len1},${len2}`;
    
    if (cache.has(key)) return cache.get(key);
    if (len1 === 0 || len2 === 0) return 0;

    let result;
    if (s1[s1.length - len1] === s2[s2.length - len2]) {
      result = 1 + helper(len1 - 1, len2 - 1);
    } else {
      result = Math.max(helper(len1 - 1, len2), helper(len1, len2 - 1));
    }

    cache.set(key, result);
    return result;
  }

  return helper(s1.length, s2.length);
}

// solution using pointers
function longestSharedSubsequence(s1, s2) {
  const cache = new Map();

  const helper = (p1, p2) => {
    const key = `${p1},${p2}`;

    if (cache.has(key)) return cache.get(key);
    if (p1 === s1.length || p2 === s2.length) return 0;

    let result;
    if (s1[p1] === s2[p2]) {
      result = 1 + helper(p1 + 1, p2 + 1);
    } else {
      result = Math.max(helper(p1 + 1, p2), helper(p1, p2 + 1));
    }

    cache.set(key, result);
    return result;
  }

  return helper(0, 0);
}

// bottom-up iterative approach
function longestSharedSubsequence(s1, s2) {
  const rows = s1.length + 1;
  const cols = s2.length + 1;
  const dp = Array(rows).fill().map(() => Array(cols).fill(0));

  for (let row = 1; row < rows; row++) {
    for (let col = 1; col < cols; col++) {
      if (s1[row - 1] === s2[col - 1]) {
        dp[row][col] = 1 + dp[row - 1][col - 1];
      } else {
        dp[row][col] = Math.max(dp[row][col - 1], dp[row - 1][col]);
      }
    }
  }

  console.log(dp)
  return dp[rows - 1][cols - 1];
}

// Test cases
console.log(longestSharedSubsequence("abcde", "ace") === 3);
console.log(longestSharedSubsequence("abcbdab", "bdcaba") === 4);
console.log(longestSharedSubsequence("xmjyauz", "mzjawxu") === 4);
console.log(longestSharedSubsequence("abcdgh", "aedfhr") === 3);
console.log(longestSharedSubsequence("aggtab", "gxtxayb") === 4);
console.log(longestSharedSubsequence("aaaa", "aa") === 2);
console.log(longestSharedSubsequence("aaaa", "bb") === 0);
console.log(longestSharedSubsequence("", "abcd") === 0);
console.log(longestSharedSubsequence("abcd", "") === 0);
console.log(longestSharedSubsequence("", "") === 0);
console.log(longestSharedSubsequence("a", "a") === 1);
console.log(longestSharedSubsequence("zyxwvutsrqp", "abcdefghijklmnop") === 1);
console.log(longestSharedSubsequence("abcabcabc", "acbacbacb") === 6);
console.log(longestSharedSubsequence("aaaaabbbbb", "bbbbbaaaaa") === 5);
console.log(longestSharedSubsequence("abcdabcdabcd", "abcdabcdabcd") === 12);

// All test cases should log true