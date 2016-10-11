const fletArray = [1, 2, 3, 4, 5, 6];

function printArray(arr){
    var i=-1;
    function rec(i){
        if(i==arr.length){
            return;
        }else{
            i++;
            console.log(arr[i]);
            rec(i);
        };
    }
    rec(i);
}

//printArray(fletArray);


const nestedThing = [[[["Think"]]]];

function getNested(arr) {

    if(Array.isArray(arr[0])){
        console.log(arr[0]);
        getNested(arr[0]);
    }else {return;}

}


//getNested(nestedThing);


const nestedArray = [[1,2,[3,4,[5,6]]]];

function flatten(items) {

    for(var i=0; i<items.length;i++){
        if(Array.isArray(items[i])){
            flatten(items[i]);
        }
        else {console.log(items[i]);}
    }

}

//flatten(nestedArray);

function sqr(a) {
    return a*a;
}

Array.prototype.mapa = function (func) {
        this.forEach(func);
}

var array = [1,2,3,4,5];
console.log(array.mapa(array,sqr(array)));