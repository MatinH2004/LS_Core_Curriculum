type Product = {
  name: string;
  price: number;
};

type Shipping = {
  weight: number;
  shippingCost: number;
};

// using types
type ShippableProduct = Product & Shipping;

const item: ShippableProduct = {
  name: 'Table',
  price: 100,
  weight: 20,
  shippingCost: 30,
};

// using interfaces
interface ShippableProduct extends Product, Shipping {};