import java.util.ArrayList;

public class Model {
    private int secret;
    private ArrayList<Integer> statictic;

    public Model() {
        this.secret = rand(1,100);
        statictic = new ArrayList<Integer>();
    }

    private int rand(int min, int max) {
        return (int)(Math.random()*max+min);
    }

    public int getSecret() {
        return secret;
    }

    public void addVariant(int v){
        statictic.add(v);
    }

    public ArrayList<Integer> getStatistic(){
        return statictic;
    }
}
