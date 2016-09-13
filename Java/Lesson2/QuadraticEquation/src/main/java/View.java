import java.io.*;

public class View {

    private BufferedWriter writer;
    public String lineSeparator;
    private final static String PRINT_PROMPT = "Решение квадратных уравнений вида aX*X + bX + c = 0";
    private final static String PRINT_A = "Введите a";
    private final static String PRINT_B = "Введите b";
    private final static String PRINT_C = "Введите c";
    private final static String PRINT_ERROR = "Ошибка ввода! Повторите ввод!";
    private static final String PRINT_AB_ERROR ="Ошибка ввода! A, B не могут быть равными 0 при C!= 0! Повторите ввод!";
    private final static String PRINT_D = "D = ";
    private final static String PRINT_X1 = "X1 = ";
    private final static String PRINT_X2 = "X2 = ";

    public View(PrintStream printStream) {
        this.writer = new BufferedWriter(new PrintWriter(printStream));
        this.lineSeparator = System.getProperty("line.separator");
    }

    private void print(String s) throws IOException {
        writer.write(s);
        writer.flush();
    }

    public void printAnyString(String s) throws IOException {
        writer.write(s);
        writer.flush();
    }

    public void printPrompt() throws IOException {
        print(PRINT_PROMPT+lineSeparator);
    }

    public void printInputA() throws IOException {
        print(PRINT_A+lineSeparator);
    }



    public void printInputB() throws IOException {
        print(PRINT_B+lineSeparator);
    }


    public void printInputC() throws IOException {
        print(PRINT_C+lineSeparator);
    }

    public void printD() throws IOException {
        print(PRINT_D);
    }

    public void printX1() throws IOException {
        print(PRINT_X1);
    }

    public void printX2() throws IOException {
        print(PRINT_X2);
    }

    public void printError() throws IOException {
        print(PRINT_ERROR);
    }


    public void printErrorAB() throws IOException {
        print(PRINT_AB_ERROR+lineSeparator);
    }
}
