public class ThreadPractice extends Thread {

    @Override
    public void run() {

        for (int i = 1; i <= 5; i++) {

            System.out.println(i);
        }
    }

    public static void main(String[] args) {

        ThreadPractice thread = new ThreadPractice();

        thread.start();
    }
}