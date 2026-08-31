class Student {

    String name;
    int age;

    void displayDetails() {
        System.out.println("Name: " + name);
        System.out.println("Age: " + age);
    }
}

public class Main {

    public static void main(String[] args) {

        Student student = new Student();

        student.name = "Snehal";
        student.age = 25;

        student.displayDetails();
    }
}