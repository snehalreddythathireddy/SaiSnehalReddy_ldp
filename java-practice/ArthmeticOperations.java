import java.util.Scanner;

public class ArthmeticOperations {

    public static void main(String[] args) {

        Scanner scanner = new Scanner(System.in);

        System.out.print("Enter first number: ");
        int firstNumber = scanner.nextInt();

        System.out.print("Enter second number: ");
        int secondNumber = scanner.nextInt();

        System.out.println("Sum: " + (firstNumber + secondNumber));
        System.out.println("Difference: " + (firstNumber - secondNumber));
        System.out.println("Product: " + (firstNumber * secondNumber));
        System.out.println("Division: " + (firstNumber / secondNumber));
        System.out.println("Remainder: " + (firstNumber % secondNumber));

        scanner.close();
    }
}