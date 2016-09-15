/**
 * Created by Juff on 06.09.16.
 */
public class Main {

    public static void main (String [] args){
        //System.out.println("Hello, Java!");
        SomeOrder someOrder = new SomeOrder(100500, "0970818118", new byte[]{1,2,3,4,5});
        SomeOrder secondOrder = someOrder;
        someOrder = null;
    }

}
