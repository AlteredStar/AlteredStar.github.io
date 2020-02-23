function register() {
    var hp = 100;
    var mp = 100;
    var str = 10;
    var vit = 10;
    var dex = 10;
    var int = 10;
    var wis = 10;
    var cha = 10;
    var spr = 10;
    var ans = 0;
    var store = document.forms[0];
    var output = "";
    for (var i = 0; i < store.length; i++) {
        if (store[i].checked) {
                if (store[i].value == "forest") {
                    
                    ans += 1;
                }
                if (store[i].value == "mansion") {
                    
                    ans += 1;
                }
                if (store[i].value == "home") {
                    
                    ans += 1;
                }
                
            
                if (store[i].value == "police") {
                    
                    ans += 1;
                }
                if (store[i].value == "leave") {
                    
                    ans += 1;
                }
                if (store[i].value == "take") {
                    
                    ans += 1;
                }  
            
        }
    }
    //"#cd0000 Health Points: "
        var str = "Health Points: ";
        output = output 
            + str.fontcolor("#cd0000") + hp + "<br>"
            + "#0000cd Mana Points: " + mp + "<br>"
            + "#8b0000 Strength: " + str + "<br>" 
            + "#00cd66 Vitality: " + vit + "<br>" 
            + "#ffff00 Dexterity: " + dex + "<br>"
            + "#b0e0e6 Intelligence: " + int + "<br>"
            + "#dda0dd Wisdom: " + wis + "<br>"
            + "#e6e6fa Spirit: " + spr + "<br>"
            + "#ffc0cb Charisma: " + cha + "<br>";
    
        if (!(ans == 2)) {
            document.getElementById("result").innerHTML = "you did not answer all the questions :(";
        }
        if (ans > 1) {
            document.getElementById("result").innerHTML = output;
            disableButton();
        }
        
}

function disableButton() {
    document.getElementById("button").disabled = 'true';   
}
