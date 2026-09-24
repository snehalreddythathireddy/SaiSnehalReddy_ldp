import java.util.Scanner;

public class LargestNumber {

    public static void main(String[] args) {

        Scanner scanner = new Scanner(System.in);

        System.out.print("Enter first number: ");
        int firstNumber = scanner.nextInt();

        System.out.print("Enter second number: ");
        int secondNumber = scanner.nextInt();

        System.out.print("Enter third number: ");
        int thirdNumber = scanner.nextInt();

        if (firstNumber >= secondNumber && firstNumber >= thirdNumber) {
            System.out.println("Largest number: " + firstNumber);
        } else if (secondNumber >= firstNumber && secondNumber >= thirdNumber) {
            System.out.println("Largest number: " + secondNumber);
        } else {
            System.out.println("Largest number: " + thirdNumber);
        }

        scanner.close();
    }
}