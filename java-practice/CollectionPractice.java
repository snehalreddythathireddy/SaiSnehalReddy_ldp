import java.util.ArrayList;

public class CollectionPractice {

    public static void main(String[] args) {

        ArrayList<Integer> numbers = new ArrayList<>();

        numbers.add(10);
        numbers.add(20);
        numbers.add(30);
        numbers.add(40);
        numbers.add(50);

        System.out.println(numbers);

        numbers.remove(Integer.valueOf(30));

        System.out.println(numbers);

        System.out.println(numbers.contains(20));

        System.out.println(numbers.size());
    }
}