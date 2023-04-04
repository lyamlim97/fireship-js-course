const dog = {
  name: "fido",
  age: 4,
  bark() {
    console.log("woof");
  },
};

//const name = dog.name;
//const age = dog.age;

const { name: fullName, age } = dog;

console.log(fullName, age);

const arr = ["foo", "bar", "baz"];

const [a, b, c] = arr;

//const [, , f] = arr;
const f = arr[2];

console.log(a, b, c);
console.log(f);
