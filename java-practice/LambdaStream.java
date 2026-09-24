import java.util.*;

public class LambdaStream {

    public static void main(String[] args) {

        List<Integer> numbers = Arrays.asList(
                10, 15, 20, 25, 30);

        numbers.stream()
                .filter(number -> number % 2 == 0)
                .forEach(number -> System.out.println(number));
    }
}