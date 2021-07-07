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
    storeWeap = document.getElementById("weapData").value;
    
    
    json += "<br \>" + storeWeap; 
  
    document.getElementById("product").innerHTML = json;
    json = "{";
}
