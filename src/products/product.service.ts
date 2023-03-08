import { Product } from './product.model';

// .service <name_convention> relates to the Methods or treatment of Data
export const products: Product[] = [];
export const addProduct = (data: Product) => {
  products.push(data);
};

export const inStock = (): number => {
  const total = products.reduce((prev, current) => prev + current.stock, 0);
  return total;
};
