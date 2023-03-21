/**
 * Refactoring using Complex structures
 * Methods like CRUD
 * .service <name_convention> relates to the Methods or treatment of Data
 */

import { faker } from '@faker-js/faker';
import {
  CreateProductDTO,
  FindProductDTO,
  UpdateProductDTO,
} from './product.dto';
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
// Refactoring the updateProduct
const updateProduct = (
  id: string | number,
  change: UpdateProductDTO
): Product | string => {
  const index = products.findIndex((item) => item.id === id);
  if (index === -1) return 'Product Not found';
  const prevProduct = products[index];
  products[index] = {
    ...prevProduct,
    ...change,
  };
  console.log(JSON.stringify(products, null, 2));
  return products[index];
};

// Find items within the Product[]
const findProduct = (data: FindProductDTO): Product[] => {
  return [];
};

const deleteProduct = (data: Product) => {
  products.push(data);
};

const inStock = (): number => {
  return products.reduce((prev, current) => prev + current.stock, 0);
};

export { products, addProduct, updateProduct, inStock, findProduct };
