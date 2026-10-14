package calculator.creators;

import calculator.products.Calculator;
import calculator.products.ScientificCalculator;

public class ScientificApp extends CalculatorApp {
    @Override
    public Calculator createCalculator() {
        return new ScientificCalculator();
    }
}