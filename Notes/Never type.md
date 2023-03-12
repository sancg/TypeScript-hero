Links: [[000 - Typescript]]
#### Never type
It helps to detect functions that never ends (infinite loops) or stops the program execution.
```typescript
const infiniteLoop = () => {
	while(true){
		console.log("Memory leak 😇")
	}
}
```
The returning value for this function would be `the type never`. Other example is when an Error is called and the program stops working.

`Could you think of an example in code?`