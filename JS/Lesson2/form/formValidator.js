/*
Задание 2.
Создать обычную форму регистрации с такими полями: Имя, Фамилия, Login, Email, Пароль, Номер телефона.
С помощью JavaScript сделать скрипт, который будет проверять поля на корректность ввода данных.
Условия для корректного заполнения.

Имя и Фамилия не могут быть меньше 2-х символов,
не могут содержать в себе ничего кроме символов латиницы или кириллицы.


Login не может быть меньше 4-х символов и больше 24-х, может содержать в себе символы латиницы и цифры.

Email должен быть такого вида login (содержит в себе латиницу и цифры) + @ + domainName (содержит в себе латиницу и цифры) + . + domainZone (содержит в себе латиницу, не меньше 2-х символов).
Пароль то же самое что и логин, только не меньше 8-ми символов и может содержать в себе спецсимволы.

Телефон - поле начинается с + по умолчанию, ввести можно только цифры не более 13 символов, не учитывая знака +.
*/

"use strict";

    var validateButton = document.getElementById("validate");
    var nameInput = document.getElementById("name");
    var surnameInput = document.getElementById("surname");
    var loginInput = document.getElementById("login");
    var mailInput = document.getElementById("mail");
    var pwdInput = document.getElementById("pwd");
    var phoneInput = document.getElementById("phone");

    validateButton.addEventListener("click", console.log("test"), false);
