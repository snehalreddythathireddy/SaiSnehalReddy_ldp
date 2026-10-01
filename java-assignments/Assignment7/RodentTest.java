abstract class Rodent {

    Rodent() {
        System.out.println("Rodent constructor");
    }

    abstract void eat();

    abstract void move();
}

class Mouse extends Rodent {

    Mouse() {
        System.out.println("Mouse constructor");
    }

    @Override
    void eat() {
        System.out.println("Mouse eats cheese");
    }

    @Override
    void move() {
        System.out.println("Mouse runs quickly");
    }
}

class Gerbil extends Rodent {

    Gerbil() {
        System.out.println("Gerbil constructor");
    }

    @Override
    void eat() {
        System.out.println("Gerbil eats seeds");
    }

    @Override
    void move() {
        System.out.println("Gerbil moves by jumping");
    }
}

class Hamster extends Rodent {

    Hamster() {
        System.out.println("Hamster constructor");
    }

    @Override
    void eat() {
        System.out.println("Hamster eats grains");
    }

    @Override
    void move() {
        System.out.println("Hamster runs on a wheel");
    }
}

public class RodentTest {

    public static void main(String[] args) {

        // Array of parent-class references
        Rodent[] rodents = {
                new Mouse(),
                new Gerbil(),
                new Hamster()
        };

        // Calling overridden methods
        for (Rodent rodent : rodents) {
            rodent.eat();
            rodent.move();
            System.out.println();
        }
    }
}