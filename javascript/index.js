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

function register() {
    
    
    var store = document.forms[0];
    var output = "";
    
    for (var i = 0; i < store.length; i++) {
        if (store[i].checked) {
                //Question 1: Crossroads
                if (store[i].value == "forest") {
                    str += 5;
                    spr += 3;
                    cha += 3;
                    int -= 1;
                    ans += 1;
                }
                if (store[i].value == "mansion") {
                    int += 7;
                    dex += 3;
                    cha += 3;
                    vit -= 3;
                    ans += 1;
                }
                if (store[i].value == "home") {
                    spr += 7;
                    hp += 50;
                    mp += 50;
                    wis += 1;
                    cha -= 4;
                    int -= 4;
                    ans += 1;
                }
                if (store[i].value == "camp") {
                    hp += 30
                    vit += 7;
                    wis += 2;
                    dex += 2;
                    cha -= 2;
                    int -= 2;
                    ans +=1;
                }
                
                //Question 2: Pouch of Gold
                if (store[i].value == "guards") {
                    spr += 4;
                    wis += 6;
                    cha += 5;
                    str -= 2;
                    vit -= 2;
                    dex -= 1;
                    ans += 1;
                }
                if (store[i].value == "leave") {
                    vit += 6;
                    hp += 30;
                    wis += 4;
                    cha -= 3;
                    ans += 1;
                }
                if (store[i].value == "gold") {
                    str += 4;
                    dex += 6;
                    hp += 30;
                    vit += 2;
                    spr -= 5;
                    ans += 1;
                }
                if (store[i].value == "orphanage") {
                    spr += 7;
                    vit += 4;
                    cha += 4;
                    str -= 3;
                    dex -= 2;
                    ans += 1;    
                }
                
                //Question 3:
                if (store[i].value == "help") {
                    spr += 4;
                    str += 4;
                    vit += 4;
                    cha += 4;
                    hp -= 30;
                    wis -= 3;
                    ans += 1;    
                }
                if (store[i].value == "deceive") {
                    wis += 5;
                    int += 5;
                    cha += 2;
                    vit += 2;
                    spr -= 4;
                    ans += 1;    
                }
                if (store[i].value == "escape") {
                    hp += 50;
                    mp += 40;
                    str += 3;
                    dex += 6;
                    cha -= 5;
                    spr -= 3;
                    ans += 1;    
                }
                if (store[i].value == "charm") {
                    cha += 7;
                    str += 5;
                    spr -= 2;
                    ans += 1;    
                }
            
                //Question 4: 
                /*
                if (store[i].value == "") {
                 
                    ans += 1;    
                }
                if (store[i].value == "") {
                 
                    ans += 1;    
                }
                if (store[i].value == "") {
                 
                    ans += 1;    
                }
                if (store[i].value == "") {
                 
                    ans += 1;    
                } */
            
        }
    }        
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
    
    if (!(ans == 3)) {
        document.getElementById("result").innerHTML = "you did not answer all the questions :(";
    }
    if (ans == 3) {
        document.getElementById("result").innerHTML = output;
        disableButton();
    }
        
}

function disableButton() {
    document.getElementById("button").disabled = 'true';   
}
