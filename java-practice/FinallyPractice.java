public class FinallyPractice {

    public static void main(String[] args) {

        try {

            int result = 10 / 0;

        } catch (ArithmeticException e) {

            System.out.println("Exception handled");

        } finally {

            System.out.println("Finally executed");
        }
    }
}