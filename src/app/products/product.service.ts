/**
 * Refactoring using Complex structures
 * Methods like CRUD
 * .service <name_convention> relates to the Methods or treatment of Data
 */

import { faker } from '@faker-js/faker';
import { CreateProductDTO, UpdateProductDTO } from './product.dto';
import { Product } from './product.model';

const products: Product[] = [];

const addProduct = (data: CreateProductDTO) => {
  // Adding Database logic or given values by default
  const newProduct = {
    id: faker.datatype.uuid(),
    createdAt: faker.date.past(),
    updatedAt: new Date(),
    ...data,
  };
  products.push(newProduct);
};

// Boilerplate for CRUD
const updateProduct = (
  id: string | number,
  data: UpdateProductDTO
): Product | undefined => {
  return products.find((prod, rep) => {
    if (prod.id === id) {
      console.log(JSON.stringify(prod, null, 2));
      const productResult = { ...prod, ...data };
      products.splice(rep, 1, productResult);
      console.log(data);
      return productResult;
    }
  });
};

const deleteProduct = (data: Product) => {
  products.push(data);
};

const inStock = (): number => {
  return products.reduce((prev, current) => prev + current.stock, 0);
};

export { products, addProduct, updateProduct, inStock };
