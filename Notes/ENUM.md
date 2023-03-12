Links: [[000 - Typescript]]
Works similarly to ==types==, but except for narrowing down the available selection.
```typescript
enum ROLES {
 ADMIN = "admin",
 MEMBER = "member",
 GUEST = "guest",
}

type user = {
  username: string | null,
  role: ROLES // This inherited the enum capabilities to choose from
}

let userID: user = {
 username: 'Santiago',
 role: ROLES.ADMIN,
};
console.log(userID)
```