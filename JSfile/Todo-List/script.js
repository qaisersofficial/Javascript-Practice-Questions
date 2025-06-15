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
const heading = document.getElementById("taskHeading");

if (todoArr.length === 1) {
    heading.textContent = "Task Todo:";
} else if (todoArr.length > 1) {
    heading.textContent = "Tasks Todo:";
} else {
    heading.textContent = "No Tasks";
}

for (let i = 0; i < todoArr.length; i++) {
    const elementObject = todoArr[i];
    const { name, dueDate } = elementObject; //destructuring
    const listItem = document.createElement('li');
    listItem.innerHTML = `
        <span class="font-semibold text-gray-900 dark:text-white">${name}</span> on <span class="font-semibold text-gray-900 dark:text-white">${dueDate}</span>
    `;

    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.className = 'ml-2 px-3 py-1 bg-red-500 text-white text-sm rounded hover:bg-red-600 transition duration-200 cursor-pointer';
    deleteButton.addEventListener('click', () => {
        todoArr.splice(i, 1);
        renderTodoList();
    });

    listItem.appendChild(deleteButton);
    todoListHTML += listItem.outerHTML;
    
}
document.querySelector(".todo-list").innerHTML = todoListHTML;
}
