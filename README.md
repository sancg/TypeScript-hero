# Typescript

[![Typescript](https://img.shields.io/badge/Typescript-Hello%20World-%2333ccff)](https://img.shields.io/badge/Typescript-Hello%20World-%2333ccff)

In this repo you will find step by step learning on typos. As and entry-level learning process.

## Development

Initializing a project w/ typescript con auto-update and predefined configuration:

```
npx tsc --init --sourceMap --rootDir src --outDir dist
```

Methods to debug and run TS files:

1. Library to transpiled the typescripts files w/ node from Backend development:
   [TS-Node](https://typestrong.org/ts-node/)
2. Run and debug VS-code.
   1. Create a launch.json file → Node.js
   2. Transpiled the TS files (optional: npx tsc --watch)

## Topics covered in this repo 🪲

### Basic

- Primitive typos:
  - Number, boolean, String, Array
- Special data types:
  - Any, union type
  - Aliases | Literal types
  - Null or undefined
  - Functions
  - Return values
  - Objects inside Functions
  - Objects as types
  - Modules

#### Starting point

A used case of typescript:

```typescript
let productPrice = 100; //Inference type of number
let productStock: number; // Declarative without assigned value

// ❌ Bad practices
console.log(productStock); // Variable should have a value
productStock = productPrice + "It cannot sum"; // Only accepts numbers
```

For more in-depth of this topics I will write down each use case on `the notes folder.`

## Feel free to share your knowledged in Typos 🧘🏻‍♂️
