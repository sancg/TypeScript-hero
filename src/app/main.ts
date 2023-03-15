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

for (let prod = 0; prod < 10; prod++) {
  addProduct({
    id: prod,
    createdAt: faker.date.past(),
    updatedAt: new Date(),
    title: faker.commerce.productName(),
    description: faker.commerce.productDescription(),
    stock: faker.datatype.number(),
    color: faker.color.human(),
    price: parseFloat(faker.commerce.price(10)),
    category: faker.helpers.arrayElement(category), //category[Math.floor(Math.random() * 4)],
    isNew: faker.datatype.boolean(),
  });
}

console.log(JSON.stringify(category, null, 2));
console.log('\x1b[32m\n' + JSON.stringify(products, null, 2) + '\x1b[0m');
const total = inStock();
console.log(total);

updateProduct(8, {
  title: 'NEW AWESOME PROD',
  description: faker.commerce.productDescription(),
  // stock: faker.datatype.number({ min: 100 }),
  // color: faker.color.human(),
  // price: parseFloat(faker.commerce.price(10)),
  // category: undefined,
  // isNew: false,
});

console.log(JSON.stringify(products, null, 2));
