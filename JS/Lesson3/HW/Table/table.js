var caption = ["ID", "NAME", "SURNAME", "AGE"];
var array = new Array();
var i = 0;
function addNewItemToArray(item) {
    i++;
    array.push(new Array().concat(i, item));
}

addNewItemToArray(createNewItem("1", "Juff", "Halli", "28"));
addNewItemToArray(createNewItem("2", "Vova", "Voytsekhovskiy", "28"));
addNewItemToArray(createNewItem("234", "Gena", "Sever", "31"));
addNewItemToArray(createNewItem("2123", "Zapros", "Qwerty", "28"));


function createNewItem(id, name, surname, age) {
    return [id, name, surname, age];
}

function sortByColumn(index) {
    var map = [];
    for (var i = 0; i < array.length; i++) {
        var arr = new Array().concat(array[i]);
        map.push(arr[index]);
    }
    console.log(map);
    return map.sort();
    console.log(map);
}

function createNewArray(array, map) {
    for(var i=0; i<map.length;i++){
        if(array[i].indexOf(map[i])>0){
            console.log(array[i]+" " +map[i]);
        }
    }
}


createNewArray(array,sortByColumn(3));
