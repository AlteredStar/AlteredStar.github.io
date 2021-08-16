function generate() {
    var storeAcc = "";
    var name = "";
    var nameCounter = 1;
    var tier = "";
    var level = 1;
    var type = "";
    var material = "";
    
    var attLine = "";
    var attType = "";
    var attAmt = 0;
    
    var jsonT = "";
    
    storeAcc = document.getElementById("accData").value;
    var accArr = storeAcc.split(" ");
    
    //fetch name
    for (let i = 0; i < accArr.length; i++) {
        var boo = true;
        boo = !(accArr[i].charAt(0) > -1);
        if (i < 4 && boo) {
            name += accArr[i]
            if (!(accArr[i+1].charAt(0) > -1)) {
                name+= " ";
                nameCounter++;
            }
        }
    }
    accArr.splice(0, nameCounter);
    //fetch type
    type = accArr[accArr.length-1];
    accArr.splice(accArr.length-1, 1);
    //fetch material
    material = accArr[accArr.length-1];
    accArr.splice(accArr.length-1, 1);
    //fetch rarity or tier
    tier = accArr[accArr.length-1];
    accArr.splice(accArr.length-1, 1);
    //fetch level
    level = accArr[accArr.length-1]
    accArr.splice(accArr.length-1, 1);
    
    //fetch attributes
    while (accArr.length > 1) {
        attAmt = accArr[0];
        attType = accArr[1];
        accArr.splice(0,2);
        switch (attType) {
            case 'STR':
                attLine += "\n\t\t\"strength\": " + attAmt
                if (accArr.length != 0)
                    attLine += ",";
                break;
            case 'DEX':
                attLine += "\n\t\t\"dexterity\": " + attAmt
                if (accArr.length != 0)
                    attLine += ",";
                break;
            case 'AGI':
                attLine += "\n\t\t\"agility\": " + attAmt
                if (accArr.length != 0)
                    attLine += ",";
                break;
            case 'VIT':
                attLine += "\n\t\t\"vitality\": " + attAmt
                if (accArr.length != 0)
                    attLine += ",";
                break;
            case 'END':
                attLine += "\n\t\t\"endurance\": " + attAmt
                if (accArr.length != 0)
                    attLine += ",";
                break;
            case 'INT':     
                attLine += "\n\t\t\"intelligence\": " + attAmt
                if (accArr.length != 0)
                    attLine += ",";
                break;
            case 'SPR':
                attLine += "\n\t\t\"spirit\": " + attAmt
                if (accArr.length != 0)
                    attLine += ",";
                break;
            default:
                attLine = "";
        }
        if (accArr.length == 0)
            attLine += "\n\t";
    }
    
    //compile json skeleton for textarea
    jsonT += "{\n";
    jsonT += "\t\"name\": \"" + name + "\",\n";
    jsonT += "\t\"tier\": \"" + tier + "\",\n";
    jsonT += "\t\"level\": \"" + level + "\",\n";
    jsonT += "\t\"material\": \"" + material + "\",\n";
    jsonT += "\t\"mainStats\": {" + attLine + "},\n";
    jsonT += "\t\"type\": \"" + type + "\"\n";
    jsonT += "}";
    
    document.getElementById("accResult").value = jsonT;
    $('#accData').val('');
    copy();
}

function copy() {
    var copyText = document.getElementById("accResult");
    copyText.select();
    copyText.setSelectionRange(0,99999);
    document.execCommand("copy");
}
