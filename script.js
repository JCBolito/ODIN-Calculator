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
