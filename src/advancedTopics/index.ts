import { parseStr } from './overload';

console.log(parseStr);

// Overload function ✅
const is_arr = parseStr('Overpower');
let overload = is_arr.map((item) => item.concat('🌱'));

console.log(overload);
