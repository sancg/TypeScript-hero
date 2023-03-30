Tags: #idea
Date: [[2023-21-03]], 0134
Related: [[000 - Typescript]], [[Interfaces]]

# Utility types

- Omit, Pick, Partial, Required
  Utility types can be nested as follows:

```typescript
interface FindProduct extends Readonly<Partial<Product>> {}
```

## Partial

Using [[Inheritance - Extends|Extends]] to select and _interface_ makes all properties optional, instead of duplicate de _object type_ and assigning one by one the [[Optional parameters and nullish-coalescing|optional parameter]] '?'.

```typescript
/**
 *  This can be read as:
 *  All properties of Product can be optional (undefined)
 *  on the UpdateProductDTO interface
 */
interface UpdateProductDTO extends Partial<Product> {}
```

## Required

The _Required_ type is the opposite of Partial.

```typescript
/**
 *  It makes all the properties needed for passing through.
 */
interface neededProps extends Required<Product> {}
```

---

## References

- [Video Partial, Required type](https://platzi.com/clases/2879-typescript-tipos-avanzados/47319-partial-required-type/)
- [Typescript DOCS - Utility types](https://www.typescriptlang.org/docs/handbook/utility-types.html)
