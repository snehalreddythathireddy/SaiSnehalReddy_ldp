public class Student {

    int id;
    String name;
    int age;
    String gender;
    String department;
    int year;
    double percentage;

    Student(int id, String name, int age, String gender,
            String department, int year, double percentage) {

        this.id = id;
        this.name = name;
        this.age = age;
        this.gender = gender;
        this.department = department;
        this.year = year;
        this.percentage = percentage;
    }

    @Override
    public String toString() {

        return name + " - " + age + " - " + gender
                + " - " + department
                + " - " + percentage;
    }
}