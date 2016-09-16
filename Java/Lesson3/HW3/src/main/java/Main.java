/*Создать базовый и производный классы. Определить конструкторы, методы доступа,
виртуальные методы (хотя бы toString()). Показать использование конструкторов этого же и
базового класса. Можно определить некоторые константы или enum.

2. Разработать аннотацию, отметить, ей метод(ы) в классе, С помощью рефлексии обойти
методы класса и вызвать отмеченные аннотацией методы с помощью invoke().

3.С помощью рефлексии вывести имя класса, а также
Список конструкторов с их параметрами
Модификаторы класса

Базовый класс – «Дата», производный класс - «записная книжка»,

включающий ФИО, телефон, дату рождения и функцию вычисления количества дней до дня
рождения;
*/

import java.lang.annotation.Annotation;
import java.lang.reflect.InvocationTargetException;
import java.lang.reflect.Method;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.Date;
import java.util.List;

public class Main {

    public static void main(String[] args) throws ParseException, InvocationTargetException, IllegalAccessException {
        TodayData todayData = new TodayData();
        NoteBook noteBook = new NoteBook("Juff", "+380970818118", "30/12/1987");
        System.out.println(noteBook);


        System.out.println("**********REFLECTION***********");

        ReflectionUses reflectionUses = new ReflectionUses(noteBook.getClass());
        reflectionUses.printAnnotatedMethods("AnnotationToInvokeMethod");
        reflectionUses.invokeAnnotatedMethods(noteBook,null,"AnnotationToInvokeMethod");

        reflectionUses.printConstructorsParametersModifiers();

    }


}
