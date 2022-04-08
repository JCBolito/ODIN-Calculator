// Operate
function operate(a, operator, b) {
	// ADD
	if (operator === '+')
		return (a + b).toFixed(2).replace('.00', '');
	// SUBTRACT
	else if (operator === '-')
		return (a - b).toFixed(2).replace('.00', '');
	// MULTIPLY
	else if (operator === 'X')
		return (a * b).toFixed(2).replace('.00', '');
	// DIVIDE
	else if (operator === '÷')
		return (a / b).toFixed(2).replace('.00', '');
}

function clear() {
	if (num1 == null & num2 == null) {
		num1 = +num;
		screen.textContent = '|';
		num = '';
	}

	else if (num1 != null) {
		num2 = +num;
		result = +operate(num1, operator, num2);
		screen.textContent = result;
		num = '';
		num1 = null;
	}
	else if (num2 != null && num1 == null) {
		num1 = +num;
		num2 = +result
		result = +operate(num1, operator, num2);
		screen.textContent = result;
		num = '';
		num1 = null;
	}

}

function displayResult() {
	screen.textContent = num2;
	num1 = null;
}

function operations(button) {
	if (button.id == 'AC') {
		num1 = null;
		num2 = null;
		num = '';
		screen.textContent = '|';
	}
	else if (button.id == 'backSpace') {
		if (screen.textContent != num2) {
			num = num.slice(0, -1);
			screen.textContent = num;
			if (num == '')
				screen.textContent = '|';
		}
	}
	else if (button.id == '+') {
		operator = '+';
		clear();
	}
	else if (button.id == '-') {
		operator = '-';
		clear();
	}
	else if (button.id == 'X') {
		operator = 'X';
		clear();
	}
	else if (button.id == '÷') {
		operator = '÷';
		clear();
	}
	else if (button.id == '=') {
		if (num1 == null && num2 == null)
			num2 = 0;
		else if (num1 == null)
			num2 = +screen.textContent;

		else if (num1 != null && num2 == null) {
			num2 = +num;
			num2 = +operate(num1, operator, num2);
		}
		else if (num2 != null) {
			num1 = +num;
			num2 = +operate(num2, operator, num1);
		}
		displayResult();
		num1 = null;

	}
}

// MAIN
const screen = document.querySelector('.screen');
screen.textContent = '|';
// NUMBERS
const numberGroup = document.querySelector('.numbers');
const numberButtons = numberGroup.querySelectorAll('.btn');
let num = '';
let num1 = null;
let num2 = null;
let result = null;

numberButtons.forEach((button) => {
	button.addEventListener('click', () => {
		// Allows user to immediately insert a new
		// equation after getting the result of the
		// previout equation.
		if (num1 == null && num2 != null) {
			num == '';
			num1 = null;
			screen.textContent = '';
		}
		num += +button.id;
		screen.textContent = num;
	});

});

//OPERATORS
const operatorGroup = document.querySelector('.operations');
const operators = operatorGroup.querySelectorAll('.btn');
let operator = '';
operators.forEach((button) => {
	button.addEventListener('click', () => {
		operations(button);
	});
});

//KEYDOWN