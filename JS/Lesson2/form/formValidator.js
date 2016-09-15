/*
 Задание 2.
 Создать обычную форму регистрации с такими полями: Имя, Фамилия, Login, Email, Пароль, Номер телефона.
 С помощью JavaScript сделать скрипт, который будет проверять поля на корректность ввода данных.
 Условия для корректного заполнения.

 Имя и Фамилия не могут быть меньше 2-х символов, - OK
 не могут содержать в себе ничего кроме символов латиницы или кириллицы. - OK


 Login не может быть меньше 4-х символов и больше 24-х, может содержать в себе символы латиницы и цифры. - OK

 Email должен быть такого вида login (содержит в себе латиницу и цифры) + @ + domainName (содержит в себе латиницу и цифры)
 + . + domainZone (содержит в себе латиницу, не меньше 2-х символов). - OK
 Пароль то же самое что и логин, только не меньше 8-ми символов и может содержать в себе спецсимволы. - OK

 Телефон - поле начинается с + по умолчанию, ввести можно только цифры не более 13 символов, не учитывая знака +. - OK
 */

"use strict";

var validateButton = document.getElementById("validate");
var nameInput = document.getElementById("name");
var surnameInput = document.getElementById("surname");
var loginInput = document.getElementById("login");
var mailInput = document.getElementById("mail");
var pwdInput = document.getElementById("pwd");
var phoneInput = document.getElementById("phone");

function validate() {
    console.log();

    if (!/[а-яА-ЯёЁ]{2}|\w{2}/i.test(nameInput.value)) {
        alert("Check input in name field!");
    }

    if (!/[а-яА-ЯёЁ]{2}|\w{2}/i.test(surnameInput.value)) {
        alert("Check input in surname field!");
    }

    if (!/^[a-z0-9]{4,24}$/i.test(loginInput.value)) {
        alert("Check input in login field!");
    }

    if (!/[a-z0-9]{4,24}@{1}[a-z0-9]{2,24}\.{1}[a-z0-9]{2,24}$/i.test(mailInput.value)) {
        alert("Check input in mail field!");
    }

    if (!/.{8,}/i.test(pwdInput.value)) {
        alert("Check input in pwd field!");
    }

    if (!/\+{1}\d{2,14}$/i.test(phoneInput.value)) {
        alert("Check input in phone field!");
    }


}

validateButton.addEventListener("click", validate, false);
