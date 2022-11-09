const numberButtons = document.querySelectorAll('.number');
const operatorButtons = document.querySelectorAll('.operator');

const piButton = document.getElementById('pi');
const percentageButton = document.getElementById('percentage');

const deleteButton = document.getElementById('delete');
const clearButton = document.getElementById('clear');
const equalsButton = document.getElementById('equals');

numberButtons.forEach((button) => {
    button.addEventListener('click', () => console.log(button.textContent));
});
operatorButtons.forEach((button) => {
    button.addEventListener('click', () => console.log(button.textContent));
});

piButton.addEventListener('click', () => console.log("pi"));
percentageButton.addEventListener('click', () =>  console.log("%"));

deleteButton.addEventListener('click', () =>  console.log("del"));
clearButton.addEventListener('click', () =>  console.log("clear"));
equalsButton.addEventListener('click', () =>  console.log("equals"));



function operation(operator, a, b) {
    a = Number(a);
    b = Number(b);

    switch(operator) {
        case "+":
            break;
        case "-":
            break;
        case "*":
            break;
        case "/":
            break
        case "mod":
            break;
        case "root":
            break;
        case "^x:":
            break;
    }
}

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
