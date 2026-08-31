import java.util.Scanner;

public class MethodParameters {
    static void printMessage(String name, int age) {
        System.out.println("Name:" + name + " age: " + age);
    }

    public static void main(String[] args) {
        printMessage("Snehal", 18);
        printMessage("arjun", 20);
    }

}
