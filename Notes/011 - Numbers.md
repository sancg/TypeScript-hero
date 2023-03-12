Link: [[000 - Typescript]]

# Numbers

Error alerts that could arise when declare numbers or variables unassigned after being used.

```typescript
let productPrice = 100; //Inference type of number
let productStock: number; // Declarative without assigned value

// ❌ Bad practices
console.log(productStock); // Variable should have a value
productStock = productPrice + "It cannot sum"; // Only numbers
```
