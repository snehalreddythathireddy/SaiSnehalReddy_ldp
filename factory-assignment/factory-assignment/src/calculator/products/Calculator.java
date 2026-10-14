package calculator.products;

public interface Calculator {
    String modeName();
    String operations();
    String calculate(String op, double a, double b);
}