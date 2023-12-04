let display = document.getElementById('display');
let currentInput = '';
let lastOperator = '';
let result = '';

function appendToDisplay(value) {
    currentInput += value;
    display.value = currentInput;
}

function clearDisplay() {
    currentInput = '';
    lastOperator = '';
    display.value = '';
}

function calculateResult() {
    try {
        result = eval(currentInput);
        display.value = result;
        currentInput = result;
    } catch (error) {
        display.value = 'Error';
        currentInput = '';
    }
}
