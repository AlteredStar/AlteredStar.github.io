var form = document.querySelector("form");
var log = document.querySelector("#log");

var str = 0;
var dex = 0;
var con = 0;
var int = 0;
var wis = 0;
var cha = 0;

function register() {
    var store = document.forms[0];
    var output = "";
    for (var i = 0; i < store.length; i++) {
            if (store[i].checked) {
                if (store[i].value == "mansion") {
                    cha += 5;
                }
                if (store[i].value == "forest") {
                    str += 2;
                    con += 3;
                }
                if (store[i].value == "home") {
                    wis += 7;
                    cha -= 2;
                }
        
                if (store[i].value == "police") {
                    cha += 7;
                }
                if (store[i].value == "leave") {
                    wis += 5;
                    cha -= 1;
                }
                if (store[i].value == "take") {
                    dex += 3;
                    int += 3;
                }   
            }
    }
        output = output 
            + "Strength: " + str + "\n" 
            + "Dexterity: " + dex + "\n" 
            + "Constitution: " + con + "\n"
            + "Intelligence: " + int + "\n"
            + "Wisdom: " + wis + "\n"
            + "Charisma: " + cha + "\n";
        document.getElementById("result").value = output;
}
