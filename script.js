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

function process() {
	num2 = +num;
	num1 = +operate(num1, operator, num2);
	screen.textContent = num1;
	num = '';
	operator = '';
	flag = false; // Set to false to prevent backspacing results.
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
	else if (operator != '' && num1 != null)
		process();
}
// Processes equations and displays result.
function displayResult() {
	process();
	num2 = null;
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
		// If flag is true, the current display is not result, 
		// hence users can backspace..
		if (flag) {
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
// ---------------------------------------------------------------------------
// MAIN
const screen = document.querySelector('.screen');
screen.textContent = '|';
// NUMBERS
const numberGroup = document.querySelector('.numbers');
const numberButtons = numberGroup.querySelectorAll('.btn');
let num = '';
let num1 = null;
let num2 = null;
let operator = '';
let flag = true; // Signals when backspace can function.

// NUMBERS BUTTON PRESS
numberButtons.forEach((button) => {
	button.addEventListener('click', () => {
		// Allows user to immediately insert a new
		// equation after getting the result of the
		// previout equation.
		flag = true; // Set to true to be able to backspace when inputting new values.
		if (num1 != null && operator == '') {
			num == '';
			num1 = null;
			screen.textContent = '';
		}
		// Allows user to enter a negative value.
		if (button.id == '-')
			num = num * -1;
		// Sets value according to pressed number button.
		else
			num += button.id;
		screen.textContent = num;
	});


});

//OPERATORS BUTTON PRESS
const operatorGroup = document.querySelector('.operations');
const operators = operatorGroup.querySelectorAll('.btn');
operators.forEach((button) => {
	button.addEventListener('click', () => {
		operations(button);
	});
});

//KEYBOARD SUPPORT
window.addEventListener('keydown', (e) => {
	let key = document.querySelector(`button[data-key="${e.key}"]`);
	if (!key) return;
	key.click();
});

