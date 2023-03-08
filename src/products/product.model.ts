// All related to type definitions
type Size = 'S' | 'M' | 'L' | 'XL';
type Product = {
  name: string;
  createdAt: Date;
  stock: number;
  size?: Size;
};

export { Size, Product };
