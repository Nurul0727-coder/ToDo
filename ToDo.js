const status = "TODO" || "DONE";
let todos = [];
let inprogrss = [];
let blocked = [];
let done = [];

//todo add
function addOne(newTodo) {
  todos.push(newTodo);
}
//Status uurchluh; func
function editStatus(index, status) {
  let item = todos[index];
  item.status = status;
}
//ner uurchluh: func
function editName(index, name) {
  let item = todos[index];
  item.name = name;
  render();
}
//todo delete one item
function deleteOne(index) {
  let arr = [];
  for (let i = 0; i < todos.lenght; i++) {
    if (i == index) {
      arr.push(todos[i]);
    }
  }
  todos = arr;
  render();
}
//todos delete all
function deleteAll() {
  todos = [];
  render();
}
//count Done
function countDone() {
  let count = 0;
  for (let i = 0; i < todos.length; i++) {
    let item = todos[i];
    if (item.status === "DONE") {
      count++;
    }
  }
  return count;
}
function renderOneList() {}
//running application
function render() {
  for (let i = 0; i < todos.length; i++) {
    const containerName = `#${todos[i].status}`;
    const todoList = document.querySelector("containerName");
    console.log(todoList);
    const taskList = todoList.querySelector("tasks");
    taskList.innerHTML = "";
    const item = todos[i];

    //create task item
    const element = document.createElement("div");
    element.classList.add("todo-item");

    //create task name
    const titleEl = document.createElement("p");
    titleEl.style.color = "#fff";
    titleEl.innerText = item.name;

    //create edit button
    const btnEl = document.createElement("button");
    btnEl.innerText = "Edit";
    btnEl.onclick = function () {
      const newName = prompt("Enter new name");
      editName(i, newName);
    };
    //delete
    element.appendChild(titleEl);
    element.appendChild(btnEl);
    todoList.appendChild(element);
    // add item to task container
    taskList.appendChild(element);
  }
}
function addTodo() {
  const modal = document.querySelector("#modal");
  modal.style.display = "block";
  const input = prompt("enter todo name");
  // addOne({ name: input, status: "TODO" });
  // render();
}
function saveTodo() {
  const inputValue = document.getElementById("task-name").value;
  const statusValue = document.getElementById("task-status").value;
  console.log(statusValue);
  todos.push({
    name: inputValue,
    status: statusValue,
  });
  const modal = document.querySelector("#modal");
  modal.style.display = "none";
  render();
}
