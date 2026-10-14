package calculator.products;

public class BasicCalculator implements Calculator {

    @Override
    public String modeName() {
        return "BASIC";
    }

    @Override
    public String operations() {
        return "add, sub, mul, div";
    }

    @Override
    public String calculate(String op, double a, double b) {
        switch (op) {
            case "add": return String.valueOf(a + b);
            case "sub": return String.valueOf(a - b);
            case "mul": return String.valueOf(a * b);
            case "div":
                if (b == 0) {
                    return "Error: cannot divide by zero";
                }
                return String.valueOf(a / b);
            default:
                return "Unknown operation: " + op;
        }
    }
}