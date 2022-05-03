const tasks = [];

document.addEventListener("DOMContentLoaded", () => {
  // your code here
  const form = document.getElementById("create-task-form");
  form.addEventListener("submit", processTask);
});

function processTask(event) {
  const task = getTask();
  tasks.push(task);
  event.preventDefault();
  console.log("Task processed.");
}

function getTask() {
  const taskInput = document.getElementById("new-task-description");
  const task = taskInput.textContent;
  return task;
}