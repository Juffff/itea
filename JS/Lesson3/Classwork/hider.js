"use strict";

var text = document.getElementById("hideThis");
function hideThis() {
    text.style.cssText = "display: none";
}
text.addEventListener("click", hideThis);