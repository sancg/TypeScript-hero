import { products, addProduct, inStock } from './product.service';

addProduct({
  name: 'Prod1',
  createdAt: new Date(),
  stock: 5,
});

addProduct({
  name: 'Prod2',
  createdAt: new Date(),
  stock: 1,
});

addProduct({
  name: 'Prod3',
  createdAt: new Date(),
  stock: 6,
});

console.log(products);
const total = inStock();
console.log(total);
