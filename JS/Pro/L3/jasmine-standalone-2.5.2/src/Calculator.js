
function Calculator(){

}

Calculator.prototype.plus = function (a, b) {
    return a+b;
}

Calculator.prototype.minus = function(a, b){
    return a - b;
}

Calculator.prototype.divide = function (a,b) {
    if(b==0){throw "Error! Can not divide by zero, Mutherfucker!"}
    return a/b;
}

Calculator.prototype.pow = function (a, b) {
    return a*b;
}
