

public class Model {
    private int secret;

    public Model() {
        this.secret = rand(1,100);
    }

    private int rand(int min, int max) {
        return (int)(Math.random()*max+min);
    }

    public int getSecret() {
        return secret;
    }
}
