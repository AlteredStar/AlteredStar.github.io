var form = document.querySelector("form");
var log = document.querySelector("#log");

var str = 10;
var dex = 10;
var con = 10;
var int = 10;
var wis = 10;
var cha = 10;

function register() {
    var store = document.forms[0];
    var output = "";
    for (var i = 0; i < store.length; i++) {
            if (store[i].checked) {
                if (store[i].value == "forest") {
                    str += 2;
                    con += 3;
                }
                if (store[i].value == "mansion") {
                    cha += 5;
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
            + "Strength: " + str + "<br>" 
            + "Dexterity: " + dex + "<br>" 
            + "Constitution: " + con + "<br>"
            + "Intelligence: " + int + "<br>"
            + "Wisdom: " + wis + "<br>"
            + "Charisma: " + cha + "<br>";
        document.getElementById("result").innerHTML = output;
        disableButton();
}

function disableButton() {
    document.getElementById("button").disabled = 'true';   
}

$(":radio").change(function() {
    var names = {};
    $(':radio').each(function() {
        names[$(this).attr('name')] = true;
    });
    var count = 0;
    $.each(names, function() { 
        count++;
    });
    if ($(':radio:checked').length === count) {
        alert("all answered");
    }
}).change();
