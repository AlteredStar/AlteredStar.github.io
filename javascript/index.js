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
                
                //Question 3: Isekai
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
            
                //Question 4: Artifact
                if (store[i].value == "glove") {
                    int += 7;
                    mp += 30;
                    dex += 5;
                    spr += 3;
                    str -= 4;
                    vit -= 4;
                    ans += 1;    
                }
                if (store[i].value == "goblet") {
                    hp += 60;
                    str += 5;
                    vit += 5;
                    wis -= 3;
                    cha -= 3;
                    ans += 1;    
                }
                if (store[i].value == "mantle") {
                    dex += 9;
                    spr += 7;
                    hp -= 20;
                    vit -= 4;
                    ans += 1;    
                }
                if (store[i].value == "unlock") {
                    dex += 7;
                    int += 4;
                    hp += 40;
                    spr -= 5;
                    ans += 1;    
                } 
            
                //Question 5: Beginner Adventurer 
                if (store[i].value == "gather") {
                    wis += 7;
                    dex += 6;
                    cha -= 3;
                    ans += 1;    
                }
                if (store[i].value == "solo") {
                    str += 6;
                    spr += 6;
                    cha += 2;
                    hp += 40;
                    vit -= 4;
                    ans += 1;    
                }
                if (store[i].value == "party") {
                    wis += 4;
                    cha += 4;
                    str += 2;
                    vit += 2;
                    hp += 20;
                    mp -= 40;
                    ans += 1;    
                }
                if (store[i].value == "escort") {
                    dex += 5;
                    cha += 5;
                    wis += 3;
                    spr += 3;
                    vit -= 2;
                    int -= 2;
                    mp -= 20;
                    ans += 1;    
                } 
            
                //Question 6: Bandit Encounter
                if (store[i].value == "coop") {
                    wis += 4;
                    cha += 6;
                    str += 4;
                    hp -= 40;
                    ans += 1;    
                }
                if (store[i].value == "negotiate") {
                    cha += 6;
                    spr += 6;
                    int += 2;
                    wis -= 4;
                    ans += 1;    
                }
                if (store[i].value == "flee") {
                    dex += 8;
                    hp += 50;
                    wis += 5;
                    cha -= 4;
                    spr -= 4;
                    ans += 1;    
                }
                if (store[i].value == "ff") {
                    hp += 150;
                    vit += 10;
                    wis -= 5;
                    cha -= 10;
                    ans += 1;    
                } 
            
                //Question 7: 
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
                
                //Question 8: 
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
            
                //Question 9: 
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
            
                //Question 10: 
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
            
                //Question 11: 
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
