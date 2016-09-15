//import SomeClassesContainer.ClassToLoad;
//import SomeClassesContainer.Printable;


public class Main {



    public static void main(String[] args) throws ClassNotFoundException {
        SomeClassLoader someClassLoader = new SomeClassLoader();
        someClassLoader.loadClass("SomeClassesContainer.ClassToLoad");
    }
}

