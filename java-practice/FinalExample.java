class Parent {

    final void display() {
        System.out.println("Parent display");
    }
}

final class FinalClass {

    void show() {
        System.out.println("Final class");
    }
}

public class FinalExample {

    public static void main(String[] args) {

        final int number = 100;

        System.out.println(number);

        Parent parent = new Parent();

        parent.display();

        FinalClass object = new FinalClass();

        object.show();
    }
}