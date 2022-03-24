let numberBtns = document.querySelectorAll("#buttonsContainer .number");
let operatorBtns = document.querySelectorAll("#buttonsContainer .operator");
let display = document.querySelector("#display");
let clear = document.querySelector("#Clear");
let del = document.querySelector("#Del");
let equal = document.querySelector("#Equal");
let numberArray = Array.from(numberBtns);
let operatorArray = Array.from(operatorBtns);
let num1 = "";
let num2 = "";
let operator = "";
clear.addEventListener("click", () => {
    display.textContent = "";
    num1 = "";
    num2 = "";
    operator = "";
});

del.addEventListener("click", () => {
    display.textContent = display.textContent.slice(0, -1);
    num1 = num1.toString();
    num2 = num2.toString();

    if (num2 != "") {
        num2 = num2.slice(0, -1);
        console.log("Num 2 is now " + num2);
    } else if (num2 == "" && operator != "") {
        operator = operator.slice(0, -1);
        console.log("Operator is now deleted");
    } else {
        num1 = num1.slice(0, -1);
        console.log("Num 1 is now " + num1);
    }
});
equal.addEventListener("click", () => {
    num1 = parseInt(num1);
    num2 = parseInt(num2);
    let result = operate(operator, num1, num2);
    if (num1 != "" && num2 != "" && operator != "") {
        console.log("Result " + result);
        operator = "";
        num2 = "";
        num1 = result;
    } else {
        console.log('Fill all req info')
    }
});

numberArray.forEach((element) => {
    // and for each one we add a 'click' listener
    element.addEventListener("click", () => {
        if (num1 == "" || operator == "") {
            num1 += element.textContent;
            console.log("Num1 - " + num1);
        } else {
            num2 += element.textContent;
            console.log("Num2 - " + num2);
        }
    });
});

operatorArray.forEach((element) => {
    // and for each one we add a 'click' listener
    element.addEventListener("click", () => {
        if (operator == "") {
            operator += element.textContent;
        } else {
            operator = element.textContent;
        }
        console.log(operator);
        display.textContent += operator;
    });
});

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
