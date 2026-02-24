let numbers = [10, 20, 30, 40, 50];

console.log("All Elements:", numbers);
console.log("Array Length:", numbers.length);
console.log("First Element:", numbers[0]);
console.log("Last Element:", numbers[numbers.length - 1]);


numbers.push(60);
console.log("After push:", numbers);

numbers.pop();
console.log("After pop:", numbers);

numbers.shift();
console.log("After shift:", numbers);

numbers.unshift(5);
console.log("After unshift:", numbers);

console.log("Includes 30?", numbers.includes(30));


let student = {
    name: "Jash",
    age: 20,
    marks: 85
};

console.log("Name:", student.name);
console.log("Marks:", student.marks);


let students = [
    { name: "A", marks: 80 },
    { name: "B", marks: 75 },
    { name: "C", marks: 90 }
];

let totalMarks = 0;

for (let i = 0; i < students.length; i++) {
    totalMarks += students[i].marks;
}

let average = totalMarks / students.length;

console.log("Average Marks:", average);

students.forEach(function(student) {
    console.log(student.name + " - " + student.marks);
});