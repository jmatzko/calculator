function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a,b) {
    return a / b;
}

function operate(operator, num1, num2) {
    add(num1, num2);
}

const buttons = document.querySelectorAll('[class ^= btn]')
buttons.forEach((button) => {
    button.addEventListener('click', () => {
        console.log('clicked');
    });
});

