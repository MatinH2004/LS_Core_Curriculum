var numStrings = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine']
var regex = new RegExp(`(${numStrings.join('|')})`, 'ig')
// same as: /zero|one|two|three|four|five|six|seven|eight|nine/ig

function wordToDigit(str) {
  return str.replace(regex, (match => numStrings.indexOf(match)));
}

/*

Replace:
  - for every match String.prototype.replace() finds, it calls the anonymous function
    argument provided to replace().

  - In this case, the for every word digit found, the function replaces the match
    with its index value from the array.

  - Note: the anonymous function is called for every match found by replace().
  
*/

console.log(wordToDigit('Please call me at five five five one two three four. Thanks.'));
// "Please call me at 5 5 5 1 2 3 4. Thanks."