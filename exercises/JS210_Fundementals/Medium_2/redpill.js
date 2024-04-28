function one() {
  function log(result) {
    console.log(result);
  }

  function anotherOne(...args) {
    let result = '';
    for (let i = 0; i < args.length; i += 1) {
      result += String.fromCharCode(args[i]);
    }

    log(result);
  }

  function anotherAnotherOne() {
    console.log(String.fromCharCode(87, 101, 108, 99, 111, 109, 101));
    anotherOne(116, 111);
  }

  anotherAnotherOne();        // Welcome
                              // to
  anotherOne(116, 104, 101);  // the
  return anotherOne;          // Matrix!
}

one()(77, 97, 116, 114, 105, 120, 33);
// the args in the second parentheses are passed to the
// function returned inside the function (line 23)