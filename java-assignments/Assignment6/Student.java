
public class Student {

    String name;
    int age;

    // First constructor
    Student() {
        this("Snehal", 25);
    }

    // Second constructor
    Student(String name, int age) {
        this.name = name;
        this.age = age;
    }

    public void display() {
        System.out.println("Name: " + name);
        System.out.println("Age: " + age);
    }

    public static void main(String[] args) {

        Student student = new Student();

        student.display();
    }
}