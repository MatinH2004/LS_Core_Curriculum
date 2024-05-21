const transactions = [ { id: 101, movement: 'in',  quantity:  5 },
                       { id: 105, movement: 'in',  quantity: 10 },
                       { id: 102, movement: 'out', quantity: 17 },
                       { id: 101, movement: 'in',  quantity: 12 },
                       { id: 103, movement: 'out', quantity: 15 },
                       { id: 102, movement: 'out', quantity: 15 },
                       { id: 105, movement: 'in',  quantity: 25 },
                       { id: 101, movement: 'out', quantity: 18 },
                       { id: 102, movement: 'in',  quantity: 22 },
                       { id: 103, movement: 'out', quantity: 15 }, ];

function transactionsFor(itemId, orders) {
  return orders.filter(transaction => transaction.id === itemId);
}

function adjustQuantity(direction, quantity) {
  return direction === 'in' ? quantity : -quantity;
}

function isItemAvailable(itemId, orders) {
  return transactionsFor(itemId, orders).reduce((total, {movement, quantity}) => {
    return total + adjustQuantity(movement, quantity);
  }, 0) > 0;
}

console.log(isItemAvailable(101, transactions));     // false
console.log(isItemAvailable(105, transactions));     // true