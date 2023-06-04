function add(x, y) {
    return x + y;
}

function subtract(x, y) {
    return x - y;
}

function multiply(x, y) {
    return x * y;
}

function divide(x, y) {
    if (y == 0) return "ERROR. Division by 0";
    return x / y;
}

function operate(number1, number2, operator) {
    switch (operator) {
        case "+":
            return add(number1, number2);
        case "-":
            return subtract(number1, number2);
        case "*":
            return multiply(number1, number2);
        case "/":
            return divide(number1, number2);
        default:
            break;
    }
}

// Function to append the clicked value to the display
function appendToDisplay(value) {
    display.textContent += value;
}

// Function to clear the display
function clearDisplay() {
    display.textContent = '';
}

// Function to change the sign of the displayed value
function changeSign() {
    const currentValue = parseFloat(display.textContent);
    display.textContent = (-currentValue).toString();
}

// Function to calculate the percentage of the displayed value
function calculatePercent() {
    const currentValue = parseFloat(display.textContent);
    display.textContent = (currentValue / 100).toString();
}

// Get the display element
const display = document.getElementById('display');

// Add animation on clickss
const buttons = Array.from(document.querySelectorAll("button"));
buttons.forEach(button => {
    button.addEventListener("mousedown", () => {
        button.classList.add("clicked");
    });
    button.addEventListener("mouseup", () => {
        button.classList.remove("clicked");
    });
})

// Get all the operands
const operands = Array.from(document.getElementsByClassName("operand"));
console.table(operands);
// Add event listeners to each operand
operands.forEach(operand => {
    operand.addEventListener('click', () => {
        appendToDisplay(operand.value);
    });
});