import java.util.regex.Pattern;

public class PatternPractice {

    public static void main(String[] args) {

        String value = "Hello123";

        Pattern pattern = Pattern.compile("[a-zA-Z]+\\d+");

        if (pattern.matcher(value).matches()) {

            System.out.println("Valid");

        } else {

            System.out.println("Invalid");
        }
    }
}