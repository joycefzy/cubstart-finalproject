//CODE COPIED AND PASTED FROM PLAYGROUND.JS AS A STARTING POINT

const todoName = document.getElementById("todo-name");
const todoDate = document.getElementById("todo-date");
const submitButton = document.getElementById("submit");
const clearButton = document.getElementById("clear");
const undoButton = document.getElementById("undo");
const todoDict = document.getElementById("todo");
// END PART 5

// BEGIN PART 6

submitButton.addEventListener("click", () => {
    console.log("clicked submit")
  if (todoName.value != "") {
    const todo = document.createElement("dict");
    todo.innerHTML = todoName.value, todoDate.value;
    todoDict[todoName.value] = todoDate.value;
    //document.getElementById("todo-name").value = "";
    //put back in after testing over and do one for date too
    //Was working with text but stopped when changed to dictionary.
    console.log(todoDict)
  }
});

undoButton.addEventListener("click", () => {
  if (todoDict.length != 0) {
    todoDict.removeChild(todoDict.lastElementChild);
    document.getElementById("todo-name").value = "";
  }
});

clearButton.addEventListener("click", () => {
  todoDict.replaceChildren();
  todoName.value = "";
  document.getElementById("todo-name").value = "";
});