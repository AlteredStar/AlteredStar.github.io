function generate() {
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
    var json = "{\"name\": \"";
    
    storeWeap = document.getElementById("weapData").value;
    var weapArr = storeWeap.split(" ");
    //weapArr = removeBlanks(weakArr, " ");
    
    //fetch name
    for (let i = 0; i < weapArr.length; i++) {
        var boo = true;
        boo = !(weapArr[i].charAt(0) > 0);
        if (i < 3 && boo) {
            name += weapArr[i]
            if (!(weapArr[i+1] > 0))
                name+= " ";
        }
    }
    //fetch rarity
    rarity = weapArr[weapArr.length-1];
  
    document.getElementById("product").innerHTML = name;
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
