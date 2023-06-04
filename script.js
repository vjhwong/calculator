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

// Get the display element
const display = document.getElementById('display');

// Get all the buttons
const buttons = Array.from(document.querySelectorAll('button'));

// Add event listeners to each button
buttons.forEach(button => {
    button.addEventListener('click', () => {
        const value = button.value;

        // Perform different actions based on the button's value
        switch (value) {
            case 'clear':
                clearDisplay();
                break;
            case 'sign':
                changeSign();
                break;
            case 'percent':
                calculatePercent();
                break;
            case '=':
                calculate();
                break;
            default:
                appendToDisplay(value);
        }
    });
});

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

// Function to evaluate and display the result
function calculate() {
    try {
        const result = eval(display.textContent);
        display.textContent = result.toString();
    } catch (error) {
        display.textContent = 'Error';
    }
}

