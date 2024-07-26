// in this todo-list we can add new task, ticks if the task is completed, and also delete the tasks.
// we are storing the list in browser i.e. local storage.

const inputBox = document.getElementById("inputbox");
const Tasks = document.getElementById("licontainer");

function addTask(){
    if(inputBox.value === '') 
    {
        alert("Please enter some Tasks!");
    }
    else
    {
        let lists = document.createElement("li");
        lists.innerHTML = inputBox.value;
        Tasks.appendChild(lists);

        let span = document.createElement("span");
        span.innerHTML = "\u00d7"; 
        lists.appendChild(span);
    }
    inputBox.value = "";
    saveData();
}

Tasks.addEventListener('click', function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveData();
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
}, false);

function saveData(){
    localStorage.setItem("data", Tasks.innerHTML);
}

function showTask(){
    Tasks.innerHTML = localStorage.getItem("data");
}
showTask();
