interface InterfaceOne {

    void methodOne();

    void methodTwo();
}

interface InterfaceTwo {

    void methodThree();

    void methodFour();
}

interface InterfaceThree {

    void methodFive();

    void methodSix();
}

// This interface inherits all methods from the three interfaces
interface CombinedInterface extends InterfaceOne, InterfaceTwo, InterfaceThree {

    // New method
    void methodSeven();
}

// Concrete class
class Parent {

    void parentMethod() {
        System.out.println("Parent method");
    }
}

// Implements CombinedInterface and extends Parent
class Child extends Parent implements CombinedInterface {

    @Override
    public void methodOne() {
        System.out.println("Method One");
    }

    @Override
    public void methodTwo() {
        System.out.println("Method Two");
    }

    @Override
    public void methodThree() {
        System.out.println("Method Three");
    }

    @Override
    public void methodFour() {
        System.out.println("Method Four");
    }

    @Override
    public void methodFive() {
        System.out.println("Method Five");
    }

    @Override
    public void methodSix() {
        System.out.println("Method Six");
    }

    @Override
    public void methodSeven() {
        System.out.println("Method Seven");
    }
}

public class InterfaceTest {

    // Takes InterfaceOne as parameter
    static void useInterfaceOne(InterfaceOne object) {
        object.methodOne();
        object.methodTwo();
    }

    // Takes InterfaceTwo as parameter
    static void useInterfaceTwo(InterfaceTwo object) {
        object.methodThree();
        object.methodFour();
    }

    // Takes InterfaceThree as parameter
    static void useInterfaceThree(InterfaceThree object) {
        object.methodFive();
        object.methodSix();
    }

    // Takes CombinedInterface as parameter
    static void useCombinedInterface(CombinedInterface object) {
        object.methodSeven();
    }

    public static void main(String[] args) {

        Child child = new Child();

        // Same object is passed to all four methods
        useInterfaceOne(child);
        useInterfaceTwo(child);
        useInterfaceThree(child);
        useCombinedInterface(child);
    }
}