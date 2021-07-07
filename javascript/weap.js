var storeWeap = "";
var name = "";
var dmg = 0;
var attackSpeed = 0;
var range = 0;
var knockBack = 0;
var amtAttribute = 0;
var typeAttribute = "";
var weight = 0;
var level = 0;
var rarity = "";

function generate() {
    var json = "{\"name\": \"";
    
    storeWeap = document.getElementById("weapData").value;
    var weapArr = storeWeap.split(" ");
    //weapArr = removeBlanks(weakArr, " ");
    
    for (let i = 0; i < weapArr.length; i++) {
        var boo = true;
        boo = !(wearArr[i].charAt(0) > 0);
        if (i < 3 && boo) {
            name += weapArr[i]
            if (!(weapArr[i+1] > 0))
                name+= " ";
        }
        
        
    }
    
    
    
    //json += "<br \>" + storeWeap; 
  
    document.getElementById("product").innerHTML = weapArr;
    $('#weapData').val('');
}

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
