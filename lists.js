const dueName = document.getElementById("task-name");
const dueType = document.getElementById("task-types");
const dueDate = document.getElementById("task-date");
const addButton = document.getElementById("add-btn");
const dueList = document.getElementById("dues")

addButton.addEventListener("click", () => {
    console.log("clicked add")
  if (dueDateName.value != "") {
    console.log("tried to add")
    const due = document.createElement("li")
    //const due = document.createElement("lst");
    //lst = list dict = dictionary
    //due.innerHTML = dueDateName.value, dueDate.value; DICTIONARY
    //dueDict[dueDateName.value] = dueDate.value; DICTONARY (doesn't work yet)
    due.innerHTML = [dueName.value, dueType.value, dueDate.value];
    dueList.appendChild(due);
    document.getElementById("task-name").value = ""; //just clears the search boxes after submitting
    //Was working with text but stopped when changed to dictionary.
  }
});

// for deleting things in due date list 
var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
  close[i].onclick = function() {
    var div = this.parentElement;
    div.style.display = "none";
  }
}

function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: -34.397, lng: 150.644 },
    zoom: 8,
  });
}


/**
const addButton = document.getElementById("add-btn");

addButton.addEventListener("click", async () => {
    // empty card
    // get activity from API
    // process this data into 'p' elements
    // append the text elements as children of the card
    card.replaceChildren();
    const activity = await fetchActivity();
    // BEGIN PART 8
    for (const [key, value] of Object.entries(activity)) {
        const detail = document.createElement("p");
        detail.innerHTML = key + ": " + value;
        card.appendChild(detail);
    }
})
  
  //window.initMap = initMap;*/