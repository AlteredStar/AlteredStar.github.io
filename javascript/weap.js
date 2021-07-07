function generate() {
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
    var amtAttribute = 0;
    var typeAttribute = "";
    var jsonH = "";
    var jsonT = "";
    
    storeWeap = document.getElementById("weapData").value;
    var weapArr = storeWeap.split(" ");
    //weapArr = removeBlanks(weakArr, " ");
    
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
    
    //compile json skeleton for html
    jsonH += "{<br>";
    jsonH += "\"name\": \"" + name + "\",<br>";
    jsonH += "\"tier\": \"" + tier + "\",<br>";
    jsonH += "\"level\": \"" + level + "\",<br>"
    jsonH += "\"weapon\": \"" + weap + "\",<br>"
    jsonH += "\"weight\": \"" + weight + "\",<br>"
    jsonH += "\"material\": \"" + material + "\",<br>"
    jsonH += "\"damage\": \"" + dmg + "\",<br>"
    jsonH += "\"attackSpeed\": \"" + attackSpeed + "\",<br>"
    jsonH += "\"attackRange\": \"" + range + "\",<br>"
    jsonH += "\"knockback\": \"" + knockBack + "\",<br>"
    jsonH += "\"stats\": {},<br>"
    jsonH += "\"type\": \"" + "weapon" + "\"<br>"
    jsonH += "}";
    
    //compile json skeleton for textarea
    jsonT += "{\n";
    jsonT += "\t\"name\": \"" + name + "\",\n";
    jsonT += "\t\"tier\": \"" + tier + "\",\n";
    jsonT += "\t\"level\": \"" + level + "\",\n"
    jsonT += "\t\"weapon\": \"" + weap + "\",\n"
    jsonT += "\t\"weight\": \"" + weight + "\",\n"
    jsonT += "\t\"material\": \"" + material + "\",\n"
    jsonT += "\t\"damage\": \"" + dmg + "\",\n"
    jsonT += "\t\"attackSpeed\": \"" + attackSpeed + "\",\n"
    jsonT += "\t\"attackRange\": \"" + range + "\",\n"
    jsonT += "\t\"knockback\": \"" + knockBack + "\",\n"
    jsonT += "\t\"stats\": {},\n"
    jsonT += "\t\"type\": \"" + "weapon" + "\"\n"
    jsonT += "}";
    
    document.getElementById("product").innerHTML = jsonH;
    document.getElementById("weapResult").value = jsonT;
    $('#weapData').val('');
}

/*
function removeBlanks(arr, value) {
    var i = 0;
    while (i < arr.length) {
        if (arr[i] === value) {
        arr.splice(i, 1);
        } 
        else {
            ++i;
        }
    }
  return arr; 
}
*/
