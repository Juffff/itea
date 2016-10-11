import java.io.InputStream;
import java.util.*;
import java.util.concurrent.*;

public class Main {

    //static InputStream in = System.in;
    static Scanner scan = new Scanner(System.in);

    public static void main(String[] args) throws InterruptedException, ExecutionException {

        int nThreads = 10;
        ExecutorService executorService = Executors.newFixedThreadPool(10);
        List<Future<Long>> futureList = new ArrayList<>();



        for (int i = 0; i < 10; i++) {

            //System.out.println("Введите положительное числo n : ");
            final int n = new Random().nextInt(10);
           Future<Long> future =  executorService.submit(new Callable<Long>() {
                @Override
                public Long call() throws Exception {
                    return Factorial.calcFactorial(n);
                }
            });
            futureList.add(future);
        }

        executorService.shutdown();

        for(Future<Long> f:futureList){
            System.out.println(f.get());
        }
    }

    private static class Factorial extends Thread {
        int n;
        public Factorial (int n){
            this.n = n;
        }

        public void run() {
            if (n<0){
                System.out.println("Неорректный ввод. Введите, пожалуйста положительное число");
            }else if(n==0){
                System.out.println("Факториал числа " + n + " = 0");
            }else {
                try {
                    long fact = calcFactorial(n);
                    synchronized (System.out) {
                        System.out.print("Факториал числа " + n + " = ");
                        System.out.println(fact );
                    }

                } catch (InterruptedException e) {
                    e.printStackTrace();
                }
            }
        }

        private  static long calcFactorial (int n) throws InterruptedException {
            long result = 1L;
            for (int i = 2; i <= n; i++) {
                result *= i;
                Thread.sleep(100);
            }
            return result;
        }
    }
}