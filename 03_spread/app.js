const obj1 = {
  first: "a",
  second: "b",
  third: "c",
};

const obj2 = {
  third: "d",
  fourth: "e",
};

//const full = Object.assign({}, obj1, obj2);
const full = { ...obj1, ...obj2 };

console.log(full);

const obj3 = {
  ...obj1,
  third: "d",
  fourth: "e",
};

console.log(obj3);

const obj4 = {
  third: "d",
  fourth: "e",
  ...obj1,
};

console.log(obj4);
