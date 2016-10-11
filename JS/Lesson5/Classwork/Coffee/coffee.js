/**
 * Created by Juff on 22.09.16.
 */



function CoffeeMachine(power) {

    this.waterAmount = 0;
    this.WATER_HEAT_CAPACITY =  4200;

}

CoffeeMachine.prototype.constructor = function (power) {
    this.power = power;
}
CoffeeMachine.prototype.getTimeToBoil = function () {


    return this.waterAmount*this.WATER_HEAT_CAPACITY*80/this.power;
}

CoffeeMachine.prototype.run = function () {
    setTimeout(function () {
alert("READY!");
    },this.getTimeToBoil())

}

CoffeeMachine.prototype.setWaterAmount = function (amount) {
    this.waterAmount = amount;
}

var coffeeMachine = new CoffeeMachine(10000);
coffeeMachine.setWaterAmount(50);
coffeeMachine.run();