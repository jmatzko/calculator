//class that contains all calculator operations
//class used due to the ability to grab values from each other
class Calculator {
    //result is the only constructor because it is the only place the numbers will
    //touch
    constructor(result) {
        this.result = result;
        this.clear();
    }
    clear() {
        //this.currentresult is an example of dynamic property creation
        //it is created dynamically an assigned a value
        this.CurrentResult = '';
        this.operation = undefined;
    }
    chooseOperation(operator) {
        //wont go further if there is no operator
        if(this.CurrentResult === '') return;
       
        if(this.CurrentResult !== '') {
            this.calculate();
        }
        //when you use an operator here, its not supposed to show up on screen
        this.operation = operator;
        this.result.textContent = '';
        this.CurrentResult = '';
    }
    //converts to strings so that display doesn't automatically do the math
    appendResult(number) {
        this.CurrentResult = this.CurrentResult.toString() + number.toString();
    }
    //self explanatory
    updateDisplay() {
        this.result.textContent = this.CurrentResult;
    }
    calculate(operator) {
        
    }

}


const result = document.querySelector('.result');
const clearButton = document.querySelector('#clear');
const equalsButton = document.querySelector('#btn6')
const numbers = document.querySelectorAll('.numbers');
const operators = document.querySelectorAll('.operators');

const calculator = new Calculator(result);

numbers.forEach(button => {
    button.addEventListener('click', () => {
        calculator.appendResult(button.textContent);
        calculator.updateDisplay();
    });
});

operators.forEach(operator => {
    operator.addEventListener('click', () => {
        calculator.chooseOperation(operator.textContent);
        calculator.updateDisplay();
    });
});

equalsButton.addEventListener('click', () => {
    calculator.calculate();
    calculator.updateDisplay();
});
