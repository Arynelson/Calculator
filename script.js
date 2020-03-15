// script.js
const display = document.getElementById('display');
let currentInput = '';
let previousInput = '';
let operator = '';

document.querySelectorAll('.btn').forEach(button => {
    button.addEventListener('click', () => {
        const action = button.dataset.action;
        const value = button.textContent;

        if (!action) {
            currentInput += value;
            updateDisplay();
        } else if (action === 'clear') {
            clearCalculator();
        } else if (action === 'delete') {
            currentInput = currentInput.slice(0, -1);
            updateDisplay();
        } else if (action === 'operation') {
            operator = value;
            previousInput = currentInput;
            currentInput = '';
        } else if (action === 'calculate') {
            calculate();
        }
    });
});

function updateDisplay() {
    display.textContent = currentInput || '0';
}

function clearCalculator() {
    currentInput = '';
    previousInput = '';
    operator = '';
    updateDisplay();
}

function calculate() {
    if (operator && previousInput && currentInput) {
        const a = parseFloat(previousInput);
        const b = parseFloat(currentInput);

        switch (operator) {
            case '+': currentInput = a + b; break;
            case '-': currentInput = a - b; break;
            case 'x': currentInput = a * b; break;
            case '/': currentInput = a / b; break;
            case '%': currentInput = a % b; break;
        }
        operator = '';
        previousInput = '';
        updateDisplay();
    }
}
