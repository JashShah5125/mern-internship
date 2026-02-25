const heading = document.getElementById("mainHeading");
const paragraph = document.querySelector("#mainPara");
const allButtons = document.querySelectorAll("button");

const changeTextBtn = document.getElementById("changeTextBtn");
const toggleBtn = document.getElementById("toggleBtn");
const togglePara = document.getElementById("togglePara");
const addItemBtn = document.getElementById("addItemBtn");
const list = document.getElementById("myList");

changeTextBtn.addEventListener("click", function() {

    heading.textContent = "Heading Changed Successfully!";
    paragraph.textContent = "Paragraph text has been updated using JavaScript.";

    heading.style.backgroundColor = "lightblue";
    heading.style.color = "darkblue";
    heading.style.fontSize = "40px";

});


let isVisible = true;

toggleBtn.addEventListener("click", function() {

    if (isVisible) {
        togglePara.style.display = "none";
        isVisible = false;
    } else {
        togglePara.style.display = "block";
        isVisible = true;
    }

});

let count = 1;

addItemBtn.addEventListener("click", function() {

    const newItem = document.createElement("li");
    newItem.textContent = "List Item " + count;

    list.appendChild(newItem);

    count++;

});