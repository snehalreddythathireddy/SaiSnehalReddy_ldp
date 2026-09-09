public class StaticExample {

    int instanceNumber = 10;

    static int staticNumber = 20;

    void instanceMethod() {

        System.out.println("Instance number: " + instanceNumber);
    }

    static void staticMethod() {

        System.out.println("Static number: " + staticNumber);
    }

    public static void main(String[] args) {

        StaticExample object = new StaticExample();

        object.instanceMethod();

        StaticExample.staticMethod();
    }
}