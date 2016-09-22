function Machine(power) {
    this._power = power;
    this._enabled = false;

    var self = this;

    this.enable = function () {
        self._enabled = true;
    };

    this.disable = function () {
        self._enabled = false;
    };
}

function Fridge(power) {
    Machine.call(this);
    var foodLimit = power / 100;

    var food = [];
    this.addFood = function (item) {

        if (this._enabled) {
            for (var i = 0; i < arguments.length; i++) {

                if (arguments[i] instanceof Array) {

                    var limit = food.length + arguments[i].length;
                    if (limit > foodLimit) {
                        console.log("Ошибка, слишком много еды!")
                    }
                    else {
                        food = food.concat(arguments[i]);
                    }
                } else {
                    var limit = food.length + arguments.length;
                    if (limit > foodLimit) {
                        console.log("Ошибка, слишком много еды!")
                    } else {
                        food.push(arguments[i]);
                    }
                }
            }
        } else {
            console.log("Ошибка, холодильник выключен!");
        }

    }

    this.getFood = function () {
        var foodArray = new Array(food);
        return foodArray;
    }
}


console.log("---------------TEST1---------------------");
var fridge = new Fridge(200);
fridge.addFood("котлета"); // ошибка, холодильник выключен

console.log("---------------TEST2---------------------");

var fridge = new Fridge(500);
fridge.enable();
fridge.addFood("котлета");
fridge.addFood("сок", "зелень");
fridge.addFood("варенье", "пирог", "торт");
console.log("---------------TEST3---------------------");
var fridge = new Fridge(500);
fridge.enable();
fridge.addFood("котлета");
fridge.addFood("сок", "варенье");

var fridgeFood = fridge.getFood();
alert( fridgeFood ); // котлета, сок, варенье
console.log("---------------TEST4---------------------");

fridgeFood.push("вилка", "ложка");

alert( fridge.getFood() ); // внутри по-прежнему: котлета, сок, варенье



/*
 var fridge = new Fridge(500);
 fridge.enable();
 fridge.addFood("Potato");
 fridge.addFood("Meat");
 fridge.addFood("Vodka", "Rediska");
 fridge.addFood(["Egg", "Carrot", "Milk"]);
 console.log(fridge.getFood());
 */