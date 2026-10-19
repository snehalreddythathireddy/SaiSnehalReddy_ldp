package pizza;

public class Main {
    public static void main(String[] args) {
        pizza.Pizza plain = new Pizza.PizzaBuilder().build();

        pizza.Pizza loaded = new pizza.Pizza.PizzaBuilder()
                .size("LARGE")
                .crust("THIN")
                .extraCheese(true)
                .mushrooms(true)
                .build();

        System.out.println(plain);
        System.out.println(loaded);
    }
}