import java.util.*;

public class LambdaCollection {

    public static void main(String[] args) {

        List<String> names = Arrays.asList(
                "Jiya",
                "Rahul",
                "Anu");

        names.forEach(name -> System.out.println(name));
    }
}