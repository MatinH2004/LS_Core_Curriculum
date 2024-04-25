function stringy(int) {
  let str = '';
  for (let i = 0; i < int; i += 1) {
    i % 2 === 0 ? str += '1' : str += '0';
  }
  console.log(str);
  return str;
}

stringy(6);    // "101010"
stringy(9);    // "101010101"
stringy(4);    // "1010"
stringy(7);    // "1010101"