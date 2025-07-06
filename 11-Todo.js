const todoList = [
//   {
//   name: "Buy groceries",
//   dueDate: "2023-10-01"
// },{
//   name: "Walk the dog",
//   dueDate: "2023-10-02"
// }
];
renderTodoList();
function renderTodoList() {
  let todoListHTML = "";

  for (let i = 0; i < todoList.length; i++) {
    const todoObject = todoList[i];
    // const name= todoObject.name;
    // const dueDate = todoObject.dueDate;
    const {name,dueDate}=todoObject;
    const html = `
    <div>${name}</div>
    <div>${dueDate}</div>
      <button onclick="
        todoList.splice(${i},1);
        renderTodoList();
      " class="delete-todo-button">Delete</button>
    `;
    todoListHTML += html;
  }
  document.querySelector(".js-todo-list").innerHTML = todoListHTML;
}
function addTodo() {
  const inputElement = document.querySelector(".js-name-input");
  const name = inputElement.value;
  const dateElement = document.querySelector(".js-date-input");
  const dueDate=dateElement.value;

  if (name.trim()!==""){
    
  todoList.push({
    // name: name,
    // dueDate:dueDate
    name,
    dueDate
  });
  inputElement.value = "";
  dateElement.value="";
  renderTodoList();
  }
  
}
