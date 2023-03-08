# Typescript

[![Typescript](https://img.shields.io/badge/Typescript-Hello%20World-%2333ccff)](https://img.shields.io/badge/Typescript-Hello%20World-%2333ccff)

In this repo you will find step by step learning on typos. As and entry-level learning process.

- Primitive typos:
  - Number, boolean, String, Array
- Special data types:
  - Any, union type, Aliases
  - Null or undefined
  - Functions
  - Return values
  - Objects inside Functions
  - Objects as types ✨
  - Modules 🍃

## Progress

All types must be written on `lowercase` except for `Object interface`.

##### Numbers

Error alerts that could arise when declare numbers or variables unassigned after being used on [[TypeScript]].

```typescript
let productPrice = 100; //Inference type of number
let productStock: number; // Declarative without assigned value

// ❌ Bad practices
console.log(productStock); // Variable should have a value
productStock = productPrice + "It cannot sum"; // Only numbers
```

##### Arrays

[[TypeScript]] can deduce the Array types by passing specific data types.

```typescript
let price = [20, 100, 51]; //This would be a type => number[]
```

##### Any

The Any operator is exclusive of [[TypeScript]].

- Use cases goes from dealing with Unstructured libraries or migrations.
- Convert `Any` into an understanding type with the `as operator`:

```typescript
let foo: any;
foo = [2, 5, 10];

let newArray = foo as number[];
newArray = newArray.filter((item) => item > 3);
console.log({ newArray });
```
