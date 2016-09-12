import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStream;
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
        InputStream inputStream = System.in;

        int  trySecret = -1;
        while (trySecret != model.getSecret()) {
            trySecret = -1;

            while (trySecret == -1) {
                trySecret = checkInput(inputStream);
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
    private int checkInput(InputStream inputStream) throws IOException {
        BufferedReader reader = new BufferedReader(new InputStreamReader(inputStream));
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
