function pureFun(a, b) {
    return a + b;
}

let b = 3;
function impureFun(a) {
    return a + b;
}

function outer() {
    let x = 1;
    function inner() {
        x = x + 1;
    }
    return inner;
}

const incrementX = outer();
incrementX();
incrementX();
