function debugIt() {
  const status = 'debugging';
  function logger() {
    console.log(status);
  }

  logger();
}

debugIt();

/*

The debugIt function defines a local variable named status and a function named logger.
logger is an inner (nested) function, so it has access to any variables declared in the
scope of its outer (parent) function, debugIt, due to lexical scoping rules.

*/