
public class Singleton {
    private static Singleton instance;

    private String value;

    private Singleton(String value) {
        System.out.println("Creating object: " + value);

        try {
            Thread.sleep(1000);
        } catch (InterruptedException e) {
            Thread.currentThread().interrupt();
        }

        this.value = value;
    }

    public static Singleton getInstance(String value) {
        if (instance == null) {
            instance = new Singleton(value);
        }

        return instance;
    }

    public String getValue() {
        return value;
    }
}
