public class ConstructorOverload {

    String name;
    int age;

    ConstructorOverload() {

        name = "Unknown";
        age = 0;
    }

    ConstructorOverload(String name) {

        this.name = name;
        age = 0;
    }

    ConstructorOverload(String name, int age) {

        this.name = name;
        this.age = age;
    }

    void display() {

        System.out.println("Name: " + name);
        System.out.println("Age: " + age);
        System.out.println();
    }

    public static void main(String[] args) {

        ConstructorOverload person1 = new ConstructorOverload();

        ConstructorOverload person2 = new ConstructorOverload("Snehal");

        ConstructorOverload person3 = new ConstructorOverload("Snehal", 25);

        person1.display();
        person2.display();
        person3.display();
    }
}