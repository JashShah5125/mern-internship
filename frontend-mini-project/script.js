let students = JSON.parse(localStorage.getItem("students")) || [];

const form = document.getElementById("studentForm");
const list = document.getElementById("studentList");
const search = document.getElementById("search");

function displayStudents(data){
    list.innerHTML="";

    data.forEach((student,index)=>{
        const row = document.createElement("tr");

        row.innerHTML = `
            <td>${student.name}</td>
            <td>${student.course}</td>
            <td><button onclick="deleteStudent(${index})">Delete</button></td>
        `;

        list.appendChild(row);
    });
}

form.addEventListener("submit",(e)=>{
    e.preventDefault();

    const name=document.getElementById("name").value;
    const course=document.getElementById("course").value;

    students.push({name,course});

    localStorage.setItem("students",JSON.stringify(students));

    displayStudents(students);

    form.reset();
});

function deleteStudent(index){
    students.splice(index,1);

    localStorage.setItem("students",JSON.stringify(students));

    displayStudents(students);
}

search.addEventListener("keyup",()=>{
    const value=search.value.toLowerCase();

    const filtered = students.filter(s =>
        s.name.toLowerCase().includes(value)
    );

    displayStudents(filtered);
});

displayStudents(students);