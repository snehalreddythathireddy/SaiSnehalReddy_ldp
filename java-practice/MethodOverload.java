public class MethodOverload {
    int add(int a, int b) {
        return a + b;
    }

    int add(int a, int b, int c) {
        return a + b + c;
    }

    public static void main(String[] args) {
        MethodOverload obj = new MethodOverload();
        System.out.println(obj.add(20, 30));
        System.out.println(obj.add(2, 3, 9));

    }
}
