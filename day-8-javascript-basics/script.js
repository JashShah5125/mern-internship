let name = prompt("Enter your name:");
const age = Number(prompt("Enter your age:"));
let isStudent = prompt("Are you a student? (true/false)") === "true";

console.log("Name:", name);
console.log("Age:", age);
console.log("Is Student:", isStudent);

function checkEvenOdd(number) {
    if (number % 2 === 0) {
        console.log(number + " is Even");
        alert(number + " is Even");
    } else {
        console.log(number + " is Odd");
        alert(number + " is Odd");
    }
}

let evenOddNumber = Number(prompt("Enter a number to check Even or Odd:"));
checkEvenOdd(evenOddNumber);

function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    if (b === 0) {
        return "Cannot divide by zero";
    }
    return a / b;
}

let num1 = Number(prompt("Enter first number:"));
let num2 = Number(prompt("Enter second number:"));

console.log("Addition:", add(num1, num2));
console.log("Subtraction:", subtract(num1, num2));
console.log("Multiplication:", multiply(num1, num2));
console.log("Division:", divide(num1, num2));

alert("Calculator results are shown in console.");

function celsiusToFahrenheit(celsius) {
    return (celsius * 9/5) + 32;
}

function fahrenheitToCelsius(fahrenheit) {
    return (fahrenheit - 32) * 5/9;
}

let tempValue = Number(prompt("Enter temperature value:"));
let tempType = prompt("Type 'C' for Celsius to Fahrenheit or 'F' for Fahrenheit to Celsius:");

if (tempType === "C" || tempType === "c") {
    let result = celsiusToFahrenheit(tempValue);
    console.log(tempValue + "°C = " + result + "°F");
    alert(tempValue + "°C = " + result + "°F");
} else if (tempType === "F" || tempType === "f") {
    let result = fahrenheitToCelsius(tempValue);
    console.log(tempValue + "°F = " + result + "°C");
    alert(tempValue + "°F = " + result + "°C");
} else {
    alert("Invalid temperature type entered.");
}
