Links: [[000 - Typescript]]

# Overload Functions

It cannot be implemented on arrow functions, whereas declaring a function or OOP it will work.

```typescript
/*
	Input: 
		Convert a string => string[] | San => ["S", "a", "n"]
		Convert a string[] => string | ["S", "a", "n"] => San
	Output:
*/

function parseStr(input: string | string[]): string | string[] {
  if (Array.isArray(input)) {
    return input.join();
  } else {
    return input.split("");
  }
}
```

In this example, you expect that the returning value is string or array. However, if you know exactly that the value will be an array the code won't give you support functionality as always.

> Further details on this error on `overload.ts`

#### Solution

To grant support functionality on returning values, you must create an overload as follows:

```typescript
function parseStr(input: string): string[];
function parseStr(input: string[]): string;

function parseStr() {
  // Previous defined function
}
```
