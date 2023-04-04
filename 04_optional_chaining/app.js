const obj = undefined;

console.log(obj?.hello);

const arr = [1, 2, 3];

console.log(arr?.[0]);

function foo(a, b) {}

console.log(foo?.(1, 2));
