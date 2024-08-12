// class Smartphone {
//   constructor(brand, model, releaseYear) {
//     this.brand = brand;
//     this.model = model;
//     this.releaseYear = releaseYear;
//   }

//   checkBatteryLevel() {
//     return `${this.brand} ${this.model} has 75% battery remaining.`;
//   }

//   displayInfo() {
//     return `${this.releaseYear} ${this.brand} ${this.model}`;
//   }
// }


function Smartphone(brand, model, releaseYear) {
  this.brand = brand;
  this.model = model;
  this.releaseYear = releaseYear;
}

Smartphone.prototype.checkBatteryLevel = function(){
  return `${this.brand} ${this.model} has 75% battery remaining.`;
}

Smartphone.prototype.displayInfo = function(){
  return `${this.releaseYear} ${this.brand} ${this.model}`;
}

let iphone12 = new Smartphone('Apple', 'iPhone 12', 2020);
let galaxyS21 = new Smartphone('Samsung', 'Galaxy S21', 2021);

console.log(iphone12.checkBatteryLevel());