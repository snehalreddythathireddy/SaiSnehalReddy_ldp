public class MultipleException {

    public static void main(String[] args) {

        try {

            String value = null;

            System.out.println(value.length());

        } catch (ArithmeticException | NullPointerException e) {

            System.out.println("Exception occurred");
        }
    }
}