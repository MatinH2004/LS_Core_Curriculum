// Implement a function that takes a string as an argument and
// returns a new string that contains the original string in reverse.

function reverse(string) {
  return [...string].reverse().join('');
}

console.log(reverse('hello'));                  // returns "olleh"
console.log(reverse('The quick brown fox'));    // returns "xof nworb kciuq ehT"