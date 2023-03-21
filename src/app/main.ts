import { faker } from '@faker-js/faker';
import { addCategory, category } from './categories/category.service';
import {
  products,
  addProduct,
  inStock,
  updateProduct,
} from './products/product.service';

for (let index = 0; index < 5; index++) {
  addCategory({
    name: faker.commerce.department(),
    id: faker.datatype.uuid(),
    createdAt: faker.date.past(),
    updatedAt: new Date(),
  });
}

// Creation of random products using Faker.js
for (let prod = 0; prod < 10; prod++) {
  addProduct({
    title: faker.commerce.productName(),
    description: faker.commerce.productDescription(),
    stock: faker.datatype.number(),
    color: faker.color.human(),
    price: parseFloat(faker.commerce.price(10)),
    categoryID: 2,
    category: faker.helpers.arrayElement(category), //category[Math.floor(Math.random() * 4)],
    isNew: faker.datatype.boolean(),
  });
}

console.log(JSON.stringify(category, null, 2));
console.log('\x1b[32m\n' + JSON.stringify(products, null, 2) + '\x1b[0m');

const totalStock = inStock();
console.log({ totalStock });

// Update method;
const indexToUpdate = products[2].id;

const update = updateProduct(indexToUpdate, {
  title: 'NEW AWESOME PROD',
  description: faker.commerce.productDescription(),
  stock: faker.datatype.number({ min: 100 }),
  color: faker.color.human(),
  price: 20,
});

console.log(JSON.stringify(update, null, 2));
console.log(JSON.stringify(products, null, 2));
