if (true) {
  // always execute code
}

if (false) {
  // never execute code
}

const x = "";

if (x) {
  console.log("Inside if statement");
}

const val = x || "default";
if (val) {
  console.log("Inside if statement 2");
}

const val2 = x ?? "default";
if (val2) {
  console.log("Inside if statement 3");
}
 