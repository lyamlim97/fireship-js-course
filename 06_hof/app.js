/*function sayHi(message) {
  return "Said..." + message;
}
*/
const sayHi = function (message) {
  return "Said..." + message;
};

function funWrapper(callback) {
  callback("Called by wrapper");
}

funWrapper((m) => console.log(m));

function funCreator() {
  return function (message) {
    return "Said..." + message;
  };
}

const fn = funCreator();

console.log(fn("hello!"));
