import java.io.IOException;

/**
 *
  Напишите игровую JAVA – программу, которая отгадывает число по принципу – «больше – меньше»:

 1.Программа должна загадать произвольное число в диапазоне от 0 до 100.

 Функция rand. Описание:
 int rand ( [int min, int max] )
 Например, если вам нужно случайное число между 5 и 15 (включительно), вызовите rand (5, 15).
 Замечание: При вызове без параметров min и max, возвращает псевдослучайное целое в диапазоне от 0 до RAND_MAX.

 2. Пользователю предлагается попробовать угадать число путем последовательного ввода чисел из диапазона ограниченного сначала числами 0 и 100,
 а при дальнейших попытках – с учетом ранее введенных чисел.
 Программа должна анализировать ввод на любые ошибочные действия пользователя.

 3. На экране должно отображаться предыдущие попытки, диапазон, в котором находится искомое число и результат предыдущего действия пользователя.

 4. При совпадении чисел – программа должна сообщить об этом пользователю и вывести всю статистику по действиям пользователя.
 *
 */

public class Main {
    public static void main(String[] args) {
        Model model = new Model();
        View view = new View();
        Controller controller = new Controller(model,view);
        try {
            controller.processUser();
        } catch (IOException e) {
            e.printStackTrace();
        }
    }
}
