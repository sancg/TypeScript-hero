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

type UpdateProd = {
  title: string;
  description: string;
};
// Boilerplate for CRUD
export const updateProduct = (id: string | number, data: UpdateProd) => {
  products.find((prod, rep) => {
    if (prod.id === id) {
      const { title, description } = data;
      console.log(JSON.stringify(prod, null, 2));
      const upProd = { ...prod };
      upProd.title = title;
      upProd.description = description;

      products.splice(rep, 1, upProd);
      console.log(data);
      return;
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
