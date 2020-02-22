var form = document.querySelector("form");
var log = document.querySelector("#log");

var str = 0;
var dex = 0;
var con = 0;
var int = 0;
var wis = 0;
var cha = 0;

form.addEventListener("submit", function(event) {
    var data = new FormData(form);
    var output = "";
    for (const entry of data) {
        if (entry[1] == "mansion")
            str = str + 5;
        output = output + entry[1] + "str: " + str + "\r" + "dex: " + dex + "\r";   
    };
    log.innerText = output;
    event.preventDefault();
}, false);
