var form = document.querySelector("form");
var log = document.querySelector("#log");

var str = 0;
var dex = 0;
var con = 0;
var int = 0;
var wis = 0;
var cha = 0;

function displayRadioValue() {
    document.getElementById("result").innerHTML = "";
    var ele = document.getElementsByTagName('input');
    var output = "";
    for (int i = 0; i < ele.length; i++) {
        if (ele[i].type="radio") {
            if (ele[i].checked) {
                if (ele[i].value == "mansion") {
                    cha += 5;
                }
                if (ele[i].value == "forest") {
                    str += 2;
                    con += 3;
                }
                if (ele[i].value == "home") {
                    wis += 7;
                    cha -= 2;
                }
        
                if (ele[i].value == "police") {
                    cha += 7;
                }
                if (ele[i].value == "leave") {
                    wis += 5;
                    cha -= 1;
                }
                if (ele[i].value == "take") {
                    dex += 3;
                    int += 3;
                }   
            }
        }
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
