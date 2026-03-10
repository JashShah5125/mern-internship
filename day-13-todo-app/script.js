let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

const input = document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");
const list = document.getElementById("taskList");

addBtn.addEventListener("click", addTask);

input.addEventListener("keypress", function(e){
if(e.key === "Enter"){
addTask();
}
});

function addTask(){

let text = input.value.trim();

if(text === "") return;

tasks.push({text:text, completed:false});

input.value = "";

saveTasks();
renderTasks();
}

function renderTasks(filter="all"){

list.innerHTML="";

tasks.forEach((task,index)=>{

if(filter==="completed" && !task.completed) return;
if(filter==="pending" && task.completed) return;

let li=document.createElement("li");

li.textContent=task.text;

if(task.completed){
li.classList.add("completed");
}

li.addEventListener("click",()=>{
task.completed=!task.completed;
saveTasks();
renderTasks();
});

let del=document.createElement("button");
del.textContent="Delete";

del.onclick=(e)=>{
e.stopPropagation();
tasks.splice(index,1);
saveTasks();
renderTasks();
};

li.appendChild(del);
list.appendChild(li);

});

updateCounter();
}

function saveTasks(){
localStorage.setItem("tasks",JSON.stringify(tasks));
}

function filterTasks(type){
renderTasks(type);
}

document.getElementById("clearAll").addEventListener("click",()=>{
tasks=[];
saveTasks();
renderTasks();
});

function updateCounter(){

let total=tasks.length;
let completed=tasks.filter(t=>t.completed).length;
let pending=total-completed;

document.getElementById("total").textContent=total;
document.getElementById("completed").textContent=completed;
document.getElementById("pending").textContent=pending;
}

renderTasks();