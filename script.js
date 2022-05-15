const inputDisplay = document.getElementById('user-input-display');
const storedInput = document.getElementById('stored-user-input');
const numberButtons = document.querySelectorAll('.number');

console.log(inputDisplay);
console.log(storedInput);
console.log(numberButtons);


function btnListener() {
    numberButtons.forEach(btn => {
        btn.addEventListener('click', (e) => {
        updateDisplay(e);
        })
    })
};

/*---updates display to add number that was clicked. If it is the first one will update the 0 to new number---*/
function updateDisplay(e) {
    if (display === 0) {
        display = e.target.innerText;
    } else {
    display = display + e.target.innerText;
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

btnListener();
currentInputDisplay();
currentStoredInputDisplay();