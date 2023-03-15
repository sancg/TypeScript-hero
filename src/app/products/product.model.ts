/* Refactoring using Complex structures */

import { Category } from '../categories/category.model';
import { BaseModel } from '../model/baseModel.model';

// All related to type definitions
type Size = 'S' | 'M' | 'L' | 'XL';
interface Product extends BaseModel {
  title: string;
  description: string;
  stock: number;
  color: string;
  price: number;
  category?: Category;
  isNew?: boolean;
  size?: Size;
}

export { Size, Product };
