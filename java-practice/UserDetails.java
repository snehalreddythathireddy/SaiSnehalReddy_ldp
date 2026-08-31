import java.util.Scanner;

public class UserDetails {

    public static void main(String[] args) {

        Scanner scanner = new Scanner(System.in);

        System.out.print("Enter your name: ");
        String name = scanner.nextLine();

        System.out.print("Enter your age: ");
        int age = scanner.nextInt();

        scanner.nextLine(); 

        System.out.print("Enter your city: ");
        String city = scanner.nextLine();

        System.out.println("\n--- User Details ---");
        System.out.println("Name: " + name);
        System.out.println("Age: " + age);
        System.out.println("City: " + city);

        scanner.close();
    }
}