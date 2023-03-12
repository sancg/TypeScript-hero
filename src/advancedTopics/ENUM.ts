enum ROLES {
  ADMIN = 'admin',
  MEMBER = 'member',
  GUEST = 'guest',
}

type user = {
  username: string | null;
  role: ROLES; // This inherited the enum capabilities to choose from
};

let userID: user = {
  username: 'Santiago',
  role: ROLES.ADMIN,
};

userID.username = 'Renaming';
console.log(userID);
