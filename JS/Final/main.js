window.onload = app;

function app() {

    String.prototype.replaceAll = function (search, replacement) {
        var target = this;
        return target.split(search).join(replacement);
    };

    var id = 0;

    function User(name, email, phone, address, street, city, region, index) {
        var id;
        this.name = name;
        this.email = email;
        this.phone = phone;
        this.address = address;
        this.street = street;
        this.city = city;
        this.region = region;
        this.index = index;

        this.setId = function (id) {
            this.id = id;
        }

        this.getID = function () {
            return this.id;
        }


        this.setUserParameters = function (name, email, phone, address, street, city, region, index) {
            this.name = name;
            this.email = email;
            this.phone = phone;
            this.address = address;
            this.street = street;
            this.city = city;
            this.region = region;
            this.index = index;
        }

        this.getParameters = function () {
            return this.name + ";" + this.email + ";" + this.phone + ";" + this.address + ";" + this.street + ";" + this.city + ";" + this.region + ";" + this.index;
        }

    }


    function UserContainer() {
        var userArray = new Array();

        this.addUser = function (user) {
            var idTestValue = userArray.length;
            while (!testID(idTestValue)) {
                testID(idTestValue);
            }

            user.setId(idTestValue);
            userArray.push(user);

            this.save();
        };


        function testID(id) {
            for (var i = 0; i < userArray.length; i++) {
                if (userArray[i].getID() == id) {
                    id++;
                    return false;
                }
            }
            return true;
        }

        this.deleteUser = function (id) {

            for (var i = 0; i < this.size(); i++) {
                if (id == userArray[i].getID()) {
                    userArray.splice(i, 1);
                }

            }

            this.save();

        };


        this.getAllUsers = function () {
            return new Array(userArray);
        };

        this.getUser = function (id) {
            for (var i = 0; i < userArray.length; i++) {
                if (userArray[i].getID() == id) {
                    return userArray[i];
                }
            }

        };


        this.size = function () {
            return userArray.length;
        };

        this.getID = function () {
            return id;
        }
        this.save = function () {
            var tmpArray = this.getAllUsers()[0];
            var arrayToSave = [];
            for (var i = 0; i < tmpArray.length; i++) {
                var user = tmpArray[i];
                arrayToSave.push(JSON.stringify(user));
            }
            localStorage.setItem("userTabAppArray", arrayToSave);

        }

    }


    function View(container, element) {
        var addButton = document.createElement("div");
        addButton.className = "addButton";
        addButton.innerHTML = "ADD";
        addButton.addEventListener("click", function () {
            createModalWinwowAndAddUser(this)
        }.bind(this));
        element.appendChild(addButton);


        this.createDomUser = function (user) {
            var userDiv = document.createElement("ul");
            userDiv.id = "user" + user.getID();
            userDiv.className = "user";
            var userName = document.createElement("li");
            userName.className = "userName userLi";
            userName.innerHTML = user.name;
            var userMail = document.createElement("li");
            userMail.className = "userMail userLi";
            userMail.innerHTML = user.email;


            //name, email, phone, address, street, city, region, index
            var userPhone = document.createElement("li");
            userPhone.className = "userPhone userLi";
            userPhone.innerHTML = user.phone;

            var userAddress = document.createElement("li");
            userAddress.className = "userAddress userLi";
            userAddress.innerHTML = user.address;


            var userStreet = document.createElement("li");
            userStreet.className = "userStreet userLi";
            userStreet.innerHTML = user.street;

            var userCity = document.createElement("li");
            userCity.className = "userCity userLi";
            userCity.innerHTML = user.city;

            var userRegion = document.createElement("li");
            userRegion.className = "userRegion userLi";
            userRegion.innerHTML = user.region;

            var userIndex = document.createElement("li");
            userIndex.className = "userIndex userLi";
            userIndex.innerHTML = user.index;

            //--------------//


            var buttonDelete = document.createElement("li");
            buttonDelete.className = "buttonDelete buttonLi";
            buttonDelete.innerHTML = "Delete";
            buttonDelete.setAttribute("type", "text");
            buttonDelete.addEventListener("click", findAndDeleteUser);

            var buttonEdit = document.createElement("li");
            buttonEdit.className = "buttonEdit buttonLi";
            buttonEdit.innerHTML = "Edit";
            buttonEdit.setAttribute("type", "text");
            buttonEdit.addEventListener("click", findAndEditUser);


            userDiv.appendChild(userName);
            userDiv.appendChild(userMail);
            userDiv.appendChild(userPhone);
            userDiv.appendChild(userAddress);
            userDiv.appendChild(userStreet);
            userDiv.appendChild(userCity);
            userDiv.appendChild(userRegion);
            userDiv.appendChild(userIndex);

            userDiv.appendChild(buttonEdit);
            userDiv.appendChild(buttonDelete);

            element.appendChild(userDiv);
        };


        function findAndDeleteUser() {
            var target = event.target;
            var parent = target.parentNode;
            var id = parent.id.replace("user", "");
            container.deleteUser(id);
            element.removeChild(parent);
        }

        function findAndEditUser() {

            var target = event.target;
            var parent = target.parentNode;
            var id = parent.id.replace("user", "");
            createModalWinwowAndGetParameters(id);

        }


        function createModalWinwowAndGetParameters(id) {
            var user = container.getUser(id);
            var modalDiv = document.createElement("div");
            modalDiv.className = "modal";

            var modalName = document.createElement("input");
            modalName.setAttribute("type", "text");
            modalName.className = "editInput";
            modalName.value = user.name;

            var modalEmail = document.createElement("input");
            modalEmail.setAttribute("type", "text");
            modalEmail.className = "editInput";
            modalEmail.value = user.email;

            var modalPhone = document.createElement("input");
            modalPhone.setAttribute("type", "text");
            modalPhone.className = "editInput";
            modalPhone.value = user.phone;

            var modalAddress = document.createElement("input");
            modalAddress.setAttribute("type", "text");
            modalAddress.className = "editInput";
            modalAddress.value = user.address;

            var modalStreet = document.createElement("input");
            modalStreet.setAttribute("type", "text");
            modalStreet.className = "editInput";
            modalStreet.value = user.street;

            var modalCity = document.createElement("input");
            modalCity.setAttribute("type", "text");
            modalCity.className = "editInput";
            modalCity.value = user.city;

            var modalRegion = document.createElement("input");
            modalRegion.setAttribute("type", "text");
            modalRegion.className = "editInput";
            modalRegion.value = user.region;

            var modalIndex = document.createElement("input");
            modalIndex.setAttribute("type", "text");
            modalIndex.className = "editInput";
            modalIndex.value = user.index;


            var modalSetButton = document.createElement("div");

            modalSetButton.className = "setButton";
            modalSetButton.innerHTML = "OK";

            var editor = editUser;
            modalSetButton.addEventListener("click", editor);


            function editUser() {
                var userDiv = element.querySelector("#user" + id);
                user.setUserParameters(modalName.value, modalEmail.value, modalAddress.value, modalPhone.value, modalStreet.value, modalCity.value, modalRegion.value, modalIndex.value);
                userDiv.querySelector(".userName").innerHTML = user.name;
                userDiv.querySelector(".userMail").innerHTML = user.email;
                userDiv.querySelector(".userPhone").innerHTML = user.phone;
                userDiv.querySelector(".userAddress").innerHTML = user.address;
                userDiv.querySelector(".userStreet").innerHTML = user.street;
                userDiv.querySelector(".userCity").innerHTML = user.city;
                userDiv.querySelector(".userRegion").innerHTML = user.region;
                userDiv.querySelector(".userIndex").innerHTML = user.index;


                var target = event.target;
                var modal = target.parentNode;
                element.removeChild(modal);
            }

            modalDiv.appendChild(modalName);
            modalDiv.appendChild(modalEmail);
            modalDiv.appendChild(modalPhone);
            modalDiv.appendChild(modalAddress);
            modalDiv.appendChild(modalStreet);
            modalDiv.appendChild(modalCity);
            modalDiv.appendChild(modalRegion);
            modalDiv.appendChild(modalIndex)
            modalDiv.appendChild(modalSetButton);
            element.appendChild(modalDiv);

            return modalDiv;

        }

        function createModalWinwowAndAddUser(context) {

            var modalDiv = document.createElement("div");
            modalDiv.className = "modal";


            var modalName = document.createElement("input");
            modalName.setAttribute("type", "text");
            modalName.className = "editInput";
            modalName.value = "NAME";

            var modalEmail = document.createElement("input");
            modalEmail.setAttribute("type", "text");
            modalEmail.className = "editInput";
            modalEmail.value = "E-MAIL";

            var modalPhone = document.createElement("input");
            modalPhone.setAttribute("type", "text");
            modalPhone.className = "editInput";
            modalPhone.value = "PHONE";

            var modalAddress = document.createElement("input");
            modalAddress.setAttribute("type", "text");
            modalAddress.className = "editInput";
            modalAddress.value = "ADDRESS";


            var modalStreet = document.createElement("input");
            modalStreet.setAttribute("type", "text");
            modalStreet.className = "editInput";
            modalStreet.value = "STREET";

            var modalCity = document.createElement("input");
            modalCity.setAttribute("type", "text");
            modalCity.className = "editInput";
            modalCity.value = "CITY";


            var modalRegion = document.createElement("input");
            modalRegion.setAttribute("type", "text");
            modalRegion.className = "editInput";
            modalRegion.value = "REGION";

            var modalIndex = document.createElement("input");
            modalIndex.setAttribute("type", "text");
            modalIndex.className = "editInput";
            modalIndex.value = "INDEX";

            var modalSetButton = document.createElement("div");

            modalSetButton.className = "setButton";
            modalSetButton.innerHTML = "OK";

            var add = add;
            modalSetButton.addEventListener("click", add);


            function add() {
                var user = new User(modalName.value, modalEmail.value, modalAddress.value, modalPhone.value, modalStreet.value, modalCity.value, modalRegion.value, modalIndex.value);
                container.addUser(user);
                context.createDomUser(user);

                var target = event.target;
                var modal = target.parentNode;
                element.removeChild(modal);
            }

            modalDiv.appendChild(modalName);
            modalDiv.appendChild(modalEmail);
            modalDiv.appendChild(modalPhone);
            modalDiv.appendChild(modalAddress);
            modalDiv.appendChild(modalStreet);
            modalDiv.appendChild(modalCity);
            modalDiv.appendChild(modalRegion);
            modalDiv.appendChild(modalIndex)
            modalDiv.appendChild(modalSetButton);
            element.appendChild(modalDiv);

            return modalDiv;

        }


    }


    if (!load()) {
        goDemo();
    }


    function load() {
        if (!localStorage.getItem("userTabAppArray")) {
            return false;
        } else {
            var savedJSONArray = localStorage.getItem("userTabAppArray").replaceAll("},{", "}###{").split("###");
            var userContainer = new UserContainer();

            for (var i = 0; i < savedJSONArray.length; i++) {
                console.log(savedJSONArray[i]);
                var user = new User();
                var obj = JSON.parse(savedJSONArray[i]);
                user.setUserParameters(obj.name, obj.email, obj.phone, obj.address, obj.street, obj.city, obj.region, obj.index);
                userContainer.addUser(user);
            }
            var view = new View(userContainer, document.body);
            for (var i = 0; i < userContainer.size(); i++) {
                view.createDomUser(userContainer.getUser(i));
            }
            return true;
        }
    }

    function goDemo() {

        var userContainer = new UserContainer();
        for (var i = 0; i < 8; i++) {
            userContainer.addUser(new User("USER" + i, "mail" + i + "@mail.com", "+38097000100" + i, "Street " + i, "House " + i, "Kiev", "Kiev", "1330" + i));
        }

        var view = new View(userContainer, document.body);

        for (var i = 0; i < userContainer.size(); i++) {
            view.createDomUser(userContainer.getUser(i));
        }


    }

}