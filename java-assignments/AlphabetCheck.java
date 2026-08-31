import java.util.Scanner;

public class AlphabetCheck {

    static boolean containsAllLetters(String input) {

        boolean[] letters = new boolean[26];
        int count = 0;

        for (char ch : input.toLowerCase().toCharArray()) {

            if (ch >= 'a' && ch <= 'z') {

                int index = ch - 'a';

                if (!letters[index]) {
                    letters[index] = true;
                    count++;
                }
            }
        }

        return count == 26;
    }

    public static void main(String[] args) {

        Scanner scanner = new Scanner(System.in);

        System.out.print("Enter a string: ");
        String input = scanner.nextLine();

        if (containsAllLetters(input)) {
            System.out.println("The string contains all letters of the alphabet.");
        } else {
            System.out.println("The string does not contain all letters of the alphabet.");
        }

        scanner.close();
    }
}
