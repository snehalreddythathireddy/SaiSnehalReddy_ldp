
public class SingleThreadDemo {
    public static void main(String[] args) {

        Singleton s1 = Singleton.getInstance("Logger A");
        Singleton s2 = Singleton.getInstance("Logger B");

        System.out.println("\nFirst value: " + s1.getValue());
        System.out.println("Second value: " + s2.getValue());

        System.out.println("Same object? " + (s1 == s2));
    }
}
