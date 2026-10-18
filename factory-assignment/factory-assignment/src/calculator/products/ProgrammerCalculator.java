package calculator.products;

public class ProgrammerCalculator implements Calculator {

    @Override
    public String modeName() {
        return "PROGRAMMER";
    }

    @Override
    public String operations() {
        return "add, sub, and, or, xor, shl, shr, tobin, tohex";
    }

    @Override
    public String calculate(String op, double a, double b) {

        long x = (long) a;
        long y = (long) b;

        switch (op) {
            case "add":   return String.valueOf(x + y);
            case "sub":   return String.valueOf(x - y);
            case "and":   return String.valueOf(x & y);
            case "or":    return String.valueOf(x | y);
            case "xor":   return String.valueOf(x ^ y);
            case "shl":   return String.valueOf(x << y);
            case "shr":   return String.valueOf(x >> y);
            case "tobin": return Long.toBinaryString(x);
            case "tohex": return Long.toHexString(x).toUpperCase();
            default:      return "Unknown operation: " + op;
        }
    }
}