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
    
    var strHP = "Health Points: ";
    var strMP = "Mana Points: ";
    var strStr = "Strength: ";
    var strVit = "Vitality: ";
    var strDex = "Dexterity: ";
    var strInt = "Intelligence: ";
    var strWis = "Wisdom: ";
    var strSpr = "Spirit: ";
    var strCha = "Charisma: ";
    
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
        
        output = output 
            + strHP.fontcolor("#DC143C") + hp + "<br>"
            + strMP.fontcolor("#0000cd") + mp + "<br>"
            + strStr.fontcolor("#8b0000") + str + "<br>" 
            + strVit.fontcolor("#00cd66") + vit + "<br>" 
            + strDex.fontcolor("#ffff00") + dex + "<br>"
            + strInt.fontcolor("#b0e0e6") + int + "<br>"
            + strWis.fontcolor("#dda0dd") + wis + "<br>"
            + strSpr.fontcolor("#e6e6fa") + spr + "<br>"
            + strCha.fontcolor("#ffc0cb") + cha + "<br>";
    
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
