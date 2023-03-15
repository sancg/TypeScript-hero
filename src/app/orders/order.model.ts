import { BaseModel } from '../model/baseModel.model';
import { Product } from '../products/product.model';
import { User } from '../users/user.mode';

export interface Order extends BaseModel {
  products: Product;
  user: User;
}
