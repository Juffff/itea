/*ID
 Имя
 Почта
 Телефон
 Адрес
 Улица
 Город
 Регион (область)
 Почтовый индекс (необязательно)*/

window.onload = app;

function app() {
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

    }



   function UserContainer() {
        var userArray = new Array();
        this.addUser = function (user) {
            user.setId(userArray.length);
            userArray.push(user);
        }

        this.getAllUsers = function () {
            return userArray;
        }
    }



    var userContainer = new UserContainer();
    for(var i = 0; i<10;i++){
        userContainer.addUser(new User("USER"+i,"mail"+i+"@mail.com","+380970818118","Bogunskaya 20 k 79","Bogunskaya","Berdichev","Zhitomir","13300"));
    }
    console.log(userContainer.getAllUsers());



    if (!load()) {
        go(console.log("test"));
    }


    function load() {
        return false;
    }

    function go() {

    }
}