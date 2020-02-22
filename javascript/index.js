document.getElementById('date').innerHTML = new Date().toDateString();
function addResponse() {
    document.getElementById("Q1").style.display = 'block'; 
}

var form = document.querySelector("form");
var log = document.querySelector("#log");

form.addEventListener("submit", function(event) {
    var data = new FormData(form);
    var output = "";
    for (const entry of data) {
        output = "Your stats are: ";   
    };
    log.innerText = output;
    event.preventDefault();
}, false);
