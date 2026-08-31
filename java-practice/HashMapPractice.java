import java.util.HashMap;

public class HashMapPractice {

    public static void main(String[] args) {

        HashMap<String, Integer> students = new HashMap<>();

        students.put("Jiya", 80);
        students.put("Rahul", 70);
        students.put("Anu", 90);

        System.out.println(students);

        System.out.println(students.get("Jiya"));

        System.out.println(students.containsKey("Rahul"));

        students.put("John", 85);

        System.out.println(students);
    }
}