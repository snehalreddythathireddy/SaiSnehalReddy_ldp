package calculator.creators;

import calculator.products.Calculator;

import java.util.Scanner;

public abstract class CalculatorApp {

    public abstract Calculator createCalculator();

    public void start(Scanner scanner) {
        Calculator calc = createCalculator();

        System.out.println("--- " + calc.modeName() + " MODE ---");
        System.out.println("Operations: " + calc.operations());
        System.out.println("Type: operation number1 [number2]   (example: add 5 3)");
        System.out.println("Type 'back' to change mode.");

        while (true) {
            System.out.print("> ");
            String line = scanner.nextLine().trim();

            if (line.equalsIgnoreCase("back")) {
                break;
            }
            if (line.isEmpty()) {
                continue;
            }

            String[] parts = line.split("\\s+");
            try {
                double a = Double.parseDouble(parts[1 > parts.length - 1 ? 0 : 1]);
                double b = parts.length > 2 ? Double.parseDouble(parts[2]) : 0;
                System.out.println(calc.calculate(parts[0].toLowerCase(), a, b));
            } catch (NumberFormatException e) {
                System.out.println("Please enter numbers. Example: add 5 3");
            }
        }
    }
}