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

        var startX = ball.offsetLeft;
        var startY = ball.offsetTop;

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

        var mover = setInterval(move(startX,startY,x,y),20);

        function move(startX, startY, x, y) {
            console.log(startX);
            console.log(x);
            if(startX>=x){clearInterval(mover);}
            else {
                startX+=1;
                ball.style.left =startX - 30 + "px";
            }
        }


    }
}

window.onload = football;

/*
 var a = setInterval(function () {
 console.log(Date.now());
 },2000);*/
