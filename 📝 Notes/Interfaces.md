Links: [[000 - Typescript]]

#### Interfaces

```typescript
type Sizes = "S" | "M" | "L" | "XL";
type Product = {
  id: string | number;
  title: string;
  size?: Sizes;
};
```

Previously, you used the keyword `type` as a way to describe a set of types with a correspondent name.

`Interface` Acts similarly to `type` w/ some tweaks:

- An interface needs a body or more complex types | No one-lines.
- ==Interface can be extended.==

```typescript
interface Product {
  id: string | number;
  title: string;
  size?: Sizes;
}
```

### Best practices

If and interface required nested type-structures, it would had an athomic pattern, separeting each type according to its utility.

```typescript
/* You have a Product interface, but you want to introduce a category type*/
interface Product {
  id: string | number;
  title: string;
  size?: Sizes;
  // ❌ It has its own set of types, thus its better to separete the logic.
  category: {
    id: string | number;
    name: string;
  };
}

// ✅ Good practice agter refactoring
interface Category {
  id: string | number;
  name: string;
}

interface Product {
  category: Category;
}
```
