const todos = document.querySelector("#todos");
const addTaskBtn = document
  .querySelector(".addTask")
  .addEventListener("click", addTask);

function addTask() {
  const newTodo = this.previousElementSibling.value.trim();
  console.log(newTodo);

  if (newTodo) {
    addItem(newTodo);
    this.previousElementSibling.value = "";
  } else {
    alert("Your filed is empty");
    //toDo: Создать окно где написано то что в алерте.
  }
  saveData();
}



function addItem(text) {
  const item = document.createElement("li");
  item.className = "todo_item";
  item.innerHTML = `<span class="li_span">${text}</span>`;

  item.addEventListener("click", removeItem);

  todos.append(item);
}

function removeItem() {
  removeEventListener("click", removeItem);
  this.remove();
//   saveData();
}

function saveData() {
  localStorage.setItem("data", todos.innerHTML);
}

function showTask() {
  todos.innerHTML = localStorage.getItem("data");
}
showTask();
//toDo #2: Модальное окно чтобы при нажатие на Add она добавилась как модал окно
//toDo #3: localStorage +++++++
//toDo #4: добавление через enter
