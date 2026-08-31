class Animal {

    String name = "Animal";

    Animal() {

        System.out.println("Animal constructor");
    }

    void sound() {

        System.out.println("Animal sound");
    }
}

class Dog extends Animal {

    String name = "Dog";

    Dog() {

        super();

        System.out.println("Dog constructor");
    }

    void display() {

        System.out.println(name);
        System.out.println(super.name);

        super.sound();
    }
}

public class SuperExample {

    public static void main(String[] args) {

        Dog dog = new Dog();

        dog.display();
    }
}