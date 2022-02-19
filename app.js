let num1 = '';
let num2 = '';
let op = '';

//DOMs
let operations = document.querySelectorAll('.operator')
let nums = document.querySelectorAll('.num')
let display = document.querySelector('.display');
let equals = document.querySelector('.equals');
let clear = document.querySelector('#clear');
let decimal = document.querySelector('.decimal');
let deleteKey = document.querySelector('#del');

//Basic Opeartions ( + , - , / , *);
function add(a, b) {
    return parseFloat(a) + parseFloat(b);
}

function subtract(a, b) {
    return parseFloat(a) - parseFloat(b);
}

function multiply(a, b) {
    return parseFloat(a) * parseFloat(b);
}

function divide(a, b) {
    if (parseFloat(b) == 0) {
        return "MATH ERROR";
    }
    return parseFloat(a) / parseFloat(b);
}
// Functions that takes two numbers and perform desired operations on it

function operate(num1, operator, num2) {

    switch (operator) {
        case '+':
            return add(num1, num2);
            break;
        case '-':
            return subtract(num1, num2);
            break;
        case 'x':
            return multiply(num1, num2);
            break;
        case '÷':
            return divide(num1, num2);
            break;
    }
}

// Operator buttons
let get_operations = operations.forEach(ops => {
    ops.addEventListener('click', function () {
        if (num1 != '' && !op) {
            op += ops.textContent;
            display.textContent = ops.textContent
        }
        if (num1 != '' && op != '' && num2 != '') {
            num1 = (`${operate(parseFloat(num1), op, parseFloat(num2))}`);;
            display.textContent = num1;
            num2 = '';
            op = '';
            op += ops.textContent;
        }
    })
});

// Decimal s
let decimalPoint = decimal.addEventListener('click', () => {
    if (op == '' && num1.includes('.') == false) {
        num1 += '.';
        display.textContent += '.';
    }
    else if (op != '' && num2.includes('.') == false) {
        num2 += '.';
        display.textContent += '.';
    }
})

// Get Numbers
let get_Numbers = nums.forEach(num => {
    num.addEventListener('click', function () {
        if (!num1 || !op) {
            num1 += parseFloat(num.textContent);
            display.textContent = num1;
        }
        else if (num1 != '' && op != '') {
            num2 += parseFloat(num.textContent);
            display.textContent = num2;

        }
        else if (num1 != '' && op != '' && num2 != '') {
            let result = (`${operate(parseFloat(num1), op, parseFloat(num2))}`);
            display.textContent = (`${operate(parseFloat(num1), op, parseFloat(num2))}`)
            num1 = result;
            num2 = '';
            op = '';
            console.log(result);
        }
    })
});

// Equal operation
let operation = equals.addEventListener('click', function () {
    if (num1 != '' && num2 != '' && op != '') {
        return display.textContent = (`${operate(parseFloat(num1), op, parseFloat(num2))}`);
    }
});

// Clear all
let ac = clear.addEventListener('click', () => {
    num1 = '';
    num2 = '';
    op = '';
    display.textContent = "0";
});

// Delete 
let c = deleteKey.addEventListener('click', () => {
    if (op == '') {
        num1 = num1.substring(0, num1.length - 1);
        display.textContent = num1;
    } else if (op != '' && num2 == '') {
        op = '';
        display.textContent = '';
    } else {
        num2 = num2.substring(0, num2.length - 1);
        display.textContent = num2;
    }
});




