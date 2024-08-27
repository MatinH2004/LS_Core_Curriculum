let people = {
  collection: [],
  index: 0,

  fullName(person) {
    console.log(person.firstName + ' ' + person.lastName);
  },

  rollCall() {
    this.collection.forEach(person => this.fullName(person));
  },

  add(person) {
    if (this.isInvalidPerson(person, false)) {
      return;
    }

    person.index = ++this.index;
    this.collection.push(person);
  },

  getIndex(person) {
    let index = -1;
    this.collection.forEach((comparator) => {
      if (comparator.firstName === person.firstName &&
          comparator.lastName === person.lastName) {
        index = comparator.index;
      }
    });

    return index;
  },

  remove(person) {
    let index;
    if (this.isInvalidPerson(person)) {
      return;
    }

    index = this.getIndex(person);
    if (index === -1) {
      return;
    }

    this.collection.splice(index, 1);
  },

  isInvalidPerson(person, checkIndex = true) {
    return typeof person.firstName !== 'string' ||
           typeof person.lastName !== 'string' ||
           (checkIndex && typeof person.index !== 'number');
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
  }
}

let p1 = { firstName: 'John', lastName: 'Smith' };
let p2 = { firstName: 'Jane', lastName: 'Doe' };

people.add(p1);
people.add(p2);

console.log(people.collection);
people.rollCall();

console.log(people.getIndex(p2));