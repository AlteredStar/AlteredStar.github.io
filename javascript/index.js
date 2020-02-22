var form = document.querySelector("form");
var log = document.querySelector("#log");

var str = 0;
var dex = 0;
var con = 0;
var int = 0;
var wis = 0;
var cha = 0;

function displayRadioValue() {
    var q1 = document.getElementsByName('q1');
    var q2 = document.getElementsByName('q2');
    var output = "";
        if (q1[1].value == "mansion") {
            cha += 5;
        }
        if (q1[1].value == "forest") {
            str += 2;
            con += 3;
        }
        if (q1[1].value == "home") {
            wis += 7;
            cha -= 2;
        }
        
        if (q2[1].value == "police") {
            cha += 7;
        }
        if (q2[1].value == "leave") {
            wis += 5;
            cha -= 1;
        }
        if (q2[1].value == "take") {
            dex += 3;
            int += 3;
        }
        output = output 
            + "str: " + str + "\r" 
            + "dex: " + dex + "\r" 
            + "con: " + con + "\r"
            + "int: " + int + "\r"
            + "wis: " + wis + "\r"
            + "cha: " + cha + "\r";
        document.getElementById("result").innerHTML = output;
}
