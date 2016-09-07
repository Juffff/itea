
public class View {

    private final String PROMT_MESSAGE = "Введите число от 1 до 100";
    private final String LESS_MESSAGE = "Введенное число меньше, чем загаданное!";
    private final String MORE_MESSAGE = "Введенное число больше, чем загаданное!";


    public void printPromtMessage() {
        System.out.println(PROMT_MESSAGE);
    }

    public void printLessMessage() {
        System.out.println(LESS_MESSAGE);
    }

    public void printMoreMessage() {
        System.out.println(MORE_MESSAGE);
    }
}