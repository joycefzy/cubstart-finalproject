function askName() {
    console.log("ran askName")
    let name = sessionStorage.getItem('name');

    if (name === null) {
        name = prompt("Please enter your name");
    }

    if (name != null) {
        document.getElementById('n').innerHTML = "Welcome " + name + "!";
        sessionStorage.setItem('name', name);
    } else {
        document.getElementById("n").innerHTML = "Welcome, Stranger!";
    }
}

//if (taskList) == null or taskList.length == 0 {
    //document.getElementById('duedays').innerHTML = "No Assignments upcoming!";
//} else {
    //document.getElementById('duedays').innerHTML = "In " + numDays + " days";
    //document.getElementById('duedate').innerHTML = taskName "Due"
//}