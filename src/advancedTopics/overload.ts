/*
	Input: 
		Convert a string => string[] | San => ["S", "a", "n"]
		Convert a string[] => string | ["S", "a", "n"] => San
	Output:
*/

/* Grant typing on overload function */
function parseStr(input: string): string[];
function parseStr(input: string[]): string;
/* -------------------------------- */

function parseStr(input: string | string[]): string | string[] {
  if (Array.isArray(input)) {
    return input.join('');
  } else {
    return input.split('');
  }
}

const arr = parseStr('Santi');
const str = parseStr(['S', 'a', 'n', 't', 'i']);

/**
 * Method without the Overload (Precise definition on returning values)
 *  Typescript deduces the returning values
 *  But it cannot give support to the corresponding methods
 *  A no ser que, you specified how to treat the result.
 */
// arr.map(); ----> This would give an error.
let countA: string[] = [];
if (Array.isArray(arr)) countA = arr.filter((item) => item == 'a');
console.log({ arr, str });
console.log(countA);

export { parseStr };
