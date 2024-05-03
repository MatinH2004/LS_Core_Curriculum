const isPalindrome = str => {
  return str.slice().split('').reverse().join('') === str;
}

// console.log(isPalindrome('madam'));               // true
// console.log(isPalindrome('Madam'));               // false (case matters)
// console.log(isPalindrome("madam i'm adam"));      // false (all characters matter)
// console.log(isPalindrome('356653'));              // true

const isRealPalindrome = str => {
  str = str.toLowerCase();
  let letters = [...str].filter(char => /[a-z]/i.test(char));
  return letters.join('') === letters.reverse().join('');
}

// console.log(isRealPalindrome('madam'));               // true
// console.log(isRealPalindrome('Madam'));               // true (case does not matter)
// console.log(isRealPalindrome("Madam, I'm Adam"));     // true (only alphanumerics matter)
// console.log(isRealPalindrome('356653'));              // true
// console.log(isRealPalindrome('356a653'));             // true
// console.log(isRealPalindrome('123ab321'));            // false

const isPalindromicNumber = num => {
  let nums = String(num).split('');
  return nums.join('') === nums.slice().reverse().join('')
}

console.log(isPalindromicNumber(34543));        // true
console.log(isPalindromicNumber(123210));       // false
console.log(isPalindromicNumber(22));           // true
console.log(isPalindromicNumber(5));            // true