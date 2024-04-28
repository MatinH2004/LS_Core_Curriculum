const languages = ['JavaScript', 'Ruby', 'Python'];
console.log(languages);         // ['JavaScript', 'Ruby', 'Python']
console.log(languages.length);  // 3

languages.length = 4;
console.log(languages);         // ['JavaScript', 'Ruby', 'Python', 1 x empty slot]
console.log(languages.length);  // 4

languages.length = 1;
console.log(languages);         // ['JavaScript']
console.log(languages.length);  // 1

languages.length = 3;
console.log(languages);         // ['JavaScript', 2 x empty slots]
console.log(languages.length);  // 3

languages.length = 1;
languages[2] = 'Python';
console.log(languages);         // ['JavaScript', 1 empty slot, 'Python']
console.log(languages[1]);      // undefined
console.log(languages.length);  // 3

console.log(Object.keys(languages)); // Object.keys does not include empty slots in array

// Arrays with 'empty slots' are sometimes referred to as 'sparse arrays'.
// You may see them represented in a variety of different ways.

// const sparseArray = [, , 'a', , 'b'];
// console.log(sparseArray);

// // logs
// [<2 empty items>, 'a', <1 empty item>, 'b']    Node REPL v8.8.1
// [ , , 'a', , 'b']                              older version of Node
// [empty × 2, "a", empty, "b"]                   Chrome Console v62
// [undefined × 2, "a", undefined × 1, "b"]       older version of Chrome
// [<2 empty slots>, "a", <1 empty slot>, "b"]    Firefox 57.0
