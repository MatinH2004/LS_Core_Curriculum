/*
Start time:

---------- PROBLEM ----------
INPUT:
  - string representing a message and an integer representing the right-shift factor
OUTPUT:
  - encrypted string

EXAMPLES:

----------- RULES -----------
  - given the shift factor, shift the letters by n places
  - shift both uppercase and lowercase letters
  - leave non alphabetic letters as is
  - if the shift factor is greater than the message length
    - wrap the letters from beginning

------- DATA STRUCTURE ------
  - can achieve result without arrays or obj

--------- SCRATCH PAD -------
  - Functions to keep in mind:
    - String.fromCharCode()
    - 'a'.charCodeAt()

---------- ALGORITHM --------
  - split message into chars
  - iterate over the array of chars
    - If the character is a letter in the alphabet, check if it's upper or lower case, "encrypt" it accordingly, and then append it to ciphertext.
      - Locate the current letter in the alphabet to get its position.
      - Step key times from this position to the right.
      - If a step goes beyond the last letter in the alphabet, add another "alphabet link".
      - After the last step, append the new letter to ciphertext.
    - If the character is not in the alphabet, append it as-is to ciphertext.
  - return string

*/
// const range = {
//   lowerMin: 97,
//   lowerMax: 122,
//   upperMin: 65,
//   upperMax: 90,
// }

function caesarEncrypt(message, key) {
  const upperAlphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const lowerAlphabet = 'abcdefghijklmnopqrstuvwxyz';
  let result = '';

  message.split('').forEach(char => {
    if (/[A-Z]/.test(char)) {
      result += encrypt(char, key, upperAlphabet);
    } else if (/[a-z]/.test(char)) {
      result += encrypt(char, key, lowerAlphabet);
    } else {
      result += char;
    }
  });

  return result;
}

function encrypt(letter, key, alphabet) {
  const position = alphabet.indexOf(letter);

  for (let step = 1; step <= key; step += 1) {
    if (!alphabet[position + step]) {
      alphabet += alphabet;
    }

    letter = alphabet[position + step];
  }

  return letter;
}

// simple shift
console.log(caesarEncrypt('A', 0));       // "A"
console.log(caesarEncrypt('A', 3));       // "D"

// wrap around
console.log(caesarEncrypt('y', 5));       // "d"
console.log(caesarEncrypt('a', 47));      // "v"

// all letters
console.log(caesarEncrypt('ABCDEFGHIJKLMNOPQRSTUVWXYZ', 25));
// "ZABCDEFGHIJKLMNOPQRSTUVWXY"
console.log(caesarEncrypt('The quick brown fox jumps over the lazy dog!', 5));
// "Ymj vznhp gwtbs ktc ozrux tajw ymj qfed itl!"

// many non-letters
console.log(caesarEncrypt('There are, as you can see, many punctuations. Right?; Wrong?', 2));
// "Vjgtg ctg, cu aqw ecp ugg, ocpa rwpevwcvkqpu. Tkijv?; Ytqpi?"