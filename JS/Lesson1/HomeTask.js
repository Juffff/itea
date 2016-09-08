"use strict";

//Task 1 Найдите (получите в переменную) в нём:

    //1.1 Все элементы label внутри таблицы. Должно быть 3 элемента.
        var labelInTableCount = document.getElementById("age-table").getElementsByTagName("label");
    //1.2 Первую ячейку таблицы (со словом "Возраст").
        var firstCellInTable = document.querySelectorAll('table > tbody > tr:first-child > td:first-child');
    //1.3 Вторую форму в документе.
        var secondForm = document.getElementsByTagName("form")[1];
    //1.4 Форму с именем search, без использования её позиции в документе.
        var searchForm = document.querySelector('[name=search]');
    //1.5 Элемент input в форме с именем search. Если их несколько, то нужен первый.
        var firstInputInSearch = document.querySelectorAll('[name=search] > input')[0];
    //1.6 Элемент с именем info[0], без точного знания его позиции в документе.
        var info0 = document.querySelector('[name="info[0]"');
    //1.7 Элемент с именем info[0], внутри формы с именем search-person.
        var info0InFormSearchPerson = document.querySelector('form[name=search-person] [name="info[0]"]');

//Task 2 Есть дерево из тегов <ul>/<li>.
    //Напишите код, который для каждого элемента <li> выведет:
    //Текст непосредственно в нём (без подразделов).
    //Количество вложенных в него элементов <li> – всех, с учётом вложенных.
