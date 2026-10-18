package calculator;

import calculator.creators.BasicApp;
import calculator.creators.CalculatorApp;
import calculator.creators.ScientificApp;
import calculator.creators.ProgrammerApp;

import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        while (true) {
            System.out.println("\nChoose mode: 1 = Basic, 2 = Scientific, 3 = Programmer, 0 = Exit");
            System.out.print("Mode: ");
            String choice = scanner.nextLine().trim();

            if (choice.equals("0")) {
                break;
            }

            CalculatorApp app = chooseApp(choice);
            if (app == null) {
                System.out.println("Invalid mode");
                continue;
            }
            app.start(scanner);
        }
    }

    static CalculatorApp chooseApp(String choice) {
        switch (choice) {
            case "1": return new BasicApp();
            case "2": return new ScientificApp();
            case "3": return new ProgrammerApp();
            default:  return null;
        }
    }
}