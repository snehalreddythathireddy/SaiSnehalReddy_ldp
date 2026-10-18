package calculator.products;

public class ScientificCalculator extends BasicCalculator {

    @Override
    public String modeName() {
        return "SCIENTIFIC";
    }

    @Override
    public String operations() {
        return super.operations() + ", sin, cos, sqrt, log, pow";
    }

    @Override
    public String calculate(String op, double a, double b) {
        switch (op) {
            case "sin":  return String.valueOf(Math.sin(Math.toRadians(a)));
            case "cos":  return String.valueOf(Math.cos(Math.toRadians(a)));
            case "sqrt":
                if (a < 0) {
                    return "Error: negative number";
                }
                return String.valueOf(Math.sqrt(a));
            case "log":  return String.valueOf(Math.log10(a));
            case "pow":  return String.valueOf(Math.pow(a, b));
            default:     return super.calculate(op, a, b);
        }
    }
}