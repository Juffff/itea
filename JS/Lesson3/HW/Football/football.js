"use strict";
var width = 720;
var height = 450;

function football() {
    var field = document.createElement("div");
    field.classList.add("field");
    field.style.cssText = ("width:varwidthpx; height:varheightpx;".replace("varwidth", width).replace("varheight", height));
    var ball = document.createElement("div");
    ball.classList.add("ball");
    field.appendChild(ball);
    document.body.appendChild(field);
    // field.addEventListener("click", getXY, false);







    field.addEventListener("click", move, false);

    function move() {
        var x = event.clientX;
        var y = event.clientY;
        console.log(x);
        console.log(y);
        moveBall(ball, x,y, 20);
    }


    function moveBall(object, endX, endY, speed) {
        var x = object.offsetLeft + 30;
        var y = object.offsetTop;

        if (endX > field.offsetLeft + width - 30) {
            endX = field.offsetLeft + width - 30;
        }

        if (endX < field.offsetLeft + 30) {
            endX = field.offsetLeft + 30;
        }

        if (endY > field.offsetTop + height - 30) {
            endY = field.offsetTop + height - 30;

        }

        if (endY < field.offsetTop + 30) {
            endY = field.offsetTop + 30;
        }

        var mover = setInterval(function () {
                console.log("X = " + x + " Y = "+y);
                console.log("endX = " + endX + " endY = "+ endY);


                //right
                if (x < endX) {

                    x = x + speed;

                    if (x > endX) {
                        x = endX;
                    }
                    if (x == endX && y==endY) {
                        clearInterval(mover)
                    }

                    drawX(x,y);
                }

                //left
                if (x > endX) {

                    x = x - speed;

                    if (x < endX) {
                        x = endX;
                    }
                    if (x == endX && y==endY) {
                        clearInterval(mover)
                    }

                    drawX(x ,y);
                }

                //up
                if (y > endY) {

                    y = y - speed;

                    if (y < endY) {
                        y = endY;
                    }
                    if (x == endX && y==endY) {
                        clearInterval(mover)
                    }

                    drawX(x ,y);
                }

                if (y < endY) {

                    y = y + speed;

                    if (y > endY) {
                        y = endY;
                    }
                    if (x == endX && y==endY) {
                        clearInterval(mover)
                    }

                    drawX(x ,y);
                }


            }

            , 20);

        function drawX(x ,y) {
            object.style.left = x - 30 + "px";
            object.style.top = y-30  + "px";
        }
    }



}

window.onload = football;