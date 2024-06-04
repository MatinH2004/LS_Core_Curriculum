function isBlockWord(word) {
  const BLOCKS = ['BObo', 'XKxk', 'DQdq', 'CPcp', 'NAna', 'GTgt', 'REre', 'FSfs', 'JWjw', 'HUhu', 'VIvi', 'LYly', 'ZMzm'];

  const letters = word.split('');
  for (let i = 0; i < letters.length; i++) {
    let matchingBlock = BLOCKS.filter(block => block.includes(letters[i]))[0];

    if (matchingBlock === undefined) {
      return false;
    } else {
      BLOCKS.splice(BLOCKS.indexOf(matchingBlock), 1);
    }
  }
  
  return true;
}

console.log(isBlockWord('BATCH'));      // true
console.log(isBlockWord('BUTCH'));      // false
console.log(isBlockWord('jest'));       // true