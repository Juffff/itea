import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;

public class Controller {
    private Model model;
    private View view;



    public Controller(Model model, View view) {
        this.model = model;
        this.view = view;
    }

    //Main user process

    public void processUser() throws IOException {
        view.printPromtMessage();
        BufferedReader reader = new BufferedReader(new InputStreamReader(System.in));

        int  trySecret = -1;
        while (trySecret != model.getSecret()) {
            trySecret = -1;

            while (trySecret == -1) {
                trySecret = checkInput(reader);
                model.addVariant(trySecret);
            }

            if (trySecret > model.getSecret()) {
                view.printMoreMessage();
            }

            if (trySecret < model.getSecret()) {
                view.printLessMessage();
            }

            if (trySecret == model.getSecret()) {
                view.printWinMessage(trySecret);
                view.printStatistic(model.getStatistic());
            }


        }
    }

    //Check input method
    private int checkInput(BufferedReader reader) throws IOException {
        int result;
        try {
            result = Integer.parseInt(reader.readLine());
            if (result < 0 || result > 100) {
                result = -1;
                view.printErrorMessage();
            }
        } catch (ClassCastException e) {
            result = -1;
            view.printErrorMessage();
        } catch (NumberFormatException e) {
            result = -1;
            view.printErrorMessage();
        }

        return result;
    }

}
