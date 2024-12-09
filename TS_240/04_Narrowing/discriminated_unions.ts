type Animal = 
  | {
      species: 'dog';
      name: string;
      age: number;
    }
  | {
      species: 'bird';
      name: string;
      wingspan: number;
    };

function describeAnimal(animal: Animal): string {
  switch (animal.species) {
    case 'dog':
      return `${animal.name} is a ${animal.age} year(s) old dog.`;
    case 'bird':
      return `${animal.name} is a bird with ${animal.wingspan} cm wingspan.`;
    default:
      throw new Error('Unknown animal species.');
  }
}