//maybe ask for your name when you first start it
//Need an add to workload (to a workload table?)
//Need an add to dueDate (to a dueDate table?)
//Need an add to maps (to a maps table?)
    //if time crunch just drop the maps I guess, or just make a link that plugs it into google maps

//Some demo code I found for changing backgrounds randomly
/*{ <html>
    <head>
        <script type="text/javascript"> 
            var totalCount = 8;
            function ChangeIt() 
        {
        var num = Math.ceil( Math.random() * totalCount );
        document.body.background = 'bgimages/'+num+'.jpg';
        document.body.style.backgroundRepeat = "repeat";// Background repeat
    }
        </script>
    </head>
<body> 
// Page Design 
</body> 
<script type="text/javascript"> 
ChangeIt();
</script> 
</html> } */

// const workload_button = document.getElementById("Workload");
// const dueDate_button = document.getElementById("Due dates");
// const maps_button = document.getElementById("Maps");


// let workload_btn = document.createElement("button");
// btn.innerHTML = "Workload";
// btn.type = "bottom btn";
// btn.name = "workload button";
// document.body.appendChild(workload_btn);

// let duedate_btn = document.createElement("button");
// btn.innerHTML = "Due Dates";
// btn.type = "bottom btn";
// btn.name = "due date button";
// document.body.appendChild(duedate_btn);

// let maps_btn = document.createElement("maps");
// btn.innerHTML = "Maps";
// btn.type = "bottom btn";
// btn.name = "map button";
// document.body.appendChild(maps_btn);

function initMap() {
    map = new google.maps.Map(document.getElementById("map"), {
      center: { lat: -34.397, lng: 150.644 },
      zoom: 8,
    });
  }

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
  
  //window.initMap = initMap;

