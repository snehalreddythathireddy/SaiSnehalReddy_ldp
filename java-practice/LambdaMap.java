import java.util.*;

public class LambdaMap {

    public static void main(String[] args) {

        Map<String, Integer> marks = new HashMap<>();

        marks.put("Jiya", 80);
        marks.put("Rahul", 70);
        marks.put("Anu", 90);

        marks.forEach(
                (name, mark) -> System.out.println(name + " = " + mark));
    }
}