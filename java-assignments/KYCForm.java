import java.time.LocalDate;
import java.time.format.DateTimeFormatter;
import java.util.Scanner;

public class KYCForm {

    static String findKYCDate(String signup, String current) {

        DateTimeFormatter formatter = DateTimeFormatter.ofPattern("dd-MM-yyyy");

        LocalDate signupDate = LocalDate.parse(signup, formatter);

        LocalDate currentDate = LocalDate.parse(current, formatter);

        // Find this year's anniversary
        LocalDate anniversary = signupDate.withYear(currentDate.getYear());

        // If this year's anniversary is more than 30 days
        // in the future, use the previous anniversary.
        if (anniversary.isAfter(currentDate.plusDays(30))) {
            anniversary = anniversary.minusYears(1);
        }

        // The first anniversary must have been reached.
        if (anniversary.isBefore(signupDate.plusYears(1))) {
            return "No range";
        }

        // Calculate the 30-day window.
        LocalDate startDate = anniversary.minusDays(30);
        LocalDate endDate = anniversary.plusDays(30);

        // A form date cannot be in the future.
        if (endDate.isAfter(currentDate)) {
            endDate = currentDate;
        }

        if (startDate.isAfter(currentDate)) {
            return "No range";
        }

        return startDate.format(formatter) + " "
                + endDate.format(formatter);
    }

    public static void main(String[] args) {

        Scanner scanner = new Scanner(System.in);

        int n = scanner.nextInt();

        String[] results = new String[n];

        // Read all inputs first
        for (int i = 0; i < n; i++) {

            String signupDate = scanner.next();
            String currentDate = scanner.next();

            results[i] = findKYCDate(signupDate, currentDate);
        }

        // Print results after all input has been entered
        for (String result : results) {
            System.out.println(result);
        }

        scanner.close();
    }
}