

function Model() {
    var notesArray = [];

    this.getAllNotes = function () {
        return notesArray;
    }

    this.addItem = function (item) {
        notesArray.push(item);
    }

    this.getItem = function (id) {
        return notesArray[id];
    }

    this.saveNotes = function () {

        var array = [];
        for(var i=0; i<notesArray.length; i++){
            array.push(notesArray[i].getText());
        }

        localStorage.setItem("notes", array);

    }


    function Item(text) {
        var text = text;
        this.getText = function () {
            return text;
        }
    }

    this.createNewItem = function (text) {
        return new Item(text);
    }
    
    this.removeItem = function (text) {
        for(var i=0; i<notesArray.length; i++){
            if(notesArray[i].getText()==text){
                notesArray.splice(i, 1);
                return;
            }
        }
        
    }


}

function View(element) {



    this.createNote = function (item) {
            var noteContainer = document.createElement("div");
            noteContainer.className = "noteContainer";
            element.appendChild(noteContainer);
            var removeButton = document.createElement("div");
            removeButton.className = "removeNoteButton";
            noteContainer.appendChild(removeButton);
            var textField = document.createElement("div");
            textField.className = "noteText";
            noteContainer.appendChild(textField);
            textField.innerHTML = item.getText();
        return noteContainer;

    }

    this.removeNote = function() {

        var parent = this.parentNode;
        parent.parentNode.removeChild(parent);
    }

    
}



function Controller(model, view) {


    this.addNote = function (text) {
        var item = model.createNewItem(text);
        model.addItem(item);
        var domItem = view.createNote(item);
        domItem.querySelector(".removeNoteButton").addEventListener("click", view.removeNote);
        model.saveNotes();

    }
    
    this.removeNote = function () {
        var target = event.target;
        if(target.className == "removeNoteButton"){
            var parent = target.parentNode;
            var text = parent.getElementsByClassName("noteText")[0];
            model.removeItem(text.innerHTML);
        }

        model.saveNotes();
    }

    this.load = function () {
        if(localStorage.getItem("notes")){
            var loadedArray = localStorage.getItem("notes").split(",");
            for(var i=0;i<loadedArray.length;i++){
                this.addNote(loadedArray[i]);
            }
        }
    }



}

window.onload = (function () {
    var model = new Model();
    var view = new View(document.body);
    var controller = new Controller(model,view);

    window.addEventListener("click", controller.removeNote);

    var textInput = document.createElement("input");
    textInput.setAttribute("type", "input");
    textInput.className = "textInput";
    document.body.appendChild(textInput);


    var addButton = document.createElement("div");
    addButton.innerHTML = "ADD";
    addButton.className = "addButton";

    addButton.addEventListener("click", (function () {
        controller.addNote(textInput.value);
    }));
    document.body.appendChild(addButton);

    controller.load();




});