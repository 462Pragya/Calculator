//CALCULATOR PROGRAM

const display = document.getElementById("display");
const max_digits = 15;
function appendToDisplay(input) {
    if (display.value === 'Error') {
        display.value = '';
    }
    if (display.value.length >= max_digits) {
        return;
    }
    const lastchar = display.value.slice(-1);
    if (isOperator(input)) {
        if (isOperator(lastchar)) {
            display.value = display.value.slice(0, -1) + input;
        } else {
            display.value += input;
        }
    }
    else {
        display.value += input;
    }
}

function calculate() {
    if (display.value === 'Error') {
        display.value = '';
    }
    try {
        display.value = eval(display.value).toString();
    }
    catch (error) {
        display.value = "Error";

    }
    adjustFontSize();
}

function clearDisplay() {
    if (display.value === 'Error') {
        display.value = '';
    }
    display.value = "";
    adjustFontSize();
}

function deleteLast() {
    if (display.value === 'Error') {
        display.value = '';
    }
    display.value = display.value.slice(0, -1);
    adjustFontSize();

}

function isOperator(char) {
    return ['+', '*', '-', '/'].includes(char);
}
function adjustFontSize() {
    const length = display.value.length;
    if (length > 15) {
        display.style.fontSize = '1.5rem';
    } else {
        display.style.fontSize = '2rem';
    }

}
function applyBrackets() {
    if (display.value === 'Error') {
        display.value = '';
    }
    const lastchar = display.value.slice(-1);
    let openingBrackets = 0;
    let closingBrackets = 0;

    for (let char of display.value) {
        if (char === '(') {
            openingBrackets++;
        }
        else if (char === ')') {
            closingBrackets++;
        }

    }


    if (display.value === '') {
        display.value += '(';
    }
    else if (openingBrackets > closingBrackets &&
        (isNumber(lastchar) || lastchar === ')')) {

        display.value += ')';
    }

    else {
        display.value += '(';

    }
    console.log("display value after bracket", display.value);
}

function isNumber(char) {
    return !isNaN(char) && char !== '';

}