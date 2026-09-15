
import java.util.Arrays;

public class VampireNumbers {

    // Checks whether a number is a vampire number
    static boolean isVampire(int number) {

        String value = String.valueOf(number);

        // Vampire numbers must have an even number of digits
        if (value.length() % 2 != 0) {
            return false;
        }

        int half = value.length() / 2;

        // Find the range for the two factors
        int start = (int) Math.pow(10, half - 1);
        int end = (int) Math.pow(10, half);

        for (int x = start; x < end; x++) {

            // The number must be divisible by x
            if (number % x == 0) {

                int y = number / x;

                // Both factors must have half the number of digits
                if (y < start || y >= end) {
                    continue;
                }

                // Both factors cannot end in zero
                if (x % 10 == 0 && y % 10 == 0) {
                    continue;
                }

                // Combine the digits of the two factors
                String factors = String.valueOf(x) + String.valueOf(y);

                // Convert both numbers to character arrays
                char[] numberDigits = value.toCharArray();
                char[] factorDigits = factors.toCharArray();

                // Sort the digits
                Arrays.sort(numberDigits);
                Arrays.sort(factorDigits);

                // Compare the sorted digits
                if (Arrays.equals(numberDigits, factorDigits)) {
                    return true;
                }
            }
        }

        return false;
    }

    public static void main(String[] args) {

        int count = 0;
        int number = 10;

        // Continue until we find 100 vampire numbers
        while (count < 100) {

            if (isVampire(number)) {

                System.out.println(number);

                count++;
            }

            number++;
        }
    }
}