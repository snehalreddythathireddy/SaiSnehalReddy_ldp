package calculator.creators;

import calculator.products.BasicCalculator;
import calculator.products.Calculator;

public class BasicApp extends CalculatorApp {
    @Override
    public Calculator createCalculator() {
        return new BasicCalculator();
    }
}