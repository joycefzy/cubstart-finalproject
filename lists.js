//CODE COPIED AND PASTED FROM PLAYGROUND.JS AS A STARTING POINT

const todoName = document.getElementById("todo-name");
const submitButton = document.getElementById("submit");
const clearButton = document.getElementById("clear");
const undoButton = document.getElementById("undo");
const todoList = document.getElementById("todo");
// END PART 5

// BEGIN PART 6

submitButton.addEventListener("click", () => {
  if (todoName.value != "") {
    const todo = document.createElement("li");
    todo.innerHTML = todoName.value;
    todoList.appendChild(todo);
    document.getElementById("todo-name").value = "";
  }
});

undoButton.addEventListener("click", () => {
  if (todoList.length != 0) {
    todoList.removeChild(todoList.lastElementChild);
    document.getElementById("todo-name").value = "";
  }
});

clearButton.addEventListener("click", () => {
  todoList.replaceChildren();
  todoName.value = "";
  document.getElementById("todo-name").value = "";
});