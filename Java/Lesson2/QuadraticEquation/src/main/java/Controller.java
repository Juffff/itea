

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStream;
import java.io.InputStreamReader;

public class Controller {
    private View view;
    private Model model;
    private InputStream inputStream;

    public Controller(View view, Model model, InputStream inputStream) {
        this.view = view;
        this.model = model;
        this.inputStream = inputStream;
    }

    public void startUserProcess() throws IOException {
        boolean check = false;
        while (!check) {
            view.printPrompt();
            view.printInputA();
            float a = inputData(System.in);
            model.setA(a);
            view.printInputB();
            float b = inputData(System.in);
            model.setB(b);
            view.printInputC();
            float c = inputData(System.in);
            model.setC(c);
            if (a == 0 && b == 0 && c != 0) {
                check = false;
                view.printErrorAB();

            } else {
                check = true;
            }
        }
        float d = model.calculateD();
        view.printD();
        view.printAnyString(String.valueOf(d) + view.lineSeparator);
        view.printX1();
        view.printAnyString(model.calculate().split(";")[0]);
        view.printAnyString(view.lineSeparator);
        view.printX2();
        view.printAnyString(model.calculate().split(";")[1]);
    }

    private float inputData(InputStream in) throws IOException {

        BufferedReader bufferedReader = new BufferedReader(new InputStreamReader(in));
        String s = bufferedReader.readLine();
        boolean b = false;
        while (!b) {
            b = true;
            try {
                Float.parseFloat(s);
            } catch (NumberFormatException e) {
                b = false;
                view.printError();
                s = bufferedReader.readLine();

            } catch (ClassCastException e) {
                b = true;
                view.printError();
                s = bufferedReader.readLine();
            }

        }
        return Float.parseFloat(s);

    }


}
