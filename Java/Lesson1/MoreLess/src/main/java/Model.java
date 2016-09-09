import java.util.ArrayList;

public class Model {
    private int secret; //Secret Number
    private ArrayList<Integer> statictic; // Tries

    public Model() {
        this.secret = rand(1,100);
        statictic = new ArrayList<Integer>();
    }

    //This function generating a Number between min and max limits
    private int rand(int min, int max) {
        return (int)(Math.random()*max+min);
    }

    //Secret getter
    public int getSecret() {
        return secret;
    }

    //Add try to statistic
    public void addVariant(int v){
        statictic.add(v);
    }

    //Statistic getter
    public ArrayList<Integer> getStatistic(){
        return statictic;
    }
}
