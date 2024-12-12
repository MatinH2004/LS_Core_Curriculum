interface Shape {
  color: string;
}

interface Rectangle extends Shape {
  length: number;
  width: number;
}

interface Circle extends Shape {
  radius: number;
}

function displayShapeInfo(shape: Shape): string {
  return `This shape is ${shape.color}`;
}

const rectangle: Rectangle = {
  color: 'Blue',
  length: 10,
  width: 5,
};

const circle: Circle = {
  color: 'Red',
  radius: 20,
}

console.log(displayShapeInfo(rectangle));
console.log(displayShapeInfo(circle));
