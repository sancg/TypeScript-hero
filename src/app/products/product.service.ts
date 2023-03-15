/**
 * Refactoring using Complex structures
 * Methods like CRUD
 * .service <name_convention> relates to the Methods or treatment of Data
 */

import { Product, UpdateProductDTO } from './product.model';

const products: Product[] = [];
const addProduct = (data: Product) => {
  products.push(data);
};

// Boilerplate for CRUD
export const updateProduct = (
  id: string | number,
  data: UpdateProductDTO
): Product => {
  products.find((prod, rep) => {
    if (prod.id === id) {
      console.log(JSON.stringify(prod, null, 2));
      const updateProduct = { ...data, prod };
      products.splice(rep, 1, updateProduct);
      console.log(data);
      return updateProduct;
    }
  });
};

const deleteProduct = (data: Product) => {
  products.push(data);
};

const inStock = (): number => {
  return products.reduce((prev, current) => prev + current.stock, 0);
};

export { products, addProduct, inStock };
