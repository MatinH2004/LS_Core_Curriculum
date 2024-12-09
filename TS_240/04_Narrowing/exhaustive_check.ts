type Elephant = {
  kind: "elephant";
  weight: number;
};

type Tiger = {
  kind: "tiger";
  speed: number;
};

type Peacock = {
  kind: "peacock";
  featherLength: number;
};

type Giraffe = {
  kind: "giraffe";
  height: number;
}

type Animal = Elephant | Tiger | Peacock | Giraffe;

function describeAnimal(animal: Animal): string {
  switch(animal.kind) {
    case 'elephant':
      return `An elephant weighs ${animal.weight}.`;
    case 'tiger':
      return `A tiger runs ${animal.speed} km/h fast.`;
    case 'peacock':
      return `A peacock has ${animal.featherLength} cm long feathers.`;
    default:
      const _exhaustiveCheck: never = animal;
      return 'Invalid Animal: ' + JSON.stringify(_exhaustiveCheck);
  }
}