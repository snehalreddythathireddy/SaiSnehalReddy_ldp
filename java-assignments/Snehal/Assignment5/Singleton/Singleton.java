package Snehal.Assignment5.Singleton;

public class Singleton {
    private String text;

    public static Singleton initialize(String value) {

        Singleton object = new Singleton();
        object.text = value;
        return object;
    }

    public void printString() {
        System.out.println("String value: " + text);
    }
}
