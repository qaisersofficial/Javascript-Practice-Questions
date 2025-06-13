const todoArr = [];

renderTodoList();

function addTodo(){
    
    const inputElement = document.querySelector(".input1");
    const name = inputElement.value;
    if(name){
    todoArr.push(name);
    // console.log(todoArr);
    inputElement.value = "";

    renderTodoList();
    }
}

function handleEnterKey(event){
    if (event.key === "Enter") {
        addTodo();
    }
}

function renderTodoList(){
let todoListHTML = '';

    for (let i = 0; i < todoArr.length; i++) {
    const element = todoArr[i];
    // console.log(element)
    const paragraph = `<p>The value you entered: ${element}</p>`
    todoListHTML += paragraph;
    
}
document.querySelector(".todo-list").innerHTML = todoListHTML;
}