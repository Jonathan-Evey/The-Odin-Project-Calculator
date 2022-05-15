const inputDisplay = document.getElementById('user-input-display');
const storedInput = document.getElementById('stored-user-input');
const equationOperatorDisplay = document.getElementById('equation-operator-display')
const numberButtons = document.querySelectorAll('.number');
const equationOperatorButtons = document.querySelectorAll('.equation-operator');

console.log(equationOperatorButtons);

/*---check for user interaction with number buttons/updates display on click event---*/
function numberButtonListener() {
    numberButtons.forEach(btn => {
        btn.addEventListener('click', (e) => {
        updateDisplay(e);
        })
    })
};

/*---updates display to add number that was clicked. If it is the first one will update the starting 0 to first user input number---*/
function updateDisplay(e) {
    if (display === 0) {
        display = e.target.innerText;
        currentInputDisplay();
    } else {
    display = display + e.target.innerText;
    currentInputDisplay();
    }
}

function equationOperatorButtonListener() {
    equationOperatorButtons.forEach(btn => {
        btn.addEventListener('click', (e) => {
            updateEquationOperatorDisplay(e);
            updateStoredInputDisplay();
            console.log(operatorDisplay);
        })
    })
};

function updateEquationOperatorDisplay(e) {
    if (e.target.innerText == '+') {
        operatorDisplay = '+'; 
    }
    if (e.target.innerText == '-') {
        operatorDisplay = '-'; 
    }
    if (e.target.innerText == 'x') {
        operatorDisplay = '*'; 
    }
    if (e.target.innerText == '/') {
        operatorDisplay = '/'; 
    }
}

function updateStoredInputDisplay() {
    if (storedDisplay === null) {
        storedDisplay = display;
        display = 0;
        currentEquationOperatorDisplay();
        currentStoredInputDisplay();
        currentInputDisplay();
    }

}

/*---Basic function to evaluate what math function to use---*/
function operate(operator, num1, num2){
    if (operator === "plus") {
        return add(num1, num2);
    };
    if (operator === "minus") {
        return subtract(num1, num2);
    };
    if (operator === "times") {
        return multiply(num1, num2);
    };
    if (operator === "divided") {
        return divide(num1, num2);
    };
}

/*---Basic function that returns sums two numbers---*/
function add(num1, num2) {
    return num1 + num2;
}
/*---Basic function that returns sums of a number minus a number---*/
function subtract(num1, num2) {
    return num1 - num2;
}
/*---Basic function that returns product of two numbers---*/
function multiply(num1, num2) {
    return num1 * num2;
}
/*---Basic function that product of a number divided by a number---*/
function divide(num1, num2) {
    return num1 / num2;
}

let display = 0;
function currentInputDisplay() {
    inputDisplay.innerText = display;
}

let storedDisplay = null;
function currentStoredInputDisplay() {
    storedInput.innerText = storedDisplay;
}

let operatorDisplay = null;
function currentEquationOperatorDisplay() {
    equationOperatorDisplay.innerText = operatorDisplay;
}

numberButtonListener();
equationOperatorButtonListener();
currentInputDisplay();
currentStoredInputDisplay();
currentEquationOperatorDisplay();