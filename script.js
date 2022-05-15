



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