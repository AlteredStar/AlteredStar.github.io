var storeWeap = "";
var weapData = "";
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
const json = '{
	"name": "Test Longsword",
	"tier": "Common",
	"level": 1,
	"weapon": "Sword",
	"weight": 30,
	"material": "wooden_sword",
	"damage": "1-1",
	"attackSpeed": 1.4,
	"attackRange": 3,
	"knockback": 1.5,
	"stats": {},
	"type": "weapon"
}';

function generate() {
      
  
    document.getElementById("product").innerHTML = json;
}
