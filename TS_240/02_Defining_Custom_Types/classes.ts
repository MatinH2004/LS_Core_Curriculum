interface Movable {
  speed: number;
  move(): void;
}

class Car implements Movable {
  speed: number;

  constructor(speed: number) {
    this.speed = speed;
  }

  move() {
    console.log(`Moving at ${this.speed} km/h!`);
  }
}