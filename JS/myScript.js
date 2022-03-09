function operate(operator, num1, num2) {
    function add(num1, num2) {
        let result = num1 + num2;
        return result;
    }
    function subtract(x, y) {
        let result = x - y;
        return result;
    }
    function multiply(x, y) {
        let result = x * y;
        return result;
    }
    function divide(x, y) {
        let result = x / y;
        return result;
    }

    if (operator == "+") {
        return add(num1, num2);
    } else if (operator == "-") {
        return subtract(num1, num2);
    } else if (operator == "*") {
        return multiply(num1, num2);
    } else if (operator == "/") {
        return divide(num1, num2);
    }
}
