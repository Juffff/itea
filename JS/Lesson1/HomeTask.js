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

        var liArray = document.getElementsByTagName("li");
        for(var i = 0; i<liArray.length; i++){
         console.log(liArray[i].firstChild.data + " child li count = " + liArray[i].getElementsByTagName("li").length );
        }

//Task 3
    //1.Получите div в переменную.
    //2.Получите значение атрибута "data-widget-name" в переменную.
    //3.Выведите его.

    var widget = document.getElementById("widget");
    var menu = widget.getAttribute("data-widget-name");
    console.log(menu);

//Task 4
    //Сделайте желтыми внешние ссылки, добавив им класс external.
    //Все ссылки без href, без протокола и начинающиеся с http://internal.com считаются внутренними.
    //Все манипуляции производить с файлом links.html


    var a = document.getElementsByTagName("a");
    for(var  i = 0; i<a.length; i++){
        if(
            (a[i].getAttribute("href")!=null)
            &&
            ((a[i].innerHTML.indexOf("http")==0)
            ||
            (a[i].innerHTML.indexOf("ftp")==0))
            &&
            (a[i].innerHTML.indexOf("http://internal.com")!=0)

        ){a[i].className = "external"}

    }

//Task 5
    //Создайте кнопку в виде элемента <a> с заданным стилем, используя JavaScript.
    //В примере ниже такая кнопка создана при помощи HTML/CSS.
    // В вашем решении кнопка должна создаваться, настраиваться и добавляться в документ при помощи только JavaScript,
    // без тегов <style> и <a>.

var button = document.createElement("a");
button.innerHTML = "Push me!";
button.style.backgroundColor = "white";
button.style.lineHeight = "2";
button.style.fontSize = "2em";
button.style.color = "red";
button.style.textAlign = "center";
button.style.width = "160px";
button.style.height = "70px";
button.style.borderRadius = "25px";
button.style.border = "3px solid lightgreen";
button.style.display = "block";
document.body.appendChild(button);