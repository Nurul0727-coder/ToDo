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
    const todoList = document.getElementById(containerName);
    const taskList = document.querySelector("#tasks");
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
      const newName = input("Enter new name");
      editName(i, newName);
      render();
    };
    //delete
    const deleteBtn = document.createElement("button");
    deleteBtn.innerText = "delete";
    deleteBtn.onclick = function () {
      const deleteOne = input("delete");
      deleteOne(i);
    };
    element.appendChild(titleEl);
    element.appendChild(btnEl);
    element.appendChild(deleteBtn);
    taskList.appendChild(element);

    // const task = ` <div class="task">
    // <input type= "checkbox" class =task-ckeck">
    // <span class="taskName">${taskName}</span>
    // <button class="edit">
    // <i class="fa-solid fa-pen-to-square"></i>
    // </button>
    // <button class= "delete">
    // <i class="fa-solid fa-trash"></i>
    // </button>
    // </div>`;
    // taskContainer.insertAdjacentHTML("beforeend", task);
  }

  //     const updateTaskList = () => {
  //       const taskList = document.getElementById("task-list");
  //       taskList.innerHTML = "";
  //       taskList.forEach((task))=> {
  //       const listItem = document.createElement("li");
  //       }

  //       itemList.innerHTML =``
  //       <div class=" taskItem">
  //         <div class="task">
  //           <input type="checkbox" class="checkbox" />
  //           <p>Finish this project</p>
  //         </div>
  //         <div class="icons">
  //           <img src="./ edit.png" />
  //           <img src="./ delete.png" />
  //         </div>
  //       </div>`;
  //  }
}
function addTodo() {
  const modal = document.querySelector("#modal");
  modal.style.display = "block";
  // const input = prompt("enter todo name");
  addOne({ name: input, status: "TODO" });
  render();
}
function saveTodo() {
  const inputValue = document.getElementById("task-name").value;
  const statusValue = document.getElementById("task-status").value;
  todos.push({
    name: inputValue,
    status: statusValue,
  });
  const modal = document.querySelector("#modal");
  modal.style.display = "none";
  render();
}
