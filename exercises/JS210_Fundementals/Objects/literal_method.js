const person = {
  firstName() {
    return 'Victor';
  },
  lastName() {
    return 'Reyes';
  },
};

console.log(`${person.firstName} ${person.lastName}`);
// output:

// firstName() {
//   return 'Victor';
// } lastName() {
//   return 'Reyes';
// }

console.log(`${person.firstName()} ${person.lastName()}`);
// output:

// Victor Reyes