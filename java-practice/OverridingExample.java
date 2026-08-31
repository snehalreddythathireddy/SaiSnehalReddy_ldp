class Animal {

    void sound() {

        System.out.println("Animal sound");
    }
}

class Dog extends Animal {

    @Override
    void sound() {

        System.out.println("Dog barks");
    }
}

class Cat extends Animal {

    @Override
    void sound() {

        System.out.println("Cat meows");
    }
}

public class OverridingExample {

    public static void main(String[] args) {

        Dog dog = new Dog();

        Cat cat = new Cat();

        dog.sound();
        cat.sound();
    }
}