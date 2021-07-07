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
    var json = "";
    
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
    //compile json skeleton
    json += "{<br>";
    json += "\"name\": \"" + name + "\",<br>";
    json += "\"tier\": \"" + tier + "\",<br>";
    json += "\"level\": \"" + level + "\",<br>"
    json += "\"weapon\": \"" + weap + "\",<br>"
    json += "\"weight\": \"" + weight + "\",<br>"
    json += "\"material\": \"" + material + "\",<br>"
    json += "\"damage\": \"" + dmg + "\",<br>"
    json += "\"attackSpeed\": \"" + attackSpeed + "\",<br>"
    json += "\"attackRange\": \"" + range + "\",<br>"
    json += "\"knockback\": \"" + knockBack + "\",<br>"
    json += "\"type\": \"" + "weapon" + "\"<br>"
    json += "}";
    
             
    document.getElementById("product").innerHTML = json;
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
