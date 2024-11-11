const status = "TODO" || "DONE";
let todos = [];
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
//running application
function render() {
  const todoList = document.querySelector("#tasks");
  todoList.innerHTML = "";

  console.log(todos);
  for (let i = 0; i < todos.length; i++) {
    const item = todos[i];

    //create task item
    const element = document.createElement("div");
    element.classList.add("todo-item");

    //create task name
    const titleEl = document.createElement("p");
    titleEl.innerText = item.name;

    //create edit button
    const btnEl = document.createElement("button");
    btnEl.innerText = "Edit";
    // btnEl.onclick = function () {
    //   const newName = prompt("Enter new name");
    //   editName(i, newName);
    // };
    //delete
    element.appendChild(titleEl);
    element.appendChild(btnEl);
    todoList.appendChild(element);
  }
}
function addTodo() {
  const input = prompt("enter todo name");
  addOne({ name: input, status: "TODO" });
  render();
}
