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
        output = output 
            + "<font color="#cd0000">Health Points: </font>" + hp + "<br>"
            + "<font color="#0000cd">Mana Points: </font>" + mp + "<br>"
            + "<font color="#8b0000">Strength: </font>" + str + "<br>" 
            + "<font color="#00cd66">Vitality: </font>" + vit + "<br>" 
            + "<font color="#ffff00">Dexterity: </font>" + dex + "<br>"
            + "<font color="#b0e0e6">Intelligence: </font>" + int + "<br>"
            + "<font color="#dda0dd">Wisdom: </font>" + wis + "<br>"
            + "<font color="#e6e6fa">Spirit: </font>" + spr + "<br>"
            + "<font color="#ffc0cb">Charisma: </font>" + cha + "<br>";
    
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
