//Задание 1.
//Напишите функцию debounce(f, ms), которая возвращает обёртку,
// которая передаёт вызов f не чаще, чем раз в ms миллисекунд.
//«Лишние» вызовы игнорируются. Все аргументы и контекст – передаются.
//Например:

//    function f(x) { alert(x) }
//var f = debounce(f, 1000);
//f(1); // 1, выполнится сразу же
//f(2); // игнор
//setTimeout( function() { f(3) }, 100); // игнор (прошло только 100 мс)
//setTimeout( function() { f(4) }, 1100); // 4, выполнится
//setTimeout( function() { f(5) }, 1500); // игнор
//Упрощённо можно сказать, что debounce возвращает вариант f, срабатывающий не чаще чем раз в msмиллисекунд.


function f(x) {
    console.log(x);
}

function debounce(f, ms) {
    var currentFunctionState = 0;
    return function () {
        if(currentFunctionState==0){

            currentFunctionState=1;
            f.apply(this, arguments);
            f();
        }else {
            setTimeout(function () {
                currentFunctionState =0;
            }, ms);


        }
    }
}

var f = debounce(f, 1000);

f(1); // 1, выполнится сразу же
f(2); // игнор
setTimeout( function() { f(3) }, 100); // игнор (прошло только 100 мс)
setTimeout( function() { f(4) }, 1100); // 4, выполнится
setTimeout( function() { f(5) }, 1500); // игнор