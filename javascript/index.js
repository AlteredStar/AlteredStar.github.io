var strHP = "Health Points: ";
var strMP = "Mana Points: ";
var strStr = "Strength: ";
var strVit = "Vitality: ";
var strDex = "Dexterity: ";
var strAgi = "Agility: ";
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
    var agi = 10;
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
                    agi += 5;
                    cha += 3;
                    int -= 3;
                    ans += 1;
                }
                if (store[i].value == "mansion") {
                    int += 7;
                    mp += 30;
                    cha += 3;
                    str -= 3;
                    ans += 1;
                }
                if (store[i].value == "home") {
                    spr += 6;
                    hp += 50;
                    mp += 50;
                    agi += 2;
                    cha -= 4;
                    int -= 4;
                    ans += 1;
                }
                if (store[i].value == "camp") {
                    wis += 6;
                    dex += 6;
                    vit += 4;
                    hp -= 20;
                    agi -= 4;
                    ans +=1;
                }
                
                //Question 2: Pouch of Gold
                if (store[i].value == "guards") {
                    spr += 6;
                    cha += 6;
                    wis += 4;
                    str -= 4;
                    hp -= 20;
                    ans += 1;
                }
                if (store[i].value == "leave") {
                    agi += 6;
                    vit += 4;
                    wis += 4;
                    cha -= 2;
                    spr -= 2;
                    ans += 1;
                }
                if (store[i].value == "gold") {
                    agi += 6;
                    dex += 6;
                    hp += 10;
                    str += 4;
                    spr -= 7;
                    ans += 1;
                }
                if (store[i].value == "orphanage") {
                    spr += 7;
                    vit += 4;
                    cha += 5;
                    str -= 3;
                    dex -= 3;
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
                    cha += 4;
                    vit += 2;
                    dex -= 2;
                    spr -= 4;
                    ans += 1;    
                }
                if (store[i].value == "escape") {
                    dex += 6;
                    agi += 6;
                    hp += 80;
                    spr -= 4;
                    cha -= 6;
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
                    dex += 7;
                    agi += 8;
                    spr += 7;
                    hp -= 80;
                    vit -= 4;
                    ans += 1;    
                }
                if (store[i].value == "unlock") {
                    dex += 9;
                    int += 7;
                    agi += 5;
                    hp -= 30;
                    vit -= 4;
                    spr -= 4;
                    ans += 1;    
                } 
            
                //Question 5: Beginner Adventurer 
                if (store[i].value == "gather") {
                    wis += 5;
                    dex += 5;
                    agi += 3;
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
                    wis += 6;
                    cha += 4;
                    str += 2;
                    vit += 2;
                    dex -= 2;
                    hp += 20;
                    mp -= 40;
                    ans += 1;    
                }
                if (store[i].value == "escort") {
                    dex += 3;
                    cha += 6;
                    wis += 6;
                    agi += 3;
                    vit -= 3;
                    int -= 3;
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
                    dex += 4;
                    agi += 9;
                    hp += 40;
                    wis += 3;
                    str -= 2;
                    cha -= 4;
                    spr -= 4;
                    ans += 1;    
                }
                if (store[i].value == "ff") {
                    hp += 200;
                    vit += 10;
                    wis -= 5;
                    cha -= 10;
                    str -= 5;
                    ans += 1;    
                } 
            
                //Question 7: Kobold Skirmish
                if (store[i].value == "girl") {
                    cha += 6;
                    str += 4;
                    dex += 4;
                    agi += 2;
                    mp -= 60;
                    ans += 1;    
                }
                if (store[i].value == "boy") {
                    cha += 6;
                    int += 4;
                    wis += 4;
                    agi -= 2;
                    hp -= 60;
                    ans += 1;
                }
                if (store[i].value == "report") {
                    wis += 6;
                    agi += 6;
                    hp += 120;
                    vit -= 4;
                    spr -= 4;
                    cha -= 4;
                    ans += 1;    
                }
                if (store[i].value == "watch") {
                    wis += 6;
                    vit += 4;
                    hp += 40;
                    agi += 2;
                    cha -= 4;
                    spr -= 2;
                    ans += 1;    
                } 
                
                //Question 8: Archives
                if (store[i].value == "sword") {
                    str += 4;
                    agi += 4;
                    cha += 4;
                    hp += 20;
                    mp -= 40;
                    ans += 1;    
                }
                if (store[i].value == "sage") {
                    int += 6;
                    wis += 6;
                    mp += 80;
                    str -= 6;
                    vit -= 4;
                    ans += 1;    
                }
                if (store[i].value == "tamer") {
                    mp += 60;
                    wis += 4;
                    hp += 40;
                    str -= 4;
                    ans += 1;    
                }
                if (store[i].value == "faith") {
                    spr += 8;
                    cha += 2;
                    mp += 20;
                    str -= 2;
                    ans += 1;    
                }
                if (store[i].value == "adventurer") {
                    str += 3;
                    dex += 3;
                    agi += 3;
                    hp += 30;
                    cha += 3;
                    spr -= 5;
                    ans += 1;    
                }
                if (store[i].value == "botanist") {
                    dex += 5;
                    spr += 3;
                    wis += 3;
                    int += 3;
                    str -= 4;
                    ans += 1;    
                }
                if (store[i].value == "arch") {
                    wis += 8;
                    int += 2;
                    mp += 20;
                    spr += 2;
                    str -= 4;
                    ans += 1;    
                }
            
                //Question 9: Murder Mystery 
                if (store[i].value == "butler") {
                    
                    ans += 1;    
                }
                if (store[i].value == "maid") {
                 
                    ans += 1;    
                }
                if (store[i].value == "wife") {
                 
                    ans += 1;    
                }
                if (store[i].value == "daughter") {
                 
                    ans += 1;    
                } 
            
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
        + strAgi.fontcolor("#F8F8FF") + agi + "<br>"
        + strInt.fontcolor("#b0e0e6") + int + "<br>"
        + strWis.fontcolor("#dda0dd") + wis + "<br>"
        + strSpr.fontcolor("#e6e6fa") + spr + "<br>"
        + strCha.fontcolor("#ffc0cb") + cha + "<br>";
    
    if (ans < 6) {
        document.getElementById("result").innerHTML = "you only answered " + ans + " questions, please answer all the questions :(";
    }
    if (ans > 5) {
        document.getElementById("result").innerHTML = output;
        disableButton();
    }
        
}

function disableButton() {
    document.getElementById("button").disabled = 'true';   
}
