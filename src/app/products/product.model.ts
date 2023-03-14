/* Refactoring using Complex structures */
// All related to type definitions
type Size = 'S' | 'M' | 'L' | 'XL';
interface Product {
  name: string;
  createdAt: Date;
  stock: number;
  size?: Size;
}

export { Size, Product };
