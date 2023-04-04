const arr = [1, 2, 3, 3, 3, 4, 5];
console.log(arr);

const zeros = Array(100).fill(0);
console.log(zeros);

const arr2 = Array(100)
  .fill(0)
  .map((_, i) => i);
console.log(arr2);

const arr3 = [...Array(100).keys()];
console.log(arr3);

const unique = new Set(arr);

const unique1 = [...new Set(arr)];

for (const val of arr) {
  console.log(val);
}

for (const [i, val] of arr.entries()) {
  console.log(i, val);
}
