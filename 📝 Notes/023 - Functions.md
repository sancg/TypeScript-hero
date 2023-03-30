Links: [[000 - Typescript]]

# Functions

It defines the arguments and its respective types. These args must be passed just as its definition. IE:

```Typescript
type Size = 'S' | 'M' | 'L' | 'XL';

function createProductToJSON(
    title: string,
    createdAt: Date,
    size: Size,
    stock?: number // What the sign '?' means?
) {
    return { title, createdAt, size, stock };
}

// ❌ This would throw an Error due to the last argument passed
// Because it is expecting to be Size: type
const product = createProductToJSON('P1', new Date(), '')
```
