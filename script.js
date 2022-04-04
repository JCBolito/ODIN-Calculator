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
	else if (operator === '*')
		return multiply(a, b);
	else if (operator === '/')
		return divide(a, b);
}

function getNumber(num) {
	numberButtons.forEach((button) => {
		button.addEventListener('click', () => {
			num = parseFloat(button.id);
			screen.textContent += num;
		});
	});
}

let num1 = 0;
let num2 = 0;
const screen = document.querySelector('.screen');
const numberGroup = document.querySelector('.numbers');
const numberButtons = numberGroup.querySelectorAll('.btn');
num1 = getNumber(num1);