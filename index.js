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