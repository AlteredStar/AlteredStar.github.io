function generateAll() {
    var helm = [];
    var chest = [];
    var leg = [];
    var boots = [];
    var hasColor = false;
    
    var storeArmor = document.getElementById("allArmorData").value;
    storeArmor = storeArmor.replace("   ", "  ");
    var armorArr = storeArmor.split("  ");
    
    if (armorArr.length == 4) {
        helm = armorArr[0];
        chest = armorArr[1];
        leg = armorArr[2];
        boots = armorArr[3];
    }
        
    
    if (armorArr.length == 8) {
        helm = armorArr[0] + armorArr[1];
        chest = armorArr[2] + armorArr[3];
        leg = armorArr[4] + armorArr[5];
        boots = armorArr[6] + armorArr[7];
    }

    
    generateAllArmor(helm);
    generateAllArmor(chest);
    generateAllArmor(leg);
    generateAllArmor(boots);

}

function generateAllArmor(storeArmor) {
    var name = "";
    var nameCounter = 1;
    var tier = "";
    var level = 1;
    var color = "";
    var hasColor = false;
    var hp = 0;
    var armor = 0;
    var res = 0;
    var weight = 0;
    var material = "";
    
    var attLine = "";
    var attType = "";
    var attAmt = 0;
    
    var jsonT = "";
    
    //var storeArmor = document.getElementById("armorData").value;
    var armorArr = storeArmor.split(" ");
    
    //fetch name
    for (let i = 0; i < armorArr.length; i++) {
        var boo = true;
        boo = !(armorArr[i].charAt(0) > -1);
        if (i < 4 && boo) {
            name += armorArr[i]
            if (!(armorArr[i+1].charAt(0) > -1)) {
                name+= " ";
                nameCounter++;
            }
        }
    }
    armorArr.splice(0, nameCounter);
    //fetch color if present
    if (armorArr[armorArr.length-1].charAt(0) == "#") {
        color = armorArr[armorArr.length-1];
        hasColor = true;
        armorArr.splice(armorArr.length-1, 1);
    }
    //fetch material
    material = armorArr[armorArr.length-1];
    armorArr.splice(armorArr.length-1, 1);
    //fetch rarity or tier
    tier = armorArr[armorArr.length-1];
    armorArr.splice(armorArr.length-1, 1);
    //fetch health
    hp  = armorArr[0];
    armorArr.splice(0, 1);
    //fetch armor
    armor = armorArr[0];
    armorArr.splice(0, 1);
    //fetch resistance
    res = armorArr[0];
    armorArr.splice(0, 1);
    //fetch level
    level = armorArr[armorArr.length-1]
    armorArr.splice(armorArr.length-1, 1);
    //fetch weight
    weight = armorArr[armorArr.length-1]
    armorArr.splice(armorArr.length-1, 1);
    
    //fetch attributes
    while (armorArr.length > 1) {
        attAmt = armorArr[0];
        attType = armorArr[1];
        armorArr.splice(0,2);
        switch (attType) {
            case 'STR':
                attLine += "\n\t\t\"strength\": " + attAmt
                if (armorArr.length != 0)
                    attLine += ",";
                break;
            case 'DEX':
                attLine += "\n\t\t\"dexterity\": " + attAmt
                if (armorArr.length != 0)
                    attLine += ",";
                break;
            case 'AGI':
                attLine += "\n\t\t\"agility\": " + attAmt
                if (armorArr.length != 0)
                    attLine += ",";
                break;
            case 'VIT':
                attLine += "\n\t\t\"vitality\": " + attAmt
                if (armorArr.length != 0)
                    attLine += ",";
                break;
            case 'END':
                attLine += "\n\t\t\"endurance\": " + attAmt
                if (armorArr.length != 0)
                    attLine += ",";
                break;
            case 'INT':     
                attLine += "\n\t\t\"intelligence\": " + attAmt
                if (armorArr.length != 0)
                    attLine += ",";
                break;
            case 'SPR':
                attLine += "\n\t\t\"spirit\": " + attAmt
                if (armorArr.length != 0)
                    attLine += ",";
                break;
            default:
                attLine = "";
        }
        if (armorArr.length == 0)
            attLine += "\n\t";
    }
     
    //compile json skeleton for textarea
    jsonT += "{\n";
    jsonT += "\t\"name\": \"" + name + "\",\n";
    jsonT += "\t\"tier\": \"" + tier + "\",\n";
    jsonT += "\t\"level\": \"" + level + "\",\n";
    jsonT += "\t\"weight\": \"" + weight + "\",\n";
    jsonT += "\t\"material\": \"" + material + "\",\n";
    if (hasColor)
        jsonT += "\t\"color\": \"" + color + "\",\n";
    jsonT += "\t\"health\": \"" + hp + "\",\n"
    jsonT += "\t\"armor\": \"" + armor + "\",\n"
    jsonT += "\t\"resistance\": \"" + res + "\",\n"
    jsonT += "\t\"stats\": {" + attLine + "},\n"
    jsonT += "\t\"type\": \"" + "equipment" + "\"\n"
    jsonT += "}";
    
    //document.getElementById("allArmorResult").value = jsonT;
    //$('#armorData').val('');
    
    var fileName = "";
    //var fileText = document.getElementById("allArmorResult").value;
    fileName = name;
    fileName = fileName.toLowerCase();
    fileName = fileName.replaceAll(" ", "_");
    fileName += ".json";
    download(fileName, jsonT); 
}

function generate() {
    var name = "";
    var nameCounter = 1;
    var tier = "";
    var level = 1;
    var color = "";
    var hasColor = false;
    var hp = 0;
    var armor = 0;
    var res = 0;
    var weight = 0;
    var material = "";
    
    var attLine = "";
    var attType = "";
    var attAmt = 0;
    
    var jsonT = "";
    
    var storeArmor = document.getElementById("armorData").value;
    var armorArr = storeArmor.split(" ");
    
    //fetch name
    for (let i = 0; i < armorArr.length; i++) {
        var boo = true;
        boo = !(armorArr[i].charAt(0) > -1);
        if (i < 4 && boo) {
            name += armorArr[i]
            if (!(armorArr[i+1].charAt(0) > -1)) {
                name+= " ";
                nameCounter++;
            }
        }
    }
    armorArr.splice(0, nameCounter);
    //fetch color if present
    if (armorArr[armorArr.length-1].charAt(0) == "#") {
        color = armorArr[armorArr.length-1];
        hasColor = true;
        armorArr.splice(armorArr.length-1, 1);
    }
    //fetch material
    material = armorArr[armorArr.length-1];
    armorArr.splice(armorArr.length-1, 1);
    //fetch rarity or tier
    tier = armorArr[armorArr.length-1];
    armorArr.splice(armorArr.length-1, 1);
    //fetch health
    hp  = armorArr[0];
    armorArr.splice(0, 1);
    //fetch armor
    armor = armorArr[0];
    armorArr.splice(0, 1);
    //fetch resistance
    res = armorArr[0];
    armorArr.splice(0, 1);
    //fetch level
    level = armorArr[armorArr.length-1]
    armorArr.splice(armorArr.length-1, 1);
    //fetch weight
    weight = armorArr[armorArr.length-1]
    armorArr.splice(armorArr.length-1, 1);
    
    //fetch attributes
    while (armorArr.length > 1) {
        attAmt = armorArr[0];
        attType = armorArr[1];
        armorArr.splice(0,2);
        switch (attType) {
            case 'STR':
                attLine += "\n\t\t\"strength\": " + attAmt
                if (armorArr.length != 0)
                    attLine += ",";
                break;
            case 'DEX':
                attLine += "\n\t\t\"dexterity\": " + attAmt
                if (armorArr.length != 0)
                    attLine += ",";
                break;
            case 'AGI':
                attLine += "\n\t\t\"agility\": " + attAmt
                if (armorArr.length != 0)
                    attLine += ",";
                break;
            case 'VIT':
                attLine += "\n\t\t\"vitality\": " + attAmt
                if (armorArr.length != 0)
                    attLine += ",";
                break;
            case 'END':
                attLine += "\n\t\t\"endurance\": " + attAmt
                if (armorArr.length != 0)
                    attLine += ",";
                break;
            case 'INT':     
                attLine += "\n\t\t\"intelligence\": " + attAmt
                if (armorArr.length != 0)
                    attLine += ",";
                break;
            case 'SPR':
                attLine += "\n\t\t\"spirit\": " + attAmt
                if (armorArr.length != 0)
                    attLine += ",";
                break;
            default:
                attLine = "";
        }
        if (armorArr.length == 0)
            attLine += "\n\t";
    }
     
    //compile json skeleton for textarea
    jsonT += "{\n";
    jsonT += "\t\"name\": \"" + name + "\",\n";
    jsonT += "\t\"tier\": \"" + tier + "\",\n";
    jsonT += "\t\"level\": \"" + level + "\",\n";
    jsonT += "\t\"weight\": \"" + weight + "\",\n";
    jsonT += "\t\"material\": \"" + material + "\",\n";
    if (hasColor)
        jsonT += "\t\"color\": \"" + color + "\",\n";
    jsonT += "\t\"health\": \"" + hp + "\",\n"
    jsonT += "\t\"armor\": \"" + armor + "\",\n"
    jsonT += "\t\"resistance\": \"" + res + "\",\n"
    jsonT += "\t\"stats\": {" + attLine + "},\n"
    jsonT += "\t\"type\": \"" + "equipment" + "\"\n"
    jsonT += "}";
    
    document.getElementById("armorResult").value = jsonT;
    $('#armorData').val('');
    
    var fileName = "";
    //var fileText = document.getElementById("armorResult").value;
    fileName = name;
    fileName = fileName.toLowerCase();
    fileName = fileName.replaceAll(" ", "_");
    fileName += ".json";
    download(fileName, jsonT); 
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
    var copyText = document.getElementById("armorResult");
    copyText.select();
    copyText.setSelectionRange(0,99999);
    document.execCommand("copy");
}
