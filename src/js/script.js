const todos = document.querySelector("#todos");
const addTaskBtn = document
  .querySelector(".addTask")
  .addEventListener("click", addTask);

const modalBtn = document
  .querySelector(".modalBtn")
  .addEventListener("click", openModal);
const myModal = document.querySelector("#myModal");

function openModal() {
  myModal.classList.add("open");
  attachModalEvent();
}

function attachModalEvent() {
  myModal.querySelector(".close").addEventListener("click", closeModal);
  document.addEventListener("keydown", handleEscape);
  myModal.addEventListener("click", handleOutside);
  myModal.addEventListener("keyup", addItemWithHandleEnter);
}

function handleEscape(event) {
  if (event.key === "Escape") {
    closeModal();
  }
}

function handleOutside(event) {
  const isClickOutside = !!event.target.closest(".modal-content");

  if (!isClickOutside) {
    closeModal();
  }
}

function closeModal() {
  myModal.classList.remove("open");

  deAttachModalEvent();
}

function addTask() {
  const inputField = myModal.querySelector(".modal-input");
  const newTodo = inputField.value.trim();
  console.log(newTodo);

  if (newTodo) {
    addItem(newTodo);
    inputField.value = "";
  } else {
    alert("Your filed is empty");
    //toDo: Создать окно где написано то что в алерте.
  }

  saveData();
}

function addItemWithHandleEnter(event) {
  if (event.key === "Enter") {
    addTask();
  }
  closeModal();
  console.log(event);
}

function deAttachModalEvent() {
  myModal.querySelector(".close").removeEventListener("click", closeModal);
  document.removeEventListener("keydown", handleEscape);
  myModal.removeEventListener("click", handleOutside);
  myModal.removeEventListener("keyup", addItemWithHandleEnter);
}

function addItem(text) {
  const item = document.createElement("li");
  item.className = "todo_item";
  item.innerHTML = `<span class="li_span">${text}</span>`;

  item.addEventListener("click", removeItem);

  todos.append(item);
}

function removeItem() {
  this.removeEventListener("click", removeItem);
  this.remove();
  saveData();
}

function saveData() {
  localStorage.setItem("data", todos.innerHTML);
}

function showTask() {
  todos.innerHTML = localStorage.getItem("data");

  const todoItems = document.querySelectorAll(".todo_item");

  todoItems.forEach((item) => {
    item.addEventListener("click", removeItem);
  });
}
showTask();
//toDo #2: Модальное окно чтобы при нажатие на Add она добавилась как модал окно +++
//toDo #3: localStorage +++++++
//toDo #4: добавление через enter
