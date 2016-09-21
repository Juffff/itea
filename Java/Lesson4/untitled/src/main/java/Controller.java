import java.util.Scanner;


public class Controller {
    int first = 0;
    int second = 0;
    public static final String INVALID_INPUT = "Try again, looser!";

    public int inputFirstInteger(String value) {
        try {
            first = Integer.parseInt(value);
        } catch (NumberFormatException e) {
        }
        return first;
    }

    public int inputSecondInteger(String value) {
        try {
            first = Integer.parseInt(value);
        } catch (NumberFormatException e) {
        } return second;
    }

    public String inputOperation(String value) {
        return "";
    }

    public void processUser() {
        Scanner sc = new Scanner(System.in);
        String line;
        String out;

        do {
            line = sc.nextLine();
            out = inputOperation(line);
            inputFirstInteger(line);
            System.out.println(out);
        } while (line.equals("INVALID_INPUT"));

        do {
            line = sc.nextLine();
            out = inputOperation(line);
            inputSecondInteger(line);
            System.out.println(out);
        } while (line.equals("INVALID_INPUT"));
    }
}
