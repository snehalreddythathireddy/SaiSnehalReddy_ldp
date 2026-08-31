import java.util.*;

public class Main {

        public static void main(String[] args) {

                List<Student> students = Arrays.asList(

                                new Student(111, "Jiya Brein", 17, "Female",
                                                "Computer Science", 2018, 70.8),

                                new Student(122, "Paul Niksui", 18, "Male",
                                                "Mechanical", 2016, 50.2),

                                new Student(133, "Martin Theron", 17, "Male",
                                                "Electronic", 2017, 90.3),

                                new Student(144, "Murali Gowda", 18, "Male",
                                                "Electrical", 2018, 80),

                                new Student(155, "Nima Roy", 19, "Female",
                                                "Textile", 2016, 70),

                                new Student(166, "Iqbal Hussain", 18, "Male",
                                                "Security", 2016, 70),

                                new Student(177, "Manu Sharma", 16, "Male",
                                                "Chemical", 2018, 70),

                                new Student(188, "Wang Liu", 20, "Male",
                                                "Computer Science", 2015, 80),

                                new Student(199, "Amelia Zoe", 18, "Female",
                                                "Computer Science", 2016, 85),

                                new Student(200, "Jaden Dough", 18, "Male",
                                                "Security", 2015, 82),

                                new Student(211, "Jasna Kaur", 20, "Female",
                                                "Electronic", 2019, 83),

                                new Student(222, "Nitin Joshi", 19, "Male",
                                                "Textile", 2016, 60.4),

                                new Student(233, "Jyothi Reddy", 16, "Female",
                                                "Computer Science", 2015, 45.6),

                                new Student(244, "Nicolus Den", 16, "Male",
                                                "Electronic", 2017, 95.8),

                                new Student(255, "Ali Baig", 17, "Male",
                                                "Electronic", 2018, 88.4),

                                new Student(266, "Sanvi Pandey", 17, "Female",
                                                "Electrical", 2019, 72.4),

                                new Student(277, "Anuj Chettiar", 18, "Male",
                                                "Computer Science", 2017, 57.5));

                StudentService service = new StudentService();

                System.out.println("1. Departments:");
                service.departments(students);

                System.out.println("\n2. Enrolled after 2018:");
                service.enrolledAfter2018(students);

                System.out.println("\n3. Male Computer Science:");
                service.maleComputerScience(students);

                System.out.println("\n4. Gender count:");
                service.genderCount(students);

                System.out.println("\n5. Average age:");
                service.averageAge(students);

                System.out.println("\n6. Highest percentage:");
                service.highestPercentage(students);

                System.out.println("\n7. Department count:");
                service.departmentCount(students);

                System.out.println("\n8. Average percentage:");
                service.averagePercentage(students);

                System.out.println("\n9. Youngest Electronic male:");
                service.youngestElectronic(students);

                System.out.println("\n10. Computer Science gender count:");
                service.computerScienceGenderCount(students);
        }
}
