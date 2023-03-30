Links: [[000 - Typescript]], [[023 - Functions]]

# Optional parameters

All optional parameters goes at the end of the FN definition.

```typescript
const createProduct = (
  id: string | number,
  name: string,
  stock?: number // Optional parameter ? <----
) => {
  return {
    id,
    name,
    stock,
  };
};

console.log(createProduct(1, "t-shirt"));
```

#### Nullish-coalescing

Is a conditional value in case no argument had been passed to the FN.

```typescript
const createProduct = (
  id: string | number,
  name: string,
  stock?: number // Optional parameter ? <----
) => {
  return {
    id,
    name,
    stock: stock || 10, // Another option is ??
  };
};
```

`What's the difference between "|| and ??" w/ use cases?`
