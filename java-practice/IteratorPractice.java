import java.util.ArrayList;
import java.util.Iterator;

public class IteratorPractice {

    public static void main(String[] args) {

        ArrayList<String> names = new ArrayList<>();

        names.add("Jiya");
        names.add("Rahul");
        names.add("Anu");

        Iterator<String> iterator = names.iterator();

        while (iterator.hasNext()) {

            String name = iterator.next();

            System.out.println(name);
        }
    }
}