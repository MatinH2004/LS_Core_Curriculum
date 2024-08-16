function delegate(context, methodName, ...args) {
  return () => context[methodName].apply(context, args);
}

// apply is unecessary
function delegate(context, methodName, ...args) {
  return function() {
    return context[methodName](...args);
  }
}

const foo = {
  name: 'test',
  bar(greeting) {
    console.log(`${greeting} ${this.name}`);
  },
};

const baz = {
  qux: delegate(foo, 'bar', 'hello'),
};

baz.qux();   // logs 'hello test';

foo.bar = () => { console.log('changed'); };

baz.qux();          // logs 'changed'