public class RegexPractice {

    public static void main(String[] args) {

        String value = "12345";

        if (value.matches("\\d+")) {

            System.out.println("Only digits");

        } else {

            System.out.println("Contains other characters");
        }
    }
}