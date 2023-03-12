export const createProduct = (
  id: string | number,
  name: string,
  stock?: number // Optional parameter ? <----
) => {
  return {
    id,
    name,
    stock,
  };
};

console.log(createProduct(1, 't-shirt'));
