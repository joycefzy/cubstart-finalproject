//CODE COPIED AND PASTED FROM PLAYGROUND.JS AS A STARTING POINT

const taskName = document.getElementById("todo-name");
const submitButton = document.getElementById("submit");
const clearButton = document.getElementById("clear");
const undoButton = document.getElementById("undo");
const taskList = document.getElementById("tasks");
// END PART 5

// BEGIN PART 6

submitButton.addEventListener("click", () => {
  if (taskName.value != "") {
    const task = document.createElement("li");
    task.innerHTML = taskName.value;
    taskList.appendChild(task);
    document.getElementById("todo-name").value = "";
  }
});

undoButton.addEventListener("click", () => {
  if (taskList.length != 0) {
    taskList.removeChild(taskList.lastElementChild);
    document.getElementById("todo-name").value = "";
  }
});

clearButton.addEventListener("click", () => {
  taskList.replaceChildren();
  taskName.value = "";
  document.getElementById("todo-name").value = "";
});