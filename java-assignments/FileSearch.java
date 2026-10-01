import java.io.File;
import java.util.Scanner;
import java.util.regex.Pattern;

public class FileSearch {

    public static void main(String[] args) {

        Scanner scanner = new Scanner(System.in);

        File home = new File(System.getProperty("user.home"));

        while (true) {

            System.out.print("Enter regex (or exit): ");
            String regex = scanner.nextLine();

            if (regex.equalsIgnoreCase("exit")) {
                break;
            }

            Pattern pattern = Pattern.compile(regex);
            searchFiles(home, pattern);
        }

        scanner.close();
    }

    static void searchFiles(File directory, Pattern pattern) {

        File[] files = directory.listFiles();

        if (files == null) {
            return;
        }

        for (File file : files) {

            if (file.isDirectory()) {
                searchFiles(file, pattern);
            } else if (pattern.matcher(file.getName()).matches()) {
                System.out.println(file.getAbsolutePath());
            }
        }
    }
}