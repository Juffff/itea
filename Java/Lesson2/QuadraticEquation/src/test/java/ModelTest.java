
import org.junit.Assert;
import org.junit.Before;
import org.junit.Rule;
import org.junit.Test;
import org.junit.rules.Timeout;

import java.lang.reflect.Field;



public class ModelTest {

    private Model model;

    @Rule
    public Timeout timeout = new Timeout(1000);

    @Before
    public void initialize() {
        model = new Model();
    }

    @Test
    public void TestErrorABC() throws NoSuchFieldException {

        model.setA(0);
        model.setB(0);
        model.setC(1);
        Assert.assertTrue(model.calculateD() == 0.0);
        Assert.assertEquals(model.calculate(), "NaN;NaN");

    }


    @Test
    public void TestCalculateD() throws Exception {
        model.setA(1);
        model.setB(-70);
        model.setC(600);
        Assert.assertEquals(model.calculateD(), 2500.0f, 0.000001);
    }

    @Test
    public void TestCalculate() throws Exception {
        Class clazz = Model.class;
        Object object = clazz.newInstance();
        Field fieldA = object.getClass().getDeclaredField("a");
        Field fieldB = object.getClass().getDeclaredField("b");
        Field fieldC = object.getClass().getDeclaredField("c");
        fieldA.setAccessible(true);
        fieldB.setAccessible(true);
        fieldC.setAccessible(true);
        fieldA.set(model, 1);
        fieldB.set(model, -70);
        fieldC.set(model, 600);
        Assert.assertEquals(model.calculateD(), 2500.0f, 0.000001);
        Assert.assertEquals(model.calculate(), "60.0;10.0");
    }

}