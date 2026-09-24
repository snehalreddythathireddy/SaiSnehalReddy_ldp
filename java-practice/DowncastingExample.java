class Animal {

    void eat() {
        System.out.println("Animal eats");
    }
}

class Dog extends Animal {

    void bark() {
        System.out.println("Dog barks");
    }
}

public class DowncastingExample {

    public static void main(String[] args) {

        // Upcasting
        Animal animal = new Dog();
        animal.eat();

        // Downcasting
        Dog dog = (Dog) animal;
        dog.bark();
    }
}