import { BaseModel } from '../model/baseModel.model';

enum ROLES {
  admin = 'admin',
  seller = 'seller',
  customer = 'customer',
}

interface User extends BaseModel {
  username: string;
  password: string;
  role: ROLES;
}

export { ROLES, User };
