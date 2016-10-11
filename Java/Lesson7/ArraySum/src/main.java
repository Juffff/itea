
import java.util.ArrayList;
import java.util.List;
import java.util.Random;
import java.util.concurrent.*;

public class main {



    public static void main(String[] args) throws ExecutionException, InterruptedException {
        List<Future<Integer>> futureList = new ArrayList<>();
        Integer[] array = new Integer[100];

        for (int i = 0; i <array.length ; i++) {
            array[i] = new Random().nextInt(100);
        }

        ExecutorService executorService = Executors.newFixedThreadPool(10);

        for (int i = 0; i<10; i++){
            futureList.add(executorService.submit(new Callable<Integer>() {
                @Override
                public Integer call() throws Exception {
                    return new Summer().sum(array);
                }
            }));
        }

        for(Future<Integer> f:futureList){
            System.out.println(String.valueOf(f.get()));
        }

        executorService.shutdown();


    }
    public static class Summer {

        public Integer sum(Integer[] array) {
            Integer result = 0;
            for (int i = 0; i < array.length; i++) {
                result = result + array[i];
            }

            return result;
        }
    }

}
