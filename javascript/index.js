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
            cha += 5;
        if (entry[1] == "forest")
            str += 5;
        if (entry[1] == "home")
            int += 5;
        output = output 
            + "str: " + str + "\r" 
            + "dex: " + dex + "\r" 
            + "con: " + con + "\r"
            + "int: " + int + "\r"
            + "wis: " + wis + "\r"
            + "cha: " + cha + "\r";   
    };
    log.innerText = output;
    event.preventDefault();
}, false);
