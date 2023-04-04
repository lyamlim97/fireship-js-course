const animal = {
  dna: 123,
  legs: { front: 2, back: 2 },
  sleep() {
    console.log("zzz");
  },
};

const p1 = Object.getPrototypeOf(animal);
console.log(p1);

const p2 = Object.getPrototypeOf(p1);
console.log(p2);

// Make animal1 parent of dog
const animal1 = {
  dna: 123,
};

const dog = {
  bark() {
    console.log("woof");
  },
};

Object.setPrototypeOf(dog, animal);

console.log(dog.dna);
