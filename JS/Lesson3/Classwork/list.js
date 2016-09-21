var ul = document.createElement("ul");

var button = document.createElement("div");
var input = document.createElement("input");

button.addEventListener("click", addElement,false);
function addElement() {
    var li = document.createElement("li");
    li.innerHTML = input.value;
    li.addEventListener("click", highLight, false);
    ul.appendChild(li);

    function highLight() {
        this.style.cssText = "background-color:yellow;";
        console.log(this);
    }
}

document.body.appendChild(ul);
document.body.appendChild(input);
document.body.appendChild(button);

button.style.cssText = "display = block;" +
    "width: 50px; height: 20px;" +
    "background-color: black;";
/*


1. Номер документа перемещения сейчас нельзя менять.
    Это недопустимо, так как бываеь, что товар грузим с разных складов по одному заказу.
2. Права пользователей
    - у менеджеров не должно быть возможности что-либо поменить прошлой датой. То есть, если сегодня 16.09, то документ (реализация или перемещение), проведенный 14.09 не может быть изменен.
    - менеджеры не видят цену прихода
    - менеджеры не видят цен продажи в отчете - продажи
    - менеджеры не имеют доступа к документам движения денег
3. При подгрузке перемещения из екселя, не заполняется "пропиканое" количество и приходится проставлять вручную. Нужно добавить простановку количества.
4. Иерархия документов
     -Основным первым документом является заказ покупателя. Ему подчиняются:
        - перемещение
        - реализация
        - возврат
        - приход денег
        - выплата комиссионеру
   Нужно сделать так, чтобы Менеджеры могли выводить эти документы только на основании Заказа покупателя
5. Давай все же доделаем обновление наличия.
6. Давай доделаем печать этикеток. (удалим дубли, добавим в интерфейс)
7. Нужно создать график оплат с планированием.

    */
