class Bird {

    public void eat() {
        System.out.println("Bird is eating");
    }
}

class FlyingBird extends Bird {

    public void fly() {
        System.out.println("Bird is flying");
    }
}

class Sparrow extends FlyingBird {
}

class Penguin extends Bird {
}

public class LSPExample {

    public static void main(String[] args) {

        Sparrow sparrow = new Sparrow();

        sparrow.eat();
        sparrow.fly();

        Penguin penguin = new Penguin();

        penguin.eat();
    }
}