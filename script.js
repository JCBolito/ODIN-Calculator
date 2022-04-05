// Add
function add(a, b) {
	return a + b;
}
// Subtract
function subtract(a, b) {
	return a - b;
}
// Multiply
function multiply(a, b) {
	return a * b;
}
// Divide
function divide(a, b) {
	return a / b;
}

// Operate
function operate(a, operator, b) {
	//add
	if (operator === '+')
		return add(a, b);
	else if (operator === '-')
		return subtract(a, b);
	else if (operator === 'X')
		return multiply(a, b);
	else if (operator === '÷')
		return divide(a, b);
}

const screen = document.querySelector('.screen');
screen.textContent = '|';
// NUMBERS
const numberGroup = document.querySelector('.numbers');
const numberButtons = numberGroup.querySelectorAll('.btn');
let num1 = null;
let num2 = null;
let result = null;
let num = '';
numberButtons.forEach((button) => {
	button.addEventListener('click', () => {
		num += button.id;
		screen.textContent = num;
	});
});

//OPERATORS
const operatorGroup = document.querySelector('.operations');
const operators = operatorGroup.querySelectorAll('.btn');
let operator = '';
operators.forEach((button) => {
	button.addEventListener('click', () => {
		if (button.id == 'AC') {
			num1 = null;
			num2 = null;
			result = null;
			num = '';
			screen.textContent = '|';
		}
		else if (button.id == 'backSpace') {
			if (screen.textContent != num2) {
				num = num.slice(0, -1);
				screen.textContent = num;
			}
		}
		else if (button.id == '+') {
			operator = '+';
			num1 += +num;
			num = '';
			screen.textContent = '|';
		}
		else if (button.id == '-') {
			operator = '-';
			num1 = +num;
			num = '';
			screen.textContent = '|';
		}
		else if (button.id == 'X') {
			operator = 'X'
			num1 = +num;
			num = '';
			screen.textContent = '|';
		}
		else if (button.id == '÷') {
			operator = '÷';
			num1 = +num;
			num = '';
			screen.textContent = '|';
		}
		else if (button.id == '=') {
			if (num2 == null) {
				num2 = +num;
				num2 = operate(num1, operator, num2).toFixed(2);
			}
			else {
				num1 = +num;
				num2 = operate(num2, operator, num1).toFixed(2);
			}
			screen.textContent = num2;
			num1 = null;
		}
	});
});

