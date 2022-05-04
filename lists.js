//CODE COPIED AND PASTED FROM PLAYGROUND.JS AS A STARTING POINT


// END PART 5
const dueDateName = document.getElementById("task-name");
const dueDate = document.getElementById("task-date");
const addButton = document.getElementById("add");
//const clearButton = document.getElementById("clear");
//const undoButton = document.getElementById("undo");
//const todoDict = document.getElementById("todo");

addButton.addEventListener("click", () => {
    console.log("clicked add")
  if (dueDateName.value != "") {
    const due = document.createElement("dict");
    due.innerHTML = dueDateName.value, dueDate.value;
    dueDict[dueDateName.value] = dueDate.value;
    //document.getElementById("todo-name").value = "";
    //put back in after testing over and do one for date too
    //Was working with text but stopped when changed to dictionary.
    console.log(dueDict);
  }
});

/** 
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
*/