/*
Start time:

---------- PROBLEM ----------
INPUT:
  - plaintext (string), and keyword (string)
OUTPUT:
  - ciphertext (string)

EXAMPLES:

plaintext: Pineapples don't go on pizzas!
keyword: meat

Applying the Vigenere Cipher for each alphabetic character:
plaintext : Pine appl esdo ntgo onpi zzas
shift     : meat meat meat meat meat meat
ciphertext: Bmnx mtpe qwdh zxgh arpb ldal

result: Bmnxmtpeqw dhz'x gh ar pbldal!

----------- RULES -----------
  - letters from the plaintext are moved forward based on the letters of the keyword
    - 'A' -> 0
    - 'B' -> 1
    - 'C' -> 2
    - ...
  - the keyword is case insensitive: 'mEaT' === 'meat'
  - the example above implies that we need wrap around the alphabet
  - if the key isn't moved forward if it isn't alphabetic
  - sequentially apply the shift to the letters, using a caesar cipher
    - Looking at the example above, we can see that each shift value is used one at a time,
      repetitively, for all the alphabetic characters in the ciphertext.
    - Similar to how the alphabetic characters wrap around when there is a need to exceed the letter 'z'/'Z',
      the shift value also wraps around for as long as there are plaintext characters to encrypt.

------- DATA STRUCTURE ------
  - array
--------- SCRATCH PAD -------

---------- ALGORITHM --------
  - initialize ciphertext to empty string
  - initialize keyPos to 0
  - capitalize all letters of the keyword input
  - iterate over chars of plaintext
    - check if letter is upper or lower case, encrypt accordingly then append to ciphertext
      - locate the current keyword letter in the alphabet and store its position value in var key
      - locate current plaintext position in the alphabet to get its position
      - step key from its position to the right
      - if step goes beyond the letter of the alphabet, create another alphabet link
      - after that, append the new letter to ciphertext
      - add 1 to keyPos and divide the result by the length of the keyword to get the remainder. Set the value of keyPos to this remainder
    - if letter is not in alphabet, append letter as is
  - return ciphertext
*/

function vigenereCipher(plaintext, keyword) {
  const upperAlphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const lowerAlphabet = 'abcdefghijklmnopqrstuvwxyz';
  let ciphertext = '';
  let keyPos = 0;
  keyword = keyword.toUpperCase();
  let key;

  plaintext.split('').forEach(char => {
    if (char >= 'A' && char <= 'Z') {
      key = upperAlphabet.indexOf(keyword[keyPos]);
      ciphertext += encrypt(char, key, upperAlphabet);
      keyPos = (keyPos + 1) % keyword.length;
    } else if (char >= 'a' && char <= 'z') {
      key = upperAlphabet.indexOf(keyword[keyPos]);
      ciphertext += encrypt(char, key, lowerAlphabet);
      keyPos = (keyPos + 1) % keyword.length;
    } else {
      ciphertext += char;
    }
  });

  return ciphertext;
}

function encrypt(letter, key, alphabet) {
  const letterPos = alphabet.indexOf(letter);

  for (let step = 1; step <= key; step += 1) {
    if (!alphabet[letterPos + step]) {
      alphabet += alphabet;
    }

    letter = alphabet[letterPos + step];
  }

  return letter;
}

console.log(vigenereCipher("Pineapples don't go on pizzas!", "meat"));
// Bmnxmtpeqw dhz'x gh ar pbldal!

console.log(vigenereCipher("Pineapples don't go on pizzas!", "A"));
// Pineapples don't go on pizzas!

console.log(vigenereCipher("Pineapples don't go on pizzas!", "Aa"));
// Pineapples don't go on pizzas!

console.log(vigenereCipher("Pineapples don't go on pizzas!", "cab"));
// Riogaqrlfu dpp't hq oo riabat!

console.log(vigenereCipher("Dog", "Rabbit"));
// Uoh
