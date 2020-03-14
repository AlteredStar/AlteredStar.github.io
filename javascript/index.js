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

var exHP = "";
var exMP = "";
var exStr = "";
var exVit = "";
var exDex = "";
var exAgi = "";
var exInt = "";
var exWis = "";
var exSpr = "";
var exCha = "";
var exSkill = "";

var temp = 0;

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
                    
                    ans += 1;
                }
                if (store[i].value == "mansion") {
                    
                    ans += 1;
                }
                if (store[i].value == "home") {
                    
                    ans += 1;
                }
                if (store[i].value == "camp") {
                    
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
                    str -= 100;
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
            
                //Question 10: The Second Crossroad, Journey 
                if (store[i].value == "north") {
                 
                    ans += 1;    
                }
                if (store[i].value == "east") {
                 
                    ans += 1;    
                }
                if (store[i].value == "south") {
                 
                    ans += 1;    
                }
                if (store[i].value == "west") {
                 
                    ans += 1;    
                } 
            
                //Question 11: Nobility
                if (store[i].value == "guild") {
                 
                    ans += 1;    
                }
                if (store[i].value == "academy") {
                 
                    ans += 1;    
                }
                if (store[i].value == "knight") {
                 
                    ans += 1;    
                }
                if (store[i].value == "devote") {
                 
                    ans += 1;    
                }
            
                //Question 12: 
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
                } 
            
                //Question 13: 
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
                } 
            
                //Question 14: 
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
                } 
            
                //Question 15: 
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
                } 
            
                //Question 16: 
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
                } 
            
        }
    }

    if (hp < 0) {
        temp = hp - 10;
        hp = 10;
        //exHP = " (" + temp + ")";
        exSkill += "+Weak Constitution - <BR>";
    }
    if (mp < 0) {
        temp = mp - 10;
        mp = 10
        //exMP = " (" + temp + ")"; 
        exSkill += "+Null Magic Body - <BR>";
    }
    if (str < 0) {
        temp = str - 1;
        str = 1;
        //exStr = " (" + temp + ")"; 
        exSkill += "+Soft Bones - <BR>";
    }
    if (vit < 0) {
        temp = vit - 1;
        vit = 1;
        //exVit = " (" + temp + ")"; 
        exSkill += "+Frail - <BR>";
    }
    if (dex < 0) {
        temp = dex - 1;
        dex = 1;
        //exDex = " (" + temp + ")"; 
        exSkill += "+Stiff - <BR>";
    }
    if (agi < 0) {
        temp = agi - 1;
        agi = 1;
        //exAgi = " (" + temp + ")"; 
        exSkill += "+Hobble - <BR>";
    }
    if (int < 0) {
        temp = int - 1;
        int = 1;
        //exInt = " (" + temp + ")"; 
        exSkill += "+Slow - <BR>";
    }
    if (wis < 0) {
        temp = wis - 1;
        wis = 1;
        //exWis = " (" + temp + ")"; 
        exSkill += "+Fool - <BR>";
    }
    if (spr < 0) {
        temp = spr - 1;
        spr = 1;
        //exSpr = " (" + temp + ")"; 
        exSkill += "+Coward - <BR>";
    }
    if (cha < 2) {
        temp = cha - 1;
        cha = 1;
        //exCha = " (" + temp + ")"; 
        exSkill += "+Awkward - <BR>";
    }
    
    output = output 
        + strHP.fontcolor("#DC143C") + hp + exHP + "<br>"
        + strMP.fontcolor("#0000cd") + mp + exMP + "<br>"
        + strStr.fontcolor("#8b0000") + str + exStr + "<br>" 
        + strVit.fontcolor("#00cd66") + vit + exVit + "<br>" 
        + strDex.fontcolor("#ffff00") + dex + exDex + "<br>"
        + strAgi.fontcolor("#F8F8FF") + agi + exAgi + "<br>"
        + strInt.fontcolor("#b0e0e6") + int + exInt + "<br>"
        + strWis.fontcolor("#dda0dd") + wis + exWis + "<br>"
        + strSpr.fontcolor("#e6e6fa") + spr + exWis + "<br>"
        + strCha.fontcolor("#ffc0cb") + cha + exCha + "<br><br>"
        + exSkill + "<br>";
    
    if (ans < 2) {
        document.getElementById("result").innerHTML = "you only answered " + ans + " questions, please answer all the questions :(";
    }
    else {
        document.getElementById("result").innerHTML = output;
        disableButton();
    }
        
}

function disableButton() {
    document.getElementById("button").disabled = 'true';   
}
