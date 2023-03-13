/**
 * Refactoring using Complex structures
 * Methods like CRUD
 * .service <name_convention> relates to the Methods or treatment of Data
 */

import { Product } from './product.model';

const products: Product[] = [];
const addProduct = (data: Product) => {
  products.push(data);
};

const inStock = (): number => {
  return products.reduce((prev, current) => prev + current.stock, 0);
};

export { products, addProduct, inStock };
