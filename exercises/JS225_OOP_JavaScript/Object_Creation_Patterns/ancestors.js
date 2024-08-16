// name property added to make objects easier to identify
const foo = {name: 'foo'};
const bar = Object.create(foo);
bar.name = 'bar';
const baz = Object.create(bar);
baz.name = 'baz';
const qux = Object.create(baz);
qux.name = 'qux';

// Object.prototype.ancestors = function() {
//   let object = this;
//   let result = [];

//   while (Object.getPrototypeOf(object) !== null) {
//     result.push(Object.getPrototypeOf(object)).constructor.name;
//     object = Object.getPrototypeOf(object);
//   }

//   return result;
// }

Object.prototype.ancestors = function() {
  const ancestor = Object.getPrototypeOf(this);

  if (ancestor.hasOwnProperty('name')) {
    return [ancestor.name].concat(ancestor.ancestors());
  }

  return ['Object.prototype'];
}

console.log(qux.ancestors());  // returns ['baz', 'bar', 'foo', 'Object.prototype']
console.log(baz.ancestors());  // returns ['bar', 'foo', 'Object.prototype']
console.log(bar.ancestors());  // returns ['foo', 'Object.prototype']
console.log(foo.ancestors());  // returns ['Object.prototype']