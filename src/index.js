const myTasks = [];

document.addEventListener("DOMContentLoaded", () => {
  // your code here
  const form = document.getElementById("create-task-form");
  form.addEventListener("submit", processTask);
});

function processTask(event) {
  event.preventDefault();
  saveTask();
  addListItem();
}

function saveTask() {
  const task = getTask();
  myTasks.push(task);
}

function getTask() {
  const taskInput = getInputUI();
  const task = taskInput.value;
  return task;
}

function getInputUI() {
  return document.getElementById("new-task-description");
}

function addListItem() {
  const list = getList();
  const listItem = getNewListItem();
  list.appendChild(listItem);
}

const getList = () => document.getElementById("list");

function getNewListItem() { 
  const task = getLastTask();
  const listItem = document.createElement("li");
  const text = document.createTextNode(task);
  const button = document.createElement("button");
  button.addEventListener("click", (e) =>{
    const task = e.target.parentElement.childNodes[0].textContent;
    myTasks.splice(myTasks.indexOf(task), 1);
    listItem.remove();
    e.preventDefault;
  });
  button.innerText = "Delete";
  listItem.appendChild(text);
  listItem.appendChild(button);
  return listItem;
}

const getLastTask = () => myTasks[myTasks.length - 1];