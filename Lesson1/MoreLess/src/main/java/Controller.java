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

    public void processUser(){
        view.printPromtMessage();
        BufferedReader reader = new BufferedReader(new InputStreamReader(System.in));
        int trySecret = checkInput(reader);
    }

    private int checkInput(BufferedReader reader){
        int result;
        boolean valid = true;

        return result;
    }

}
