function anagram(word, list) {
  return list.filter(candidate => areAnagrams(candidate, word));
}

function areAnagrams(source, target) {
  let sourceLetters = [...source].sort();
  let targetLetters = [...target].sort();
  return compareArrays(sourceLetters, targetLetters);
}

function compareArrays(array1, array2) {
  if (array1.length !== array2.length) {
    return false;
  }

  return array1.every((elem, idx) => elem === array2[idx]);
}

console.log(anagram('listen', ['enlists', 'google', 'inlets', 'banana']));  // [ "inlets" ]
console.log(anagram('listen', ['enlist', 'google', 'inlets', 'banana']));   // [ "enlist", "inlets" ]