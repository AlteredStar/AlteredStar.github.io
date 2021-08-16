function generate() {
    var storeItem = "";
    storeItem = document.getElementById("weapdata").value;
    var itemArr = storeItem.split(" ");
    
    for (let i = 0; i < storeItem.legnth; i++) {
        if (storeItem[i] == "shield")
            generateShield();
    }
    generateWeap();
        
}

function generateWeap() {
    var storeWeap = "";
    var name = "";
    var nameCounter = 1;
    var tier = "";
    var level = 1;
    var weap = "";
    var weight = 0;
    var material = "";
    var dmg = 0;
    var attackSpeed = 0;
    var range = 0;
    var knockBack = 0;
    
    var attLine = "";
    var attType = "";
    var attAmt = 0;
    
    var jsonT = "";
    
    storeWeap = document.getElementById("weapData").value;
    var weapArr = storeWeap.split(" ");
    
    //fetch name
    for (let i = 0; i < weapArr.length; i++) {
        var boo = true;
        boo = !(weapArr[i].charAt(0) > -1);
        if (i < 4 && boo) {
            name += weapArr[i]
            if (!(weapArr[i+1].charAt(0) > -1)) {
                name+= " ";
                nameCounter++;
            }
        }
    }
    weapArr.splice(0, nameCounter);
    //fetch weap
    weap = weapArr[weapArr.length-1];
    weapArr.splice(weapArr.length-1, 1);
    //fetch material
    material = weapArr[weapArr.length-1];
    weapArr.splice(weapArr.length-1, 1);
    //fetch rarity or tier
    tier = weapArr[weapArr.length-1];
    weapArr.splice(weapArr.length-1, 1);
    //fetch dmg
    dmg = weapArr[0];
    weapArr.splice(0, 1);
    //fetch attack speed
    attackSpeed = weapArr[0];
    weapArr.splice(0, 1);
    //fetch range
    range = weapArr[0];
    weapArr.splice(0, 1);
    //fetch knock back
    knockBack = weapArr[0];
    weapArr.splice(0, 2);
    //fetch level
    level = weapArr[weapArr.length-1]
    weapArr.splice(weapArr.length-1, 1);
    //fetch weight
    weight = weapArr[weapArr.length-1]
    weapArr.splice(weapArr.length-1, 1);
    
    //fetch attributes
    while (weapArr.length > 1) {
        attAmt = weapArr[0];
        attType = weapArr[1];
        weapArr.splice(0,2);
        switch (attType) {
            case 'STR':
                attLine += "\n\t\t\"strength\": " + attAmt
                if (weapArr.length != 0)
                    attLine += ",";
                break;
            case 'DEX':
                attLine += "\n\t\t\"dexterity\": " + attAmt
                if (weapArr.length != 0)
                    attLine += ",";
                break;
            case 'AGI':
                attLine += "\n\t\t\"agility\": " + attAmt
                if (weapArr.length != 0)
                    attLine += ",";
                break;
            case 'VIT':
                attLine += "\n\t\t\"vitality\": " + attAmt
                if (weapArr.length != 0)
                    attLine += ",";
                break;
            case 'END':
                attLine += "\n\t\t\"endurance\": " + attAmt
                if (weapArr.length != 0)
                    attLine += ",";
                break;
            case 'INT':     
                attLine += "\n\t\t\"intelligence\": " + attAmt
                if (weapArr.length != 0)
                    attLine += ",";
                break;
            case 'SPR':
                attLine += "\n\t\t\"spirit\": " + attAmt
                if (weapArr.length != 0)
                    attLine += ",";
                break;
            default:
                attLine = "";
        }
        if (weapArr.length == 0)
            attLine += "\n\t";
    }
    
    //compile json skeleton for textarea
    jsonT += "{\n";
    jsonT += "\t\"name\": \"" + name + "\",\n";
    jsonT += "\t\"tier\": \"" + tier + "\",\n";
    jsonT += "\t\"level\": \"" + level + "\",\n";
    jsonT += "\t\"weapon\": \"" + weap + "\",\n";
    jsonT += "\t\"weight\": \"" + weight + "\",\n";
    jsonT += "\t\"material\": \"" + material + "\",\n";
    jsonT += "\t\"damage\": \"" + dmg + "\",\n";
    jsonT += "\t\"attackSpeed\": \"" + attackSpeed + "\",\n";
    jsonT += "\t\"attackRange\": \"" + range + "\",\n";
    jsonT += "\t\"knockback\": \"" + knockBack + "\",\n";
    jsonT += "\t\"stats\": {" + attLine + "},\n";
    jsonT += "\t\"type\": \"" + "weapon" + "\"\n";
    jsonT += "}";
    
    document.getElementById("weapResult").value = jsonT;
    $('#weapData').val('');
    copy();
}


function generateShield() {
    var storeShield = "";
    var name = "";
    var nameCounter = 1;
    var tier = "";
    var level = 1;
    var weight = 0;
    var block = 0;
    var blockRec = 0;
    
    var attLine = "";
    var attType = "";
    var attAmt = 0;
    
    //holds the json at end
    var jsonT = "";
    
    storeWeap = document.getElementById("weapData").value;
    var weapArr = storeWeap.split(" ");
    
    //fetch name
    for (let i = 0; i < weapArr.length; i++) {
        var boo = true;
        boo = !(weapArr[i].charAt(0) > -1);
        if (i < 4 && boo) {
            name += weapArr[i]
            if (!(weapArr[i+1].charAt(0) > -1)) {
                name+= " ";
                nameCounter++;
            }
        }
    }
    weapArr.splice(0, nameCounter);
    //fetch weap
    weap = weapArr[weapArr.length-1];
    weapArr.splice(weapArr.length-1, 1);
    //fetch rarity or tier
    tier = weapArr[weapArr.length-1];
    weapArr.splice(weapArr.length-1, 1);
    //fetch block
    block = weapArr[0];
    weapArr.splice(0, 1);
    //fetch block recovery
    blockRec = weapArr[0];
    weapArr.splice(0, 1);
    //fetch level
    level = weapArr[weapArr.length-1]
    weapArr.splice(weapArr.length-1, 1);
    //fetch weight
    weight = weapArr[weapArr.length-1]
    weapArr.splice(weapArr.length-1, 1);
    
    //fetch attributes
    while (weapArr.length > 1) {
        attAmt = weapArr[0];
        attType = weapArr[1];
        weapArr.splice(0,2);
        switch (attType) {
            case 'STR':
                attLine += "\n\t\t\"strength\": " + attAmt
                if (weapArr.length != 0)
                    attLine += ",";
                break;
            case 'DEX':
                attLine += "\n\t\t\"dexterity\": " + attAmt
                if (weapArr.length != 0)
                    attLine += ",";
                break;
            case 'AGI':
                attLine += "\n\t\t\"agility\": " + attAmt
                if (weapArr.length != 0)
                    attLine += ",";
                break;
            case 'VIT':
                attLine += "\n\t\t\"vitality\": " + attAmt
                if (weapArr.length != 0)
                    attLine += ",";
                break;
            case 'END':
                attLine += "\n\t\t\"endurance\": " + attAmt
                if (weapArr.length != 0)
                    attLine += ",";
                break;
            case 'INT':     
                attLine += "\n\t\t\"intelligence\": " + attAmt
                if (weapArr.length != 0)
                    attLine += ",";
                break;
            case 'SPR':
                attLine += "\n\t\t\"spirit\": " + attAmt
                if (weapArr.length != 0)
                    attLine += ",";
                break;
            default:
                attLine = "";
        }
        if (weapArr.length == 0)
            attLine += "\n\t";
    }
    
    //compile json skeleton for textarea
    jsonT += "{\n";
    jsonT += "\t\"name\": \"" + name + "\",\n";
    jsonT += "\t\"tier\": \"" + tier + "\",\n";
    jsonT += "\t\"level\": \"" + level + "\",\n";
    jsonT += "\t\"weight\": \"" + weight + "\",\n";
    jsonT += "\t\"material\": \"" + "shield" + "\",\n";
    jsonT += "\t\"block\": \"" + block + "\",\n";
    jsonT += "\t\"blockRecovery\": \"" + blockRec + "\",\n";
    jsonT += "\t\"stats\": {" + attLine + "},\n";
    jsonT += "\t\"type\": \"" + "equipment" + "\"\n";
    jsonT += "}";
    
    document.getElementById("weapResult").value = jsonT;
    $('#weapData').val('');
    copy();
}

function copy() {
    var copyText = document.getElementById("weapResult");
    copyText.select();
    copyText.setSelectionRange(0,99999);
    document.execCommand("copy");
}
