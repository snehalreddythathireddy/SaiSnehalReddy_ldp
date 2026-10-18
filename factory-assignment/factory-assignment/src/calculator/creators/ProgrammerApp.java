package calculator.creators;

import calculator.products.Calculator;
import calculator.products.ProgrammerCalculator;

public class ProgrammerApp extends CalculatorApp {
    @Override
    public Calculator createCalculator() {
        return new ProgrammerCalculator();
    }
}