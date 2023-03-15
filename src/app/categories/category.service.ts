import { Category } from './category.model';

export const category: Category[] = [];

export const addCategory = (data: Category) => {
  category.push(data);
};
