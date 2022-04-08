// OPERATE
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

// Processes running equations.
// ((1 + 1) + 1)
function clear() {
	screen.textContent = '|';
	//Checks if a value in the expression is not a number.
	if (isNaN(+num))
		screen.textContent = 'Syntax Error!';
	else if (operator == '' && num1 == null) {
		num1 = +num;
		num = '';
	}
	else if (operator != '' && num1 != null) {
		num2 = +num;
		num1 = +operate(num1, operator, num2);
		screen.textContent = num1;
		num = '';
		operator = '';
	}
}
// Processes equations and displays result.
function displayResult() {
	num2 = +num;
	num1 = +operate(num1, operator, num2);
	screen.textContent = num1;
	num = '';
	num2 = null;
	operator = '';
}

// Button functionality of operations.
function operations(button) {
	if (button.id == 'AC') {
		num = '';
		num1 = null;
		num2 = null;
		operator = '';
		screen.textContent = '|';
	}
	else if (button.id == 'backSpace') {
		if (screen.textContent != num1 && operator == '') {
			num = num.slice(0, -1);
			screen.textContent = num;
			if (num == '')
				screen.textContent = '|';
		}
	}
	else if (button.id == '+') {
		clear();
		operator = '+';
	}
	else if (button.id == '-') {
		clear();
		operator = '-';
	}
	else if (button.id == 'X') {
		clear();
		operator = 'X';
	}
	else if (button.id == '÷') {
		clear();
		operator = '÷';
	}
	else if (button.id == '=') {
		// No inputted values
		if (num1 == null && num2 == null) {
			//Checks if result is not a number
			if (!(isNaN(+num))) {
				num1 = +num;
				screen.textContent = num1;
				num = '';
			}
			else
				screen.textContent = 'Syntax Error!';
		}
		else if (operator == '' && num2 == null)
			screen.textContent = num1;
		else
			displayResult();
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

// NUMBERS
numberButtons.forEach((button) => {
	button.addEventListener('click', () => {
		// Allows user to immediately insert a new
		// equation after getting the result of the
		// previout equation.
		if (num1 != null && operator == '') {
			num == '';
			num1 = null;
			screen.textContent = '';
		}
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
		operations(button);
	});
});

//KEYDOWN