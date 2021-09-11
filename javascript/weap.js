function generate() {
    var storeItem = "";
    storeItem = document.getElementById("weapData").value;
    var itemArr = storeItem.split(" ");
    
    if (itemArr[itemArr.length-1] == "shield")
        generateShield();
    else
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
    var attackString = "";
    var knockBack = 0;
    
    var attLine = "";
    var attType = "";
    var attAmt = 0;
    var affixAmt = 0;
    var hasAffix = false;
    
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
    
    //fetch attackString
    switch (weap) {
        case 'Sword':
            if (weight > 40)
                attackString = "sword_heavy";
            if (weight <= 40)
                attackString = null;
            break;
        case 'Axe':
            if (weight > 40)
                attackString = "axe_heavy";
            if (weight <= 40)
                attackString = null;
            break;
        case 'Spear':
            attackString = null;
            break;
        case 'Scythe':
            attackString = null;
            break;
        case 'Dagger':
            attackString = null;
            break;
        case 'Bow':
            if (weight > 25)
                attackString = "bow_long";
            if (weight <= 25)
                attackString = null;            
            break;
        case 'Catalyst':
            if (weight > 30)
                attackString = "catalyst_tome";
            if (weight <= 30 && weight > 20)
                attackString = "catalyst_staff";     
            if (weight <= 20)
                attackString = null;
            break;
    }
    
    //fetch attributes
    while (weapArr.length > 1) {
        attAmt = weapArr[0];
        attType = weapArr[1];
        weapArr.splice(0,2);
        switch (attType) {
            case 'STR':
                attLine += "\n\t\t\"strength\": " + attAmt;
                if (weapArr.length != 0)
                    attLine += ",";
                break;
            case 'DEX':
                attLine += "\n\t\t\"dexterity\": " + attAmt;
                if (weapArr.length != 0)
                    attLine += ",";
                break;
            case 'AGI':
                attLine += "\n\t\t\"agility\": " + attAmt;
                if (weapArr.length != 0)
                    attLine += ",";
                break;
            case 'VIT':
                attLine += "\n\t\t\"vitality\": " + attAmt;
                if (weapArr.length != 0)
                    attLine += ",";
                break;
            case 'END':
                attLine += "\n\t\t\"endurance\": " + attAmt;
                if (weapArr.length != 0)
                    attLine += ",";
                break;
            case 'INT':     
                attLine += "\n\t\t\"intelligence\": " + attAmt;
                if (weapArr.length != 0)
                    attLine += ",";
                break;
            case 'SPR':
                attLine += "\n\t\t\"spirit\": " + attAmt;
                if (weapArr.length != 0)
                    attLine += ",";
                break;
            case 'AFF':
                affixAmt = attAmt;
                hasAffix = true;
                break;
            default:
                attLine = "";
        }
        if (weapArr.length == 0 && attLine != "")
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
    if (attackString != null)
        jsonT += "\t\"attackString\": \"" + attackString + "\",\n";
    else
        jsonT += "\t\"attackString\": " + null + ",\n";
    jsonT += "\t\"knockback\": \"" + knockBack + "\",\n";
    if (hasAffix) {
        jsonT += "\t\"affixGroup\": \"" + "globalAffixes" + "\",\n";
        jsonT += "\t\"affixAmount\": \"" + affixAmt + "\",\n";
    }
    jsonT += "\t\"stats\": {" + attLine + "},\n";
    jsonT += "\t\"type\": \"" + "weapon" + "\"\n";
    jsonT += "}";
    
    document.getElementById("weapResult").value = jsonT;
    $('#weapData').val('');
    
    var fileName = "";
    var fileText = document.getElementById("weapResult").value;
    fileName = name;
    fileName = fileName.toLowerCase();
    fileName = fileName.replaceAll(" ", "_");
    fileName = fileName.replaceAll("'", "");
    fileName += ".json";
    download(fileName, fileText); 
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
    var affixAmt = 0;
    var hasAffix = false;
    
    //holds the json at end
    var jsonT = "";
    
    storeShield = document.getElementById("weapData").value;
    var shieldArr = storeShield.split(" ");
    
    //fetch name
    for (let i = 0; i < shieldArr.length; i++) {
        var boo = true;
        boo = !(shieldArr[i].charAt(0) > -1);
        if (i < 4 && boo) {
            name += shieldArr[i]
            if (!(shieldArr[i+1].charAt(0) > -1)) {
                name+= " ";
                nameCounter++;
            }
        }
    }
    shieldArr.splice(0, nameCounter);
    //fetch rarity or tier
    shieldArr.splice(shieldArr.length-1, 1);
    tier = shieldArr[shieldArr.length-1];
    shieldArr.splice(shieldArr.length-1, 1);
    //fetch block
    block = shieldArr[0];
    shieldArr.splice(0, 1);
    //fetch block recovery
    blockRec = shieldArr[0];
    shieldArr.splice(0, 1);
    //fetch level
    level = shieldArr[shieldArr.length-1]
    shieldArr.splice(shieldArr.length-1, 1);
    //fetch weight
    weight = shieldArr[shieldArr.length-1]
    shieldArr.splice(shieldArr.length-1, 1);
    
    //fetch attributes
    while (shieldArr.length > 1) {
        attAmt = shieldArr[0];
        attType = shieldArr[1];
        shieldArr.splice(0,2);
        switch (attType) {
            case 'STR':
                attLine += "\n\t\t\"strength\": " + attAmt
                if (shieldArr.length != 0)
                    attLine += ",";
                break;
            case 'DEX':
                attLine += "\n\t\t\"dexterity\": " + attAmt
                if (shieldArr.length != 0)
                    attLine += ",";
                break;
            case 'AGI':
                attLine += "\n\t\t\"agility\": " + attAmt
                if (shieldArr.length != 0)
                    attLine += ",";
                break;
            case 'VIT':
                attLine += "\n\t\t\"vitality\": " + attAmt
                if (shieldArr.length != 0)
                    attLine += ",";
                break;
            case 'END':
                attLine += "\n\t\t\"endurance\": " + attAmt
                if (shieldArr.length != 0)
                    attLine += ",";
                break;
            case 'INT':     
                attLine += "\n\t\t\"intelligence\": " + attAmt
                if (shieldArr.length != 0)
                    attLine += ",";
                break;
            case 'SPR':
                attLine += "\n\t\t\"spirit\": " + attAmt
                if (shieldArr.length != 0)
                    attLine += ",";
                break;
            case 'AFF':
                affixAmt = attAmt;
                hasAffix = true;
                break;
            default:
                attLine = "";
        }
        if (shieldArr.length == 0 && attLine != "")
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
    if (hasAffix) {
        jsonT += "\t\"affixGroup\": \"" + "globalAffixes" + "\",\n";
        jsonT += "\t\"affixAmount\": \"" + affixAmt + "\",\n";
    }
    jsonT += "\t\"stats\": {" + attLine + "},\n";
    jsonT += "\t\"type\": \"" + "equipment" + "\"\n";
    jsonT += "}";
    
    document.getElementById("weapResult").value = jsonT;
    $('#weapData').val('');
    
    var fileText = document.getElementById("weapResult").value;
    var fileName = name;
    fileName = fileName.toLowerCase();
    fileName = fileName.replaceAll(" ", "_");
    fileName = fileName.replaceAll("'", "");
    fileName += ".json";
    download(fileName, fileText); 
}

function downloadJson() {
    download(fileName, fileText);   
}

function download(filename, textInput) {
    var element = document.createElement('a');
    element.setAttribute('href','data:text/plain;charset=utf-8,' + encodeURIComponent(textInput));
    element.setAttribute('download', filename);
    document.body.appendChild(element);
    element.click();
    //document.body.removeChild(element);
}

function copy() {
    var copyText = document.getElementById("weapResult");
    copyText.select();
    copyText.setSelectionRange(0,99999);
    document.execCommand("copy");
}
