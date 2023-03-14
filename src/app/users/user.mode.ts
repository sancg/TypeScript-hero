enum ROLES {
  admin = 'admin',
  seller = 'seller',
  customer = 'customer',
}

interface User {
  id: string | number;
  username: string;
  role: ROLES;
}

export { ROLES, User };
