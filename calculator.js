
// element objects:

const display = document.querySelector('.display-text');

const allButtons = document.querySelectorAll('.button')

const button0 = document.querySelector('#button0');
const button1 = document.querySelector('#button1');
const button2 = document.querySelector('#button2');
const button3 = document.querySelector('#button3');
const button4 = document.querySelector('#button4');
const button5 = document.querySelector('#button5');
const button6 = document.querySelector('#button6');
const button7 = document.querySelector('#button7');
const button8 = document.querySelector('#button8');
const button9 = document.querySelector('#button9');



const plusButton = document.querySelector('#plusButton');
const minusButton = document.querySelector('#minusButton');
const multiplyButton = document.querySelector('#multiplyButton');
const divideButton = document.querySelector('#divideButton');

const equalButton = document.querySelector('#equalButton');
const clearButton = document.querySelector('#clearButton');


// functions:



const add = (num1, num2) => {
    return num1 + num2;
} 

const subtract = (num1, num2) => {
    return num1 - num2;
}

const multiply = (num1, num2) => {
    return num1 * num2;
}

const divide = (num1, num2) => {
    if (num2 === 0) {
        alert('Nice try, asshole.')
        clearDisplay();
        return;
    }
    
    return num1 / num2;
}

const operator = (num1, num2, operation) => {
    switch(operation) {
        case 'add':
            return add(num1, num2);
        case 'subtract':
            return subtract(num1, num2);
        case 'multiply':
            return multiply(num1, num2);
        case 'divide':
            return divide(num1,num2);
    }
}

const resetDisplay = () => {
    firstInput = parseFloat(display.textContent);
    display.textContent = '';
}

const clearDisplay = () => {
    firstInput = '';
    secondInput = '';
    operation = '';
    display.textContent = '';
}


const performCalculation = () => {
    secondInput = parseFloat(display.textContent);
    display.textContent = operator(firstInput, secondInput, operation);
    console.log(`Performed the operation ${firstInput} ${operation} ${secondInput}`)
    firstInput = display.textContent;
    secondInput = '';
}

const operatorButtonActions = () => {
    if (firstInput !== '') {
        performCalculation();
    }

    resetDisplay();
}

// variables

let operation = '';
let firstInput = '';
let secondInput = '';




// Event listeners:

const numberButtons = [button0, button1, button2, button3, button4, button5, button6, button7, button8, button9];
for (let i = 0; i < numberButtons.length; i++) {
    numberButtons[i].addEventListener('click', () => {
        display.textContent += `${i}`;
    })
}

plusButton.addEventListener('click', () => {    
    operatorButtonActions();
    operation = 'add';    
});

minusButton.addEventListener('click', () => {    
    operatorButtonActions();
    operation = 'subtract';
})

multiplyButton.addEventListener('click', () => {    
    operatorButtonActions();
    operation = 'multiply';
})

divideButton.addEventListener('click', () => {    
    operatorButtonActions();
    operation = 'divide';
})


equalButton.addEventListener('click', () => {
    if (display.textContent === '') {
        alert('Please enter a number!')
        return;
    }

    if (operation === '') {
        alert ('Please choose an operation!')
        return;
    }
    
    performCalculation();
})

clearButton.addEventListener('click', clearDisplay);


