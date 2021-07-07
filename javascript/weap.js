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
var json = "{";

function generate() {
    json = "{";
    
    storeWeap = document.getElementById("weapData").value;
    var weapArr = storeWeap.split(" ");
    /*
    for (let i = 0; i < storeWeap.length; i++) {
        var temp = "";
        
        
    }
    */
    
    json += "<br \>" + storeWeap; 
  
    document.getElementById("product").innerHTML = weapArr;
    $('#weapData').val('');
}
