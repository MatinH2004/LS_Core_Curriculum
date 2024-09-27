function afterNSeconds(callback, seconds) {
  setTimeout(callback, seconds * 1000);
}

afterNSeconds(() => {console.log('hello')}, 2)