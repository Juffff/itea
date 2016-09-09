import java.util.AbstractList;

public class View {

    //String constants
    private final String PROMPT_MESSAGE = "Введите число от 1 до 100";
    private final String LESS_MESSAGE = "Введенное число меньше, чем загаданное.";
    private final String MORE_MESSAGE = "Введенное число больше, чем загаданное.";
    private final String ERROR_MESSAGE = "Ошибка ввода. Повторите ввод!";
    private final String WIN_MESSAGE = "Вы угадали! Было загадано число - ";
    private final String STATISTIC = "Статистика ходов:";
    private final String MOVE_COUNT = "Число было угадано за %s ходов.";


    //Print methods

    public void printPromtMessage() {
        System.out.println(PROMPT_MESSAGE);
    }

    public void printLessMessage() {
        System.out.println(LESS_MESSAGE);
    }

    public void printMoreMessage() {
        System.out.println(MORE_MESSAGE);
    }

    public void printErrorMessage(){
        System.out.println(ERROR_MESSAGE);
    }

    public void printWinMessage(int secret){
        System.out.println();
        System.out.println(WIN_MESSAGE + secret +".");
    }

    public void printStatistic(AbstractList<Integer> statistic){
        System.out.println();
        System.out.println(STATISTIC);
        System.out.println();
        for(Integer i:statistic){
            System.out.print(i+" ");
        }
        System.out.println();
        System.out.printf(MOVE_COUNT, statistic.size());
        System.out.println();
    }
}