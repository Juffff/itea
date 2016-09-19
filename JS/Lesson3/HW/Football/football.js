"use strict";
var width = 720;
var height = 450;

function football() {
    var field = document.createElement("div");
    field.classList.add("field");
    field.style.cssText = ("width:varwidthpx; height:varheightpx;".replace("varwidth", width).replace("varheight", height));
    document.body.addEventListener("click", "", false);
    field.addEventListener("click", moveBall, false);
    var ball = document.createElement("div");
    ball.classList.add("ball");
    field.appendChild(ball);
    document.body.appendChild(field);

    function moveBall() {
        var x = event.clientX;
        var y = event.clientY;

        var startX = ball.offsetLeft+30;
        var startY = ball.offsetTop-30;

        if (x > field.offsetLeft + width - 30) {
            x = field.offsetLeft + width - 30;
        }

        if (x < field.offsetLeft + 30) {
            x = field.offsetLeft + 30;
        }


        if (y > field.offsetTop + height - 30) {
            y = field.offsetTop + height - 30;

        }

        if (y < field.offsetTop + 30) {
            y = field.offsetTop + 30;
        }

        /*ball.style.left = x - 30 + "px";
         ball.style.top = y - 30 + "px";*/

        var mover = setInterval(function () {
            startX+=20;
            drawX(startX);
            if(startX>=x){
                clearInterval(mover);
            }
        },20)

        function drawX(sX) {
            ball.style.left = sX - 30 + "px";
        }



    }
}

window.onload = football;

/*

 var a = setInterval(function () {
 console.log(Date.now());
 },2000);
*/
