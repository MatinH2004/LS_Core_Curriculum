interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
}

const products: Product[] = [
  {
    // Let's just simply assume product id is same as the index of the product in the products array
    id: 0,
    name: "Sample Product",
    price: 49.99,
    description: "A sample product for demonstration",
  },
];

// This type helps us define which fields of a Product are updatable
// by omitting the 'id' field and checks nullable
type UpdateableProductFields = {
  [K in keyof Omit<Product, "id">]?: Product[K];
};

function updateProduct(
  productId: number,
  updatedValues: UpdateableProductFields
): void {
  // Your implementation here:
  // Find product to update by productId
  // If found, apply partial update with using object spreading
  // Else log out "Product not found"
  const product = products.find(product => productId === product.id);

  if (product) {
    products[product.id] = {
      ...product,
      ...updatedValues,
    };
  } else {
    console.log('Product not found!');
  }
}

updateProduct(0, {
  name: "Updated Product Name",
  price: 99.99,
});