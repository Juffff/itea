window.onload = list;
var width = 300;
var height = 300;

function list() {

    var list = document.createElement("div");
    list.classList.add("list");
    list.style.cssText = ("width:varwidthpx; height:varheightpx;".replace("varwidth", width).replace("varheight", height));
    document.body.appendChild(list);

    var ul = document.createElement("ul");
    list.appendChild(ul);
    for(var i=0; i<=40; i++){

        ul.appendChild(createLiItem(i +" item"));
    }


    function createLiItem(text) {
        var li  = document.createElement("li");
        li.className = "liItem";
        li.innerHTML = text;
        var deleteButton = document.createElement("div");
        li.appendChild(deleteButton);
        deleteButton.className = "deleteButton";
        deleteButton.innerHTML = "Delete";
        deleteButton.addEventListener("click", deleteParent, false);


        return li;
    }

    function deleteParent() {
        var a = this.parentNode;
        a.remove();
    }


}