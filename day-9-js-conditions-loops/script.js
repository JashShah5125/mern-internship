let number = Number(prompt("Enter a number to check Positive, Negative or Zero:"));

if (number > 0) {
    console.log("The number is Positive");
    alert("The number is Positive");
} else if (number < 0) {
    console.log("The number is Negative");
    alert("The number is Negative");
} else {
    console.log("The number is Zero");
    alert("The number is Zero");
}

let marks = Number(prompt("Enter your marks:"));

if (marks >= 90) {
    console.log("Grade: A");
    alert("Grade: A");
} else if (marks >= 75) {
    console.log("Grade: B");
    alert("Grade: B");
} else if (marks >= 60) {
    console.log("Grade: C");
    alert("Grade: C");
} else {
    console.log("Grade: Fail");
    alert("Grade: Fail");
}

console.log("Numbers from 1 to 20:");
for (let i = 1; i <= 20; i++) {
    console.log(i);
}

let tableNumber = Number(prompt("Enter number for multiplication table:"));

console.log("Multiplication Table of " + tableNumber);

for (let i = 1; i <= 10; i++) {
    console.log(tableNumber + " x " + i + " = " + (tableNumber * i));
}

console.log("Numbers from 10 to 1:");

let i = 10;

while (i >= 1) {
    console.log(i);
    i--;
}

let randomNumber = Math.floor(Math.random() * 10) + 1;
let userGuess = Number(prompt("Guess a number between 1 and 10:"));

if (userGuess === randomNumber) {
    console.log("Correct! 🎉");
    alert("Correct! 🎉");
} else if (userGuess > randomNumber) {
    console.log("Too High!");
    alert("Too High!");
} else {
    console.log("Too Low!");
    alert("Too Low!");
}

console.log("The correct number was:", randomNumber);
