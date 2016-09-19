"use strict";
var width = 700;
var height = 300;

function slider() {
    var slider = document.createElement("div");
    slider.classList.add("slider");
    slider.style.cssText = ("width:varwidthpx; height:varheightpx;".replace("varwidth", width).replace("varheight", height));

    var container = document.createElement("div");
    container.classList.add("container");

    var rightButton = document.createElement("div");
    rightButton.classList.add("button", "right");
    var leftButton = document.createElement("div");
    leftButton.classList.add("button", "left");

    slider.appendChild(leftButton);
    slider.appendChild(container);
    slider.appendChild(rightButton);

    var imageSrcArray = ["angular.png",
        "css.jpg",
        "html5.png",
        "node.png"]


    var index = 0;


    function incIndex() {
        index++;
        if (index == imageSrcArray.length) {
            index = 0;

        }
    }

    function decIndex() {

        if(index<=0){
            index = imageSrcArray.length-1;
        }else {
            index--;
        }
    }

    function setPicture(index) {

        var currentPicture = "url('" + "sliderPictures/" + imageSrcArray[index] + "')";
        container.style.backgroundImage = currentPicture;

    }

    leftButton.addEventListener("click", function () {
        decIndex();
        setPicture(index);
    });

    rightButton.addEventListener("click", function () {
        incIndex();
        setPicture(index);
    });

    document.body.appendChild(slider);
    setPicture(index);
}

window.onload = slider;

