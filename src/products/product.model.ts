// All related to type definitions
export type Size = 'S' | 'M' | 'L' | 'XL';
export type Product = {
  name: string;
  createdAt: Date;
  stock: number;
  size?: Size;
};
