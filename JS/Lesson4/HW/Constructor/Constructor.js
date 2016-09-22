//It will not work!
function AnyFunction() {
    this._out = true;
}

var obj1 = new AnyFunction();
var obj2 = obj1.constructor;
obj2._out(); //Uncaught TypeError: obj2._out is not a function(…)


function AnyFunction() {
    this.toString = function () {
        return"Wassssa!";
    }
}

var obj1 = new AnyFunction();
var obj2 = obj1.constructor;
alert(obj2); //alert function anyFunction...





/*
function Foo() {

    this.toString = function() { return 'Foo!'; };

}
var obj = new Foo();

var obj2 = new obj.constructor;



alert(obj2); // Foo!
*/
