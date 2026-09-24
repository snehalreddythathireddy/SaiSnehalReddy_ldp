public class ConstructorExample {

    String name;
    int age;

    ConstructorExample(String name, int age) {

        this.name = name;
        this.age = age;
    }

    void display() {

        System.out.println("Name: " + name);
        System.out.println("Age: " + age);
    }

    public static void main(String[] args) {

        ConstructorExample person = new ConstructorExample("Snehal", 25);

        person.display();
    }
}