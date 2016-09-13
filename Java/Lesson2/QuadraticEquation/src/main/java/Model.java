
public class Model {

    private float a;
    private float b;
    private float c;
    private float d;
    private String x1;
    private String x2;



    public Model() {

    }

    public void setA(float a) {
        this.a = a;
    }

    public void setB(float b) {
        this.b = b;
    }

    public void setC(float c) {
        this.c = c;
    }


    public float calculateD() {
        this.d = b*b-4*a*c;
        return d;
    }

    public String calculate(){
        calculateD();
        if(d>=0){
            x1 = String.valueOf((-b+Math.sqrt(d))/(2*a));
            x2 = String.valueOf((-b-Math.sqrt(d))/(2*a));
        }else {
            x1 = String.valueOf(-b/(2*a))+" + \u221A"+Math.abs(d);
            x2 = String.valueOf(-b/(2*a))+" - \u221A"+Math.abs(d);
        }

        return x1+";"+x2;
    }
}
