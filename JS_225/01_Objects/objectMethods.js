let me = {
  firstName: 'Matin',
  lastName: 'HP',
};

// let me = {};
// me.firstName = 'Matin';
// me.lastName = 'HP';

// function fullName(person) {
//   console.log(person.firstName + ' ' + person.lastName);
// }

let friend = {
  firstName: 'Eric',
  lastName: 'Bullington',
};

// fullName(friend);

let mother = {
  firstName: 'Amber',
  lastName: 'Doe',
};

let father = {
  firstName: 'Shane',
  lastName: 'Doe',
};

// fullName(mother); // => Amber Doe
// fullName(father); // => Shane Doe

// let people = [];

// people.push(me);
// people.push(friend);
// people.push(mother);
// people.push(father);

// First go:

// function rollCall(collection) {
//   let length;
//   let i;
//   for (i = 0, length = collection.length; i < length; i += 1) {
//     fullName(collection[i]);
//   }
// }

// rollCall(people);

// Second go:

// function rollCall(collection) {
//   collection.forEach(function(item) {
//     fullName(item);
//   });
// }

// rollCall(people);

// Third go:

// function rollCall(collection) {
//   collection.forEach(fullName);
// }

// rollCall(people);

let people = {
  collection: [me, friend, mother, father],
  fullName(person) {
    console.log(person.firstName + ' ' + person.lastName);
  },

  rollCall() {
    this.collection.forEach(this.fullName);
  },

  add(person) {
    this.collection.push(person);
  },

  getIndex(person) {
    let index = -1;
    this.collection.forEach((comparator, i) => {
      if (comparator.firstName === person.firstName &&
          comparator.lastName === person.lastName) {
        index = i;
      }
    });

    return index;
  },

  remove(person) {
    let index = this.getIndex(person);
    if (this.isInvalidPerson(person)) {
      return;
    } 

    if (index === -1) {
      return;
    }

    this.collection.splice(index, 1);
  },

  add(person) {
    if (this.isInvalidPerson(person)) {
      return;
    }

    this.collection.push(person);
  },

  get(person) {
    if (this.isInvalidPerson(person)) {
      return;
    }

    return this.collection[this.getIndex(person)];
  },

  update(person) {
    if (this.isInvalidPerson(person)) {
      return;
    }

    let existingPersonId = this.getIndex(person);
    if (existingPersonId === -1) {
      this.add(person);
    } else {
      this.collection[existingPersonId] = person;
    }
  },

  isInvalidPerson(person) {
    return typeof person.firstName === 'string' ||
           typeof person.lastName === 'string';
  },
};

console.log(people.getIndex(friend));
people.remove(friend);
console.log(people.getIndex(friend));
console.log(people.collection);