// Math calculations

function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}

function power(x) {
    return Math.pow(x, 2);
}

function factorial(x) {
    if (x === 0) return 1;
    let total = 1;
    for (let i = x; i > 0; i--) {
        total *= i;
    }
    return total;
}

function root(x) {
    return Math.sqrt(x);
}
