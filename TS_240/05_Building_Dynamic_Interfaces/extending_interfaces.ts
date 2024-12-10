// class Animal {
//   constructor(name) {
//     this.name = name;
//   }

//   makeSound() {
//     return "Generic animal sound";
//   }
// }

// class Dog extends Animal {
//   constructor(name) {
//     super(name);
//   }

//   fetch() {
//     return `${this.name} fetches a stick.`;
//   }
// }

interface Animal {
  name: string;
  makeSound(): string;
}

interface Dog extends Animal {
  fetch(): string;
}

const myDog: Dog = {
  name: 'Rex',
  makeSound: () => 'Woof',
  fetch: () => 'Rex fetches a stick',
}

console.log(myDog.fetch());