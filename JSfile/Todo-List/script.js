const todoArr = [];

renderTodoList();

function addTodo(){
    
    const inputElement = document.querySelector(".input1");
    const name = inputElement.value;

    const inputDate = document.querySelector("#inputDate");
    const dueDate = inputDate.value;

    if(name && dueDate){
    todoArr.push(
        {
            // name: name,
            // dueDate: dueDate
            // shorthand proper
            name, 
            dueDate
        }
    );
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
    const elementObject = todoArr[i];
    const { name, dueDate } = elementObject; //destructuring
    // console.log(element)
     const heading = document.getElementById("taskHeading");

  if (todoArr.length === 1) {
    heading.textContent = "Task Todo:";
  } else if (todoArr.length > 1) {
    heading.textContent = "Tasks Todo:";
  } else  if (todoArr.length <= 0) {
    heading.textContent = "No Tasks";
  }
    const paragraph = `
    <li>
        <span class="font-semibold text-gray-900 dark:text-white">${name}</span> on <span class="font-semibold text-gray-900 dark:text-white">${dueDate} </span>
    <button
      class="ml-2 px-3 py-1 bg-red-500 text-white text-sm rounded hover:bg-red-600 transition duration-200 cursor-pointer"
    onclick= "
    todoArr.splice(${i},1);
    renderTodoList();
    "
    >Delete</button>
    </li>
   `
    todoListHTML += paragraph;
    
}
document.querySelector(".todo-list").innerHTML = todoListHTML;
}
