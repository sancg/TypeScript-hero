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
