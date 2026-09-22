import java.util.Scanner;
import java.util.regex.Pattern;

public class SentenceCheck {

    public static void main(String[] args) {

        Scanner scanner = new Scanner(System.in);

        System.out.print("Enter a sentence: ");
        String sentence = scanner.nextLine();

        String regex = "^[A-Z].*\\.$";

        if (Pattern.matches(regex, sentence)) {
            System.out.println("Valid sentence");
        } else {
            System.out.println("Invalid sentence");
        }

        scanner.close();
    }
}