import org.apache.commons.io.FileUtils;

import java.io.File;
import java.io.IOException;

public class SomeClassLoader extends ClassLoader {

    private static final String PATH = "/Users/Juff/IdeaProjects/itea/Java/Lesson2/ReflectionTry/target/classes/";

    @Override
    public Class<?> loadClass(final String name, boolean resolve) throws ClassNotFoundException {

        String classFileName = PATH + name.replaceAll("\\." , "/")+".class";



        try {
            byte[] classBytes = FileUtils.readFileToByteArray(new File(classFileName));
            return defineClass(name,classBytes,0,classBytes.length);


        } catch (IOException e) {
            e.printStackTrace();
            return super.loadClass(name,resolve);
        }


    }


}
