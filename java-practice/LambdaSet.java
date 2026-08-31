import java.util.*;

public class LambdaSet {

    public static void main(String[] args) {

        Set<Integer> numbers = new HashSet<>();

        numbers.add(10);
        numbers.add(20);
        numbers.add(30);

        numbers.forEach(number -> System.out.println(number));
    }
}