// let scissors = {
//   id: 0,
//   name: 'Scissors',
//   stock: 8,
//   price: 10,

//   describe() {
//     console.log('Name: ' + product.name);
//     console.log('ID: ' + product.id);
//     console.log('Price: $' + product.price);
//     console.log('Stock: ' + product.stock);
//   },

//   setPrice(newPrice) {
//     if (newPrice >= 0) {
//       this.price = newPrice;
//     } else {
//       alert('Invalid price!');
//     }
//   },
// }

// let drill = {
//   id: 1,
//   name: 'Cordless Drill',
//   stock: 15,
//   price: 45,

//   describe() {
//     console.log('Name: ' + product.name);
//     console.log('ID: ' + product.id);
//     console.log('Price: $' + product.price);
//     console.log('Stock: ' + product.stock);
//   },

//   setPrice(newPrice) {
//     if (newPrice >= 0) {
//       this.price = newPrice;
//     } else {
//       alert('Invalid price!');
//     }
//   },
// }

const createProduct = (id, name, stock, price) => {
  return {
    id,
    name,
    stock,
    price,

    describe() {
      console.log('Name: ' + product.name);
      console.log('ID: ' + product.id);
      console.log('Price: $' + product.price);
      console.log('Stock: ' + product.stock);
    },
  
    setPrice(newPrice) {
      if (newPrice >= 0) {
        this.price = newPrice;
      } else {
        alert('Invalid price!');
      }
    },
  };
};

let scissors = createProduct(0, 'Scissors', 10, 8);
let drill = createProduct(1, 'Cordless Drill', 15, 45);
let saw = createProduct(2, 'Circular Saw', 12, 95);
let hammer = createProduct(3, 'Sledge Hammer', 78, 45);
let boxCutter = createProduct(4, 'Box Cutter', 41, 15);

// [scissors].forEach(console.log)
console.log(hammer);