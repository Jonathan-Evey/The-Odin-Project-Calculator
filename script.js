const inputDisplay = document.getElementById('user-input-display');
const storedInput = document.getElementById('stored-user-input');
const equationOperatorDisplay = document.getElementById('equation-operator-display')
const numberButtons = document.querySelectorAll('.number');
const equationOperatorButtons = document.querySelectorAll('.equation-operator');


function runEquation() {
    document.getElementById('equals').addEventListener('click', () => {
        let num1 = parseInt(display);
        let num2 = parseInt(storedDisplay);
        display = operate(operatorDisplay, num1, num2);          
        storedDisplay = null;
        operatorDisplay = null;
        currentEquationOperatorDisplay();
        currentStoredInputDisplay();
        currentInputDisplay();
    });
}


/*---clear everything and set back to 0---*/
function clearAll() {
    document.getElementById('clear').addEventListener('click', () => {
        display = 0;
        storedDisplay = null;
        operatorDisplay = null;
        currentEquationOperatorDisplay();
        currentStoredInputDisplay();
        currentInputDisplay();
    })
};

/*---deletes the last input from the user---*/
function backSpace() {
    document.getElementById('delete').addEventListener('click', () => {
        deleteLastCharacter(display);
        currentInputDisplay();
    })
};
/*---remove last character from a string---*/
function deleteLastCharacter() {
    display = display.slice(0, -1);
};

/*---update on number button click event---*/
function numberButtonListener() {
    numberButtons.forEach(btn => {
        btn.addEventListener('click', (e) => {
        updateDisplay(e);
        })
    })
};
/*---updates display---*/
function updateDisplay(e) {
    if (display === 0) {
        display = e.target.innerText;
        currentInputDisplay();
    } else {
    display = display + e.target.innerText;
    currentInputDisplay();
    }
};

/*---checks for plus minus multiply or divide clicks by user---*/
function equationOperatorButtonListener() {
    equationOperatorButtons.forEach(btn => {
        btn.addEventListener('click', (e) => {
            updateEquationOperatorDisplay(e);
            updateStoredInputDisplay();
        })
    })
};
/*---updates operator display to show current operation that will be run--*/
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
};
/*---updates uperdisplay to show what user first input---*/
function updateStoredInputDisplay() {
    if (storedDisplay === null) {
        storedDisplay = display;
        display = 0;
        currentEquationOperatorDisplay();
        currentStoredInputDisplay();
        currentInputDisplay();
    }

};

/*---Basic function to evaluate what math function to use---*/
function operate(operatorDisplay, num1, num2){
    if (operatorDisplay === "+") {
        return add(num1, num2);
    };
    if (operatorDisplay === "-") {
        return subtract(num1, num2);
    };
    if (operatorDisplay === "*") {
        return multiply(num1, num2);
    };
    if (operatorDisplay === "/") {
        return divide(num1, num2);
    };
};

/*---returns sums two numbers---*/
function add(num1, num2) {
    return num2 + num1;
};
/*---returns sums of a number minus a number---*/
function subtract(num1, num2) {
    return num2 - num1;
};
/*---returns product of two numbers---*/
function multiply(num1, num2) {
    return num2 * num1;
};
/*---return product of a number divided by a number---*/
function divide(num1, num2) {
    return num2 / num1;
};

let display = 0;
function currentInputDisplay() {
    inputDisplay.innerText = display;
};

let storedDisplay = null;
function currentStoredInputDisplay() {
    storedInput.innerText = storedDisplay;
};

let operatorDisplay = null;
function currentEquationOperatorDisplay() {
    equationOperatorDisplay.innerText = operatorDisplay;
};

numberButtonListener();
equationOperatorButtonListener();
currentInputDisplay();
currentStoredInputDisplay();
currentEquationOperatorDisplay();
clearAll();
backSpace();
runEquation();