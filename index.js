var datetime = new Date();
console.log(datetime);
document.getElementById("time").textContent = datetime;

function refreshTime() {
    const timeDisplay = document.getElementById("time");
    const dateString = new Date().toLocaleString();
    const formattedString = dateString.replace(", ", " ");
    timeDisplay.textContent = formattedString;
}

setInterval(refreshTime, 1000);

//Index Functions, like asking your name and filling in the box info.
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