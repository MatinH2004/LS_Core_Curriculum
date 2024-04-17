function foo() {
  if (true) {
    function bar() {
      console.log("bar");
    }
  } else {
    function qux() {
      console.log("qux");
    }
  }

  console.log(bar);
  bar();

  console.log(qux);
  qux();
}

foo();