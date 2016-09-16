import java.lang.annotation.Annotation;
import java.lang.reflect.*;

public class ReflectionUses {
    private Class<?> clazz;
    private Method[] methods;

    public ReflectionUses(Class<?> clazz) {
        this.clazz = clazz;
        this.methods = this.clazz.getMethods();
    }

    public Method[] getMethods() {
        return methods;
    }

    public String printAnnotatedMethods(String annotation){
        String result = "";
        for(Method m:getMethods()){
            Annotation[] annotations = m.getDeclaredAnnotations();
            for (Annotation a:annotations){
                if(annotation.equals(a.annotationType().toString().split(" ")[1]))
                System.out.println(m.getName() +" @"+ annotation);
            }
        }
        return result;
    }

    public void invokeAnnotatedMethods(Object object,String args[],String annotation) throws InvocationTargetException, IllegalAccessException {

        for(Method m:getMethods()){
            Annotation[] annotations = m.getDeclaredAnnotations();
            for (Annotation a:annotations){
                if(annotation.equals(a.annotationType().toString().split(" ")[1]))
                    m.invoke(object,args);
            }
        }

    }

    public void printConstructorsParametersModifiers(){
        Constructor[] constructors = this.clazz.getConstructors();
        for(Constructor c:constructors){
            Parameter[] parameters = c.getParameters();
            System.out.println("Constructor - "+ c.getName());
            System.out.println("Parameters:");

            for(Parameter parameter:parameters){
                System.out.println(parameter.getName());
            }
        }

        System.out.println("ClassModifiers = " + this.clazz.getModifiers());
    }

}
