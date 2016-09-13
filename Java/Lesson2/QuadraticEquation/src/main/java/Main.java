import java.io.Console;
import java.io.IOException;
import java.io.PrintStream;

public class Main {
    public static void main(String[] args) throws IOException {
        Model model = new Model();
        View view = new View(System.out);
        Controller controller = new Controller(view, model, System.in);
        controller.startUserProcess();
    }
}
