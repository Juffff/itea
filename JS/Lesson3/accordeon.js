var acc = document.getElementById("MainTab");
var tabs = acc.getElementsByTagName("li");

function showHide() {
    for (var i = 0; tabs.length; i++) {

        if (tabs[i].style.visibility == "hidden") {
            console.log(tabs[i]);
            tabs[i].style.visibility = "visible";
        } else {
            tabs[i].style.visibility = "hidden";
        }
    }
}
acc.addEventListener("click", showHide);