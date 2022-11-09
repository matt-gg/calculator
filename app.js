/*

To-do list:
    1. Round answers so they don't overflow the screen.
    2. Disable decimal if there's already one in the display
    3. Add a backspace button
    4. Add keyboard support
    5. Make it look nice!

*/

let calc = ['', '', ''];
const operatorList = ['+', '-', '*', '/', '^x'];

const screenLast = document.getElementById('screen-last');
const screenCurrent = document.getElementById('screen-current');

const numberButtons = document.querySelectorAll('.number');
const operatorButtons = document.querySelectorAll('.operator');

const deleteButton = document.getElementById('delete');
const clearButton = document.getElementById('clear');
const equalsButton = document.getElementById('equals');


numberButtons.forEach((button) => {
    button.addEventListener('click', () => buttonPress(button.textContent));
});
operatorButtons.forEach((button) => {
    button.addEventListener('click', () => buttonPress(button.textContent));
});

clearButton.addEventListener('click', () => clearProgram());
deleteButton.addEventListener('click', () => console.log("delete"));
equalsButton.addEventListener('click', () => calculation());


function buttonPress(char) {
    if (operatorList.includes(char)) {
        if (calc[1] != '') {
            calculation();
            calc[1] = char;
        } else {
            calc[1] = char;
        }
    } else if (
            typeof Number(char) === 'number' ||
            char === '.') {
        if (calc[1] === '') {
            calc[0] += char;
        } else {
            calc[2] += char;
        }
    }

    lastScreenRefresh();
}

function calculation() {
    if (calc[1] === '/' && calc[2] === '0')
        return console.log(`Hey! Stop trying to divide by 0!`);

    const result = operation(calc[0], calc[1], calc[2])

    if (calc.includes('')) return;
    
    console.log(`Result: ${result}`);

    lastScreenRefresh();
    currentScreenRefresh(result);
    calc = [result, '', ''];
}

function lastScreenRefresh() {
    screenLast.textContent = calc.join('');
}

function currentScreenRefresh(result) {
    screenCurrent.textContent = result;
}

function clearProgram() {
    calc = ['', '', ''];
    lastScreenRefresh();
    currentScreenRefresh();
}

function operation(a, operator, b) {
    a = Number(a);
    b = Number(b);

    switch(operator) {
        case "+":
            return a + b;
            break;
        case "-":
            return a - b;
            break;
        case "*":
            return a * b;
            break;
        case "/":
            return a / b;
            break
        case "^x":
            return Math.pow(a, b);
            break;
    }
}