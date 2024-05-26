function letterCaseCount(str) {
  const counter = {
    lowercase: 0,
    uppercase: 0,
    neither: 0,
  }

  str.split('').forEach(char => {
    if (/[a-z]/.test(char)) counter.lowercase += 1;
    if (/[A-Z]/.test(char)) counter.uppercase += 1;
    if (/[^a-zA-Z]/.test(char)) counter.neither += 1;
  });

  return counter;
}

// LS Solution
function letterCaseCount(string) {
  const lowerArray = string.match(/[a-z]/g) || [];
  const upperArray = string.match(/[A-Z]/g) || [];
  const neitherArray = string.match(/[^a-z]/gi) || [];

  return {
    lowercase: lowerArray.length,
    uppercase: upperArray.length,
    neither: neitherArray.length,
  };
}

// refactored
function letterCaseCount(str) {

  return {
    lowercase: (str.match(/[a-z]/g) || []).length,
    uppercase: (str.match(/[A-Z]/g) || []).length,
    neither: (str.match(/[^a-z]/gi) || []).length
  }
}

console.log(letterCaseCount('abCdef 123'));  // { lowercase: 5, uppercase: 1, neither: 4 }
console.log(letterCaseCount('AbCd +Ef'));    // { lowercase: 3, uppercase: 3, neither: 2 }
console.log(letterCaseCount('123'));         // { lowercase: 0, uppercase: 0, neither: 3 }
console.log(letterCaseCount(''));            // { lowercase: 0, uppercase: 0, neither: 0 }