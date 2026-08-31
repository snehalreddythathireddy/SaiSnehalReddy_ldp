import java.util.*;
import java.util.stream.Collectors;

public class StudentService {

    // 1. Print all departments
    public void departments(List<Student> students) {

        students.stream()
                .map(s -> s.department)
                .distinct()
                .forEach(System.out::println);
    }

    // 2. Students enrolled after 2018
    public void enrolledAfter2018(List<Student> students) {

        students.stream()
                .filter(s -> s.year > 2018)
                .forEach(s -> System.out.println(s.name));
    }

    // 3. Male students in Computer Science
    public void maleComputerScience(List<Student> students) {

        students.stream()
                .filter(s -> s.gender.equals("Male"))
                .filter(s -> s.department.equals("Computer Science"))
                .forEach(s -> System.out.println(s.name));
    }

    // 4. Number of male and female students
    public void genderCount(List<Student> students) {

        Map<String, Long> result = students.stream()
                .collect(Collectors.groupingBy(
                        s -> s.gender,
                        Collectors.counting()));

        System.out.println(result);
    }

    // 5. Average age of male and female students
    public void averageAge(List<Student> students) {

        Map<String, Double> result = students.stream()
                .collect(Collectors.groupingBy(
                        s -> s.gender,
                        Collectors.averagingInt(
                                s -> s.age)));

        System.out.println(result);
    }

    // 6. Student with highest percentage
    public void highestPercentage(List<Student> students) {

        students.stream()
                .max(Comparator.comparingDouble(
                        s -> s.percentage))
                .ifPresent(System.out::println);
    }

    // 7. Number of students in each department
    public void departmentCount(List<Student> students) {

        Map<String, Long> result = students.stream()
                .collect(Collectors.groupingBy(
                        s -> s.department,
                        Collectors.counting()));

        System.out.println(result);
    }

    // 8. Average percentage in each department
    public void averagePercentage(List<Student> students) {

        Map<String, Double> result = students.stream()
                .collect(Collectors.groupingBy(
                        s -> s.department,
                        Collectors.averagingDouble(
                                s -> s.percentage)));

        System.out.println(result);
    }

    // 9. Youngest male student in Electronic department
    public void youngestElectronic(List<Student> students) {

        students.stream()
                .filter(s -> s.gender.equals("Male"))
                .filter(s -> s.department.equals("Electronic"))
                .min(Comparator.comparingInt(
                        s -> s.age))
                .ifPresent(System.out::println);
    }

    // 10. Male and female students in Computer Science
    public void computerScienceGenderCount(
            List<Student> students) {

        Map<String, Long> result = students.stream()
                .filter(s -> s.department.equals(
                        "Computer Science"))
                .collect(Collectors.groupingBy(
                        s -> s.gender,
                        Collectors.counting()));

        System.out.println(result);
    }
}