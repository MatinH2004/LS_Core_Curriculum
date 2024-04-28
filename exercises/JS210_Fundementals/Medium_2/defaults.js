function processOrder(price, quantity, discount, serviceCharge, tax) {
  if (!quantity) {
    quantity = 1;
  }

  if (!discount) {
    discount = 0;
  }

  if (!serviceCharge) {
    serviceCharge = 0.1;
  }

  if (!tax) {
    tax = 0.15;
  }

  return (price * quantity) * (1 - discount) * (1 + serviceCharge) * (1 + tax);
}

function processOrder(price, quantity, discount, serviceCharge, tax) {
  // if any args are 0, it is treated as falsy below
  quantity = quantity || 1;
  discount = discount || 0;
  serviceCharge = serviceCharge || 0.1;
  tax = tax || 0.15;
  
  return (price * quantity) * (1 - discount) * (1 + serviceCharge) * (1 + tax);
}

console.log(processOrder(100));      // 126.5

// Solution using default args:

function processOrder(price, quantity = 1, discount = 0, serviceCharge = 0.1, tax = 0.15) {
  return price * quantity * (1 - discount) * (1 + serviceCharge) * (1 + tax);
}