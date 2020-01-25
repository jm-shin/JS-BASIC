const toDoForm = document.querySelector(".js-toDoForm"),
    toDoList = document.querySelector(".js-toDoList"),
    toDoInput = toDoForm.querySelector("input");

const TODOS_LS = "toDos";

const toDos = [];

function paintToDo(text){
    const li = document.createElement("li");
    const delBtn = document.createElement("button");
    delBtn.value = "❌";
    const span = document.createElement("span");
    span.innerText = text;
    li.appendChild(span);
    li.appendChild(delBtn);
    toDoList.appendChild(li);
    const toDoObj = {
    }
}

function handleSubmit(){
    event.preventDefault();
    const currentValue = toDoInput.value;
    paintToDo(currentValue);
    toDoInput.value = "";
}

function loadToDo(){
    const toDos = localStorage.getItem(TODOS_LS);
    if(TODOS_LS !== null){
        
    }
}

function init(){
    loadToDo();
    toDoForm.addEventListener("submit", handleSubmit);
};

init();
