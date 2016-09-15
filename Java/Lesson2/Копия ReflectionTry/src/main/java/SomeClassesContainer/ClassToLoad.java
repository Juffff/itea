package SomeClassesContainer;


public class ClassToLoad  {
    static {
        System.out.printf("CLASS2LOAD");
    }

   // @Override
    public void print() {
        System.out.println("PRINT");
    }
}
