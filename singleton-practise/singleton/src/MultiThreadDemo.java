
public class MultiThreadDemo {
    public static void main(String[] args) {

        Thread t1 = new Thread(() -> {
            Singleton s1 = Singleton.getInstance("Logger A");

            System.out.println(
                    "Thread 1 value: " + s1.getValue()
            );
        });

        Thread t2 = new Thread(() -> {
            Singleton s2 = Singleton.getInstance("Logger B");

            System.out.println(
                    "Thread 2 value: " + s2.getValue()
            );
        });

        t1.start();
        t2.start();
    }
}
